import React, { useState } from 'react'
import { Moretext } from "@/Components/Json/Moretext"
import Router from "next/router"
import Image from 'next/image'


const Textgenerate = () => {
    const [open, setOpen] = useState(Moretext())

    const handleClicked = (texts) => {
        Router.push(texts.route)
    }
    const onHandle = (value) => {
        if (value === 'texts') {
            Router.push('/Textgenerate/Textgenerate')
        }
    }
    return (
        <div className="pt-3"><div className="flex items-center mb-[20px] min-h-[250px] bg-[#80808014] max-w-[700px] m-auto">
            <div></div>
            <div></div>
        </div>
            <div className='flex flex-col'>
                <button onClick={() => onHandle('texts')} className="text-[#420075] font-bold  md:text-2xl sm:w-[400px] m-auto  pt-[15px] mb-[30px]">
                    Text Generator Tools
                </button>
                <div className="flex items-center flex-col max-w-[1100px] m-auto">
                    <ul className="flex items-center flex-wrap justify-center gap-6 navbar w-full tooltext">
                        {open.map((texts, id) => {
                            return (
                                <li
                                    key={texts.id}
                                    className="h-[170px] w-[200px] flex flex-col justify-center"
                                >
                                    <button
                                        onClick={() => handleClicked(texts)} className="button spin circle rounded-full h-[85px] m-auto w-[85px] flex items-center justify-center"
                                    >

                                        <Image
                                            src={texts.smalltext}
                                            className="w-[40px]"
                                        ></Image>

                                    </button>
                                    <h4 className="text-center xl:text-[16px] text-sm font-semibold max-w-[150px] m-auto mt-[20px]">
                                        {texts.more}
                                    </h4>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div></div>
    )
}

export default Textgenerate