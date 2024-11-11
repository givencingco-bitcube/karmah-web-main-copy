import Image from 'next/image';
import { cn } from '~/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn('p-2 leading-none', className)}>
      <Image
        src="/logo.svg"
        height="28"
        width="172"
        alt="karmah-web-logo"
        priority
        className="w-full h-full"
      />
    </div>
  );
}
