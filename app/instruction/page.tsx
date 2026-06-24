'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function InstructionPage() {
  const router = useRouter();

  return (
    <div
      className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-sky-50 via-white to-emerald-50"
      style={{
        backgroundImage:
          'radial-gradient(circle at 20% 15%, rgba(14, 165, 233, 0.14), transparent 18%), radial-gradient(circle at 75% 10%, rgba(34, 197, 94, 0.1), transparent 18%), radial-gradient(circle at 45% 80%, rgba(251, 191, 36, 0.1), transparent 24%)',
      }}
    >
      <div className="absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.7),transparent_25%),radial-gradient(circle_at_70%_25%,rgba(255,255,255,0.55),transparent_20%)]" />
      <Image
        src="/images/instruction/instruction1.png"
        alt="Instruction"
        fill
        className="relative object-contain"
        priority
      />
      
      {/* Navigation Buttons overlaid on image */}
      {/* Prev Button - Bottom Left */}
      <button
        onClick={() => router.push('/objective')}
        className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-3 sm:left-4 md:left-6 w-12 sm:w-14 h-12 sm:h-14 hover:scale-110 transition-transform duration-300 active:scale-95 z-10"
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
        onClick={() => router.push('/menu')}
        className="absolute bottom-3 sm:bottom-4 md:bottom-6 right-3 sm:right-4 md:right-6 w-12 sm:w-14 h-12 sm:h-14 hover:scale-110 transition-transform duration-300 active:scale-95 z-10"
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
