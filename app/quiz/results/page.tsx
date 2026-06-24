'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useQuizContext } from '../QuizContext';

export default function QuizResultsPage() {
  const router = useRouter();
  const { score } = useQuizContext();

  // Determine message and emoji based on score
  const getResultMessage = () => {
    if (score === 100) {
      return {
        title: '🌟 Sempurna! 🌟',
        message: 'Wow! Kamu luar biasa!',
        description: 'Kamu memahami hak dan kewajiban dengan sangat baik. Teruskan semangat belajarnya!',
        emoji: '👑',
        color: 'from-yellow-400 to-orange-400',
        textColor: 'text-yellow-600'
      };
    } else if (score >= 80) {
      return {
        title: '🎉 Bagus Sekali! 🎉',
        message: 'Hebat! Nilai mu sangat bagus!',
        description: 'Kamu sudah memahami sebagian besar tentang hak dan kewajiban. Terus belajar ya!',
        emoji: '💪',
        color: 'from-green-400 to-blue-400',
        textColor: 'text-green-600'
      };
    } else if (score >= 60) {
      return {
        title: '😊 Cukup Baik! 😊',
        message: 'Bagus! Kamu sudah berusaha!',
        description: 'Mulai-mulai kamu memahami hak dan kewajiban. Belajar lebih giat lagi ya!',
        emoji: '📚',
        color: 'from-blue-400 to-purple-400',
        textColor: 'text-blue-600'
      };
    } else {
      return {
        title: '💪 Jangan Menyerah! 💪',
        message: 'Yuk coba lagi!',
        description: 'Tidak masalah jika belum mendapat nilai tinggi. Terus semangat dan belajar lagi!',
        emoji: '🚀',
        color: 'from-pink-400 to-red-400',
        textColor: 'text-pink-600'
      };
    }
  };

  const result = getResultMessage();

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-300 rounded-full opacity-20 blur-2xl"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-300 rounded-full opacity-20 blur-2xl"></div>
      
      <div className="relative z-10 h-full flex flex-col items-center justify-between px-4 py-8 overflow-y-auto">
        {/* Main Content */}
        <div className="text-center space-y-6 max-w-md flex-1 flex flex-col justify-center">
          {/* Emoji and Title */}
          <div className="space-y-2">
            <div className="text-6xl mb-4 animate-bounce">{result.emoji}</div>
            <h1 className={`text-4xl lg:text-5xl font-black ${result.textColor}`}>
              {result.title}
            </h1>
          </div>

          {/* Message */}
          <div className="space-y-3 py-6 px-6 bg-white rounded-3xl shadow-xl">
            <p className="text-2xl lg:text-3xl font-black text-gray-800">
              {result.message}
            </p>
            <p className="text-base lg:text-lg text-gray-600 font-semibold leading-relaxed">
              {result.description}
            </p>
          </div>

          {/* Score Display */}
          <div className={`bg-gradient-to-br ${result.color} rounded-3xl px-8 py-8 shadow-xl`}>
            <p className="text-white text-lg font-bold mb-2">Skor Akhir Kamu:</p>
            <p className="text-5xl font-black text-white drop-shadow-lg">
              {score} / 100
            </p>
            <p className="text-white text-2xl mt-2">⭐ × {Math.floor(score / 10)}</p>
          </div>

          {/* Motivational Text */}
          <div className="bg-yellow-100 rounded-2xl px-6 py-4 border-2 border-yellow-300">
            <p className="text-sm lg:text-base font-bold text-yellow-800">
              💡 Tips: Belajar sedikit demi sedikit setiap hari, maka kamu akan jadi pintar!
            </p>
          </div>
        </div>

        {/* Navigation Button */}
        <div className="w-full max-w-md mt-8">
          <button
            type="button"
            onClick={() => router.push('/feedback')}
            className="w-full px-6 py-4 bg-gradient-to-r from-teal-400 to-cyan-500 text-white text-lg font-black rounded-2xl hover:scale-105 active:scale-95 transition-transform shadow-lg"
          >
            📖 Lihat Umpan Balik
          </button>
        </div>
      </div>
    </div>
  );
}
