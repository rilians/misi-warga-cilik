'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useQuizContext } from '../QuizContext';

const CORRECT_ANSWER = 'B' as const;

export default function QuizTenPage() {
  const router = useRouter();
  const { score, addScore, setAnswer, studentName, studentClass, answers } = useQuizContext();
  const CA = CORRECT_ANSWER as 'A' | 'B' | 'C' | 'D';
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);

  const handleAnswerSelect = (answer: string) => {
    if (hasAnswered) return;

    setSelectedAnswer(answer);
    setHasAnswered(true);
    setAnswer(10, answer);

    if (answer === CA) {
      addScore(10);
    }
  };

  const handleFinish = async () => {
    try {
      // Prepare FormData for submission
      const submitData = new FormData();
      submitData.append('nama', studentName);
      submitData.append('kelas', studentClass);
      submitData.append('jawaban1', answers[1] || '');
      submitData.append('jawaban2', answers[2] || '');
      submitData.append('jawaban3', answers[3] || '');
      submitData.append('jawaban4', answers[4] || '');
      submitData.append('jawaban5', answers[5] || '');
      submitData.append('jawaban6', answers[6] || '');
      submitData.append('jawaban7', answers[7] || '');
      submitData.append('jawaban8', answers[8] || '');
      submitData.append('jawaban9', answers[9] || '');
      submitData.append('jawaban10', answers[10] || '');
      submitData.append('skor', score.toString());

      // Send to Google Apps Script
      const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwuY_zovbU2MkWA1YnDKUvxPkUpZSbLu_VwvMnM-woJ-naq8KlHoEji514nDms9LSwmag/exec';
      
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        body: submitData
      });

      console.log('Data sent successfully');
    } catch (error) {
      console.error('Data submission error:', error);
    }
    
    // Navigate to results page
    router.push('/quiz/results');
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-white">
      <Image
        src="/images/quiz/quiz-10.png"
        alt="Quiz 10"
        fill
        sizes="100vw"
        className="object-contain"
        priority
      />

      <div className="absolute top-6 right-4 z-20 rounded-[24px] border-2 border-[#f4bc00] bg-gradient-to-b from-[#fff7b8] via-[#f9e98a] to-[#f0d453] w-[110px] h-[32px] flex items-center justify-center px-2 shadow-[inset_0_2px_0_rgba(255,255,255,0.85),0_3px_8px_rgba(0,0,0,0.15)]">
        <div className="text-[14px] font-black text-[#ffe94d]">★</div>
        <div className="ml-1 text-[10px] font-black text-[#4d2500]">
          <span>{score}</span>
        </div>
      </div>

      <div className="absolute left-1/2 top-[66%] z-10 w-[220px] max-w-[220px] lg:w-[220px] -translate-x-1/2 -translate-y-1/2">
        <div className="space-y-2">
          <label 
            className={`flex items-center h-[36px] rounded-[12px] border-2 px-2 cursor-pointer transition-transform ${
              selectedAnswer === 'A'
                ? CA === 'A'
                  ? 'border-[#51cf66] bg-[#d3f9d8]'
                  : 'border-[#ff6b6b] bg-[#ffe0e0]'
                : 'border-[#59a8ff] bg-[#f6f2ea] hover:translate-y-[-1px]'
            } ${hasAnswered ? 'cursor-not-allowed opacity-75' : ''}`}
            onClick={() => !hasAnswered && handleAnswerSelect('A')}
          >
            <input type="radio" name="answer" className="sr-only" checked={selectedAnswer === 'A'} readOnly />
            <span className={`flex h-[28px] w-[28px] items-center justify-center rounded-[7px] border-2 text-[16px] font-black text-shadow-[ -1px_-1px_0_#194f96,1px_-1px_0_#194f96,-1px_1px_0_#194f96,1px_1px_0_#194f96] ${
              selectedAnswer === 'A'
                ? CA === 'A'
                  ? 'bg-gradient-to-b from-[#51cf66] to-[#2f9e44] border-[#2f9e44] text-[#fff]'
                  : 'bg-gradient-to-b from-[#ff6b6b] to-[#c92a2a] border-[#c92a2a] text-[#fff]'
                : 'bg-gradient-to-b from-[#77bbff] to-[#2c7ef0] border-[#1f74eb] text-[#ffd41d]'
            }`}>
              {selectedAnswer === 'A' && CA === 'A' ? '✓' : selectedAnswer === 'A' && CA !== 'A' ? '✗' : 'A'}
            </span>
            <span className="ml-2 text-[14px] font-bold text-[#341d38]">Adalah hak kita</span>
          </label>

          <label 
            className={`flex items-center h-[36px] rounded-[12px] border-2 px-2 cursor-pointer transition-transform ${
              selectedAnswer === 'B'
                ? CA === 'B'
                  ? 'border-[#51cf66] bg-[#d3f9d8]'
                  : 'border-[#ff6b6b] bg-[#ffe0e0]'
                : 'border-[#59a8ff] bg-[#f6f2ea] hover:translate-y-[-1px]'
            } ${hasAnswered ? 'cursor-not-allowed opacity-75' : ''}`}
            onClick={() => !hasAnswered && handleAnswerSelect('B')}
          >
            <input type="radio" name="answer" className="sr-only" checked={selectedAnswer === 'B'} readOnly />
            <span className={`flex h-[28px] w-[28px] items-center justify-center rounded-[7px] border-2 text-[16px] font-black text-shadow-[ -1px_-1px_0_#194f96,1px_-1px_0_#194f96,-1px_1px_0_#194f96,1px_1px_0_#194f96] ${
              selectedAnswer === 'B'
                ? CA === 'B'
                  ? 'bg-gradient-to-b from-[#51cf66] to-[#2f9e44] border-[#2f9e44] text-[#fff]'
                  : 'bg-gradient-to-b from-[#ff6b6b] to-[#c92a2a] border-[#c92a2a] text-[#fff]'
                : 'bg-gradient-to-b from-[#77bbff] to-[#2c7ef0] border-[#1f74eb] text-[#ffd41d]'
            }`}>
              {selectedAnswer === 'B' && CA === 'B' ? '✓' : selectedAnswer === 'B' && CA !== 'B' ? '✗' : 'B'}
            </span>
            <span className="ml-2 text-[14px] font-bold text-[#341d38]">Adalah kewajiban kita</span>
          </label>

          <label 
            className={`flex items-center h-[36px] rounded-[12px] border-2 px-2 cursor-pointer transition-transform ${
              selectedAnswer === 'C'
                ? CA === 'C'
                  ? 'border-[#51cf66] bg-[#d3f9d8]'
                  : 'border-[#ff6b6b] bg-[#ffe0e0]'
                : 'border-[#59a8ff] bg-[#f6f2ea] hover:translate-y-[-1px]'
            } ${hasAnswered ? 'cursor-not-allowed opacity-75' : ''}`}
            onClick={() => !hasAnswered && handleAnswerSelect('C')}
          >
            <input type="radio" name="answer" className="sr-only" checked={selectedAnswer === 'C'} readOnly />
            <span className={`flex h-[28px] w-[28px] items-center justify-center rounded-[7px] border-2 text-[16px] font-black text-shadow-[ -1px_-1px_0_#194f96,1px_-1px_0_#194f96,-1px_1px_0_#194f96,1px_1px_0_#194f96] ${
              selectedAnswer === 'C'
                ? CA === 'C'
                  ? 'bg-gradient-to-b from-[#51cf66] to-[#2f9e44] border-[#2f9e44] text-[#fff]'
                  : 'bg-gradient-to-b from-[#ff6b6b] to-[#c92a2a] border-[#c92a2a] text-[#fff]'
                : 'bg-gradient-to-b from-[#77bbff] to-[#2c7ef0] border-[#1f74eb] text-[#ffd41d]'
            }`}>
              {selectedAnswer === 'C' && CA === 'C' ? '✓' : selectedAnswer === 'C' && CA !== 'C' ? '✗' : 'C'}
            </span>
            <span className="ml-2 text-[14px] font-bold text-[#341d38]">Hanya untuk sekolah</span>
          </label>

          <label 
            className={`flex items-center h-[36px] rounded-[12px] border-2 px-2 cursor-pointer transition-transform ${
              selectedAnswer === 'D'
                ? CA === 'D'
                  ? 'border-[#51cf66] bg-[#d3f9d8]'
                  : 'border-[#ff6b6b] bg-[#ffe0e0]'
                : 'border-[#59a8ff] bg-[#f6f2ea] hover:translate-y-[-1px]'
            } ${hasAnswered ? 'cursor-not-allowed opacity-75' : ''}`}
            onClick={() => !hasAnswered && handleAnswerSelect('D')}
          >
            <input type="radio" name="answer" className="sr-only" checked={selectedAnswer === 'D'} readOnly />
            <span className={`flex h-[28px] w-[28px] items-center justify-center rounded-[7px] border-2 text-[16px] font-black text-shadow-[ -1px_-1px_0_#194f96,1px_-1px_0_#194f96,-1px_1px_0_#194f96,1px_1px_0_#194f96] ${
              selectedAnswer === 'D'
                ? CA === 'D'
                  ? 'bg-gradient-to-b from-[#51cf66] to-[#2f9e44] border-[#2f9e44] text-[#fff]'
                  : 'bg-gradient-to-b from-[#ff6b6b] to-[#c92a2a] border-[#c92a2a] text-[#fff]'
                : 'bg-gradient-to-b from-[#77bbff] to-[#2c7ef0] border-[#1f74eb] text-[#ffd41d]'
            }`}>
              {selectedAnswer === 'D' && CA === 'D' ? '✓' : selectedAnswer === 'D' && CA !== 'D' ? '✗' : 'D'}
            </span>
            <span className="ml-2 text-[14px] font-bold text-[#341d38]">Tidak perlu dipikirkan</span>
          </label>
        </div>
      </div>

      <button
        type="button"
        onClick={handleFinish}
        disabled={!hasAnswered}
        className={`absolute bottom-16 lg:bottom-4 left-1/2 z-20 -translate-x-1/2 w-[180px] h-[56px] rounded-[26px] transition-transform duration-200 ${
          hasAnswered ? 'hover:scale-110 active:scale-95 cursor-pointer' : 'opacity-50 cursor-not-allowed'
        }`}
      >
        <Image
          src="/images/ui/btn-finish.png"
          alt="Selesai"
          fill
          sizes="180px"
          className="object-contain"
          priority
        />
      </button>
    </div>
  );
}
