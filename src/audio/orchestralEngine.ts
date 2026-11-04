import { MusicalTheme, InstrumentTrack } from '../types/composer';

// Note frequency map
const NOTE_FREQS: Record<string, number> = {
  'C2': 65.41, 'C#2': 69.30, 'Db2': 69.30, 'D2': 73.42, 'D#2': 77.78, 'Eb2': 77.78, 'E2': 82.41, 'F2': 87.31, 'F#2': 92.50, 'Gb2': 92.50, 'G2': 98.00, 'G#2': 103.83, 'Ab2': 103.83, 'A2': 110.00, 'A#2': 116.54, 'Bb2': 116.54, 'B2': 123.47,
  'C3': 130.81, 'C#3': 138.59, 'Db3': 138.59, 'D3': 146.83, 'D#3': 155.56, 'Eb3': 155.56, 'E3': 164.81, 'F3': 174.61, 'F#3': 185.00, 'Gb3': 185.00, 'G3': 196.00, 'G#3': 207.65, 'Ab3': 207.65, 'A3': 220.00, 'A#3': 233.08, 'Bb3': 233.08, 'B3': 246.94,
  'C4': 261.63, 'C#4': 277.18, 'Db4': 277.18, 'D4': 293.66, 'D#4': 311.13, 'Eb4': 311.13, 'E4': 329.63, 'F4': 349.23, 'F#4': 369.99, 'Gb4': 369.99, 'G4': 392.00, 'G#4': 415.30, 'Ab4': 415.30, 'A4': 440.00, 'A#4': 466.16, 'Bb4': 466.16, 'B4': 493.88,
  'C5': 523.25, 'C#5': 554.37, 'Db5': 554.37, 'D5': 587.33, 'D#5': 622.25, 'Eb5': 622.25, 'E5': 659.25, 'F5': 698.46, 'F#5': 739.99, 'Gb5': 739.99, 'G5': 783.99, 'G#5': 830.61, 'Ab5': 830.61, 'A5': 880.00, 'A#5': 932.33, 'Bb5': 932.33, 'B5': 987.77,
  'C6': 1046.50, 'D6': 1174.66, 'Eb6': 1244.51, 'E6': 1318.51, 'F6': 1396.91, 'G6': 1567.98, 'A6': 1760.00
};

export class OrchestralEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  public analyser: AnalyserNode | null = null;
  private currentTheme: MusicalTheme | null = null;
  private isPlaying: boolean = false;
  private isPaused: boolean = false;
  private playbackStartTime: number = 0;
  private pauseOffset: number = 0;
  private tempoRatio: number = 1.0;
  private volume: number = 0.8;
  private timerId: number | null = null;
  private activeNodes: Array<{ stop: () => void }> = [];
  private onTimeUpdateCallback: ((time: number, duration: number) => void) | null = null;
  private onEndCallback: (() => void) | null = null;
  private mutedTracks: Set<string> = new Set();

  private initContext() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioContextClass();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.value = this.volume;

      this.analyser = this.ctx.createAnalyser();
      this.analyser.fftSize = 128;
      this.masterGain.connect(this.analyser);
      this.analyser.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public setCallbacks(
    onTimeUpdate: (time: number, duration: number) => void,
    onEnd: () => void
  ) {
    this.onTimeUpdateCallback = onTimeUpdate;
    this.onEndCallback = onEnd;
  }

  public setVolume(val: number) {
    this.volume = Math.max(0, Math.min(1, val));
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
    }
  }

  public setTempoRatio(ratio: number) {
    this.tempoRatio = Math.max(0.6, Math.min(1.5, ratio));
    if (this.isPlaying && !this.isPaused && this.currentTheme) {
      // Re-schedule from current position
      const currentPos = this.getCurrentTime();
      this.stopActiveNotes();
      this.pauseOffset = currentPos;
      this.schedulePlayback(currentPos);
    }
  }

  public toggleMuteTrack(trackName: string) {
    if (this.mutedTracks.has(trackName)) {
      this.mutedTracks.delete(trackName);
    } else {
      this.mutedTracks.add(trackName);
    }
  }

  public isTrackMuted(trackName: string): boolean {
    return this.mutedTracks.has(trackName);
  }

  public playTheme(theme: MusicalTheme, fromBeginning = true) {
    this.initContext();
    if (!this.ctx || !this.masterGain) return;

    this.stopActiveNotes();
    this.currentTheme = theme;
    this.isPlaying = true;
    this.isPaused = false;

    const startOffset = fromBeginning ? 0 : this.pauseOffset;
    this.pauseOffset = startOffset;
    this.playbackStartTime = this.ctx.currentTime - (startOffset / this.tempoRatio);

    this.schedulePlayback(startOffset);
    this.startTracking();
  }

  public pause() {
    if (!this.isPlaying || this.isPaused || !this.ctx) return;
    this.pauseOffset = (this.ctx.currentTime - this.playbackStartTime) * this.tempoRatio;
    this.stopActiveNotes();
    this.isPaused = true;
    if (this.timerId) {
      window.clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  public resume() {
    if (!this.isPlaying || !this.isPaused || !this.currentTheme) return;
    this.playTheme(this.currentTheme, false);
  }

  public stop() {
    this.stopActiveNotes();
    this.isPlaying = false;
    this.isPaused = false;
    this.pauseOffset = 0;
    if (this.timerId) {
      window.clearInterval(this.timerId);
      this.timerId = null;
    }
    if (this.onTimeUpdateCallback && this.currentTheme) {
      this.onTimeUpdateCallback(0, this.currentTheme.durationSeconds);
    }
  }

  public seek(seconds: number) {
    if (!this.currentTheme) return;
    const clamped = Math.max(0, Math.min(this.currentTheme.durationSeconds, seconds));
    this.pauseOffset = clamped;
    if (this.isPlaying && !this.isPaused) {
      this.stopActiveNotes();
      this.playTheme(this.currentTheme, false);
    } else {
      if (this.onTimeUpdateCallback) {
        this.onTimeUpdateCallback(clamped, this.currentTheme.durationSeconds);
      }
    }
  }

  public getCurrentTime(): number {
    if (!this.ctx || !this.isPlaying) return this.pauseOffset;
    if (this.isPaused) return this.pauseOffset;
    return (this.ctx.currentTime - this.playbackStartTime) * this.tempoRatio;
  }

  public getIsPlaying(): boolean {
    return this.isPlaying && !this.isPaused;
  }

  private stopActiveNotes() {
    for (const node of this.activeNodes) {
      try {
        node.stop();
      } catch {
        // Ignored if already ended
      }
    }
    this.activeNodes = [];
  }

  private schedulePlayback(fromSeconds: number) {
    if (!this.ctx || !this.masterGain || !this.currentTheme) return;

    const baseCtxTime = this.ctx.currentTime;
    const theme = this.currentTheme;

    for (const track of theme.tracks) {
      if (this.mutedTracks.has(track.name)) continue;

      for (const note of track.notes) {
        const noteStartReal = note.time / this.tempoRatio;
        const noteDurationReal = note.duration / this.tempoRatio;
        const noteEndReal = noteStartReal + noteDurationReal;

        if (noteEndReal < fromSeconds) continue;

        const scheduledStart = baseCtxTime + Math.max(0, noteStartReal - fromSeconds);
        const effectiveDuration = noteStartReal < fromSeconds 
          ? noteDurationReal - (fromSeconds - noteStartReal) 
          : noteDurationReal;

        if (effectiveDuration > 0.05) {
          this.synthesiseInstrumentNote(
            track.name,
            note.pitch,
            scheduledStart,
            effectiveDuration,
            note.velocity || 0.8
          );
        }
      }
    }
  }

  private synthesiseInstrumentNote(
    instrument: InstrumentTrack['name'],
    pitchStr: string,
    startTime: number,
    duration: number,
    velocity: number
  ) {
    if (!this.ctx || !this.masterGain) return;
    const freq = NOTE_FREQS[pitchStr] || 440;

    const noteGain = this.ctx.createGain();
    noteGain.connect(this.masterGain);

    if (instrument === 'Timpani') {
      // Resonant percussion thump
      const osc = this.ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq * 1.5, startTime);
      osc.frequency.exponentialRampToValueAtTime(Math.max(35, freq * 0.7), startTime + 0.12);

      const amp = this.ctx.createGain();
      amp.gain.setValueAtTime(velocity * 0.9, startTime);
      amp.gain.exponentialRampToValueAtTime(0.001, startTime + Math.min(duration, 1.2));

      osc.connect(amp);
      amp.connect(this.masterGain);
      osc.start(startTime);
      osc.stop(startTime + Math.min(duration, 1.2));
      this.activeNodes.push({ stop: () => { try { osc.stop(); } catch {} } });
      return;
    }

    if (instrument.includes('Horn') || instrument.includes('Trumpet')) {
      // Warm brass sound with filter envelope
      const osc = this.ctx.createOscillator();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(freq, startTime);

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(freq * 2, startTime);
      filter.frequency.linearRampToValueAtTime(freq * 4.5, startTime + 0.08);
      filter.frequency.exponentialRampToValueAtTime(freq * 2.2, startTime + duration);

      noteGain.gain.setValueAtTime(0.001, startTime);
      noteGain.gain.linearRampToValueAtTime(velocity * 0.45, startTime + 0.06);
      noteGain.gain.setValueAtTime(velocity * 0.42, startTime + Math.max(0.07, duration - 0.08));
      noteGain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

      osc.connect(filter);
      filter.connect(noteGain);
      osc.start(startTime);
      osc.stop(startTime + duration + 0.05);
      this.activeNodes.push({ stop: () => { try { osc.stop(); } catch {} } });
      return;
    }

    if (instrument.includes('Flute') || instrument.includes('Oboe')) {
      // Woodwind breath tone with soft vibrato
      const osc = this.ctx.createOscillator();
      osc.type = instrument.includes('Flute') ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, startTime);

      // Subtle vibrato
      const vibrato = this.ctx.createOscillator();
      vibrato.frequency.setValueAtTime(5.2, startTime);
      const vibGain = this.ctx.createGain();
      vibGain.gain.setValueAtTime(3.5, startTime);
      vibrato.connect(vibGain);
      vibGain.connect(osc.frequency);
      vibrato.start(startTime);
      vibrato.stop(startTime + duration + 0.05);

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(freq * 3.5, startTime);

      noteGain.gain.setValueAtTime(0.001, startTime);
      noteGain.gain.linearRampToValueAtTime(velocity * 0.4, startTime + 0.08);
      noteGain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

      osc.connect(filter);
      filter.connect(noteGain);
      osc.start(startTime);
      osc.stop(startTime + duration + 0.05);
      this.activeNodes.push({ stop: () => { try { osc.stop(); vibrato.stop(); } catch {} } });
      return;
    }

    // Default to rich Orchestral Strings (Violins, Viola, Cello, Bass)
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    osc1.type = 'sawtooth';
    osc2.type = 'sawtooth';
    osc1.frequency.setValueAtTime(freq, startTime);
    osc2.frequency.setValueAtTime(freq * 1.004, startTime); // Subtle chorus detune

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    const cutoff = instrument.includes('Cello') ? freq * 3.2 : freq * 4.2;
    filter.frequency.setValueAtTime(cutoff, startTime);
    filter.Q.value = 1.2;

    const attackTime = 0.09;
    noteGain.gain.setValueAtTime(0.001, startTime);
    noteGain.gain.linearRampToValueAtTime(velocity * 0.35, startTime + attackTime);
    noteGain.gain.setValueAtTime(velocity * 0.33, startTime + Math.max(attackTime, duration - 0.12));
    noteGain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration + 0.08);

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(noteGain);

    osc1.start(startTime);
    osc2.start(startTime);
    osc1.stop(startTime + duration + 0.1);
    osc2.stop(startTime + duration + 0.1);

    this.activeNodes.push({
      stop: () => {
        try {
          osc1.stop();
          osc2.stop();
        } catch {}
      }
    });
  }

  private startTracking() {
    if (this.timerId) window.clearInterval(this.timerId);
    this.timerId = window.setInterval(() => {
      if (!this.isPlaying || this.isPaused || !this.currentTheme) return;
      const current = this.getCurrentTime();
      if (this.onTimeUpdateCallback) {
        this.onTimeUpdateCallback(current, this.currentTheme.durationSeconds);
      }
      if (current >= this.currentTheme.durationSeconds) {
        this.stop();
        if (this.onEndCallback) {
          this.onEndCallback();
        }
      }
    }, 50);
  }
}

export const orchestralPlayer = new OrchestralEngine();
