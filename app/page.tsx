'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background image - full screen */}
      <Image
        src="/images/home/home.png"
        alt="Home"
        fill
        className="object-cover"
        priority
      />
      
      {/* Button Start overlaid on image */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-10">
        <button
          onClick={() => router.push('/objective')}
          className="relative w-48 h-20 hover:scale-110 transition-transform duration-300 active:scale-95"
        >
          <Image
            src="/images/ui/btn-start.png"
            alt="Start"
            fill
            className="object-contain cursor-pointer"
          />
        </button>
      </div>

      {/* Credits */}
      <div className="absolute bottom-4 left-4 z-10 text-xs text-white/70 backdrop-blur-sm bg-black/20 px-3 py-2 rounded-lg max-w-xs">
        <div className="font-semibold text-white/90">Misi Warga Cilik</div>
        <div>Research: Hilwa Imania Hamid</div>
        <div className="text-white/60">NIM: 1107622123</div>
      </div>
    </div>
  );
}
