import React from "react"
import Link from "next/link"
import { Outline } from "@/Components/Json/Outline"
import Footer from "@/Components/Footer/Footer"
import Header from "@/Components/Header/Header"

const Outlinetext = () => {
    return (
        <>
            <Header />
            <div className="h-[98px] my-[20px] bg-[#80808014] max-w-[700px] m-auto"></div>

            <div className="mainbg max-w-[1260px] m-auto px-[15px] py-[10px]">
                <h1 className="text-[16px] sm:text-[22px] md:text-2xl font-bold mb-[10px]  text-[#420075]">Online Text Tools</h1>
                <div className="h-[98px]"></div>
                <div>
                    <p className="text-[15px] font-bold mb-[10px]">
                        Take a look at our wide range of text tools and see all the
                        different ways you can manipulate, convert and generate new text.
                    </p>
                    <ul className="list-disc">
                        {Outline.map((text) => {
                            return (
                                <li className="flex flex-col sm:flex-row items-start sm:items-center">
                                    <span className="h-[6px] w-[6px] bg-black rounded-full mr-[10px] hidden sm:block"></span>
                                    <Link href="" className="text-[#420075] font-medium underline text-base">
                                        {text.link}
                                    </Link>
                                    <p className="text-sm font-normal">{text.description}</p>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className='flex items-center my-[20px] min-h-[250px]'>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Outlinetext
