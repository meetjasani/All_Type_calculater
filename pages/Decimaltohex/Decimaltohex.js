import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import clear_txt from '../../Assets/Images/clear_txt.svg'
import upload_file from '../../Assets/Images/upload_file.svg'
import Footer from '@/Components/Footer/Footer'
import Header from '@/Components/Header/Header'

const sampleDToH = '84 104 97 116 32 105 115 32 115 97 109 112 108 101 32 116 101 120 116'
const Decimaltohex = () => {
    const inputRef = useRef(); 
    const [text, setText] = useState('')
    const [ans, setAns] = useState('')
    const [file, setFile] = useState('')

    const handleChange = (e) => {
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
        reader.readAsBinaryString(file);
    }

    const handleSample = () => {
        inputRef.current.value = "";
        setText(sampleDToH)
        setFile('')
    }

    const handleClear = () => {
        inputRef.current.value = "";
        setText('')
        setFile('')
    }

    const decToHex = (e) => {
        e.preventDefault()

        if(text !== ''){
            const isValidDecimal = /^\d+( \d+)*$/.test(text);
            const isValidBinary = /^[01 ]+$/.test(file);
            if (isValidDecimal || isValidBinary) {
                const decToH = text.split(' ').map(i => 
                    Math.floor(i).toString(16)).join(' ');
                setAns(decToH)
            }else {
                toast.error('Please Add Only Decimal');
            }
        }else if (file !== '') {
            const isValidDecimal = /^\d+( \d+)*$/.test(text);
            const isValidBinary = /^[01 ]+$/.test(file);
            if (isValidDecimal || isValidBinary) {
                const fileDecToH = file.split(' ').map(i => 
                    Math.floor(i).toString(16)).join(' ');
                setAns(fileDecToH)
            }else {
                toast.error('Please Add Only Decimal');
            }
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
                            <h1 className='text-[16px] sm:text-[22px] text-[#420075] md:text-2xl font-bold mb-[10px]'>Decimal To HEX</h1>
                        </div>
                        <div className='h-[98px] my-[20px] bg-[#80808014] max-w-[700px] m-auto'></div>
                        <div className='text-center md:flex items-center md:flex-wrap justify-center max-w-[700px] m-auto'>
                            <p className=' text-[#420075] md:w-[73%] w-[100%] md:pl-[50px] pl-[0px] text-[16px] font-[600]'>Enter your decimal numbers with space:</p>
                            <button className='bg-[#420075] text-[14px] px-[10px] md:mt-[0px] mt-[10px] py-[5px] text-[#fff] rounded-md' onClick={handleSample}>Sample</button>
                        </div>
                        <div className='mt-[20px] relative'>
                            <div className='w-full  m-auto md:w-[50%] '>
                                <textarea name="" id="" cols="30" rows="10" placeholder='Paste Your Decimal Here' className='relative text-sm p-[10px] w-full min-h-[24vh] bg-[#f8eeff] focus:outline-0' 
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
                                    <Image src={clear_txt} alt="" onClick={handleClear}/>
                                </div>
                            </div>
                        </div>
                        <div className='h-[98px] my-[20px] bg-[#80808014] max-w-[700px] m-auto'></div>
                        <div className='flex justify-center'>
                            <button className='btnlogin text-white py-[10px] px-[10px] sm:px-[40px] my-[20px]' onClick={decToHex}>Convert To Hex</button>
                        </div>
                        <div className='flex bg-[#80808014]  max-w-[800px] m-auto my-[20px] min-h-[250px]'>{ans}</div>
                        <div className=' w-full lg:w-[900px] mt-[15px] m-auto card p-[15px] mb-[15px] bg-white border rounded-lg'>
                            <div>
                                <h3 className='text-[15px] font-bold mb-[10px] text-[#420075]'>Converting Decimal To Hex With Proficiency</h3>
                                <div className='my-[14px] pl-[40px]'></div>
                                <p className='text-sm mb-[10px]'>The first thing you need to know is that the decimal numbers have base 10 and the digits range from 0 to 9. In fact, any amount can be decimal if it has base 10, and it is vital for people who are working in the field of information technology. If we talk about the decimal system in terms of mathematics, then decimal numbers are placed according to their value.</p>
                                <p className='text-sm py-[10px]'>For example, in 2.01 the integer is written on the left side of the decimal point, and the fractional numbers are added to the right. The decimal numbers system has a radix of ten, and all the digits are signified within powers of ten.</p>
                                <p className='text-sm pt-[10px]'>Decimal and hexadecimal are similar, and if we talk about hexadecimal then hex is a number system with the base 16 and uses digits from 0 to 9 and letter A to F. Also, it’s quite beneficial when it comes to computing the reason is each figure can represent four bits. Whereas the decimal number system is for performing arithmetic calculations in computers.</p>
                                <p className='text-sm py-[10px]'>The numbers we use in our everyday life are also decimal numbers where a number 10 is made up of two decimal numbers and so on. Numbers can be reused as many times as required which is why there is no end to these digits.</p>
                                <p className='text-sm py-[10px]'>With our <a href="#" className='text-[#420075] font-[600] underline'>Decimal to Hex</a> Converter, you can convert all the decimal values without consulting the hex conversion chart and formulas. It doesn’t take much time but still consulting a whole list of numbers can really take a lot of your time. The colors used in the content of the web basically are represented as a combination of six hex digits. For example, hex for white color would be FFFFFF, and for black, it is 000000.</p>
                            </div>
                            <div>
                                <h3 className='text-[15px] font-bold py-[10px] text-[#420075]'>The Need For Text To ASCII Code Translator</h3>
                                <p className='text-sm mb-[10px]'>Note that all text and characters on your computer applications or software are actually stored as ASCII codes. You might thus be required for one reason or the other, to understand how to translate String to ASCII in order to explore or sort through the information stored. ASCII codes serve as the equivalent of characters, and they are the data that can be interpreted by the computer. Usually, computer experts, programmers and all who work with computer languages have a fairly good knowledge of these codes.</p>
                                <div className='py-[10px]'></div>
                                <p className='text-sm'>However, it would be impossible to memorize or know what each letter or character in the text represents in ASCII. For instance, the character A is represented as 065 in ASCII, while a lowercase “a” is represented as “097”. Many character encoding schemes make use of the ASCII format. Obviously, ASCII is still relevant today, The manual generation of ASCII characters using Text to ASCII conversion table is a quite long process, to do it fast use the <a href="#" className='text-[#420075] font-[600] underline'>text to ASCII</a> converter online for some specified purposes.</p>
                            </div>
                            <div>
                                <h3 className='text-[15px] font-bold py-[10px] text-[#420075]'>Other Number Systems In Contrast with Hexadecimal</h3>
                                <p className='text-sm mb-[10px] m-0'>The hexadecimal numbers are more convenient when representing binary values in a computer system; the reason is they lessen the abundance of digits because one hex digit is equal to four binary digits.</p>
                                <div className='py-[10px]'></div>
                                <p className='text-sm'>It is used widely when it comes to computer languages because every hex value has a predefined function in the programming languages. Hexadecimal numbers are also used for, defining locations in the memory, to view the error messages (by specifying the memory location of that error), and for representing MAC addresses. The most common benefits of converting or using hex values are:</p>
                                <div className='pt-[16px]'>
                                    <ul className='pl-[40px] list-disc'>
                                        <li className='text-sm py-[3px]'>It’s quite succinct, and while representing numbers of binary and decimal, it occupies less space and allows you to save more data.</li>
                                        <li className='text-sm py-[3px]'>Those large binary numbers can easily be transformed to hex for few digits. The conversion is simple and requires a few steps when done manually, but can occupy a lot of time when a file is large.</li>
                                        <li className='text-sm py-[3px]'>As people like grouping stuff together for better interpretation, a compilation of binary numbers in Hex makes it easier to understand, read, and write. Writing fewer digits also lessens the probability of making errors.</li>
                                    </ul>
                                </div>
                                <p className='text-sm py-[12px]'>The decimal number system is the right choice when you need exact values in mathematical operations because “whole” numbers don’t provide us with such insight. For example, there are many chemicals that need to be weighed in decimal numbers before being mixed, and if the right quantity is not incorporated, then you might not get your desired results. The values that we are saving in our computers today are stored in number systems, where each pixel of the picture or fragment of the data is assigned a unique value.</p>
                            </div>
                            <div>
                                <h3 className='text-[15px] font-bold py-[10px] text-[#420075]'>How To Use Decimal To Hexadecimal Converter Online</h3>
                                <p className='text-sm'>Conversion with decimal to hex calculator doesn’t require much of your time. If you try getting the figures manually then without a doubt, it will demand a lot of concentration and effort.</p>
                                <p className='text-sm py-[16px]'>Mathematical problems aren’t too complicated which is why they are easier to transform, but computational problems are quite compound. Our decimal to hexadecimal method doesn’t require any extra processing power and is supported by all the operating systems.</p>
                                <p className='text-sm'>You can convert from decimal to hexadecimal using our <a href="#" className='text-[#420075] font-[600] underline'>Decimal Converter</a> by following the below-given steps:</p>
                            </div>
                            <div className='pl-[40px] py-[20px] pb-[40px]'>
                                <p className='flex text-sm'><span className='pr-[10px]'>1.</span> After reaching the page of Decimal to Hex online calculator, you will find a large text field with the title “Enter your decimal numbers with space or comma”, this is where you can copy your decimal numbers or write them if you can, for conversion. The example below will show you a demonstration of the tool:</p>
                                <p className='flex py-[20px] text-sm'><span className='pr-[10px]'>2</span>When you are done entering your decimal numbers, you can press the “Process” button for instant results as shown in the picture below. Which you can copy by striking the Copy to clipboard button and paste in your desired location.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Decimaltohex