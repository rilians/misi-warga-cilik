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

  const imagePath = `/images/story/page-${pageNum}.png`;

  const prevHref = pageNum === 1 ? '/character' : `/story/${pageNum - 1}`;
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

      <Link href={prevHref} className="absolute bottom-4 left-4 z-20 h-14 w-14 hover:scale-110 transition-transform duration-300 active:scale-95 inline-flex">
        <Image src="/images/ui/btn-prev.png" alt="Prev" fill className="object-contain" />
      </Link>

      <Link href={nextHref} className="absolute bottom-4 right-4 z-20 h-14 w-14 hover:scale-110 transition-transform duration-300 active:scale-95 inline-flex">
        <Image src="/images/ui/btn-next.png" alt="Next" fill className="object-contain" />
      </Link>
    </div>
  );
}
