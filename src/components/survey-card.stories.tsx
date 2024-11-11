import { Meta, StoryObj } from '@storybook/react';
import { SurveyCard } from './survey-card';

const meta = {
  title: 'Components/SurveyCard',
  component: SurveyCard,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SurveyCard>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The default form of the input field.
 */
export const Default: Story = {
  args: {
    title: 'Should banks use AI to analyse your spending?',
    bannerImage: {
      src: '/survey-card-example.png',
      alt: 'Survey Card Example',
    },
    colour: 'pink',
    size: 'medium',
    badge: {
      src: '/survey-card-subtract.png',
      alt: '',
    },
  },
};
