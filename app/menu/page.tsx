'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function MenuPage() {
  const router = useRouter();

  const menuItems = [
    { label: 'Instruction', icon: '/images/ui/btn-instruc1.png', href: '/instruction' },
    { label: 'Objective', icon: '/images/ui/btn-objective.png', href: '/objective' },
    { label: 'Story', icon: '/images/ui/btn-story.png', href: '/character/1' },
    { label: 'Character', icon: '/images/ui/btn-char.png', href: '/character/1' },
    { label: 'Quiz', icon: '/images/ui/btn-quiz.png', href: '/quiz' },
  ];

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black">
      <Image
        src="/images/menu/menu-bg.png"
        alt="Menu Background"
        fill
        className="object-cover"
        priority
      />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-12">
        <div className="w-full max-w-sm pt-16">
          <div className="space-y-4">
            {/* Top row: 2 buttons */}
            <div className="grid grid-cols-2 gap-4">
              {menuItems.slice(0, 2).map((item) => (
                <button
                  key={item.label}
                  onClick={() => router.push(item.href)}
                  className="relative h-40 w-full overflow-hidden rounded-3xl border border-white/20 bg-transparent transition-transform duration-200 hover:-translate-y-1"
                >
                  <Image
                    src={item.icon}
                    alt={item.label}
                    fill
                    className="object-contain"
                    priority
                  />
                </button>
              ))}
            </div>

            {/* Middle: 1 centered button (Story) */}
            <div className="flex justify-center">
              <button
                onClick={() => router.push(menuItems[2].href)}
                className="relative h-40 w-40 overflow-hidden rounded-3xl border border-white/20 bg-transparent transition-transform duration-200 hover:-translate-y-1"
              >
                <Image
                  src={menuItems[2].icon}
                  alt={menuItems[2].label}
                  fill
                  className="object-contain"
                  priority
                />
              </button>
            </div>

            {/* Bottom row: 2 buttons */}
            <div className="grid grid-cols-2 gap-4">
              {menuItems.slice(3).map((item) => (
                <button
                  key={item.label}
                  onClick={() => router.push(item.href)}
                  className="relative h-40 w-full overflow-hidden rounded-3xl border border-white/20 bg-transparent transition-transform duration-200 hover:-translate-y-1"
                >
                  <Image
                    src={item.icon}
                    alt={item.label}
                    fill
                    className="object-contain"
                    priority
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
