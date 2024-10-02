import { DotFilledIcon } from '@radix-ui/react-icons';
import React from 'react';

const Section8 = () => {
  return (
    <div className="px-4  md:px-10 xl:px-28 mb-20" id='contact'>
      <p className="mb-4 p-3 flex items-center w-fit xl:text-lg rounded-full bg-lightblack">
        <DotFilledIcon className="text-primarycolor" />
        Contact
      </p>

      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-5xl xl:text-6xl mb-5">
        <p className="">Ready to become Immortal?</p>
        Get in touch.
      </h2>

      {/* Social Media Links */}
      <div className="flex gap-3 flex-col sm:flex-row">
        <a
          href="https://x.com/mohitisimmortal"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-4 py-2 text-lg border border-bordercolor1 rounded-full text-white hover:bg-lightblack transition-colors"
        >
          X (/Twitter)
        </a>
        <a
          href="https://github.com/mohitisimmortal"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-lg px-4 py-2 border border-bordercolor1 rounded-full text-white hover:bg-lightblack transition-colors"
        >
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/mohitisimmortal/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-lg px-4 py-2 border border-bordercolor1 rounded-full text-white hover:bg-lightblack transition-colors"
        >
          Linkedin
        </a>
      </div>
    </div>
  );
};

export default Section8;
