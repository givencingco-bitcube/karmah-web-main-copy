import { cn } from '~/lib/utils';
import { Toolbar } from './toolbar';
import { Footer } from './footer';

/* TODO: wanted to make this an layout but unable to add the toolbar and the footer while changing the background color of the page */
export function PageContainer({
  children,
  className,
}: Readonly<{ children: React.ReactNode; className?: string }>) {
  return (
    <div className={cn('flex flex-col items-center', className)}>
      <div className="w-full md:max-w-screen-2xl">
        <Toolbar />
        {children}
        <Footer />
      </div>
    </div>
  );
}
