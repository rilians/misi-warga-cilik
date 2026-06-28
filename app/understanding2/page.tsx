'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function UnderstandingTwoPage() {
  const router = useRouter();
  const [answer, setAnswer] = useState('');

  const handleFinish = () => {
    if (answer.trim()) {
      // Save to localStorage
      localStorage.setItem('understanding_jawaban2', answer);
      router.push('/story/5');
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-slate-100">
      <Image
        src="/images/understanding/understanding2.png"
        alt="Understanding 2"
        fill
        className="object-contain"
        priority
      />

      <div className="absolute left-3 right-3 bottom-4 z-20 rounded-[32px] border-2 border-cyan-200 bg-white/95 p-4 shadow-[0_18px_50px_-30px_rgba(0,0,0,0.5)] ring-1 ring-slate-100">
        <div className="mb-3 rounded-[28px] bg-gradient-to-r from-sky-200 to-cyan-200 p-4 text-center shadow-inner shadow-cyan-200/20">
          <p className="text-sm font-extrabold text-slate-800">
            Tuliskan pendapatmu sebelum melanjutkan cerita.
          </p>
        </div>

        <textarea
          value={answer}
          onChange={(event) => setAnswer(event.target.value)}
          placeholder="Tulis jawabanmu di sini..."
          className="h-32 w-full rounded-[28px] border-2 border-dashed border-sky-300 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900 outline-none transition duration-200 focus:border-amber-400 focus:ring-4 focus:ring-amber-200"
        />

        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:justify-between">
          <button
            type="button"
            onClick={() => router.push('/story/4')}
            className="inline-flex h-14 flex-1 items-center justify-center rounded-[24px] bg-gradient-to-r from-cyan-500 to-sky-500 px-4 text-sm font-bold text-white shadow-lg shadow-cyan-300/40 transition duration-200 hover:scale-[1.02]"
          >
            ← Kembali
          </button>

          <button
            type="button"
            onClick={handleFinish}
            disabled={!answer.trim()}
            className={`inline-flex h-14 flex-1 items-center justify-center rounded-[24px] px-4 text-sm font-bold transition duration-200 ${answer.trim()
              ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow-lg shadow-orange-300/40 hover:scale-[1.02]'
              : 'cursor-not-allowed bg-slate-300 text-slate-500'}`}
          >
            Selesai
          </button>
        </div>
      </div>
    </div>
  );
}
