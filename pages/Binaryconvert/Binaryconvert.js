import React, { useState } from 'react'
import { Binarytxt } from '../../Components/Json/Binarytxt'
import Image from 'next/image'
import Router from 'next/router'

const Binaryconvert = () => {

    const [calopen, setCal] = useState(Binarytxt())
    const handleClicked = (bintext) => {
        Router.push(bintext.route)
    }
    const onHandle = (value) => {
        if (value === 'binary') {
            Router.push('/Binaryconvert/Binaryconvert')
        }
    }
    return (
        <div> <div className="flex items-center my-[20px] min-h-[250px] m-auto bg-[#80808014] max-w-[700px]">
            <div></div>
            <div></div>
        </div>
            <div className="mt-[30px] flex flex-col">
                <button onClick={() => onHandle('binary')} className="text-[#420075] font-bold text-[20px] md:text-2xl pt-[15px]  m-auto mb-[30px]">
                    Binary Convertors Tools
                </button>
                <div className="flex items-center flex-col max-w-[1100px] m-auto">
                    <ul className="flex items-center flex-wrap justify-center xl:justify-start gap-6 navbar w-full">
                        {calopen.map((bintext, id) => {
                            return (
                                <li
                                    key={bintext.id}
                                    className=" w-[200px] flex flex-col justify-center"
                                >
                                    <button
                                        onClick={() => handleClicked(bintext)}
                                        className="button spin circle rounded-full h-[85px] m-auto w-[85px] flex items-center justify-center"
                                    >
                                        <Image
                                            src={bintext.smalltext}
                                            className="w-[40px]"
                                        ></Image>
                                    </button>
                                    <h4 className="text-center text-[18px] font-semibold max-w-[140px] m-auto mt-[20px]">
                                        {bintext.more}
                                    </h4>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div></div>
    )
}

export default Binaryconvert