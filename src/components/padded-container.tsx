import { cn } from '~/lib/utils';

/* This I can actually just make default on pages for the large looks to be always used everywhere by default expect for footer and toolbar but can do that later */
export function PaddedContainer({
  children,
  className,
  size = 'small',
}: {
  children: React.ReactNode;
  className?: string;
  size?: 'large' | 'small';
}) {
  return (
    <div
      className={cn(
        'max-w-screen-2xl',
        size === 'small' && 'px-4 md:px-12',
        size === 'large' && 'px-4 md:px-20 xl:px-40',
        className,
      )}>
      {children}
    </div>
  );
}
