'use client';
import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, DotFilledIcon } from '@radix-ui/react-icons';
const testimonials = [
    {
        name: 'Fayka Sabry',
        title: 'Design Director',
        feedback:
            "If you're looking for a design studio that delivers quality and creativity in equal measure, look no further than Lunar. They're simply outstanding!",
        image: '/images/testuser1.jpg',
    },
    {
        name: 'Pakinam Ahmed',
        title: 'Marketing Manager',
        feedback:
            "Lunar took the time to understand our brand and audience, resulting in designs that perfectly captured our identity. We couldn't be happier.",
        image: '/images/testuser2.jpg',
    },
    {
        name: 'Jane Smith',
        title: 'Art Director',
        feedback:
            "I've worked with many studios before, but Lunar's attention to detail and innovative ideas set them apart. Highly recommended!",
        image: '/images/testuser5.jpg',
    },
    {
        name: 'Sarah Conor',
        title: 'Creative Director',
        feedback:
            "Lunar exceeded our expectations with their innovative designs. They truly have a gift for bringing ideas to life!",
        image: '/images/testuser3.jpg',
    },
    {
        name: 'John Doe',
        title: 'Head of Marketing',
        feedback:
            "The team at Lunar is incredibly talented. Their creative solutions have helped our brand reach new heights.",
        image: '/images/testuser4.jpg',
    },
];


const Section7 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Show one testimonial at a time on small screens
    const visibleTestimonial = testimonials[currentIndex];

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex(
            (prevIndex) =>
                (prevIndex - 1 + testimonials.length) % testimonials.length
        );
    };

    const goToTestimonial = (index: React.SetStateAction<number>) => {
        setCurrentIndex(index);
    };

    return (
        <div className="px-4  md:px-10 xl:px-28">
            <p className="mb-4 p-3 flex items-center w-fit xl:text-lg rounded-full bg-lightblack">
                <DotFilledIcon className="text-primarycolor" />
                Words of love
            </p>
            {/* Top Heading */}
            <div className="flex justify-between mb-8 items-end">
                <h2 className="text-2xl sm:text-3xl md:text-5xl xl:text-6xl">
                    <p className="">Helping brands to </p>
                    {/* and leave a lasting impact. */}
                    reach new heights.
                </h2>

                <div className="hidden md:flex ">
                    {/* Hide arrows on small screens */}
                    <button
                        onClick={prevTestimonial}
                        className="p-2 rounded-full text-white bg-lightblack"
                    >
                        <ChevronLeftIcon className="h-6 w-6" />
                    </button>
                    <button
                        onClick={nextTestimonial}
                        className="p-2 ml-2 rounded-full text-white bg-lightblack"
                    >
                        <ChevronRightIcon className="h-6 w-6" />
                    </button>
                </div>
            </div>

            {/* Testimonial for small screens */}
            <div className="block md:hidden">
                <div className="bg-lightblack p-8 rounded-xl shadow-lg flex flex-col">
                    <div className="flex items-center mb-4">
                        <img
                            src={visibleTestimonial.image}
                            alt={visibleTestimonial.name}
                            className="h-12 w-12 rounded-full object-cover mr-4"
                        />
                        <div>
                            <h3 className="text-lg font-semibold text-white">
                                {visibleTestimonial.name}
                            </h3>
                            <p className="text-sm text-gray-400">{visibleTestimonial.title}</p>
                        </div>
                    </div>
                    <p className="text-gray-300 mb-4">"{visibleTestimonial.feedback}"</p>
                </div>

                {/* Dots Navigation */}
                <div className="flex justify-center mt-4 space-x-2">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToTestimonial(index)}
                            className={`h-3 w-3 rounded-full ${index === currentIndex ? 'bg-white' : ' bg-lightblack'
                                }`}
                        />
                    ))}
                </div>
            </div>

            {/* Testimonials for larger screens */}
            <div className="hidden md:grid grid-cols-3 gap-6">
                {testimonials.slice(currentIndex, currentIndex + 3).map((testimonial, index) => (
                    <div
                        key={index}
                        className="bg-lightblack p-8 rounded-xl shadow-lg flex flex-col"
                    >
                        <div className="flex items-center mb-4">
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="h-12 w-12 rounded-full object-cover mr-4"
                            />
                            <div>
                                <h3 className="text-lg font-semibold text-white">
                                    {testimonial.name}
                                </h3>
                                <p className="text-sm text-gray-400">{testimonial.title}</p>
                            </div>
                        </div>
                        <p className="text-gray-300 mb-4">"{testimonial.feedback}"</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Section7;
