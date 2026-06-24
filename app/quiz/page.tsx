'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useQuizContext } from './QuizContext';

export default function QuizPage() {
  const router = useRouter();
  const { resetScore, setStudentName, setStudentClass } = useQuizContext();
  const [name, setName] = useState('');
  const [className, setClassName] = useState('');
  const [error, setError] = useState('');

  const handleStartQuiz = () => {
    setError('');

    if (!name.trim()) {
      setError('📝 Ups! Lupa isi nama kamu?');
      return;
    }

    if (!className.trim()) {
      setError('🏫 Ups! Lupa isi kelas kamu?');
      return;
    }

    // Store student data in context
    setStudentName(name);
    setStudentClass(className);

    // Reset score and proceed to quiz
    resetScore();
    router.push('/quiz/1');
  };

  const handleInputChange = () => {
    setError('');
  };

  return (
    <div
      className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-amber-50 via-white to-orange-50"
      style={{
        backgroundImage:
          'radial-gradient(circle at 18% 18%, rgba(253, 224, 71, 0.16), transparent 18%), radial-gradient(circle at 82% 16%, rgba(56, 189, 248, 0.12), transparent 16%), radial-gradient(circle at 50% 86%, rgba(251, 113, 133, 0.1), transparent 24%)',
      }}
    >
      <div className="absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.7),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.6),transparent_20%)]" />
      <Image
        src="/images/quiz/quiz-bg.png"
        alt="Quiz Background"
        fill
        sizes="100vw"
        className="relative object-contain"
        priority
      />

      <form
        className="absolute left-1/2 top-[62%] z-10 flex w-[54%] max-w-[210px] -translate-x-1/2 -translate-y-1/2 flex-col gap-2"
        onSubmit={(event) => event.preventDefault()}
      >
        {/* Error Message */}
        {error && (
          <div className="rounded-xl border-2 border-[#ff6b6b] bg-[#ffe0e0] px-3 py-2 text-center text-xs font-bold text-[#c92a2a] animate-pulse">
            {error}
          </div>
        )}

        <div className="flex flex-col gap-1.5">
          <label className="flex items-center gap-1.5 rounded-xl border-2 border-dashed border-[#bfdcff] bg-[#eef5ff]/95 px-2 py-1 shadow-sm">
            <span className="flex min-w-max items-center gap-1 text-xs font-bold text-[#4a1830]">
              <span className="text-base leading-none" aria-hidden="true">
                👤
              </span>
              <span>Nama</span>
            </span>
            <input
              type="text"
              placeholder="Masukkan nama"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                handleInputChange();
              }}
              className="h-5 min-w-0 flex-1 rounded-md border-2 border-[#dfe5ec] bg-white px-1.5 text-xs text-[#333] outline-none transition duration-300 placeholder:text-[#b7b7b7] focus:border-[#5a9cff] focus:shadow-[0_0_0_2px_rgba(90,156,255,0.15)]"
            />
          </label>

          <label className="flex items-center gap-1.5 rounded-xl border-2 border-dashed border-[#cde9c8] bg-[#f2fbef]/95 px-2 py-1 shadow-sm">
            <span className="flex min-w-max items-center gap-1 text-xs font-bold text-[#4a1830]">
              <span className="text-base leading-none" aria-hidden="true">
                🏫
              </span>
              <span>Kelas</span>
            </span>
            <input
              type="text"
              placeholder="Masukkan kelas"
              value={className}
              onChange={(e) => {
                setClassName(e.target.value);
                handleInputChange();
              }}
              className="h-5 min-w-0 flex-1 rounded-md border-2 border-[#dfe5ec] bg-white px-1.5 text-xs text-[#333] outline-none transition duration-300 placeholder:text-[#b7b7b7] focus:border-[#5a9cff] focus:shadow-[0_0_0_2px_rgba(90,156,255,0.15)]"
            />
          </label>
        </div>

        <button
          type="button"
          onClick={handleStartQuiz}
          className="relative mx-auto mt-2 h-14 w-40 transition-transform duration-300 hover:scale-105 active:scale-95"
          aria-label="Start Quiz"
        >
          <Image
            src="/images/ui/btn-start-quiz.png"
            alt="Start Quiz"
            fill
            sizes="160px"
            className="object-contain"
            priority
          />
        </button>
      </form>

      <button
        onClick={() => router.push('/menu')}
        className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-3 sm:left-4 md:left-6 z-10 h-14 sm:h-16 w-14 sm:w-16 transition-transform duration-200 hover:scale-105 active:scale-95"
      >
        <Image
          src="/images/ui/btn-prev.png"
          alt="Back"
          fill
          sizes="64px"
          className="object-contain cursor-pointer"
        />
      </button>
    </div>
  );
}
