import React from 'react'
import Footer from '@/Components/Footer/Footer'
import { Morsetext } from '@/Components/Json/Morsetext'
import { Letter } from '@/Components/Json/Letter'
import { Letter_text } from '@/Components/Json/Letter_text'
import { Numberrow } from '@/Components/Json/Numberrow'
import { Number_text } from '@/Components/Json/Number_text'
import Textarea from '../Textarea/Textarea'
import Header from '@/Components/Header/Header'

const Morsecode = () => {
    return (
        <>
            <div>
                <Header />
                <div className="h-[98px] my-[20px] bg-[#80808014] max-w-[700px] m-auto"></div>

                <div className='mainbg max-w-[1260px] m-auto px-[15px] py-[10px]'>
                    <div className=''>
                        <div>
                            <h1 className='text-[16px] sm:text-[22px] md:text-2xl font-bold mb-[10px]  text-[#420075]'>Morse Code Translator & Morse Audio Player</h1>
                            <p className='text-sm font-normal'>To use the morse code translator simply enter the text on the left column and you will see that it is automatically getting translated on the right column. Likewise, if you want to decode morse code, then you can enter the morse code on the right handside of the Morse Code converter and see it get translated back to English. Not only can you convert your text into morse code you are actually able to use the audio too via the 'morse code translator audio play button'. Simply type in the text you want converting or decoding and then hit the play button and you will hear the audio morse code played.</p>
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
                            {Morsetext.map((data) => {
                                return (
                                    <div className='card p-[15px] mb-[15px] bg-white border rounded-lg'>
                                        <h3 className='text-[15px] font-bold mb-[10px]  text-[#420075]'>{data.title}</h3>
                                        <p className='text-sm mb-[10px]'>{data.sentence}</p>
                                        <p className='text-sm mb-[10px]'>{data.subtitle}</p>
                                        <p className='text-sm mb-[10px]'>{data.text}</p>
                                        <p className='text-sm mb-[10px]'>{data.textdata}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <div className='flex flex-col md:flex-row items-center gap-4'>
                            <div className='w-full md:w-[50%]'>
                                <table id="customers">
                                    <tr>
                                        <th>Letter</th>
                                        <th>Morse Code</th>
                                    </tr>
                                    {Letter.map((tabledata) => {
                                        return (
                                            <tr>
                                                <td>{tabledata.albhabet}</td>
                                                <td>{tabledata.morsecode}</td>
                                            </tr>
                                        )
                                    })}
                                </table>
                            </div>
                            <div className='w-full md:w-[50%]'>
                                <table id="customers">
                                    <tr>
                                        <th>Letter</th>
                                        <th>Morse Code</th>
                                    </tr>
                                    {Letter_text.map((table_dt) => {
                                        return (
                                            <tr>
                                                <td>{table_dt.series}</td>
                                                <td>{table_dt.mrscode}</td>
                                            </tr>
                                        )
                                    })}
                                </table>
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row items-center gap-4 mt-[15px]'>
                            <div className='w-full md:w-[50%]'>
                                <table id="customers">
                                    <tr>
                                        <th>Letter</th>
                                        <th>Morse Code</th>
                                    </tr>
                                    {Numberrow.map((table_data) => {
                                        return (
                                            <tr>
                                                <td>{table_data.number}</td>
                                                <td>{table_data.code}</td>
                                            </tr>
                                        )
                                    })}
                                </table>
                            </div>
                            <div className='w-full md:w-[50%]'>
                                <table id="customers">
                                    <tr>
                                        <th>Company</th>
                                        <th>Contact</th>
                                    </tr>
                                    {Number_text.map((tbldata) => {
                                        return (
                                            <tr>
                                                <td>{tbldata.no}</td>
                                                <td>{tbldata.nocode}</td>
                                            </tr>
                                        )
                                    })}
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Morsecode