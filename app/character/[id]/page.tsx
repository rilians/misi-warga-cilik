'use client';

import { use } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const TOTAL_CHARACTERS = 2;

export default function CharacterPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const { id } = use(params);
  const charId = parseInt(id, 10);

  // Validate character ID
  if (isNaN(charId) || charId < 1 || charId > TOTAL_CHARACTERS) {
    router.push('/menu');
    return null;
  }

  const prevHref = charId === 1 ? '/menu' : `/character/${charId - 1}`;
  const nextHref = charId < TOTAL_CHARACTERS ? `/character/${charId + 1}` : null;

  const customImages: { [key: number]: string } = {
    1: '/images/character/char1-2.png',
  };
  const imagePath = customImages[charId] || `/images/character/char${charId}.png`;

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Image
        src={imagePath}
        alt={`Character ${charId}`}
        fill
        className="object-contain"
        priority
      />

      {/* Prev Button - Bottom Left */}
      <button
        onClick={() => router.push(prevHref)}
        className={`absolute left-3 sm:left-4 md:left-6 transition-transform duration-200 hover:scale-105 ${
          charId === 1 ? 'bottom-6 sm:bottom-7 md:bottom-8 w-10 sm:w-11 md:w-12 h-10 sm:h-11 md:h-12' : 'bottom-4 sm:bottom-5 w-10 sm:w-11 h-10 sm:h-11'
        } rounded-full`}
      >
        <Image
          src="/images/ui/btn-prev.png"
          alt="Prev"
          fill
          className="object-contain"
        />
      </button>

      {/* Next/Mulai Cerita Button - Bottom Right */}
      {nextHref ? (
        <button
          onClick={() => router.push(nextHref)}
          className={`absolute right-3 sm:right-4 md:right-6 transition-transform duration-200 hover:scale-105 ${
            charId === 1 ? 'bottom-6 sm:bottom-7 md:bottom-8 w-10 sm:w-11 md:w-12 h-10 sm:h-11 md:h-12' : 'bottom-6 sm:bottom-7 w-14 sm:w-16 h-14 sm:h-16'
          } rounded-full`}
        >
          <Image
            src="/images/ui/btn-next.png"
            alt="Next"
            fill
            className="object-contain"
          />
        </button>
      ) : (
        <div className="absolute bottom-16 sm:bottom-20 right-3 sm:right-4 md:right-6 z-20">
          <button
            onClick={() => router.push('/understanding1')}
            className="relative w-40 sm:w-44 h-14 sm:h-16 hover:scale-105 transition-transform duration-300 active:scale-95"
          >
            <Image
              src="/images/ui/btn-mulai-cerita.png"
              alt="Mulai Cerita"
              fill
              className="object-contain"
            />
          </button>
        </div>
      )}
    </div>
  );
}
