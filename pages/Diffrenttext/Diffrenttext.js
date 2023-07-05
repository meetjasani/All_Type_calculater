import React from 'react'
import kofi from "../../Assets/Images/kofi.png"
import Image from 'next/image'
import { Usertext } from '../../Components/Json/Usertext'


const Diffrenttext = () => {
    return (
        <div className=''>
            <div className='px-[15px] py-[10px]'>
                <div>
                    <h1 className='text-[16px] text-[#420075] sm:text-[22px] md:text-2xl font-bold mb-[10px]'>Accidentally left the caps lock on and typed something, but can't be bothered to start again and retype it all?</h1>
                    <p className='text-sm font-normal'>Simply enter your text and choose the case you want to convert it to.</p>
                </div>
                <div className='h-[98px]'></div>
                <div>
                    <textarea id="w3review" name="w3review" placeholder='Type or paste your content here' className='text-sm bg-[#f8eeff] p-[10px] w-full  h-[200px] focus:outline-0'>
                    </textarea>
                </div>
                <div className='mb-[5px]'>
                    <ul className='flex flex-wrap items-center gap-3 mb-[5px]'>
                        {Usertext.map((data) => {
                            return (
                                <li><button className='border px-[5px] py-[5px] text-sm font-bold text-[#420075] bg-[#f8eeff] transition-all  text-start'>{data.text}</button></li>
                            )
                        })}
                    </ul>
                </div>
                <div className='flex items-center mb-[10px]]'>
                    <p className='text-sm text-[#111111] font-normal mr-[3px]'>Character Count:<span>0</span></p>
                    <p className='text-sm text-[#111111] font-normal mr-[3px]'>| Word Count:<span>0</span></p>
                    <p className='text-sm text-[#111111] font-normal'>| Line Count:<span>0</span></p>
                </div>
                <div className='flex items-center my-[20px] min-h-[250px]'>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Diffrenttext