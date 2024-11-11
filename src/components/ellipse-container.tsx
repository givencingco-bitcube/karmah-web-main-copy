import { cn } from '~/lib/utils';

export function EllipseContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('flex flex-col items-center relative')}>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 7"
        preserveAspectRatio="none"
        className="fill-neutral-0 absolute  h-full">
        {/* w-[2700px] */}
        <ellipse id="ellipse-shape" cx="7" cy="3.5" rx="7" ry="3.5" />
      </svg>

      <div className={cn('z-0 py-32', className)}>{children}</div>
    </div>
  );
}
