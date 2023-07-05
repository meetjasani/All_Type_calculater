import { CalculatorText } from '@/Components/Json/Calculator'
import Image from 'next/image'
import { Router, useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const Onlinecalc = () => {
    const [calc, setCalc] = useState(CalculatorText)
    const router = useRouter()

    const handleClicked4 = (textonline) => {
        router.push(textonline.route)
    }

    return (
        <div>  <div className="flex items-center my-[20px] min-h-[250px] m-auto bg-[#80808014] max-w-[700px]">
            <div></div>
            <div></div>
        </div>
            <div className="mt-[30px]">
                <button className="text-[#420075] font-bold text-[20px] md:text-2xl pt-[1flex justify-center w-full mb-[30px]">
                    Online Calculators
                </button>
                <div className="flex items-center flex-col max-w-[1100px] m-auto">
                    <ul className="flex items-center flex-wrap justify-center xl:justify-start gap-6 navbar w-full">
                        {calc.map((textonline, id) => {
                            return (
                                <li
                                    key={textonline.id}
                                    className="h-[170px] w-[200px] flex flex-col justify-center"
                                >
                                    <button
                                        onClick={() => handleClicked4(textonline)}
                                        className="button spin circle rounded-full h-[85px] m-auto w-[85px] flex items-center justify-center"
                                    >

                                        <Image
                                            src={textonline.smalltext}
                                            className="w-[40px] h-[40px]"
                                        ></Image>
                                    </button>
                                    <h4 className="text-center text-[16px] font-semibold  m-auto mt-[20px]">
                                        {textonline.more}
                                    </h4>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>  </div>
    )
}

export default Onlinecalc