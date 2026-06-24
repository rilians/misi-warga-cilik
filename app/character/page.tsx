'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function CharacterPage() {
  const router = useRouter();

  useEffect(() => {
    router.push('/character/1');
  }, [router]);

  return null;
}
