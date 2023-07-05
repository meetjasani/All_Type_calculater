import React from "react"
import Footer from "@/Components/Footer/Footer"
import { Notepad } from "@/Components/Json/Notepad"
import Header from "@/Components/Header/Header"

const Notepadoutline = () => {
    return (
        <>
            <div>
                <Header />
                <div className="h-[98px] my-[20px] bg-[#80808014] max-w-[700px] m-auto"></div>

                <div className="mainbg max-w-[1260px] m-auto px-[15px] py-[10px]">
                    <div className="">
                        <div>
                            <h1 className=" text-[#420075] text-[16px] sm:text-[22px] md:text-2xl font-bold mb-[10px]">
                                Free Online Notepad
                            </h1>
                            <p className="text-sm font-normal">
                                Use the free quick online notepad by simply entering your text
                                and notes. The way this online notepad works, it will ensure
                                that it is saved by the browser that you are operating on.
                            </p>
                        </div>
                        <div className="h-[280px]"></div>
                        <textarea
                            id="w3review"
                            name="w3review"
                            placeholder="Type or paste your content here"
                            className="text-sm p-[10px] w-full min-h-[24vh] bg-[#f8eeff] h-[190px] focus:outline-0"
                        ></textarea>
                        <div className="flex flex-col md:flex-row justify-between">
                            <div className="">
                                <div className="flex items-center gap-1">
                                    <button className="border  px-[5px] py-[5px] text-sm font-bold text-[#420075] bg-[#f8eeff]  font-trebuchet transition-all  text-start">
                                        Download Text
                                    </button>
                                    <button className="border  px-[5px] py-[5px] text-sm font-bold text-[#420075] bg-[#f8eeff]  font-trebuchet transition-all  text-start">
                                        Copy to Clipboard
                                    </button>
                                    <button className="border  px-[5px] py-[5px] text-sm font-bold text-[#420075] bg-[#f8eeff]  font-trebuchet  transition-all  text-start">
                                        Print
                                    </button>
                                </div>
                            </div>
                            <div className="">
                                <div className="flex items-center mb-[10px]]">
                                    <p className="text-sm text-[#111111] font-normal mr-[3px]">
                                        Character Count:<span>0</span>
                                    </p>
                                    <p className="text-sm text-[#111111] font-normal mr-[3px]">
                                        | Word Count:<span>0</span>
                                    </p>
                                    <p className="text-sm text-[#111111] font-normal">
                                        | Line Count:<span>0</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center my-[20px] min-h-[250px]">
                            <div></div>
                            <div></div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-3 items-center justify-between">
                            <div className="w-full md:w-[50%]">
                                <h3 className="text-[15px] font-bold mb-[10px]">
                                    How does this work?
                                </h3>
                                <p className="text-sm mb-[10px]">
                                    All data is stored in your browser's temporary files
                                    automatically and is never sent to us. If you come back to the
                                    site again with the same browser, it'll be here waiting for
                                    you. It's a simple alternative to Evernote or OneNote which
                                    require you to create accounts.
                                </p>
                            </div>
                            <div className="w-full md:w-[50%]">
                                <h3 className="text-[15px] font-bold mb-[10px]">
                                    Where did my notes go?
                                </h3>
                                <p className="text-sm mb-[10px]">
                                    If your notes have disappeared, you may have cleared your
                                    browser's temporary files. If you do this regularly, be sure
                                    to uncheck the box to clear offline web site data to keep your
                                    notes safe.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-[900px] mt-[15px] m-auto">
                        <div className="flex gap-3 flex-wrap items-center justify-center mb-[15px]">
                            {Notepad.map((lang) => {
                                return (
                                    <div>
                                        <button className="hover:text-[#335ef7] border  px-[5px] py-[2px] text-sm font-bold text-[#420075] bg-[#f8eeff]  transition-all  text-start">
                                            {lang.datalang}
                                        </button>
                                    </div>

                                )
                            })}
                        </div>
                        <p className="text-sm max-w-[800px] text-center">
                            Onlinenotepad.net is a completely free online notepad tool that
                            you can use right here in your web browser. You are able to
                            create a whole range of notes, ideas, and to do lists that
                            you’re able to simply copy and paste the text where you would
                            like. This is a simple to use minimalistic online notepad that
                            also comes with an autosave feature - allowing you to
                            essentially store your text (you can see more about just how
                            that works in the ‘how does this work’ section. It essentially
                            allows you to come back and visit your text notes anytime you
                            want provided you use the same browser and device and haven’t
                            cleared cookies.
                        </p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Notepadoutline
