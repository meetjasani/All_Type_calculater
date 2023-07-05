import React, { useState } from 'react'
import Image from 'next/image'
import Router from 'next/router'
import { Convertor } from '../../Components/Json/Convertor'


const Textconvert = () => {


    const handleClicked = (cnvtext) => {
        Router.push(cnvtext.route)
    }
    const [data, setData] = useState(Convertor())

    const onHandle = (value) => {
        if (value === 'convert') {
            Router.push('/Textconvert/Textconvert')
        }
    }

    return (
        <div className="pt-3"><div className="flex items-center mb-[20px] min-h-[250px] bg-[#80808014] max-w-[700px] m-auto">
            <div></div>
            <div></div>
        </div>
            <div className="mt-[30px] flex justify-center flex-col">
                <button onClick={() => onHandle('convert')} className="text-[#420075] font-bold text-[20px] md:text-2xl pt-[15px] sm:w-[400px] m-auto  mb-[30px]">
                    Text Convertors Tools
                </button>
                <div className="flex items-center flex-col max-w-[1100px] m-auto">
                    <ul className="flex items-center flex-wrap justify-center gap-6 navbar w-full">
                        {data.map((cnvtext, id) => {
                            return (
                                <li
                                    key={cnvtext.id}
                                    className="h-[170px] w-[200px] flex flex-col justify-center"
                                >
                                    <button
                                        onClick={() => handleClicked(cnvtext)}
                                        className="button spin circle rounded-full h-[85px] m-auto w-[85px] flex items-center justify-center"
                                    >
                                        <Image
                                            src={cnvtext.smalltext}
                                            className="w-[40px]"
                                        ></Image>
                                    </button>
                                    <h4 className="text-center xl:text-[16px] text-sm font-semibold max-w-[150px] m-auto mt-[20px]">
                                        {cnvtext.more}
                                    </h4>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div></div>
    )
}

export default Textconvert