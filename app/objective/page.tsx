'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function ObjectivePage() {
  const router = useRouter();

  return (
    <div
      className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-amber-50 via-white to-slate-100"
      style={{
        backgroundImage:
          'radial-gradient(circle at 15% 20%, rgba(253, 224, 71, 0.18), transparent 18%), radial-gradient(circle at 85% 12%, rgba(56, 189, 248, 0.12), transparent 16%), radial-gradient(circle at 50% 85%, rgba(253, 186, 116, 0.12), transparent 24%)',
      }}
    >
      <div className="absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.7),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.6),transparent_20%)]" />
      <Image
        src="/images/objective/objective1-3.png"
        alt="Objective"
        fill
        className="relative object-contain"
        priority
      />
      
      {/* Navigation Buttons overlaid on image */}
      {/* Prev Button - Bottom Left */}
      <button
        onClick={() => router.push('/')}
        className="absolute bottom-6 left-6 w-14 h-14 hover:scale-110 transition-transform duration-300 active:scale-95 z-10"
      >
        <Image
          src="/images/ui/btn-prev.png"
          alt="Previous"
          fill
          className="object-contain cursor-pointer"
        />
      </button>

      {/* Next Button - Bottom Right */}
      <button
        onClick={() => router.push('/instruction')}
        className="absolute bottom-6 right-6 w-14 h-14 hover:scale-110 transition-transform duration-300 active:scale-95 z-10"
      >
        <Image
          src="/images/ui/btn-next.png"
          alt="Next"
          fill
          className="object-contain cursor-pointer"
        />
      </button>
    </div>
  );
}
