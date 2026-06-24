'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function FeedbackTwoPage() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-cyan-100 via-blue-100 to-purple-100">
      <div className="relative h-[calc(100vh-6rem)] w-full">
        <Image
          src="/images/feedback/feedback2.png"
          alt="Feedback 2"
          fill
          className="object-contain"
          priority
        />
      </div>

      <div className="flex items-center justify-between gap-4 px-6 pb-4">
        <button
          type="button"
          onClick={() => router.push('/feedback')}
          className="relative w-12 h-12 hover:scale-105 active:scale-95 transition-transform"
        >
          <Image
            src="/images/ui/btn-prev.png"
            alt="Kembali"
            fill
            className="object-contain"
            sizes="48px"
          />
        </button>

        <button
          type="button"
          onClick={() => router.push('/menu')}
          className="relative w-24 h-24 hover:scale-105 active:scale-95 transition-transform"
        >
          <Image
            src="/images/ui/btn-menu.png"
            alt="Menu"
            fill
            className="object-contain"
            sizes="96px"
          />
        </button>
      </div>
    </div>
  );
}
