import React from "react"
import Header from "../../Components/Header/Header"
import Moretools from "../../Components/Moretools/Moretools"
import Textgenerate from "../Textgenerate/Textgenerate"
import Textconvert from "../Textconvert/Textconvert"
import Texttools from "../Texttools/Texttools"
import Footer from "@/Components/Footer/Footer"
import Binaryconvert from "../Binaryconvert/Binaryconvert"
import Onlinecalc from "../Onlinecalc/Onlinecalc"

const Analysis = () => {

    return (
        <>
            <div>
                <Header />
                <div className="px-4">
                    <div className="h-[98px] my-[20px] bg-[#80808014] max-w-[700px] m-auto"></div>
                    <div className="lg:flex max-w-[1260px] m-auto gap-10">
                        <div className="bg-white card lg:max-w-[70%] m-auto mb-[20px]">
                            <Texttools />
                            <Textgenerate />
                            <Textconvert />
                            <Binaryconvert/>
                            <Onlinecalc/>
                        </div>
                        <div className="lg:w-[30%]">
                            <Moretools />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Analysis
