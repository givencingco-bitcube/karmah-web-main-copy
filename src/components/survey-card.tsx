import Image from 'next/image';
import { Button } from './ui/button';
import { CheckIcon, XIcon } from 'lucide-react';
import { cn } from '~/lib/utils';

export function SurveyCard({
  title,
  bannerImage,
  badge,
  colour,
  // size,
}: {
  title: string;
  bannerImage: {
    src: string;
    alt: string;
  };
  badge: {
    src: string;
    alt: string;
  };
  colour: 'aqua' | 'pink' | 'leaf' | 'lilac' | 'saturn-orange';
  size: 'medium' | 'large';
}) {
  let className = 'bg-primary-saturn-orange-500';

  switch (colour) {
    case 'aqua':
      className = 'bg-secondary-aqua';
      break;
    case 'pink':
      className = 'bg-secondary-pink';
      break;
    case 'leaf':
      className = 'bg-primary-leaf';
      break;
    case 'lilac':
      className = 'bg-secondary-lilac';
      break;
    case 'saturn-orange':
      className = 'bg-primary-saturn-orange';
      break;
  }

  return (
    <div
      className={cn(
        'p-3 rounded-xl h-full hover:shadow-[0_12px_40px_0px_rgba(0,0,0,0.24)]',
        className,
      )}>
      <div className="relative w-full pb-4 rounded-2xl">
        <Image
          src={bannerImage?.src}
          alt={bannerImage?.alt}
          height={180}
          width={220}
          className="rounded-xl w-56 h-44 object-cover"
        />
        <Image
          className="absolute -right-2 bottom-0"
          src={badge?.src}
          alt={badge?.alt}
          height={60}
          width={60}
        />
      </div>
      <div className="flex flex-col h-32 justify-between">
        <span className="text-neutral-900 text-xl">{title}</span>

        <div className="flex flex-col content-between">
          <div className="flex content-evenly justify-evenly">
            <Button
              variant="outline"
              size="icon"
              className="border-system-green bg-neutral-0">
              <CheckIcon className="h-6 w-6 stroke-system-green" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border-primary-saturn-orange-600 bg-neutral-0">
              <XIcon className="h-6 w-6 stroke-primary-saturn-orange-600" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
