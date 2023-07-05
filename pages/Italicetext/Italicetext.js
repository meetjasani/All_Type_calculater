import React from 'react'
import Footer from '@/Components/Footer/Footer'
import { Italic_case } from '@/Components/Json/Italic_case'
import Textarea from '../Textarea/Textarea'
import Header from '@/Components/Header/Header'

const Italicetext = () => {
    return (
        <>
            <div>
                <Header />
                <div className="h-[98px] my-[20px] bg-[#80808014] max-w-[700px] m-auto"></div>

                <div className='mainbg max-w-[1260px] m-auto px-[15px] py-[10px]'>
                    <div className=''>
                        <div>
                            <h1 className='text-[16px] sm:text-[22px] md:text-2xl font-bold mb-[10px]  text-[#420075]'>Italic Text Generator</h1>
                            <p className='text-sm font-normal'>Do you want to convert your text into an italic font? Then use this simple and free online italic text generator. All you have to do is write the words that you want to be converted into italics in the left hand field of the italicized generator, then as you write it out, you’re going to see the font get converted into italic text on the right. Once you are done, simply copy the italic text and paste it where you want.</p>
                        </div>
                        <div className='h-[98px]'></div>
                        <Textarea />
                        <div className='flex items-center my-[20px] min-h-[250px]'>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className='w-full lg:w-[900px] mt-[15px] m-auto'>
                        <div>
                            {Italic_case.map((data) => {
                                return (
                                    <div className='card p-[15px] mb-[15px] bg-white border rounded-lg'>
                                        <h3 className='text-[15px] font-bold mb-[10px]  text-[#420075]'>{data.title}</h3>
                                        <p className='text-sm mb-[10px]'>{data.sentence}</p>
                                        <p className='text-sm mb-[10px]'>{data.subtitle}</p>
                                        <p className='text-sm mb-[10px]'>{data.text}</p>
                                        <p className='text-sm mb-[10px]'>{data.textdata}</p>
                                        <p className='text-sm mb-[10px]'>{data.mtext}</p>
                                        <p className='text-sm mb-[10px] font-normal italic'>{data.data}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Italicetext