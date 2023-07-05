import React from 'react'
import Footer from '@/Components/Footer/Footer'
import Textarea from '../Textarea/Textarea'
import { Glitchcase } from '@/Components/Json/Glitchcase'
import Header from '@/Components/Header/Header'

const Glitchtext = () => {
    return (
        <>
            <div>
                <Header />
                <div className="h-[98px] my-[20px] bg-[#80808014] max-w-[700px] m-auto"></div>

                <div className='mainbg max-w-[1260px] m-auto px-[15px] py-[10px]'>
                    <div className=''>
                        <div>
                            <h1 className='text-[16px] sm:text-[22px] md:text-2xl font-bold mb-[10px] text-[#420075]'>Zalgo Glitch Text Generator</h1>
                            <p className='text-sm font-normal'>A handy online free glitch generator that will turn your standard text into zalgo text (which gives it the glitchy look below).</p>
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
                            {Glitchcase.map((data) => {
                                return (
                                    <div className='card p-[15px] mb-[15px] bg-white border rounded-lg'>
                                        <h3 className='text-[15px] font-bold mb-[10px]  text-[#420075]'>{data.title}</h3>
                                        <div className='my-[14px] pl-[40px]'>
                                            <h6 className='flex'><span className='mr-[4px]'>{data.no}</span><p className='text-sm font-normal'>{data.use}</p></h6>
                                            <h6 className='flex mt-[-4px]'><span className='mr-[4px]'>{data.no1}</span><p className='text-sm font-normal'>{data.use1}</p></h6>
                                            <h6 className='flex mt-[-4px]'><span className='mr-[4px]'>{data.no2}</span><p className='text-sm font-normal'>{data.use2}</p></h6>
                                            <h6 className='flex mt-[-4px]'><span className='mr-[4px]'>{data.no3}</span><p className='text-sm font-normal'>{data.use3}</p></h6>
                                        </div>
                                        <p className='text-sm mb-[10px]'>{data.sentence}</p>
                                        <p className='text-sm mb-[10px]'>{data.subtitle}</p>
                                        <p className='text-sm mb-[10px]'>{data.text}</p>
                                        <p className='text-sm mb-[10px] scale-x-[-1] text-end'>{data.data}</p>
                                        <p className='text-sm mb-[10px]'>{data.textdata}</p>
                                        <p className='text-sm mb-[10px]'>{data.simple}</p>
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

export default Glitchtext