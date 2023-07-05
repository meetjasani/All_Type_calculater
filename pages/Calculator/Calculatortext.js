import React, { useState } from 'react'
import Image from 'next/image'
import Router from 'next/router'
import { Calculatortext } from '@/Components/Json/Calculator'

const Calculator = () => {

    const [calopen, setCal] = useState(Calculatortext())
    const handleClicked = (bintext) => {
        Router.push(bintext.route)
    }
    const onHandle = (value) => {
        if (value === 'calc') {
            Router.push('/Calculator/Calculatortext')
        }
    }
    return (
        <div>  <div> <div className="flex items-center my-[20px] min-h-[250px] m-auto bg-[#80808014] max-w-[700px]">
            <div></div>
            <div></div>
        </div>
            <div className="mt-[30px] flex flex-col">
                <button onClick={() => onHandle('calc')} className="text-[#e27235] font-bold text-[20px] md:text-4xl pt-[15px] w-[320px] m-auto mb-[30px]">
                    Online Calculators
                </button>
                <div className="flex items-center flex-col max-w-[1100px] m-auto">
                    <ul className="flex items-center flex-wrap justify-center xl:justify-start gap-6 navbar w-full">
                        {calopen.map((calctext, id) => {
                            return (
                                <li
                                    key={calctext.id}
                                    className="h-[170px] w-[200px] flex flex-col justify-center"
                                >
                                    <button
                                        onClick={() => handleClicked(calctext)}
                                        className="button spin circle rounded-full h-[85px] m-auto w-[85px] flex items-center justify-center"
                                    >
                                        <Image
                                            src={calctext.smalltext}
                                            className="w-[40px]"
                                        ></Image>
                                    </button>
                                    <h4 className="text-center text-[16px] font-semibold max-w-[140px] m-auto mt-[20px]">
                                        {calctext.more}
                                    </h4>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div></div></div>
    )
}

export default Calculator