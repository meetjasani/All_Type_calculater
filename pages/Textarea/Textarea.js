import React, { useState } from "react"
import Image from "next/image"
import copy from "../../Assets/Images/copy.svg"
import { useRouter } from "next/router"
import kofi from "../../Assets/Images/kofi.png"

const Textarea = () => {
    const [open, setOpen] = useState(true)
    const [text, setText] = useState("")
    const router = useRouter()
    return (
        <>
            <div className="">
                <div className="w-full m-auto md:w-[50%]">
                    <textarea
                        value={text}
                        id="w3review"
                        name="w3review"
                        placeholder="Type or paste your content here"
                        className="text-sm p-[10px] w-full min-h-[24vh] bg-[#f8eeff] focus:outline-0"
                        onChange={(e) => setText(e.target.value)}
                    ></textarea>
                </div>
                <div className="h-[98px] my-[20px] bg-[#80808014] max-w-[800px] m-auto"></div>
                <div className="flex justify-center">
                    <button onClick={() => setOpen(!open)} className="btnlogin text-white py-[10px] px-[10px] sm:px-[40px] my-[20px]">
                        Rewrite Article
                    </button>
                </div>
                <div className='flex bg-[#80808014]  max-w-[800px] m-auto items-center my-[20px] min-h-[250px]'>
                    <div></div>
                    <div></div>
                </div>
                {!open ? <>
                    <div className="w-full m-auto md:w-[50%]">
                        <div className="p-[10px] bg-[#ffede4] min-h-[20vh] h-full">
                            {router.pathname === "/Smalltext/Smalltext" ? (
                                <>
                                    <h3 className="mb-[10px] text-[19px] font-bold">Small Caps</h3>
                                    <p className="uppercase mb-[10px] text-xs font-normal flex items-center break-all">
                                        {text === "" && "Type or paste your content here"}{text}
                                        <Image src={copy} className="ml-2 w-[10px]"></Image>
                                    </p>
                                    <h3 className="mb-[10px] text-[19px] font-bold">Superscript</h3>
                                    <p className="mb-[10px] text-[11px] font-normal flex items-center break-all">
                                        {text === "" && "Type or paste your content here"}{text}
                                        <Image src={copy} className="ml-2 w-[10px]"></Image>
                                    </p>
                                </>
                            ) : null}
                            {router.pathname === "/Widetext/Widetext" ? (
                                <>
                                    <h3 className="mb-[10px] text-[16px] font-normal tracking-[10px] break-all">
                                        {text === "" && "Type or paste your content here"}{text}
                                    </h3>
                                </>
                            ) : null}
                            {router.pathname === "/Strikethrough/Strikethrough" ? (
                                <>
                                    <h3 className="mb-[10px] text-[14px] line-through font-normal break-all">
                                        {text === "" && "Type or paste your content here"}{text}
                                    </h3>
                                </>
                            ) : null}
                            {router.pathname === "/Reverse/Reverse" ? (
                                <>
                                    <bdo className="mb-[10px] text-[14px] font-normal break-all" dir="rtl">
                                        {text === "" && "Type or paste your content here"}{text}
                                    </bdo>
                                </>
                            ) : null}
                            {router.pathname === "/Upside/Upside" ? (
                                <>
                                    <h3 className="mb-[10px] text-[14px] font-normal scale-x-[-1] scale-y-[-1] text-end break-all">
                                        {text === "" && "Type or paste your content here"}{text}
                                    </h3>
                                </>
                            ) : null}
                            {router.pathname === "/Titlecase/Titlecase" ? (
                                <>
                                    <h3 className="mb-[10px] text-[14px] font-normal capitalize break-all">
                                        {text === "" && "Type or paste your content here"}{text}
                                    </h3>
                                </>
                            ) : null}
                            {router.pathname === "/Boldcase/Boldcase" ? (
                                <>
                                    <h3 className="mb-[10px] text-[14px] font-bold break-all">
                                        {text === "" && "Type or paste your content here"}{text}
                                    </h3>
                                </>
                            ) : null}
                            {router.pathname === "/Italicetext/Italicetext" ? (
                                <>
                                    <h3 className="mb-[10px] text-[14px] font-normal italic break-all">
                                        {text === "" && "Type or paste your content here"}{text}
                                    </h3>
                                </>
                            ) : null}
                            {router.pathname === "/Underline/Underline" ? (
                                <>
                                    <h3 className="mb-[10px] text-[14px] font-normal underline break-all">
                                        {text === "" && "Type or paste your content here"}{text}
                                    </h3>
                                </>
                            ) : null}
                            {router.pathname === "/Mirrortext/Mirrortext" ? (
                                <>
                                    <h3 className="mb-[10px] text-[14px] font-normal scale-x-[-1] text-end break-all">
                                        {text === "" && "Type or paste your content here"}{text}
                                    </h3>
                                </>
                            ) : null}
                        </div>
                    </div>
                </> : ""

                }
                {/* <div className='w-full'>
                    <div className='flex sm:items-center gap-1 justify-center mt-[10px] flex-col sm:flex-row items-start'>
                        <button className=' border  px-[5px] py-[5px] text-sm font-bold text-white font-trebuchet bg-[#e36843] transition-all  text-start'>Download Text</button>
                        <button className='border  px-[5px] py-[5px] text-sm font-bold text-white font-trebuchet bg-[#e36843] transition-all  text-start'>Copy to Clipboard</button>
                        <button className='flex items-center btnlogin  text-white py-[5px] px-2 text-sm font-bold'><Image src={kofi} className="h-4 w-auto mr-1"></Image> Buy me a Coffee</button>
                    </div>
                </div> */}
                <div className='flex flex-col md:flex-row gap-2 justify-center mt-3'>
                    <div className='w-full sm:w-[50%] pt-[10px] sm:pt-0'>
                        <div className='flex flex-wrap sm:items-center justify-center'>
                            <p className='text-sm text-[#111111] font-normal mr-[3px]'>Character Count:<span>0</span></p>
                            <p className='text-sm text-[#111111] font-normal mr-[3px]'>| Word Count:<span>0</span></p>
                            <p className='text-sm text-[#111111] font-normal'>| Line Count:<span>0</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Textarea
