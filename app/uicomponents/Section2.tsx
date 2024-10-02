import React from 'react';
import Image from 'next/image';

const Section2 = () => {
    return (
        <div className=" overflow-hidden">
            {/* Image Carousel */}
            <div className="tilted-imagediv mb-28 xl:mb-36 mt-20 lg:mt-28">
                <div className=" animate-scroll flex gap-4">
                    <Image
                        src="/images/main1.jpg"
                        alt="Image 1"
                        width={600}
                        height={600}
                        objectFit="cover"
                        className='rounded-xl'
                    />

                    <Image
                        src="/images/main2.jpg"
                        alt="Image 2"
                        width={600}
                        height={600}
                        objectFit="cover"
                        className='rounded-xl'

                    />

                    <Image
                        src="/images/main3.jpg"
                        alt="Image 3"
                        width={600}
                        height={600}
                        objectFit="cover"
                        className='rounded-xl'

                    />

                    <Image
                        src="/images/main4.jpg"
                        alt="Image 4"
                        width={600}
                        height={600}
                        objectFit="cover"
                        className='rounded-xl'

                    />

                    <Image
                        src="/images/main5.jpg"
                        alt="Image 5"
                        width={600}
                        height={600}
                        objectFit="cover"
                        className='rounded-xl'

                    />
                </div>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-5xl xl:text-7xl mx-4  md:mx-10 xl:mx-28 ">
                <p className="text-primarycolor">A bunch of Super Humans,</p>
                turning your brand story into a
                <br />
                magical experiences.
            </h2>
        </div>
    );
};

export default Section2;
