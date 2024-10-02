import { DotFilledIcon } from '@radix-ui/react-icons';
import { CheckIcon, Cross2Icon } from '@radix-ui/react-icons';
import Link from 'next/link';
import React from 'react';

const Section6 = () => {
  return (
    <div className="px-4  md:px-10 xl:px-28" id='pricing'>
      <p className="mb-4 p-3 flex items-center w-fit xl:text-lg rounded-full bg-lightblack">
        <DotFilledIcon className="text-primarycolor" />
        Pricing
      </p>

      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-5xl xl:text-6xl mb-5 md:mb-10">
        <p className="">Simple pricing to get started</p>
        and elevate your brand.
      </h2>

      {/* Pricing Cards */}
      <div className="mt-8 grid gap-6 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1">
        {/* Card 1 */}
        <div className="bg-lightblack p-8 rounded-xl shadow-lg">
          <h3 className="text-lg font-medium text-white">Basic</h3>
          <p className="mt-4 text-4xl text-white">$999 <span className="text-base font-medium">/ month</span></p>
          <p className="mt-2 text-sm text-gray-400">For freelance designers</p>
          <ul className="mt-6 space-y-4 text-gray-300">
            <li className="flex items-center"><CheckIcon className="mr-2" /> One request at a time</li>
            <li className="flex items-center"><CheckIcon className="mr-2" /> Average 72 hour delivery</li>
            <li className="flex items-center"><CheckIcon className="mr-2" /> Unlimited brands</li>
            <li className="flex items-center"><CheckIcon className="mr-2" /> One request at a time</li>
            <li className="flex items-center"><Cross2Icon className="mr-2" /> Framer development</li>
            <li className="flex items-center"><Cross2Icon className="mr-2" /> Unlimited stock photos</li>
            <li className="flex items-center"><Cross2Icon className="mr-2" /> Unlimited users</li>
          </ul>
          <Link href={"#contact"}>

          <button className="mt-6 w-full py-2 px-4 border border-bordercolor1 hover:bg-black rounded-full text-white">Subscribe</button>
          </Link>
        </div>

        {/* Card 2 */}
        <div className="bg-lightblack p-8 rounded-xl shadow-lg">
          <h3 className="text-lg font-medium text-white">Pro</h3>
          <p className="mt-4 text-4xl text-white">$2,999 <span className="text-base font-medium">/ month</span></p>
          <p className="mt-2 text-sm text-gray-400">For agencies & startups</p>
          <ul className="mt-6 space-y-4 text-gray-300">
            <li className="flex items-center"><CheckIcon className="mr-2" /> One request at a time</li>
            <li className="flex items-center"><CheckIcon className="mr-2" /> Average 72 hour delivery</li>
            <li className="flex items-center"><CheckIcon className="mr-2" /> Unlimited brands</li>
            <li className="flex items-center"><CheckIcon className="mr-2" /> Two requests at a time</li>
            <li className="flex items-center"><CheckIcon className="mr-2" /> Framer development</li>
            <li className="flex items-center"><CheckIcon className="mr-2" /> Unlimited stock photos</li>
            <li className="flex items-center"><CheckIcon className="mr-2" /> Unlimited users</li>
          </ul>
          <Link href={"#contact"}>
          <button className="mt-6 w-full py-2 px-4 bg-primarycolor border border-bordercolor1 hover:bg-black hover:text-white rounded-full text-black">Subscribe</button>

          </Link>
        </div>

        {/* Card 3 */}
        <div className="bg-lightblack p-8 rounded-xl shadow-lg">
          <h3 className="text-lg font-medium text-white">Pro Plus</h3>
          <p className="mt-4 text-4xl text-white">$4,999 <span className="text-base font-medium">/ month</span></p>
          <p className="mt-2 text-sm text-gray-400">For super large teams</p>
          <ul className="mt-6 space-y-4 text-gray-300">
            <li className="flex items-center"><CheckIcon className="mr-2" /> One request at a time</li>
            <li className="flex items-center"><CheckIcon className="mr-2" /> Average 72 hour delivery</li>
            <li className="flex items-center"><CheckIcon className="mr-2" /> Unlimited brands</li>
            <li className="flex items-center"><CheckIcon className="mr-2" /> Unlimited requests</li>
            <li className="flex items-center"><CheckIcon className="mr-2" /> Framer development</li>
            <li className="flex items-center"><CheckIcon className="mr-2" /> Unlimited stock photos</li>
            <li className="flex items-center"><CheckIcon className="mr-2" /> Unlimited users</li>
          </ul>
          <Link href={"#contact"}>
          <button className="mt-6 w-full py-2 px-4 border border-bordercolor1 hover:bg-black rounded-full text-white">Subscribe</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Section6;
