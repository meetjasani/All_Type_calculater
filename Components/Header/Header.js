import React from 'react'

const Header = () => {
    return (
        <div className='bg-[#f8eeff] card border relative'>
            <div className='max-w-[1260px] m-auto px-[15px]'>
                <div className='flex items-center justify-between'>
                    <div>Logo</div>
                    <div className='flex items-center lg:gap-10 gap-6'>
                        <a href='#' className='py-5 lg:text-base text-sm hidden md:block'>Small text Generator</a>
                        <a href='#' className='py-5 lg:text-base text-sm hidden md:block'>Wide Text Generator</a>
                        <a href='#' className='py-5 lg:text-base text-sm hidden md:block'>Strikethrough Text Generator</a>
                        <div className='group py-5 transition-all'>
                            <a href='#' className='py-5 lg:text-base text-sm'>Convert Tools</a>
                            <div className='hidden group-hover:block z-10 absolute transition-all card bg-[#f8eeff] top-[70px] right-[8px] p-8 rounded-lg'>
                                <div className='md:flex'>
                                    <div className='flex flex-col gap-3'>
                                        <h1 className='text-lg font-semibold text-[#420075]'>Text Convertors Tools</h1>
                                        <a href='#' className='text-sm'>Reverse Text Generator</a>
                                        <a href='#' className='text-sm'>Upside Down Text Generator</a>
                                        <a href='#' className='text-sm'>Underline Text generator</a>
                                        <a href='#' className='text-sm'>Morse Code Translator</a>
                                        <a href='#' className='text-sm'>Mirror Text generator</a>
                                        <a href='#' className='text-sm'>Zalgo Glitch Text Generator</a>
                                        <a href='#' className='md:py-5 lg:text-base text-sm block md:hidden'>Small text Generator</a>
                                    </div>
                                    <div className='bg-[#aaa] h-auto w-[1px] mx-10'></div>
                                    <div className='flex flex-col gap-3 md:mt-0 mt-5'>
                                        <h1 className='text-lg font-semibold text-[#420075]'>Text Convertors Tools</h1>
                                        <a href='#' className='text-sm'>Title case Translator</a>
                                        <a href='#' className='text-sm'>Bold Case Translator</a>
                                        <a href='#' className='text-sm'>Italic Code Translator</a>
                                        <a href='#' className='text-sm'>Underline Text generator</a>
                                        <a href='#' className='text-sm'>Hex to Text Converter</a>
                                        <a href='#' className='md:py-5 lg:text-base text-sm block md:hidden'>Wide Text Generator</a>
                                        <a href='#' className='md:py-5 lg:text-base text-sm block md:hidden'>Strikethrough Text Generator</a>
                                    </div>
                                    <div className='bg-[#aaa] h-auto w-[1px] mx-10'></div>
                                    <div className='flex flex-col gap-3 md:mt-0 mt-5'>
                                        <h1 className='text-lg font-semibold text-[#420075]'>Text Convertors Tools</h1>
                                        <a href='#' className='text-sm'>Repeat Text Generator</a>
                                        <a href='#' className='text-sm'>Text Replacement Tool</a>
                                        <a href='#' className='text-sm'>Facebook Font Generator</a>
                                        <a href='#' className='text-sm'>UTF-8 Encoder/Decoder</a>
                                        <a href='#' className='text-sm'>CSV to JSON Converter</a>
                                        <a href='#' className='text-sm'>Online Notepad</a>
                                        <a href='#' className='text-sm'>WebP to JPG Converter</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <button className='btnlogin border border-[#420075] rounded-[10px] font-medium text-base text-white py-[10px] px-[30px]'>Login</button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header