'use client';

import { useAudio } from '../audio/AudioContext';

export function AudioToggle() {
  const { isPlaying, toggleMusic } = useAudio();

  return (
    <button
      onClick={toggleMusic}
      className={`
        fixed top-3 sm:top-4 md:top-6 right-3 sm:right-4 md:right-6 z-50
        w-10 sm:w-11 md:w-12 h-10 sm:h-11 md:h-12 rounded-full
        flex items-center justify-center
        text-xl sm:text-2xl
        transition-all duration-300 ease-out
        shadow-lg hover:shadow-xl
        ${isPlaying 
          ? 'bg-gradient-to-br from-yellow-400 to-yellow-500 hover:scale-110' 
          : 'bg-gradient-to-br from-gray-300 to-gray-400 hover:scale-105'
        }
        transform hover:-translate-y-1
        border-2 sm:border-3 border-white
        active:scale-90
      `}
      title={isPlaying ? 'Matikan musik' : 'Nyalakan musik'}
    >
      {isPlaying ? '🔊' : '🔇'}
    </button>
  );
}
