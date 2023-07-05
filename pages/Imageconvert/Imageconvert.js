import React from 'react'
import Footer from '@/Components/Footer/Footer'
import { Imagecase } from '@/Components/Json/Imagecase'
import Header from '@/Components/Header/Header'


const Imageconvert = () => {
    return (
        <>
            <div>
                <Header />
                <div className="h-[98px] my-[20px] bg-[#80808014] max-w-[700px] m-auto"></div>

                <div className='mainbg max-w-[1260px] m-auto px-[15px] py-[10px]'>
                    <div className=''>
                        <div>
                            <h1 className='text-[16px] sm:text-[22px] md:text-2xl font-bold  text-[#420075] mb-[10px]'>WebP to JPG Converter</h1>
                            <p className='text-sm font-normal'>Easily convert your WebP images to JPEG format with our free online converter. Upload your WebP image file and download the same image as JPG</p>
                        </div>
                        <div className='h-[98px]'></div>
                        <div className='h-[200px] w-full'>
                            <label for="file-upload" class="custom-file-upload h-[200px] w-full flex items-center justify-center">
                                Drag & drop an image here or click to upload
                            </label>
                            <input id="file-upload" type="file" />
                        </div>
                        <div className='flex items-center my-[20px] min-h-[250px]'>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className='w-full lg:w-[900px] mt-[15px] m-auto'>
                        <div className='cards'>
                            {Imagecase.map((data) => {
                                return (
                                    <div className='card p-[15px] mb-[15px] bg-white border rounded-lg'>
                                        <h3 className='text-[15px] font-bold mb-[10px]  text-[#420075]'>{data.title}</h3>
                                        <div className='pl-[40px] mb-[15px]'>
                                            <h6 className='flex items-center'>
                                                <span className='h-[5px] w-[5px] mr-[6px] bg-black rounded-full'>{data.dot}</span><p className='text-sm font-normal'>{data.check}</p>
                                            </h6>
                                            <h6 className='flex items-center'>
                                                <span className='h-[5px] w-[5px] mr-[6px] bg-black rounded-full'>{data.dot1}</span><p className='text-sm font-normal'>{data.text}</p>
                                            </h6>
                                        </div>
                                        <p className='text-sm mb-[10px]'>{data.sentence}</p>
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

export default Imageconvert