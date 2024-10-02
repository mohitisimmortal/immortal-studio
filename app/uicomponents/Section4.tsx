import { DotFilledIcon } from '@radix-ui/react-icons';
import React from 'react';
import Image from 'next/image';

const Section4 = () => {
  return (
    <div className=" px-4  md:px-10 xl:px-28 overflow-hidden" id='work'>
      <p className="mb-4 p-3 flex items-center w-fit xl:text-lg rounded-full bg-lightblack">
        <DotFilledIcon className="text-primarycolor" />
        Our Work
      </p>
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-5xl mb-5 md:mb-10">
        <p className="">At Immortal Studio — We bring </p>
        timeless creativity to life,        
         <br />
         turning vision into lasting experiences.
      </h2>
      <div className="">
        <div className="flex animate-scrollmm space-x-4">
          <Image src="/images/main8.jpg" alt="Work Image 1" width={600} height={600} className='rounded-3xl' />
          <Image src="/images/main9.jpg" alt="Work Image 1" width={600} height={600} className='rounded-3xl' />
          <Image src="/images/main10.jpg" alt="Work Image 1" width={600} height={600} className='rounded-3xl' />
          <Image src="/images/main12.jpg" alt="Work Image 1" width={600} height={600} className='rounded-3xl' />
          <Image src="/images/main11.jpg" alt="Work Image 1" width={600} height={600} className='rounded-3xl' />
        </div>
      </div>
      <div className=" mt-4">
        <div className="flex animate-scrollopposite space-x-4">
          <Image src="/images/main13.jpg" alt="Work Image 1" width={600} height={600} className='rounded-3xl' />
          <Image src="/images/main16.jpg" alt="Work Image 1" width={600} height={600} className='rounded-3xl' />
          <Image src="/images/main15.jpg" alt="Work Image 1" width={600} height={600} className='rounded-3xl' />
          <Image src="/images/main17.jpg" alt="Work Image 1" width={600} height={600} className='rounded-3xl' />
          <Image src="/images/main14.jpg" alt="Work Image 1" width={600} height={600} className='rounded-3xl' />
        </div>
      </div>
    </div>
  );
};

export default Section4;