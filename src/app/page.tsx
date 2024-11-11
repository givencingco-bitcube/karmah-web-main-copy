import { ArrowRightIcon, SearchIcon } from 'lucide-react';
import Image from 'next/image';
import { ReactNode } from 'react';
import { Header } from '~/components/header';
import { SurveyCard } from '~/components/survey-card';
import { TrustedBy } from '~/components/trusted-by';
import { Badge } from '~/components/ui/badge';
import { Button } from '~/components/ui/button';
import { Card } from '~/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselDots,
} from '~/components/ui/carousel';
import { Input } from '~/components/ui/input';
import { cn } from '~/lib/utils';
import { PaddedContainer } from '~/components/padded-container';
import { LogoIcon } from '~/components/logo-icon';
import { PageContainer } from '~/components/page-container';
import { LogoBackground } from '~/components/logo-background';

export default function Home() {
  return (
    <PageContainer>
      <Header></Header>
      <TrustedBy />
      <FindSurveySection />
      <HowItWorksSection />
      <GiveOnTheGoSection />
    </PageContainer>
  );
}

function FindSurveySection() {
  const badges = [
    'Design & Art',
    'AI & Technology',
    'Politics',
    'Consumer Behaviour',
    'Animals',
    'Social Media',
    'TV & Film',
    'Rushi Sunak',
    'E-commerce',
    'Sports',
  ];

  return (
    <div className="flex flex-col items-center relative">
      <div className="absolute w-[2700px] h-full -z-50 bg-home-surveys"></div>
      <div>
        {/* Top Left */}
        <LogoIcon className="absolute w-12 h-6 lg:left-[24%] lg:top-[160px] md:left-[40%] md:top-[60px] left-[36%] top-[60px] rotate-45 fill-[#FF7439]" />
        {/* Top Right */}
        <LogoIcon className="absolute w-12 h-6 left-[68%] top-[194px] rotate-[32deg] fill-[#6FEAFE] hidden xl:block" />
        <LogoIcon className="absolute w-12 h-6 left-[84%] top-[178px] rotate-12 fill-[#A7EA87] hidden xl:block lg:block" />
        {/* Center/Bottom Left */}
        <LogoIcon className="absolute w-12 h-6 lg:left-[4%] lg:top-[364px] md:left-[16%] -left-[5%] top-[180px] rotate-12 fill-[#A7EA87]" />
        <LogoIcon className="absolute w-12 h-6 lg:left-[16%] lg:top-[478px] md:left-[24%] left-[2%] top-[460px] rotate-[32deg] fill-[#6FEAFE]" />
        <LogoIcon className="absolute w-12 h-6 lg:left-[32%] lg:top-[498px] md:left-[68%] top-[460px] left-[80%] rotate-[60deg] fill-[#D5C7FF]" />
        {/* Center/Bottom Right */}
        <LogoIcon className="absolute w-12 h-6 left-[80%] top-[498px] -rotate-[16deg] fill-[#FF7439] hidden xl:block lg:block" />
        <LogoIcon className="absolute w-12 h-6 left-[97%] top-[384px] rotate-45 fill-[#9747FF] hidden xl:block" />
      </div>

      <div className="py-32 flex flex-col items-center gap-16 w-full">
        <h2>Find Surveys</h2>

        <PaddedContainer
          className="flex lg:gap-8 w-full flex-col items-center pb-12"
          size="large">
          <div className="flex gap-8 w-full flex-col items-center lg:flex-row">
            <Input placeholder="Search Karmah for surveys" icon={SearchIcon} />

            {/* TODO: this can be a button variant */}
            <Button className="flex gap-4">
              <span>Search surveys</span>
              <ArrowRightIcon size={24} />
            </Button>
          </div>

          <div className="lg:flex flex-wrap gap-4 justify-center pb-32 lg:pb-0 hidden">
            {badges.map((badge) => (
              <Badge key={badge} variant={'outline'}>
                {badge}
              </Badge>
            ))}
          </div>
        </PaddedContainer>

        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center relative">
            <div className="px-6 py-3 bg-primary-saturn-orange text-neutral-0 rounded-full font-bold text-selected ">
              Trending
            </div>
            <div className="p-4 bg-primary-saturn-orange rotate-45 absolute -z-10 -bottom-2"></div>
          </div>

          <Carousel className="w-full max-w-full lg:max-w-[calc(100%-320px)] xl:max-w-[calc(100%-320px)]">
            <CarouselContent>
              {Array.from({ length: 7 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  index={index}
                  className={cn(
                    'basis-1/4 md:basis-1/5 lg:basis-1/5 xl:basis-1/5 flex items-center',
                  )}>
                  {/* <div className="border w-96 h-full">{index}</div> */}
                  <SurveyCard
                    title="Should banks use AI to analyse your spending?"
                    bannerImage={{
                      src: '/survey-card-example.png',
                      alt: 'Survey Card Example',
                    }}
                    colour="pink"
                    size="medium"
                    badge={{
                      src: '/survey-card-badge.png',
                      alt: '',
                    }}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselDots className="-mt-12"></CarouselDots>
            <CarouselPrevious className="hidden lg:flex" />
            <CarouselNext className="hidden lg:flex" />
          </Carousel>

          <div className="flex flex-col items-center pt-12">
            <Button className="-rotate-2">
              View all surveys
              <ArrowRightIcon size={24} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function HowItWorksSection() {
  return (
    <PaddedContainer
      className="flex flex-col justify-center items-center gap-6 pt-28"
      size="large">
      <h2 className="pb-16">How it works</h2>

      <HowItWorksCard
        title="Sign up for Free"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel velit consequat, rhoncus velit sed"
        imageSrc="/how-it-works-sign-up.png"
        buttonText="Register"
        color="pink"
        leftContent={
          /* Hexagon Wrapper */
          <>
            {/* <svg width="0" height="0" viewBox="0 0 4 4">
              <defs>
                <mask id="maskHexagon">
                  <path
                    d="M388.402 378.509L268.598 445.191C237.917 462.27 200.106 462.27 169.402 445.191L49.5975 378.509C18.9166 361.43 0 329.85 0 295.693V162.307C0 128.15 18.8943 96.57 49.5975 79.4912L169.402 12.809C200.083 -4.26968 237.894 -4.26968 268.598 12.809L388.402 79.4912C419.083 96.57 438 128.15 438 162.307V295.693C438 329.85 419.106 361.43 388.402 378.509Z"
                    fill="white"
                    transform="scale(1)" // Scale down the path and adjust position for fitting
                  />
                </mask>
              </defs>
            </svg> */}

            <Image
              src={'/how-it-works-sign-up-2.png'}
              alt={''}
              height={438}
              width={438}
              className="object-contain h-full w-full"
              // style={{
              //   mask: 'url(#maskHexagon)',
              // }}
            />
          </>
        }
      />
      <HowItWorksCard
        title="Take surveys & earn Karmah Koins"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel velit consequat, rhoncus velit sed"
        imageSrc="/how-it-works-surveys.png"
        buttonText="Sign In"
        color="leaf"
        leftContent={
          <>
            <Image
              src={'/how-it-works-surveys.png'}
              alt={''}
              height={480}
              width={300}
              className="object-contain h-full w-full"
            />
            <div className="w-44 h-32 absolute -right-8 -bottom-8">
              <Image src="/koins.svg" alt="" height={128} width={180} />
            </div>
          </>
        }></HowItWorksCard>
      <HowItWorksCard
        title="Do Good"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel velit consequat, rhoncus velit sed"
        imageSrc="/how-it-works-do-good.png"
        buttonText="Sign In"
        color="saturn-orange"
        leftContent={
          <div className="relative overflow-hidden rounded-full bg-[url(/how-it-works-do-good.png)] bg-no-repeat bg-center bg-cover h-60 w-60 lg:h-96 lg:w-96">
            <div className="bg-primary-saturn-orange rounded-full absolute -bottom-28 lg:-bottom-60 h-60 w-60 lg:w-96 lg:h-96 text-neutral-0 flex flex-col text-center items-center gap-2 pt-8">
              <span className="-rotate-3 text-2xl w-52">
                Medicine for animal shelter
              </span>
              <span className="-rotate-3 text-lg">(for 1 week)</span>
            </div>
          </div>
        }></HowItWorksCard>
    </PaddedContainer>
  );
}

function HowItWorksCard({
  title,
  text,
  buttonText,
  color,
  leftContent,
}: {
  title: string;
  text: string;
  buttonText: string;
  imageSrc: string;
  leftContent?: ReactNode;
  color: 'pink' | 'leaf' | 'saturn-orange';
}) {
  let cardBgClassName = '';

  switch (color) {
    case 'pink':
      cardBgClassName = 'bg-secondary-pink-200';
      break;
    case 'leaf':
      cardBgClassName = 'bg-primary-leaf-200';
      break;
    case 'saturn-orange':
      cardBgClassName = 'bg-secondary-saturn-orange-light-200';
      break;
  }

  return (
    <Card
      className={cn(
        'w-full p-8 bg-primary-leaf flex gap-6 lg:gap-14 lg:h-[560px] flex-col lg:flex-row max-lg:max-w-screen-sm relative',
        cardBgClassName,
      )}>
      <div
        className={cn(
          'w-full lg:h-full bg-gradient-to-b from-primary-stone rounded-3xl flex items-center justify-center p-4',
        )}>
        {leftContent}
      </div>
      <div className="flex flex-col gap-6 self-center w-full">
        <h3>{title}</h3>
        <span className="max-w-sm">{text}</span>
        <div>
          <Button variant={'outline'}>
            {buttonText}
            <ArrowRightIcon size={24} />
          </Button>
        </div>
      </div>
    </Card>
  );
}

function GiveOnTheGoSection() {
  return (
    <PaddedContainer
      className="flex flex-col-reverse md:flex-row justify-center items-center gap-6 relative lg:pt-56 pt-24 -mb-8"
      size="large">
      <figure className="-z-10 w-full flex justify-center">
        <LogoBackground
          size={10}
          className="hidden lg:block stroke-secondary-saturn-orange-light-200 fill-secondary-saturn-orange-light-200 absolute -left-16 top-72 -z-10 -rotate-12 opacity-20"
          imageClassName="stroke-secondary-saturn-orange-light-200 fill-secondary-saturn-orange-light-200"
        />

        <Image
          src="/give-on-the-go.png"
          alt="image of hand holder mobile phone with Karmah app"
          height={716}
          width={518}></Image>
      </figure>
      <div className="flex flex-col gap-6 max-md:items-center lg:self-center max-w-md w-full">
        <h3>Give on the go</h3>
        <span className="text-center md:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel
          velit consequat, rhoncus velit sed, posuere enim.
        </span>
        <div className="flex gap-4 md:w-full">
          <Image
            src="/logos/appstore.png"
            alt="app store logo"
            height={48}
            width={150}
          />
          <Image
            src="/logos/googleplay.png"
            alt="google play logo"
            height={48}
            width={150}
          />
        </div>
      </div>
    </PaddedContainer>
  );
}
