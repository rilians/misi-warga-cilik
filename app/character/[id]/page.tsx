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
        className="absolute bottom-6 left-6 w-16 h-16 rounded-full transition-transform duration-200 hover:scale-105"
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
          className="absolute bottom-6 right-6 w-16 h-16 rounded-full transition-transform duration-200 hover:scale-105"
        >
          <Image
            src="/images/ui/btn-next.png"
            alt="Next"
            fill
            className="object-contain"
          />
        </button>
      ) : (
        <div className="absolute bottom-20 right-6 z-20">
          <button
            onClick={() => router.push('/story/1')}
            className="relative w-44 h-16 hover:scale-105 transition-transform duration-300 active:scale-95"
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
