'use client';

import { useAudio } from '../audio/AudioContext';

export function AudioToggle() {
  const { isPlaying, toggleMusic } = useAudio();

  return (
    <button
      onClick={toggleMusic}
      className={`
        fixed top-6 right-4 z-50
        w-12 h-12 rounded-full
        flex items-center justify-center
        text-2xl
        transition-all duration-300 ease-out
        shadow-lg hover:shadow-xl
        ${isPlaying 
          ? 'bg-gradient-to-br from-yellow-400 to-yellow-500 hover:scale-110' 
          : 'bg-gradient-to-br from-gray-300 to-gray-400 hover:scale-105'
        }
        transform hover:-translate-y-1
        border-3 border-white
        active:scale-90
      `}
      title={isPlaying ? 'Matikan musik' : 'Nyalakan musik'}
    >
      {isPlaying ? '🔊' : '🔇'}
    </button>
  );
}
