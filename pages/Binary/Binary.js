import React from 'react'
import Footer from '@/Components/Footer/Footer'
import { Binarytext } from '@/Components/Json/Binarytext'
import Textarea from '../Textarea/Textarea'
import Header from '@/Components/Header/Header'

const Binary = () => {
    return (
        <>
            <div>
                <Header />
                <div className="h-[98px] my-[20px] bg-[#80808014] max-w-[700px] m-auto"></div>

                <div className='mainbg max-w-[1260px] m-auto px-[15px] py-[10px]'>
                    <div className=''>
                        <div>
                            <h1 className='text-[16px] sm:text-[22px] md:text-2xl font-bold mb-[10px] text-[#420075]'>Binary Code Translator</h1>
                            <p className='text-sm font-normal'>You can use this handy online binary code translation tool to quickly convert your English text into a binary code. Simply enter the regular text as you would in the left column panel and then you will see it automatically get translated into a series of binary code on the right. Likewise, if you have binary code - enter it into the right panel of the binary translator and get the english translation.</p>
                        </div>
                        <div className='h-[98px]'></div>
                        <Textarea />
                        <div className='flex justify-center flex-col md:flex-row gap-2'>
                            <div className='w-[50%]'>
                                <div className='flex items-center mb-[10px]]'>
                                    <p className='text-sm text-[#111111] font-normal mr-[3px]'>Character Count:<span>0</span></p>
                                    <p className='text-sm text-[#111111] font-normal mr-[3px]'>| Word Count:<span>0</span></p>
                                    <p className='text-sm text-[#111111] font-normal'>| Line Count:<span>0</span></p>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center my-[20px] min-h-[250px]'>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className='w-full lg:w-[900px] mt-[15px] m-auto'>
                        <div>
                            {Binarytext.map((data) => {
                                return (
                                    <div className='card p-[15px] mb-[15px] bg-white border rounded-lg'>
                                        <h3 className='text-[15px] font-bold mb-[10px] text-[#420075]'>{data.title}</h3>
                                        <p className='text-sm mb-[10px]'>{data.sentence}</p>
                                        <p className='text-sm mb-[10px]'>{data.subtitle}</p>
                                        <p className='text-sm mb-[10px]'>{data.text}</p>
                                        <p className='text-sm mb-[10px]'>{data.textdata}</p>
                                        <p className='text-sm mb-[10px]'>{data.data}</p>
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

export default Binary