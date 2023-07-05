import React from 'react'
import { Smallcase } from '@/Components/Json/Smallcase'
import Footer from '@/Components/Footer/Footer'
import Textarea from '../Textarea/Textarea'
import Header from '@/Components/Header/Header'

const Smalltext = () => {
    return (
        <>
            <Header />
            <div className="h-[98px] my-[20px] bg-[#80808014] max-w-[700px] m-auto"></div>
            <div className='mainbg max-w-[1260px] m-auto px-[15px] py-[10px]'>
                <div className=''>
                    <div>
                        <h1 className='text-[16px] sm:text-[22px] text-[#420075] md:text-2xl font-bold mb-[10px]'>Small Text Generator</h1>
                        <p className='text-sm font-normal'>This small text generator is a handy online tool, where you can convert standard text (whether that’s capitals, small letters and more) into tiny text. The tiny text options are ‘small caps’ and ‘superscript’. Find out how to use the tiny text generator below. </p>
                    </div>
                    <div className="h-[98px] my-[20px] bg-[#80808014] max-w-[700px] m-auto"></div>
                    <Textarea />
                    <div className='flex items-center my-[20px] min-h-[250px]'>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div className='w-full lg:w-[900px] mt-[15px] m-auto'>
                    <div>
                        {Smallcase.map((data) => {
                            return (
                                <div className='card p-[15px] mb-[15px] bg-white border rounded-lg'>
                                    <h3 className='text-[15px] font-bold mb-[10px] text-[#420075]'>{data.title}</h3>
                                    <div className='my-[14px] pl-[40px]'>
                                        <h6 className='flex'><span className='mr-[4px]'>{data.no}</span><p className='text-sm font-normal'>{data.use}</p></h6>
                                        <h6 className='flex mt-[-4px]'><span className='mr-[4px]'>{data.no1}</span><p className='text-sm font-normal'>{data.use1}</p></h6>
                                        <h6 className='flex mt-[-4px]'><span className='mr-[4px]'>{data.no2}</span><p className='text-sm font-normal'>{data.use2}</p></h6>
                                        <h6 className='flex mt-[-4px]'><span className='mr-[4px]'>{data.no3}</span><p className='text-sm font-normal'>{data.use3}</p></h6>
                                    </div>
                                    <p className='text-sm mb-[10px]'>{data.sentence}</p>
                                    <p className='text-sm mb-[10px]'>{data.tiny}</p>
                                    <p className='text-sm mb-[10px]'>{data.text}</p>
                                    <p className='text-sm mb-[10px]'>{data.subtitle}</p>
                                    <p className='text-sm mt-[15px]'>{data.example}</p>
                                    <p className='text-[10px]'>{data.small}</p>

                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Smalltext