'use client';

import { createContext, useContext, useState, useEffect, useRef, ReactNode } from 'react';

interface AudioContextType {
  isPlaying: boolean;
  toggleMusic: () => void;
  volume: number;
  setVolume: (vol: number) => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export function AudioProvider({ children }: { children: ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolumeState] = useState(0.5);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Load preference dari localStorage
  useEffect(() => {
    const savedVolume = localStorage.getItem('musicVolume');
    const savedIsPlaying = localStorage.getItem('musicPlaying');
    
    if (savedVolume) setVolumeState(parseFloat(savedVolume));
    if (savedIsPlaying === 'true') setIsPlaying(true);
  }, []);

  // Initialize audio element
  useEffect(() => {
    if (!audioRef.current) {
      const audio = new Audio('/audio/background-music.mp3');
      audio.loop = true;
      audio.volume = volume;
      audioRef.current = audio;
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  // Handle play/pause
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(() => {
          // Browser autoplay policy - silently fail
          setIsPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
      localStorage.setItem('musicPlaying', isPlaying.toString());
    }
  }, [isPlaying]);

  // Handle volume change
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
    localStorage.setItem('musicVolume', volume.toString());
  }, [volume]);

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
  };

  const setVolume = (vol: number) => {
    setVolumeState(Math.max(0, Math.min(1, vol)));
  };

  return (
    <AudioContext.Provider value={{ isPlaying, toggleMusic, volume, setVolume }}>
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within AudioProvider');
  }
  return context;
}
