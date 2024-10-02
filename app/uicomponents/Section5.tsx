import React from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { CookieIcon, DotFilledIcon, FigmaLogoIcon, TargetIcon, VideoIcon } from '@radix-ui/react-icons';

const Section5 = () => {
    return (
        <div className=" px-4  md:px-10 xl:px-28" id='services'>
            <p className="mb-4 p-3 flex items-center w-fit xl:text-lg rounded-full bg-lightblack">
                <DotFilledIcon className="text-primarycolor" />
                Services
            </p>
            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-5xl xl:text-6xl mb-5 md:mb-10">
                <p className="">There is a lot we can do.</p>
                Here is a few.
            </h2>
            <Accordion type="single" collapsible className="space-y-4 border-none">
                {/* Accordion Item 1 */}
                <AccordionItem
                    value="item-1"
                    className="group bg-lightblack border hover:bg-black border-bordercolor1 rounded-xl xl:p-2"
                >
                    <AccordionTrigger className="hover:no-underline flex items-center justify-between p-4 rounded-lg">
                        <span className="flex items-center text-2xl xl:text-3xl">
                            <CookieIcon className="mr-2 text-primaryColor xl:w-6 xl:h-6" />
                            UI Design
                        </span>
                        <DotFilledIcon
                            className="text-white w-6 h-6 xl:w-8 xl:h-8 group-hover:text-primarycolor hover:text-primarycolor transition-colors duration-300 ease-in-out accordion-dot"
                            aria-hidden="true"
                        />
                    </AccordionTrigger>

                    <AccordionContent className="p-4 xl:text-xl">
                        Step into the world of intuitive digital experiences with our UI Design
                        service. We are passionate about crafting interfaces that not only catch
                        the eye but also engage users on a profound level. At the heart of our
                        approach lies a deep understanding of user behavior and interaction design
                        principles. From sleek and modern layouts to user-friendly navigation, we
                        strive to create interfaces that seamlessly guide users through their
                        journey, whether it's exploring a website or navigating a mobile app.
                    </AccordionContent>
                </AccordionItem>

                {/* Accordion Item 2 */}
                <AccordionItem
                    value="item-2"
                    className="group bg-lightblack border hover:bg-black border-bordercolor1 rounded-xl xl:p-2"
                >
                    <AccordionTrigger className="hover:no-underline flex items-center justify-between p-4 rounded-lg">
                        <span className="flex items-center text-2xl xl:text-3xl">
                            <FigmaLogoIcon className="mr-2 text-primaryColor xl:w-6 xl:h-6" />
                            Branding
                        </span>
                        <DotFilledIcon
                            className="text-white w-6 h-6 xl:w-8 xl:h-8 group-hover:text-primarycolor hover:text-primarycolor transition-colors duration-300 ease-in-out accordion-dot"
                            aria-hidden="true"
                        />
                    </AccordionTrigger>

                    <AccordionContent className="p-4 xl:text-xl">
                        Our branding service ensures that your brand communicates your values
                        effectively and leaves a lasting impression. We work closely with you to
                        understand your brand's identity and goals, creating a cohesive and
                        engaging brand story that resonates with your audience. From logo design
                        to full branding strategies, our team delivers creative solutions tailored
                        to your business needs.
                    </AccordionContent>
                </AccordionItem>

                {/* Accordion Item 3 */}
                <AccordionItem
                    value="item-3"
                    className="group bg-lightblack border hover:bg-black border-bordercolor1 rounded-xl xl:p-2"
                >
                    <AccordionTrigger className="hover:no-underline flex items-center justify-between p-4 rounded-lg">
                        <span className="flex items-center text-2xl xl:text-3xl">
                            <TargetIcon className="mr-2 text-primaryColor xl:w-6 xl:h-6" />
                            Motion / 3D
                        </span>
                        <DotFilledIcon
                            className="text-white w-6 h-6 xl:w-8 xl:h-8 group-hover:text-primarycolor hover:text-primarycolor transition-colors duration-300 ease-in-out accordion-dot"
                            aria-hidden="true"
                        />
                    </AccordionTrigger>

                    <AccordionContent className="p-4 xl:text-xl">
                        Engage your audience with stunning motion graphics and 3D designs that
                        bring your ideas to life. Our motion design team creates visually striking
                        animations and 3D renderings that help tell your story in a dynamic and
                        engaging way. Whether you're looking for product animations, explainer
                        videos, or 3D visualizations, we deliver high-quality motion design that
                        elevates your brand.
                    </AccordionContent>
                </AccordionItem>

                {/* Accordion Item 4 */}
                <AccordionItem
                    value="item-4"
                    className="group bg-lightblack border hover:bg-black border-bordercolor1 rounded-xl xl:p-2"
                >
                    <AccordionTrigger className="hover:no-underline flex items-center justify-between p-4 rounded-lg">
                        <span className="flex items-center text-2xl xl:text-3xl">
                            <VideoIcon className="mr-2 text-primaryColor xl:w-6 xl:h-6" />
                            Video Production
                        </span>
                        <DotFilledIcon
                            className="text-white w-6 h-6 xl:w-8 xl:h-8 group-hover:text-primarycolor hover:text-primarycolor transition-colors duration-300 ease-in-out accordion-dot"
                            aria-hidden="true"
                        />
                    </AccordionTrigger>

                    <AccordionContent className="p-4 xl:text-xl">
                        From concept to final cut, our video production services deliver compelling
                        stories that captivate your audience. We handle all aspects of video
                        production, from pre-production planning to post-production editing,
                        ensuring that your vision is brought to life on screen. Our team creates
                        professional, high-quality videos that showcase your brand and engage your
                        audience across multiple platforms.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

        </div>
    );
};

export default Section5;
