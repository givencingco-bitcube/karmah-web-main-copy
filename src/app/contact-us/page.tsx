'use client';

import { PageContainer } from '~/components/page-container';
import { Input } from '~/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '~/components/ui/form';
import { Button } from '~/components/ui/button';
import Link from 'next/link';
import { TrustedBy } from '~/components/trusted-by';
import { EllipseContainer } from '~/components/ellipse-container';
import { cn } from '~/lib/utils';
import { ArrowRightIcon } from 'lucide-react';
import Image from 'next/image';
import { PaddedContainer } from '~/components/padded-container';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/accordion';

const formSchema = z.object({
  companyName: z.string({ required_error: 'Company name is required' }),
  email: z.string().email('test'),
  website: z.string().url().optional(),
  message: z.string(),
});

// Relative is heavily used here because of the Circle Background for some reason breaking the default fixed positions and making it -z-1 completely breaks it

export default function AboutUs() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <>
      <CircleBackground />
      <PageContainer className="bg-primary-stone">
        <PaddedContainer size="large">
          <header>
            {/* mt-9 is to ensure the circles end up in the center of the toolbar not just directly below it */}
            <div className="relative flex flex-col items-center py-20 gap-2 text-center">
              {/* <OrbitCarousel currentIndex={currentIndex} isMobile={isMobile} /> */}
              {/* <CircleBackground /> */}
              <h1 className="text-4xl">Contact Karmah</h1>
              <span>
                We appreciate your interest in Karmah, please select an option
                below.
              </span>
            </div>
          </header>

          <div className="flex flex-col items-center pb-20">
            <Tabs defaultValue="business" className="pb-40 w-full">
              <TabsList className="relative">
                <TabsTrigger value="general">General Enquiry</TabsTrigger>
                <TabsTrigger value="business">For Business</TabsTrigger>
                <TabsTrigger value="charities">For Charities</TabsTrigger>
              </TabsList>
              <TabsContent value="general"></TabsContent>
              <TabsContent value="business">
                <Form {...form}>
                  <div className="flex flex-col items-center ">
                    <h3 className="py-12 relative">
                      I want to build my own survey
                    </h3>

                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-8 w-full md:px-20">
                      <FormField
                        control={form.control}
                        name="companyName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="relative">
                              Company name*
                            </FormLabel>
                            <FormControl>
                              <Input
                                required={true}
                                placeholder="Company Name"
                                {...field}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="relative">Email*</FormLabel>
                            <FormControl>
                              <Input
                                required={true}
                                placeholder="Type your email"
                                {...field}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="website"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="relative">Website</FormLabel>
                            <FormControl>
                              <Input placeholder="www.website.com" {...field} />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="relative">
                              How can we can we help?
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Type your question"
                                {...field}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      <div className="flex flex-col items-center relative">
                        <Button type="submit" className="flex gap-4">
                          <span>Send message</span>
                          <ArrowRightIcon size={24} />
                        </Button>
                      </div>
                    </form>
                  </div>
                </Form>
                <div className="flex flex-col items-center relative pt-12 text-center">
                  <span>
                    By contacting Karmah, you agree to our{' '}
                    <Link
                      href={'terms-and-conditions'}
                      className="text-secondary-sea-200">
                      Terms
                    </Link>{' '}
                    and{' '}
                    <Link
                      href={'privacy-policy'}
                      className="text-secondary-sea-200">
                      Privacy Policy
                    </Link>
                    .
                  </span>
                  <span>Protected by reCAPTCHA.</span>
                </div>
              </TabsContent>
              <TabsContent value="charities">Charities</TabsContent>
            </Tabs>
          </div>
        </PaddedContainer>
        <div className="flex flex-col items-center pb-20">
          <EllipseContainer className="w-full">
            <TrustedBy></TrustedBy>
            <Benefits></Benefits>
            <FAQ></FAQ>
          </EllipseContainer>
        </div>
      </PageContainer>
    </>
  );
}

function CircleBackground() {
  return (
    <div
      className={cn(
        'absolute rounded-full flex items-center justify-center top-[760px] left-0 right-0',
      )}>
      <div
        className={cn(
          'absolute rounded-full bg-secondary-aqua-800',
          'w-[1300px] h-[1300px]',
          'md:w-[2200px] md:h-[2200px]',
        )}></div>
      <div
        className={cn(
          'absolute rounded-full  bg-secondary-aqua-600',
          'w-[1120px] h-[1120px]',
          'md:w-[1892px] md:h-[1892px]',
        )}></div>
      <div
        className={cn(
          'absolute rounded-full bg-secondary-aqua-200',
          'w-[938px] h-[938px]',
          'md:w-[1592px] md:h-[1592px]',
        )}></div>
      <div
        className={cn(
          'absolute rounded-full bg-primary-leaf-200',
          'w-[758px] h-[758px]',
          'md:w-[1284px] md:h-[1284px]',
        )}></div>
      <div
        className={cn(
          'absolute rounded-full bg-secondary-saturn-orange-light-200',
          'w-[578px] h-[578px]',
          'md:w-[980px] md:h-[980px]',
        )}></div>
    </div>
  );
}

function Benefits() {
  const benefits = [
    {
      title: 'Lorem Ipsum',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis leo eget sapien porta dapibus.',
      imageSrc: '',
    },
    {
      title: 'Lorem Ipsum',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis leo eget sapien porta dapibus.',
      imageSrc: '',
    },
    {
      title: 'Lorem Ipsum',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis leo eget sapien porta dapibus.',
      imageSrc: '',
    },
  ];

  return (
    <PaddedContainer size="large">
      <h2>Benefits</h2>
      <div className="flex flex-col lg:flex-row">
        {benefits.map((benefit, index) => (
          <div
            key={`benefit-${index}`}
            className="flex flex-col items-center gap-4">
            <div className="flex flex-col gap-4">
              <Image
                height={114}
                width={278}
                className="w-[278px] h-[115px] rounded-lg"
                src={benefit.imageSrc}
                alt=""
              />
              <div>
                <h4>{benefit.title}</h4>
                <span>{benefit.description}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="py-24 flex flex-col items-center">
        <Button className="-rotate-2">
          Try a demo
          <ArrowRightIcon size={24} />
        </Button>
      </div>
    </PaddedContainer>
  );
}

function FAQ() {
  const faqs = [
    {
      question: 'Lorem Ipsum',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis leo eget sapien porta dapibus.',
      className:
        'data-[state=closed]:bg-secondary-lilac-200 data-[state=open]:border-4 data-[state=open]:border-secondary-lilac-200',
    },
    {
      question: 'Lorem Ipsum',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis leo eget sapien porta dapibus.',
      className:
        'data-[state=closed]:bg-primary-happy-200 data-[state=open]:border-4 data-[state=open]:border-primary-happy-200',
    },
    {
      question: 'Lorem Ipsum',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis leo eget sapien porta dapibus.',
      className:
        'data-[state=closed]:bg-secondary-pink-200 data-[state=open]:border-4 data-[state=open]:border-secondary-pink-200',
    },
    {
      question: 'Lorem Ipsum',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis leo eget sapien porta dapibus.',
      className:
        'data-[state=closed]:bg-primary-saturn-orange-200 data-[state=open]:border-4 data-[state=open]:border-primary-saturn-orange-200',
    },
  ];

  return (
    <PaddedContainer size="large" className="flex lg:flex-row flex-col">
      <h2 className="lg:w-1/4 text-center lg:text-left">FAQ's</h2>
      <div className="lg:w-3/4 h-96 w-full">
        <Accordion type="single" collapsible>
          {faqs.map((faq, index) => (
            <AccordionItem
              key={`faq-${index}`}
              className={cn('flex flex-col gap-4', faq.className)}
              value={`faq-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </PaddedContainer>
  );
}
