import { ArrowRightIcon } from 'lucide-react';
import Image from 'next/image';
import { EllipseContainer } from '~/components/ellipse-container';
import { LogoBackground } from '~/components/logo-background';
import { MetricDisplay } from '~/components/metric-display';
import { PaddedContainer } from '~/components/padded-container';
import { PageContainer } from '~/components/page-container';
import { TrustedBy } from '~/components/trusted-by';
import { Button } from '~/components/ui/button';
import { cn } from '~/lib/utils';

export default function AboutUs() {
  return (
    <PageContainer className="bg-primary-stone ">
      <PaddedContainer
        size="large"
        className="pt-20 flex flex-col gap-20 relative">
        <div className="w-3/4">
          <h1 className="pb-11">About us</h1>
          <span className="text-secondary-sea">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            facilisis leo eget sapien porta dapibus. Suspendisse id risus urna.
            Integer sit amet imperdiet magna, et efficitur lectus.{' '}
          </span>
        </div>

        <LogoBackground
          className="opacity-60 absolute lg:top-32 md:-right-80 top-[600px]"
          imageClassName="fill-neutral-0 stroke-neutral-0"
        />

        <div className="flex flex-col items-center">
          <div className="w-[892px] h-[570px] border bg-neutral-0 shadow-xl">
            Youtube Player TODO
          </div>
        </div>

        <div className="flex justify-evenly pb-80 flex-col lg:flex-row gap-8 z-10">
          <MetricDisplay
            color="text-primary-saturn-orange"
            label="Users Worldwide"
            value="1.2m"
          />
          <MetricDisplay
            color="text-secondary-aqua"
            label="Donated so far"
            value="1.2m"
          />
          <MetricDisplay
            color="text-primary-happy"
            label="Charity Partners"
            value="1,000+"
          />
        </div>

        <EllipseContainer className="w-full">
          <div
            className={cn(
              'relative rounded-full flex items-center justify-center -z-50 -mt-[22rem]',
            )}>
            <div
              className={cn(
                'rounded-full bg-secondary-aqua-200',
                'w-[326px] h-[326px]',
                'md:w-[484px] md:h-[484px] p-9',
              )}>
              <div
                className={cn(
                  'rounded-full bg-primary-leaf-200 w-full h-full p-9',
                )}>
                <Image
                  src="/people-in-circle-love.png"
                  alt=""
                  height={228}
                  width={228}
                  className="object-fill w-full h-full"></Image>
              </div>
            </div>
          </div>

          <div className="w-full">
            <span className="text-4xl text-antiqueOlive text-primary-saturn-orange">
              OUR MISSION
            </span>
          </div>
          <div className="flex flex-row lg:flex-row-reverse w-full">
            <div className="lg:w-1/2">
              <div className="flex flex-col gap-6 lg:max-w-lg">
                <h1>Karmah</h1>
                <h2>We Spread LUCK</h2>
                <span className="text-xl text-secondary-sea">
                  LUCK happens to be the acronym for Love, Understanding,
                  Compassion and Kindness™.
                </span>
                <p>When you spread LUCK, good things happen in the universe.</p>
                <p>
                  In many ways, consuming is fundamental to the body. However,
                  giving is fundamental to the soul.
                </p>
                <p>
                  With each moment, year, lifetime, we learn to give a little
                  bit more of ourselves, until finally we are subsumed fully by
                  compassion and kindness.
                </p>
                <p>
                  Karmah is beyond the simple notion that you must do good in
                  order to receive good. It enables each person to experience
                  the pure joy that comes when they (even) temporarily align
                  with the universal flow of unconditional love for humanity.
                </p>
                <p>
                  As more of our fellow citizens get to experience this joy of
                  giving, the world becomes a better place.
                </p>
              </div>
            </div>
          </div>
        </EllipseContainer>

        <div className="text-secondary-sea text-4xl font-bold font-antiqueOlive text-center flex flex-col items-center w-full gap-10">
          <div className="max-w-2xl">
            Morbi hendrerit arcu magna, a dapibus elit viverra a duis in sodales
            lectus ut sed orci ligula aliquam ut mi id turpis
          </div>

          <Button className="-rotate-2">
            Get in touch
            <ArrowRightIcon size={24} />
          </Button>
        </div>

        <TrustedBy></TrustedBy>
      </PaddedContainer>
    </PageContainer>
  );
}
