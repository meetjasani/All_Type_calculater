import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import clear_txt from '../../Assets/Images/clear_txt.svg'
import upload_file from '../../Assets/Images/upload_file.svg'
import Footer from '@/Components/Footer/Footer'
import Header from '@/Components/Header/Header'

const Texttoasacii = () => {
    const inputRef = useRef();
    const [text, setText] = useState('')
    const [file, setFile] = useState('')
    const [asciiAns, setAsciiAns] = useState('')

    const handleChange = (e) => {
        e.preventDefault()
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.onload = function(e) {
            setFile(e.target.result)
            if(e.target.result === ''){
                inputRef.current.value = ""
                toast.error('No content found');
            }
            setText('')
        };
        reader.readAsText(file);
    }

    const handleSample = () => {
        inputRef.current.value = "";
        setText('That is sample text')
        setFile('')
    }

    const handleClear = () => {
        inputRef.current.value = "";
        setText('')
        setFile('')
    }

    const textToAscii = (e) => {
        e.preventDefault()
        let charCodeArr = [];
        let fileCharCode = []

        if(text !== ''){
            for(let i = 0; i < text.length; i++){
                let code = text.charCodeAt(i);
                charCodeArr.push(code);
                setAsciiAns(charCodeArr.join(" "))
            }
        }else if (file !== '') {
            for(let i = 0; i < file.length; i++){
                let code = file.charCodeAt(i);
                fileCharCode.push(code);
            }
            setAsciiAns(fileCharCode.join(" "))
        }else {
            toast.error('No Text found! Please add some Text');
        }
    }
    return (
        <>
            <Header />
            <ToastContainer theme="colored"/>
            <div className='mainbg max-w-[1260px] m-auto  py-[10px]'>
                <div className='h-[98px] my-[20px] bg-[#80808014] max-w-[700px] m-auto'>

                </div>
                <div className='mainbg max-w-[1260px] m-auto px-[15px] py-[10px]'>
                    <div>
                        <div className='text-center'>
                            <h1 className='text-[16px] sm:text-[22px] text-[#420075] md:text-2xl font-bold mb-[10px]'>Text To ASCII</h1>
                            <p className='py-[10px] text-sm md:w-[700px] w-[100%] mx-auto'>Translate Text into ASCII numbers format. For example, you got a Text “a” ( just enter this char in the tool it will convert to ASCII ) and output will be a number like “097”. Enter any English text, of a single character, word, or a long string to convert into ASCII code instantly.</p>
                        </div>
                        <div className='h-[98px] my-[20px] bg-[#80808014] max-w-[700px] m-auto'></div>
                        <div className='text-center md:flex items-center md:flex-wrap justify-center max-w-[700px] m-auto'>
                            <p className=' text-[#420075] md:w-[73%] w-[100%] md:pl-[50px] pl-[0px] text-[16px] font-[600]'>Enter your Text:</p>
                            <button className='bg-[#420075] text-[14px] px-[10px] md:mt-[0px] mt-[10px] py-[5px] text-[#fff] rounded-md'  onClick={handleSample}>Sample</button>
                        </div>
                        <div className='mt-[20px] relative'>
                            <div className='w-full  m-auto md:w-[50%] '>
                                <textarea name="" id="" cols="30" rows="10" placeholder='Paste Your Text Here' className='relative text-sm p-[10px] w-full min-h-[24vh] bg-[#f8eeff] focus:outline-0' 
                                    value={file === '' ? text : file}
                                    onChange={(e) => setText(e.target.value)}
                                />
                            </div>
                            <div className='  flex items-center justify-between w-full m-auto md:w-[50%]'>
                                <div className='absolute bottom-0 md:left-[26%] left-[2%]'>
                                    <label className="label_upload d-flex align-items-center text-black m-0 pr-2 cp" htmlFor="fileUpload">
                                        <input className="d-none" id="fileUpload" accept=".txt" name="fileUpload" type="file" 
                                            ref={inputRef}
                                            onChange={(e) => handleChange(e)}
                                        />
                                        <div className="upload_btns upload_file border-0"></div>
                                        <span className="d-block flex gap-[6px] bg-[#420075] text-[14px] px-[10px] py-[5px] text-[#fff] rounded-md" id="file_upload_status"> <Image src={upload_file} alt="" /> Upload File</span>
                                    </label>
                                </div>
                                <div className='absolute md:right-[26%] right-[2%] bottom-6'>
                                    <Image src={clear_txt} alt="" onClick={handleClear} />
                                </div>
                            </div>
                        </div>
                        <div className='h-[98px] my-[20px] bg-[#80808014] max-w-[700px] m-auto'></div>
                        <div className='flex justify-center'>
                            <button className='btnlogin text-white py-[10px] px-[10px] sm:px-[40px] my-[20px]' onClick={textToAscii}>Convert To ASCII</button>
                        </div>
                        <div className='flex bg-[#80808014]  max-w-[800px] m-auto my-[20px] min-h-[250px]'>{asciiAns}</div>
                        <div className=' w-full lg:w-[900px] mt-[15px] m-auto card p-[15px] mb-[15px] bg-white border rounded-lg'>
                            <div>
                                <h3 className='text-[15px] font-bold mb-[10px] text-[#420075]'>About Text To ASCII: Character Encoding in ASCII Standard</h3>
                                <div className='my-[14px] pl-[40px]'></div>
                                <p className='text-sm mb-[10px]'>It is well known that computers are generally programmed to interact with numbers and codes. So, if you want to interact with your computer or to program some instructions, it might require that you understand how to convert String to ASCII number codes. That is, ASCII, which is the short form of the American Standard Code for Information Interchange, Text in a computer is stored as numbers after encoding them into ASCII numbers. Numbers are a special code format that computers use in storing normal text. Thus, every English letter has its own ASCII code in number format. ASCII codes are encoding text numbers that are assigned to the 256 (128 extended sets of ASCII code) characters entailed in the ASCII standard. Work on ASCII started in October 1960 after the meeting of the <a href="#" className='text-[#420075] font-[600] '>American National Standards Institute</a> (ANSI) and in 1963 the first version of ASCII standard was introduced. In the start, It uses a 7-bit encoding scheme that represents 128 different numbers.</p>
                                <p className='text-sm py-[10px]'>Later it was replaced with the UTF-8 encoding scheme until 2007. It was the most commonly used character encoding scheme on the World Wide Web.</p>
                            </div>
                            <div>
                                <h3 className='text-[15px] font-bold mb-[10px] text-[#420075]'>The Need For Text To ASCII Code Translator</h3>
                                <p className='text-sm mb-[10px]'>Note that all text and characters on your computer applications or software are actually stored as ASCII codes. You might thus be required for one reason or the other, to understand how to translate String to ASCII in order to explore or sort through the information stored. ASCII codes serve as the equivalent of characters, and they are the data that can be interpreted by the computer. Usually, computer experts, programmers and all who work with computer languages have a fairly good knowledge of these codes.</p>
                                <div className='py-[10px]'></div>
                                <p className='text-sm'>However, it would be impossible to memorize or know what each letter or character in the text represents in ASCII. For instance, the character A is represented as 065 in ASCII, while a lowercase “a” is represented as “097”. Many character encoding schemes make use of the ASCII format. Obviously, ASCII is still relevant today, The manual generation of ASCII characters using Text to ASCII conversion table is a quite long process, to do it fast use the <a href="#" className='text-[#420075] font-[600] underline'>text to ASCII</a> converter online for some specified purposes.</p>
                            </div>
                            <div>
                                <h3 className='text-[15px] font-bold m-0 py-[10px] text-[#420075]'>Try The Best ASCII Converter Online</h3>
                                <div className='my-[0px] pl-[40px]'></div>
                                <p className='text-sm mb-[10px]'>Fortunately, there are ways you can convert text to ASCII code using online tools that are readily available for use by anyone. However, you would want to ensure that your task is done correctly without the unnecessary details for online app registration or adverts. Well, you don’t need to worry, because, at Small SEO Tools, our text to ASCII online converter is equipped to get your conversion tasks done efficiently, promptly and with ease.</p>
                            </div>
                            <div>
                                <h3 className='text-[15px] font-bold mb-[10px] text-[#420075]'>How To Use Our Text TO ASCII Converter</h3>
                                <p className='text-sm mb-[10px] m-0'>Whenever you use our ASCII Generator, you need not wait through any long process, but you simply get your results instantly. Also, you can convert a string, text, or any word to ASCII characters and also get the correct output as well.</p>
                                <div className='py-[10px]'></div>
                                <p className='text-sm'>Of course, a String to ASCII character codes that are guaranteed to not miss out on any detail is the real deal.</p>
                                <p className='text-sm'>Thus, This is how to use our super-efficient online ASCII text generator, simply follow these steps:</p>

                                <div className='pt-[16px]'>
                                    <ul className='pl-[40px] list-disc'>
                                        <li className='text-sm py-[3px]'><span className='text-[#505050] font-[600]'>Step 1:</span> Got to <a href="#" className='text-[#420075] font-[600] underline'>https://smallseotools.com/text-to-ascii/</a></li>
                                        <li className='text-sm py-[3px]'><span className='text-[#505050] font-[600]'>Step 2:</span> Input or paste the text in the space indicated</li>
                                        <li className='text-sm py-[3px]'><span className='text'>Step 3:</span> Click on “Process”</li>
                                        <li className='text-sm py-[3px]'>The output is immediately given in the equivalent ASCII characters</li>
                                    </ul>
                                </div>
                                <p className='text-sm py-[12px]'>Obviously, these easy steps can be understood by anybody. You need not be a computer guru to operate text to ASCII converter. But it is equally efficient if you’re an expert too. Try out our tool today and get your text in ASCII format.</p>
                            </div>
                            <div>
                                <h3 className='text-[15px] font-bold mb-[10px] text-[#420075]'>Where ASCII Characters Used and Why?</h3>
                                <div className='my-[14px] pl-[40px]'></div>
                                <p className='text-sm mb-[10px]'>Ascii code is used in communication devices like in the keyboard to identify characters and numerals basically to convert word to ASCII format. ASCII Characters also famously used in Ascii Art, images are used to draw using symbols. Ascii was the most used character encoding on the internet until 2007 but later with the expansion of computer needs, it was replaced with UTF-8. Earlier in PC, it was used only for the English language. But Global companies, like Facebook and Google, said their users use more than one language to communicate on the internet and devices.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Texttoasacii