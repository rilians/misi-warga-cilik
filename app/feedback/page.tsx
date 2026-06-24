'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function FeedbackPage() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-cyan-100 via-blue-100 to-purple-100">
      <div className="relative h-[calc(100vh-5.5rem)] w-full">
        <Image
          src="/images/feedback/feedback1.png"
          alt="Feedback 1"
          fill
          className="object-contain"
          priority
        />
      </div>

      <div className="flex justify-end px-6 pb-4">
        <button
          type="button"
          onClick={() => router.push('/feedback/2')}
          className="relative w-12 h-12 hover:scale-105 active:scale-95 transition-transform"
        >
          <Image
            src="/images/ui/btn-next.png"
            alt="Next"
            fill
            className="object-contain"
            sizes="48px"
          />
        </button>
      </div>
    </div>
  );
}
