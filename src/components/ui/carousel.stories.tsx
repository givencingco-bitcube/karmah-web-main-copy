/* eslint-disable @cspell/spellchecker */
import type { Meta, StoryObj } from '@storybook/react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from './carousel';
import { SurveyCard } from '../survey-card';

/**
 * A carousel with motion and swipe built using Embla.
 */
const meta: Meta<typeof Carousel> = {
  title: 'ui/Carousel',
  component: Carousel,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    className: 'w-full max-w-xs',
  },
  render: (args) => (
    <Carousel {...args}>
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} index={index}>
            <div className="flex aspect-square items-center justify-center rounded border bg-card p-6">
              <span className="text-4xl font-semibold">{index + 1}</span>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Carousel>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The default form of the carousel.
 */
export const Default: Story = {};

/**
 * Use the `basis` utility class to change the size of the carousel.
 */
export const Size: Story = {
  render: (args) => (
    <Carousel {...args} className="mx-12 w-full max-w-xs">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="basis-1/3" index={0}>
            <div className="flex aspect-square items-center justify-center rounded border bg-card p-6">
              <span className="text-4xl font-semibold">{index + 1}</span>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
  args: {
    className: 'mx-12 w-full max-w-xs',
  },
};

/**
 * Carousel with Survey Cards.
 */
export const SurveyCards: Story = {
  render: (args) => (
    <Carousel {...args} className="mx-12 w-full max-w-lg">
      <CarouselContent>
        {Array.from({ length: 7 }).map((_, index) => (
          <CarouselItem key={index} className="basis-1/1" index={0}>
            <SurveyCard
              title="Should banks use AI to analyse your spending?"
              bannerImage={{
                src: '/survey-card-example.png',
                alt: 'Survey Card Example',
              }}
              colour="pink"
              size="medium"
              badge={{
                src: '/survey-card-subtract.png',
                alt: '',
              }}
            />

            {/* <div className="flex aspect-square items-center justify-center rounded border bg-card p-6">
              <span className="text-4xl font-semibold">{index + 1}</span>
            </div> */}
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
  args: {
    className: 'mx-12 w-full max-w-xs',
  },
};
