import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-primarycolor h-96 xl:h-[100vh] flex flex-col justify-between pt-2 font-[family-name:var(--font-geist-sans)] font-medium px-4 md:px-10 xl:px-28'>
        <h2 className='text-6xl text-black sm:text-9xl xl:text-[12rem]'>
            Immortal
        </h2>
        <a href="https://mohitisimmortal.in" target='_blank' className='text-black text-xl mb-2'>mohitisimmortal.in</a>
    </footer>
  )
}

export default Footer
