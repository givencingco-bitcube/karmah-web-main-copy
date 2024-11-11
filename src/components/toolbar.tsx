'use client';

import { Button } from '~/components/ui/button';
import Link from 'next/link';
import { Logo } from './logo';
import { AppSearch } from './search';
import {
  ArrowRight,
  ChevronRightIcon,
  SearchIcon,
  TextSearchIcon,
  UserIcon,
} from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';
import Image from 'next/image';
import { PaddedContainer } from './padded-container';
import { useEffect, useState } from 'react';
import { cn } from '~/lib/utils';
import { Input } from './ui/input';
import { Separator } from './ui/separator';
import { LogoIcon } from './logo-icon';

export function Toolbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50); // Change 50 to any scroll threshold
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <PaddedContainer
      className={cn(
        'sticky top-0 z-50',
        isScrolled ? 'max-lg:bg-neutral-0' : '',
      )}>
      <div className="lg:hidden w-full">
        <MobileSheet>
          <Link href={'/'} className="block">
            <Image
              src="/logo.svg"
              height="22"
              width="136"
              alt="karmah-web-logo"
              priority
            />
          </Link>
        </MobileSheet>
      </div>

      <div className="w-full pt-10 hidden lg:block">
        <div
          className={cn(
            'flex items-center justify-between pr-4 pl-6 py-2 rounded-full bg-neutral-0 w-full',
            isScrolled ? 'bg-opacity-100' : 'bg-opacity-80',
          )}>
          <div className="flex items-center gap-2 w-full">
            <AppSearch></AppSearch>
            <nav className="flex space-x-4">
              <Button asChild variant={'link'}>
                <Link href={'/surveys'}>Surveys</Link>
              </Button>
              <Button asChild variant={'link'}>
                <Link href={'/charities'}>Charities</Link>
              </Button>
            </nav>
          </div>
          <Link href={'/'} className="min-w-44 block">
            <Logo></Logo>
          </Link>

          <div className="flex items-center justify-end space-x-4 w-full">
            <Button size={'sm'}>
              <span className="pr-4">Sign In</span>
              <ArrowRight className=" h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </PaddedContainer>
  );
}

function MobileSheet({ children }: { children: React.ReactNode }) {
  return (
    <Sheet>
      <div className="flex w-full place-content-between py-4">
        <SheetTrigger asChild className="hover:cursor-pointer">
          <TextSearchIcon size={24} className="stroke-primary-saturn-orange" />
        </SheetTrigger>
        {children}
        <SheetTrigger asChild className="hover:cursor-pointer">
          <UserIcon size={24} className="stroke-primary-saturn-orange" />
        </SheetTrigger>
      </div>
      <SheetContent className="bg-primary-stone">
        <SheetHeader className="pb-11">
          <Logo className="w-32 h-6 p-0"></Logo>
          <SheetTitle hidden={true}></SheetTitle>
        </SheetHeader>

        <div>
          <div className="relative flex items-center pb-10">
            <Input
              type="text"
              placeholder="Search Karmah for surveys"
              className="pl-10 font-normal"
              iconPosition="left"
              icon={SearchIcon}
              iconClassName="stroke-primary-saturn-orange"
            />
          </div>

          <div className="flex flex-col gap-4">
            <Button asChild variant={'link'}>
              <Link
                href={'/surveys'}
                className="flex justify-between font-bold text-2xl text-secondary-sea font-antiqueOlive !px-4">
                <span>Surveys</span>
                <ChevronRightIcon />
              </Link>
            </Button>
            <Button asChild variant={'link'}>
              <Link
                href={'/surveys'}
                className="flex justify-between font-bold text-2xl text-secondary-sea font-antiqueOlive !px-4">
                <span>Charities</span>
                <ChevronRightIcon />
              </Link>
            </Button>
            <Button asChild variant={'link'}>
              <Link
                href={'/surveys'}
                className="flex justify-between font-bold text-2xl text-secondary-sea font-antiqueOlive !px-4">
                <span>Impact</span>
                <ChevronRightIcon />
              </Link>
            </Button>
          </div>

          <Separator className="my-8" />

          <div className="flex flex-col gap-4">
            <Button asChild variant={'link'}>
              <Link
                href={'/about-us'}
                className="flex justify-between font-semibold text-lg text-secondary-sea font-antiqueOlive !px-4">
                <span>About Us</span>
                <ChevronRightIcon />
              </Link>
            </Button>
            <Button asChild variant={'link'}>
              <Link
                href={'/contact-us'}
                className="flex justify-between font-semibold text-lg text-secondary-sea font-antiqueOlive !px-4">
                <span>Contact Us</span>
                <ChevronRightIcon />
              </Link>
            </Button>
          </div>
        </div>

        <Button
          size={'sm'}
          className="absolute bottom-4 right-4 left-4"
          asChild>
          <Link href={'/sign-in'}>
            <span className="pr-4">Sign In</span>
            <ArrowRight className=" h-6 w-6" />
          </Link>
        </Button>

        <figure className="absolute -right-72 -z-10 top-80">
          <LogoIcon className="stroke-[white] fill-[white] w-[588px] h-80 opacity-40" />
        </figure>
      </SheetContent>
    </Sheet>
  );
}
