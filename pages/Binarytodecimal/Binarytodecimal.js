import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import clear_txt from '../../Assets/Images/clear_txt.svg'
import upload_file from '../../Assets/Images/upload_file.svg'
import Footer from '@/Components/Footer/Footer'
import Header from '@/Components/Header/Header'

const sampleBToD = '01010100 01101000 01100001 01110100 0100000 01101001 01110011 0100000 01110011 01100001 01101101 01110000 01101100 01100101 0100000 01110100 01100101 01111000 01110100'
const Binarytodecimal = () => {
    const inputRef = useRef()
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
        setText(sampleBToD)
        setFile('')
    }
  
    const handleClear = () => {
        inputRef.current.value = "";
        setText('')
        setFile('')
    }

    const binaryToDec = (e) => {
        e.preventDefault()
        if(text !== ''){
            const isValidBinary = /^[01 ]+$/.test(text);
            if (isValidBinary) {
                const decimal = text
                    .split(" ")
                    .map((val) =>
                        val
                        .split("")
                        .reverse()
                        .reduce((ans, num, index) => (ans += num * Math.pow(2, index)), 0)
                    )
                    .join(" ");
                setAns(decimal)
            }else {
                toast.error('Please Add Only Binary');
            }
        }else if (file !== '') {
            const isValidBinary = /^[01 ]+$/.test(file);
            if (isValidBinary) {
                const fileDecimal = file.trim()
                    .split(" ")
                    .map((val) =>
                        val
                        .split("")
                        .reverse()
                        .reduce((ans, num, index) => (ans += num * Math.pow(2, index)), 0)
                    )
                    .join(" ");
                    setAns(fileDecimal)
            }else {
                toast.error('Please Add Only Binary');
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
                            <h1 className='text-[16px] sm:text-[22px] text-[#420075] md:text-2xl font-bold mb-[10px]'>Binary To Decimal</h1>
                        </div>
                        <div className='h-[98px] my-[20px] bg-[#80808014] max-w-[700px] m-auto'></div>
                        <div className='text-center md:flex items-center md:flex-wrap justify-center max-w-[700px] m-auto'>
                            <p className=' text-[#420075] md:w-[73%] w-[100%] md:pl-[50px] pl-[0px] text-[16px] font-[600]'>Enter your each binary numbers with space</p>
                            <button className='bg-[#420075] text-[14px] px-[10px] md:pt-[0px] mt-[10px] py-[5px] text-[#fff] rounded-md' onClick={handleSample}>Sample</button>
                        </div>
                        <div className='mt-[20px] relative'>
                            <div className='w-full  m-auto md:w-[50%] '>
                                <textarea name="" id="" cols="30" rows="10" placeholder='Paste Your Binary Here' className='relative text-sm p-[10px] w-full min-h-[24vh] bg-[#f8eeff] focus:outline-0' 
                                    value={file === '' ? text : file}
                                    onChange={(e) => setText(e.target.value)}
                                />
                            </div>
                            <div className='  flex items-center justify-between w-full m-auto md:w-[50%]'>
                                <div className='absolute bottom-0 md:left-[26%] left-[2%]'>
                                    <label className="label_upload d-flex align-items-center text-black m-0 pr-2 cp" htmlFor="fileUpload">
                                        <input className="d-none" id="fileUpload" accept=".txt,.doc,.docx" name="fileUpload" type="file" 
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
                            <button className='btnlogin text-white py-[10px] px-[10px] sm:px-[40px] my-[20px]' onClick={binaryToDec}>Convert To Decimal</button>
                        </div>
                        <div className='flex bg-[#80808014]  max-w-[800px] m-auto my-[20px] min-h-[250px]'>{ans}</div>
                        <div className=' w-full lg:w-[900px] mt-[15px] m-auto card p-[15px] mb-[15px] bg-white border rounded-lg'>
                            <div>
                                <h3 className='text-[15px] font-bold mb-[10px] text-[#420075]'>Binary to Decimal Conversion and the Binary Number System</h3>
                                <div className='my-[14px] pl-[40px]'></div>
                                <p className='text-sm mb-[10px]'>Binary is a numbering system with 2 as its base and is made up of two numbers 0 and 1. Also, when it comes to turning the power off or on these two numbers are used to represent it, where <span className='text-[#505050] font-[600]'>1 is</span> equal to <span className='text-[#505050] font-[600]'>on</span>, and <span className='text-[#505050] font-[600]'>0 is off</span>. In the computers, the central processing units only understand the language of number systems, since binary digit is the smallest unit of data known as a bit, it causes too many bits to be used. This is the reason why we need to convert binary to other number systems while performing complex calculations</p>
                                <p className='text-sm mb-[10px]'>Decimal numbers have base 10 which are <span className='text-[#505050] font-[600]'>0 to 9</span>, and their combinations are used to represent distinct values. As, 10 is the radix for decimal number system, all the numbers in this format are expressed in powers of 10. Also, it is the number system which humans are comfortable with because it also takes fewer bits than binary. For example, the binary number <span className='text-[#505050] font-[600]'>1101 1010</span> is represented as <span className='text-[#505050] font-[600]'>218</span> in decimal. In our everyday life, we are using this format whenever we are dealing with money, weight, etc.</p>
                                <p className='text-sm mb-[10px]'>Decimal numbers are required when you need precision in your work which cannot be provided by the whole numbers. The calculation of weight is something not always accurate on the weighing machine, means not always equal to a whole number, which is why it’s important to learn about the decimal values especially if you want to know the exact meaning of the number on the scale.</p>
                            </div>
                            <div>
                                <h3 className='text-[15px] font-bold my-[16px] text-[#420075]'>Various Numbering Systems And The Binary To Decimal Translator</h3>
                                <div className='my-[14px] pl-[40px]'></div>
                                <p className='text-sm mb-[10px]'>The online <a href="#" className='text-[#420075] font-[600]'>Binary to Decimal</a> converter, lets you transform all of your binary values to decimal without any extra efforts. As binary represents only two digits, thus large numbers can be misapprehended which is why it is important to turn them to one of the easiest to understand categories of the decimal system. The binary numbers were found in the computer technology, and all the programming that takes place in the computer uses these two digits which in other words is the process of receiving data and illustrating it with discrete bits of information.</p>
                                <p className='text-sm mb-[10px]'>There are different numbering systems and learning about them will help us better interpret the computer systems architecture. If you aren’t aware, every value you save or take out from the computer memory has a unique number system. The most common numbers system supported by computers architecture are:</p>
                                <div>
                                    <ul className='list-disc py-[16px] ml-[40px]'>
                                        <li className='font-[600] text-[#505050]'>Binary Number System</li>
                                        <li className='font-[600] text-[#505050]'>Decimal Number System</li>
                                        <li className='font-[600] text-[#505050]'>Hexadecimal number system (Hex)</li>
                                    </ul>
                                </div>
                                <p className='text-sm py-[16px]'>A computer takes the information and digitally encodes (it is the process where the machine takes in data and represents in discreet bits of information), which are the zeros and ones in the computer language. The decimal number system has 10 digits which range from 0 to 9 with the <span className='text-[#505050] font-[600]'>base 10</span> and conversion from binary to decimal can help us better understand the compound binary numbers.</p>
                                <p className='text-sm py-[16px]'>After that comes the Hexadecimal number system which has 16 values which are alphanumeric but includes only the first six letters of alphabets and the numbers zero to nine. Also, you can say that a computer is designed for these numbers because they can understand the position occupied by these symbols in the figure.</p>
                            </div>
                            <div>
                                <h3 className='text-[15px] font-bold py-[16px] text-[#420075]'>How To Use Our Online Binary To Decimal Calculator</h3>
                                <div className='my-[14px] pl-[40px]'></div>
                                <p className='text-sm mb-[10px]'>The binary to decimal translator lets you turn any amount of binary number to decimal without any extra requirements. You can use our binary fraction to decimal converter on every operating system, without facing any difficulties by following the steps given below:</p>
                                <ul className='flex pt-[10px]'>
                                    <span className='px-[20px]  text-black'>1.</span>
                                    <li className='text-sm'>When reached on the page of <a href="#" className='text-[#420075] font-[600]'>Binary to Decimal Converter</a> online you will find a large text box, where you will be entering your binary digits either by copying and pasting from your file or by typing yourself.</li>
                                </ul>
                                <ul className='flex pt-[10px]'>
                                    <span className='px-[20px]  text-black'>2.</span>
                                    <li className='text-sm'>When you are done with the first step, all you need is one click on the “Process” button, and the results will be displayed below the <span className='text-[#505050] font-[600]'>convert binary to decimal online</span> conversion tool.</li>
                                </ul>
                                <ul className='flex pt-[10px]'>
                                    <span className='px-[20px]  text-black'>3.</span>
                                    <li className='text-sm'>You can copy the results by clicking on the “Copy to clipboard” button or you can highlight all the text, right click and select the copy option from the menu and paste it in your desired location.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Binarytodecimal