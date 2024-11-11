'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Button } from '~/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { cn } from '~/lib/utils';
import Image from 'next/image';

const images = [
  '/orbit-image-example.png',
  '/orbit-image-example.png',
  '/orbit-image-example.png',
  '/orbit-image-example.png',
  '/orbit-image-example.png',
  '/orbit-image-example.png',
  '/orbit-image-example.png',
  '/orbit-image-example.png',
  '/orbit-image-example.png',
  '/orbit-image-example.png',
];

export function Header() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const rotateRight = () => {
      if (!isAnimating) {
        setIsAnimating(true);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    };

    const interval = setInterval(() => {
      rotateRight();
      setIsAnimating(false);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAnimating]);

  useEffect(() => {
    const checkIsMobile = () => {
      const isMobile = window.matchMedia('(max-width: 767px)').matches;
      setIsMobile(isMobile);
    };

    // Run the check on component mount
    checkIsMobile();

    // Add event listener to update on resize
    const resizeListener = () => {
      checkIsMobile();
    };
    window.addEventListener('resize', resizeListener);

    // Cleanup the event listener on unmount
    return () => window.removeEventListener('resize', resizeListener);
  }, []);

  return (
    <header>
      {/* mt-9 is to ensure the circles end up in the center of the toolbar not just directly below it */}
      <div className="relative flex flex-col items-center pt-10 md:-mt-9">
        <OrbitCarousel currentIndex={currentIndex} isMobile={isMobile} />
        <CircleBackground />
      </div>
      <div className="h-[648px] md:h-[864px] md:mt-9 md:pt-16 flex flex-col items-center px-6">
        <Heading currentIndex={currentIndex} />
      </div>
    </header>
  );
}

function CircleBackground() {
  return (
    <div
      className={cn(
        'absolute rounded-full flex items-center justify-center -z-50',
      )}>
      <div
        className={cn(
          'absolute rounded-full bg-secondary-aqua-800',
          'w-[1300px] h-[1300px]',
          'md:w-[1800px] md:h-[1800px]',
        )}></div>
      <div
        className={cn(
          'absolute rounded-full  bg-secondary-aqua-600',
          'w-[1120px] h-[1120px]',
          'md:w-[1550px] md:h-[1550px]',
        )}></div>
      <div
        className={cn(
          'absolute rounded-full bg-secondary-aqua-200',
          'w-[938px] h-[938px]',
          'md:w-[1300px] md:h-[1300px]',
        )}></div>
      <div
        className={cn(
          'absolute rounded-full bg-primary-leaf-200',
          'w-[758px] h-[758px]',
          'md:w-[1050px] md:h-[1050px]',
        )}></div>

      <div
        className={cn(
          'absolute rounded-full bg-secondary-saturn-orange-light-200',
          'w-[578px] h-[578px]',
          'md:w-[800px] md:h-[800px]',
        )}></div>

      <div
        className={cn(
          'absolute rounded-full bg-primary-stone-500',
          'w-[432px] h-[432px]',
          'md:w-[600px] md:h-[600px]',
        )}></div>
    </div>
  );
}

function Heading({ currentIndex }: { currentIndex: number }) {
  return (
    <div className="flex flex-col gap-8 text-center max-w-3xl">
      <h1 className="font-bold text-primary-saturn-orange -rotate-3 text-3xl md:text-6xl">
        Each 60 second survey can provide...
      </h1>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="text-center">
          <h2 className="text-primary-saturn-orange-700 text-2xl md:text-3xl">
            Medicine for an animal shelter
          </h2>
        </motion.div>
      </AnimatePresence>

      <div>
        <Button className="text-neutral-0 md:-rotate-3">
          <span className="pr-4">Take your first survey</span>
          <ArrowRight className=" h-6 w-6" />
        </Button>
      </div>
    </div>
  );
}

export function OrbitCarousel({
  currentIndex,
  isMobile,
}: {
  currentIndex: number;
  isMobile: boolean;
}) {
  return (
    // <div className="flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 to-green-100 p-4">
    // <div className="absolute w-full h-full top-0 flex justify-center pt-32 md:pt-40">
    <div
      className={cn(
        // ' border-2 border-dashed border-primary rounded-full',
        'absolute flex items-center justify-center z-10',
      )}>
      {images.map((src, index) => {
        // Angle Calculation: 180 / (images.length - 1) ensures that the images are distributed evenly over 180 degrees.
        const angle =
          ((index - currentIndex + images.length) % images.length) *
            (360 / images.length) -
          180;

        const isBottom = angle === 0;

        // Detect if the current image is outside the visible range (-180 to 180 degrees)
        const isOutOfBounds = Math.abs(angle) > 90;
        const is1stRow = Math.abs(angle) > 0 && Math.abs(angle) < 45;
        const is2ndRow = Math.abs(angle) > 45 && Math.abs(angle) < 90;

        if (isMobile) {
          return (
            <motion.div
              key={`${index}`}
              className={cn(
                `absolute w-60 h-60 rounded-full overflow-hidden -z-10`,
                isBottom && 'border-8 border-neutral-0 ',
              )}
              animate={{
                // Sine and Cosine Adjustments: The x and y positions are adjusted to move the images in an arc from left to bottom to right,
                // with x and y centered around 50% (50 + 50 * ...).
                x: `${0 + 160 * Math.sin(angle * (Math.PI / 180))}%`,
                y: is1stRow
                  ? `${0 + 208 * Math.cos(angle * (Math.PI / 180))}%`
                  : `${0 + 194 * Math.cos(angle * (Math.PI / 180))}%`,
                scale: isOutOfBounds
                  ? 0
                  : isBottom
                    ? 1
                    : is2ndRow
                      ? 200 / 240
                      : 140 / 240,

                opacity: isOutOfBounds ? 0 : isBottom ? 1 : is2ndRow ? 0 : 1,
              }}
              transition={{ duration: 0.5 }}
              initial={{ opacity: 0 }}>
              <Image
                width={240}
                height={240}
                src={src}
                alt={`Orbiting image ${index + 1}`}
                className="w-full h-full object-cover"
                priority
              />
            </motion.div>
          );
        } else {
          return (
            <motion.div
              key={`${index}`}
              className={cn(
                `absolute w-[360px] h-[360px] rounded-full overflow-hidden -z-10`,
                isBottom && 'border-8 border-neutral-0 ',
              )}
              animate={{
                // Sine and Cosine Adjustments: The x and y positions are adjusted to move the images in an arc from left to bottom to right,
                // with x and y centered around 50% (50 + 50 * ...).
                x: is1stRow
                  ? `${0 + 186 * Math.sin(angle * (Math.PI / 180))}%`
                  : `${0 + 164 * Math.sin(angle * (Math.PI / 180))}%`,
                y: is1stRow
                  ? `${0 + 160 * Math.cos(angle * (Math.PI / 180))}%`
                  : `${0 + 170 * Math.cos(angle * (Math.PI / 180))}%`,
                scale: isOutOfBounds
                  ? 0
                  : isBottom
                    ? 1
                    : is2ndRow
                      ? 200 / 360
                      : 260 / 360,

                opacity: isOutOfBounds
                  ? 0
                  : isBottom
                    ? 1
                    : is2ndRow
                      ? 0.2
                      : 0.5,
              }}
              transition={{ duration: 0.5 }}
              initial={{ opacity: 0 }}>
              <Image
                width={360}
                height={360}
                src={src}
                alt={`Orbiting image ${index + 1}`}
                className="w-full h-full object-cover"
                priority
              />
            </motion.div>
          );
        }
      })}
    </div>
    // </div>
    // </div>
  );
}
