import { Case } from "@/Components/Json/Case"
import Image from "next/image"
import Router from "next/router"
import React, { useState } from "react"

const Texttools = () => {
    const [value, setValue] = useState(Case())

    const handleClicked = (text) => {
        Router.push(text.route)
    }

    const onHandle = (value) => {
        if (value === 'textAnalise') {
            Router.push('/Texttools/Texttools')
        }
    }

    return (
        <div>
            <div className="pt-8"><div className="flex items-center mb-[20px] min-h-[250px] bg-[#80808014] max-w-[700px] m-auto">
                <div></div>
                <div></div>
            </div>
                <div className="flex flex-col">
                    <button onClick={() => onHandle('textAnalise')}
                        className="text-[#420075] text-center font-bold text-[20px] md:text-2xl m-auto pt-[15px] !mb-[30px]">
                        Text Analysis Tools
                    </button>
                    <div className="flex items-center flex-col max-w-[1100px] m-auto">
                        <ul className="flex items-center flex-wrap justify-center gap-6 navbar w-full texttool">
                            {value.map((text, i) => (
                                <li
                                    key={text.id}
                                    className="h-[170px] w-[200px] flex flex-col justify-center"
                                >
                                    <button
                                        onClick={() => handleClicked(text)}
                                        className="button spin circle rounded-full h-[85px] m-auto w-[85px] flex items-center justify-center"
                                    >
                                        <Image src={text.smalltext} className="w-[40px]"></Image>
                                    </button>
                                    <h4 className="text-center xl:text-[16px] text-sm font-semibold max-w-[150px] m-auto mt-[20px]">
                                        {text.data}
                                    </h4>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Texttools
