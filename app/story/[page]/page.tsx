import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ page: string }>;
};

const TOTAL_PAGES = 14; // based on public/images/story/page-1..page-14.png

export function generateStaticParams() {
  return Array.from({ length: TOTAL_PAGES }, (_, index) => ({
    page: String(index + 1),
  }));
}

export default async function StoryPage({ params }: Props) {
  const { page } = await params;
  const pageNum = parseInt(page || '1', 10);

  if (isNaN(pageNum) || pageNum < 1 || pageNum > TOTAL_PAGES) {
    notFound();
  }

  // Custom image paths untuk halaman tertentu
  const customImages: { [key: number]: string } = {
    1: '/images/story/page-1-2.png',
    4: '/images/story/page-4-2.png',
    5: '/images/story/page-5-3.png',
    6: '/images/story/page-6-3.png',
    7: '/images/story/page-7-2.png',
    9: '/images/story/page-9-3.png',
    10: '/images/story/page-10-2.png',
    11: '/images/story/page-11-2.png',
    12: '/images/story/page-12-2.png',
    13: '/images/story/page-13-2.png',
    14: '/images/story/page-14-2.png',
  };

  const imagePath = customImages[pageNum] || `/images/story/page-${pageNum}.png`;

  const prevHref = pageNum === 1 ? '/character/1' : `/story/${pageNum - 1}`;
  const nextHref = pageNum >= TOTAL_PAGES ? '/quiz' : `/story/${pageNum + 1}`;

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      <Image
        src={imagePath}
        alt={`Story page ${pageNum}`}
        fill
        className="object-contain"
        priority
      />

      <Link href={prevHref} className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-3 sm:left-4 md:left-6 z-20 h-12 sm:h-14 w-12 sm:w-14 hover:scale-110 transition-transform duration-300 active:scale-95 inline-flex">
        <Image src="/images/ui/btn-prev.png" alt="Prev" fill className="object-contain" />
      </Link>

      <Link href={nextHref} className="absolute bottom-3 sm:bottom-4 md:bottom-6 right-3 sm:right-4 md:right-6 z-20 h-12 sm:h-14 w-12 sm:w-14 hover:scale-110 transition-transform duration-300 active:scale-95 inline-flex">
        <Image src="/images/ui/btn-next.png" alt="Next" fill className="object-contain" />
      </Link>
    </div>
  );
}
