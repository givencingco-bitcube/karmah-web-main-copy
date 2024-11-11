import {
  YoutubeIcon,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
} from 'lucide-react';
import { PaddedContainer } from './padded-container';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '~/lib/utils';
import { LogoBackground } from './logo-background';

export function Footer({
  containerClassName,
}: {
  containerClassName?: string;
}) {
  return (
    <PaddedContainer className={cn(containerClassName)}>
      <div className="bg-primary-saturn-orange rounded-t-3xl px-2 md:px-12 xl:px-28 pt-14 pb-20 gap-8 flex flex-col relative overflow-hidden max-md:items-center">
        <div className="flex lg:justify-between flex-col lg:flex-row">
          <div>
            <Image
              src="/karmah-logo-and-text.png"
              height="60"
              width="400"
              alt="karmah logo and name written in text"
              priority
              className="object-contain lg:h-14 lg:w-96 w-48 h-8"
            />
          </div>
          <div className="text-neutral-0 gap-6 items-center hidden lg:flex">
            {/* TODO fix using simple icons, or just make our own */}
            <YoutubeIcon size={32} />
            <FacebookIcon size={32} />
            <TwitterIcon size={32} />
            <InstagramIcon size={32} />
            <LinkedinIcon size={32} />
          </div>
        </div>
        <div className="flex flex-col gap-4 text-neutral-0 lg:py-12 max-md:text-center">
          <Link href={'/'}>Home</Link>
          <Link href={'/surveys'}>Surveys</Link>
          <Link href={'/charities'}>Charities</Link>
          <Link href={'/about-us'}>About Us</Link>
          <Link href={'/contact-us'}>Contact Us</Link>
        </div>

        <div className="text-neutral-0 gap-6 items-center flex lg:hidden py-12 lg:py-0">
          {/* TODO fix using simple icons, or just make our own */}
          <YoutubeIcon size={32} />
          <FacebookIcon size={32} />
          <TwitterIcon size={32} />
          <InstagramIcon size={32} />
          <LinkedinIcon size={32} />
        </div>

        <LogoBackground
          size={10}
          className="absolute -right-40 md:-right-80 md:top-8 -top-8 opacity-20"
          imageClassName="stroke-secondary-saturn-orange-light-200 fill-secondary-saturn-orange-light-200"
        />

        <div className="flex justify-between text-neutral-0 flex-col md:flex-row text-center gap-8 md:gap-0 max-md:self-center text-[14px] font-normal">
          <div>© Company Name 2024 - All rights reserved.</div>
          <div className="flex flex-row gap-4">
            <Link href={'privacy-policy'}>Privacy Policy</Link>
            <span>/</span>
            <Link href={'terms-of-service'}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </PaddedContainer>
  );
}
