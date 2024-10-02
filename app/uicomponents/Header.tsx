import { Button } from '@/components/ui/moving-border'
import { DotFilledIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <div className='flex flex-row items-center justify-between font-[family-name:var(--font-geist-sans)] mt-4 mx-4 md:mx-10 xl:mx-28 '>
            <div className="logo"><a href="#" className='md:text-lg xl:text-xl flex items-center'>
                Immortal
                <Image src={'/images/logo1.png'} width={50} height={50} alt='logo'></Image>
            </a></div>
            <div className="mid border py-1 rounded-full px-2 border-bordercolor1 bg-lightblack hidden md:block">
                <ul className='flex flex-row gap-2 text-xs xl:text-sm'>
                    <li className='p-2 rounded-full pr-3 border border-transparent hover:border-bordercolor1 cursor-pointer group transition-smooth'>
                        <a href="#process" className='flex items-center justify-center'>
                            <DotFilledIcon className='group-hover:text-primarycolor' />
                            Process
                        </a>
                    </li>
                    <li className='p-2 rounded-full pr-3 border border-transparent hover:border-bordercolor1 cursor-pointer group transition-smooth'>
                        <a href="#work" className='flex items-center justify-center'>
                            <DotFilledIcon className='group-hover:text-primarycolor' />
                            Works
                        </a>
                    </li>
                    <li className='p-2 rounded-full pr-3 border border-transparent hover:border-bordercolor1 cursor-pointer group transition-smooth'>
                        <a href="#services" className='flex items-center justify-center'>
                            <DotFilledIcon className='group-hover:text-primarycolor' />
                            Services
                        </a>
                    </li>
                    <li className='p-2 rounded-full pr-3 border border-transparent hover:border-bordercolor1 cursor-pointer group transition-smooth'>
                        <a href="#pricing" className='flex items-center justify-center'>
                            <DotFilledIcon className='group-hover:text-primarycolor' />
                            Pricing
                        </a>
                    </li>
                </ul>
            </div>


            <Link href="#contact" passHref>
                <Button
                    borderRadius="15rem"
                    className="border-bordercolor1 xl:px-4 bg-black p-0 hover:bg-lightblack"
                >
                    Contact
                </Button>
            </Link>


        </div>
    )
}

export default Header
