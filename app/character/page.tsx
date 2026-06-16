'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function CharacterPage() {
  const router = useRouter();

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Image
        src="/images/character/char1.png"
        alt="Character"
        fill
        className="object-contain"
        priority
      />

      <button
        onClick={() => router.push('/menu')}
        className="absolute bottom-6 left-6 w-16 h-16 rounded-full transition-transform duration-200 hover:scale-105"
      >
        <Image
          src="/images/ui/btn-prev.png"
          alt="Prev"
          fill
          className="object-contain"
        />
      </button>

      <button
        onClick={() => router.push('/story')}
        className="absolute bottom-6 right-6 w-16 h-16 rounded-full transition-transform duration-200 hover:scale-105"
      >
        <Image
          src="/images/ui/btn-next.png"
          alt="Next"
          fill
          className="object-contain"
        />
      </button>
    </div>
  );
}
