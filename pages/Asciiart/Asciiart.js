import React from 'react'
import Footer from '@/Components/Footer/Footer'
import { Arttext } from '@/Components/Json/Arttext'
import Header from '@/Components/Header/Header'

const Asciiart = () => {
    return (
        <>
            <div>
                <Header />
                <div className="h-[98px] my-[20px] bg-[#80808014] max-w-[700px] m-auto"></div>

                <div className='mainbg max-w-[1260px] m-auto px-[15px] py-[10px]'>
                    <div className=''>
                        <div>
                            <h1 className='text-[16px] sm:text-[22px] md:text-2xl text-[#420075] font-bold mb-[10px]'>Text to Image Generator</h1>
                            <p className='text-sm font-normal'>Looking for a handy online tool that can convert your picture and art to ascii? Then use this simple tool just below.</p>
                        </div>
                        <div className='h-[98px]'></div>
                        <div>
                            <div></div>
                            <div className='flex items-center'>
                                <p className='text-sm font-normal mr-[10px]'>Output Width In Characters:</p>
                                <input type="number" className='w-[60px]' />
                            </div>
                        </div>
                        <div className='flex items-center my-[20px] min-h-[250px]'>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className='w-full  lg:w-[900px] mt-[15px] m-auto'>
                        <div>
                            {Arttext.map((data) => {
                                return (
                                    <div className='card mx-[6px] p-[15px] mb-[15px] bg-white border rounded-lg'>
                                        <h3 className='text-[15px] font-bold mb-[10px] text-[#420075]'>{data.title}</h3>
                                        <p className='text-sm mb-[10px]'>{data.sentence}</p>
                                        <div className='my-[14px] pl-[40px]'>
                                            <h6 className='flex'><span className='mr-[4px]'>{data.no}</span><p className='text-sm font-normal'>{data.use}</p></h6>
                                            <h6 className='flex mt-[-4px]'><span className='mr-[4px]'>{data.no1}</span><p className='text-sm font-normal'>{data.use1}</p></h6>
                                            <h6 className='flex mt-[-4px]'><span className='mr-[4px]'>{data.no2}</span><p className='text-sm font-normal'>{data.use2}</p></h6>
                                            <h6 className='flex mt-[-4px]'><span className='mr-[4px]'>{data.no3}</span><p className='text-sm font-normal'>{data.use3}</p></h6>
                                            <h6 className='flex mt-[-4px]'><span className='mr-[4px]'>{data.no4}</span><p className='text-sm font-normal'>{data.use4}</p></h6>
                                            <h6 className='flex mt-[-4px]'><span className='mr-[4px]'>{data.no5}</span><p className='text-sm font-normal'>{data.use5}</p></h6>
                                        </div>
                                        <p className='text-sm mb-[10px]'>{data.subtitle}</p>
                                        <p className='text-sm mb-[10px]'>{data.text}</p>
                                        <p className='text-sm mb-[10px]'>{data.textdata}</p>
                                        <p className='text-sm mb-[10px]'>{data.data}</p>
                                        <p className='text-xs line-through'>{data.through}</p>
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

export default Asciiart