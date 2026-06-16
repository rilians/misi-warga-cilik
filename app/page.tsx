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
    </div>
  );
}
