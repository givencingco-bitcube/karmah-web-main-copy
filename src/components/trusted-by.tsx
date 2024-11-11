'use client';

import Image from 'next/image';
import { PaddedContainer } from './padded-container';
import { InfiniteLooper } from './infinity-loop';

const accreditations = [
  {
    src: '/logos/iof-logo.png',
    alt: 'Chartered Institute Fundraising Logo',
  },
  {
    src: '/logos/ukcf-logo.png',
    alt: 'UK Community Foundations Logo',
  },
  {
    src: '/logos/cc-logo.png',
    alt: 'Charity Commission for England and Wales Logo',
  },
  {
    src: '/logos/caf-logo.png',
    alt: 'CAF America Logo',
  },
  {
    src: '/logos/bbb-logo.png',
    alt: 'BBB Wise Giving Alliance Logo',
  },
];

export function TrustedBy() {
  return (
    <PaddedContainer
      className="h-96 flex flex-col items-center justify-center gap-6 px-0 relative"
      size="large">
      <h2>Trusted By</h2>

      <div className="hidden md:flex w-full h-11 gap-2 justify-center lg:justify-evenly">
        {accreditations.map((accreditation, index) => (
          <Image
            key={`desktop_${index}`}
            src={accreditation.src}
            alt={accreditation.alt}
            height={45}
            width={160}
            className="object-contain w-full h-full"
          />
        ))}
      </div>

      <div className="md:hidden w-full absolute pt-40">
        <InfiniteLooper direction="left" speed={30}>
          {accreditations.map((accreditation, index) => (
            <div
              className="px-6 flex flex-col items-center justify-center"
              key={`mobile_${index}`}>
              <Image
                src={accreditation.src}
                alt={accreditation.alt}
                height={45}
                width={160}
                className="object-contain h-16 w-fit"
              />
            </div>
          ))}
        </InfiniteLooper>
      </div>
    </PaddedContainer>
  );
}
