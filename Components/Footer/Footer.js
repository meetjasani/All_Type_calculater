import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='mt-8 py-5 bg-[#f8eeff] card'>
            <div className='lg:flex items-center justify-between max-w-[1260px] m-auto px-4'>
                <div>
                    <p className="text-[14px] sm:text-sm lg:text-base text-center">
                        Copyright ©2006-2023 Convert Case Ltd | Concept by |
                    </p>
                </div>
                <div className='flex sm:flex-row flex-col items-center justify-center lg:mt-0 mt-5'>
                    <Link href="" className='sm:my-0 my-2 lg:text-base text-sm flex'>Privacy Policy <span className='sm:flex hidden mx-[5px]'>|</span></Link>
                    <Link href="" className='sm:my-0 my-2 lg:text-base text-sm flex'>Terms and Use <span className='sm:flex hidden mx-[5px]'>|</span></Link>
                    <Link href="" className='sm:my-0 my-2 lg:text-base text-sm flex'>Sitemap <span className='sm:flex hidden mx-[5px]'>|</span></Link>
                    <Link href="" className='sm:my-0 my-2 lg:text-base text-sm'>About</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer