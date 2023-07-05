import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import clear_txt from '../../Assets/Images/clear_txt.svg'
import upload_file from '../../Assets/Images/upload_file.svg'
import Header from '@/Components/Header/Header'
import Footer from '@/Components/Footer/Footer'

const sample = '1010100011010000110000101110100010000001101001011100110100000011100110110000101101101011100000110110001100101010000001110100011001010111100001110100'
const baseMap = {
    '0000': '0',
    '0001': '1',
    '0010': '2',
    '0011': '3',
    '0100': '4',
    '0101': '5',
    '0110': '6',
    '0111': '7',
    '1000': '8',
    '1001': '9',
    '1010': 'A',
    '1011': 'B',
    '1100': 'C',
    '1101': 'D',
    '1110': 'E',
    '1111': 'F'
}
const Binarytohex = () => {
    const inputRef = useRef(); 
    const [text, setText] = useState('')
    const [ans, setAns] = useState('')
    const [file, setFile] = useState('')

    const handleSample = () => {
        inputRef.current.value = "";
        setText(sample)
        setFile('')
    }

    const handleClear = () => {
        inputRef.current.value = "";
        setText('')
        setFile('')
    }

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

    const binaryToHex = (e) => {
        e.preventDefault()
        let i
        let answer = ''; 
        let rem = '';
        const len = 4;
        
        if(text !== ''){
            const srcStrings = text.toString();
            const isValidBinary = /^[01]+$/.test(text);
            if (isValidBinary) {
                for (i = srcStrings.length; i >= len; i -= len) {
                    if (i - len < srcStrings.length) {
                        answer = baseMap[srcStrings.substr(i - len, len)] + answer;
                    }
                }
                if (i !== 0) {
                    rem = srcStrings.substr(0, i);
                    while (rem.length < 4) {
                        rem = '0' + rem;
                    }
                    answer = baseMap[rem] + answer;
                }
                setAns(answer)
            }else {
                toast.error('Please Add Only Binary');
            }
        } else if (file !== '') {
            const srcString = file.trim();
            const isValidBinary = /^[01]+$/.test(file);
            if (isValidBinary) {
                for (i = srcString.length; i >= len; i -= len) {
                    if (i - len < srcString.length) {
                        answer = baseMap[srcString.substr(i - len, len)] + answer;
                    }
                }
                if (i !== 0) {
                    rem = srcString.substr(0, i);
                    while (rem.length < 4) {
                        rem = '0' + rem;
                    }
                    answer = baseMap[rem] + answer;
                }
                setAns(answer)
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
                            <h1 className='text-[16px] sm:text-[22px] text-[#420075] md:text-2xl font-bold mb-[10px]'>Binary To HEX</h1>
                        </div>
                        <div className='h-[98px] my-[20px] bg-[#80808014] max-w-[700px] m-auto'></div>
                        <div className='text-center md:flex items-center md:flex-wrap justify-center max-w-[700px] m-auto'>
                            <p className=' text-[#420075] md:w-[73%] w-[100%] md:pl-[50px] pl-[0px] text-[16px] font-[600]'>Enter your Binary numbers with space:</p>
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
                            <button className='btnlogin text-white py-[10px] px-[10px] sm:px-[40px] my-[20px]' onClick={binaryToHex}>Convert To HEX</button>
                        </div>
                        <div className='flex bg-[#80808014]  max-w-[800px] m-auto my-[20px] min-h-[250px]'>{ans}</div>
                        <div className=' w-full lg:w-[900px] mt-[15px] m-auto card p-[15px] mb-[15px] bg-white border rounded-lg'>
                            <div>
                                <h3 className='text-[15px] font-bold mb-[10px] text-[#420075]'>Binary To Hexadecimal Converter – Complications Free!</h3>
                                <div className='my-[14px] pl-[40px]'></div>
                                <p className='text-sm mb-[10px]'>Binary numbers today not only make the designing of computer and related technologies simple but also they are easy to understand by a machine. The most straightforward explanation of binary number system can be a machine representing numbers in the form of <span className='font-[600] text-[#505050]'> 0 and 1</span> instead of the digits <span className='font-[600] text-[#505050]'>0-9</span>.</p>
                                <p className='text-sm py-[10px]'>The names in the binary are added to left as the digits get larger and for computers, it gets simplified when they are performing tasks. Also, binary numbers can be programmed on and off for a switch or a transistor which you can make a part of a calculator or any storage device.</p>
                                <p className='text-sm py-[10px]'>If you aren’t aware, pictures and audio can also be turned into 0 and 1. First, they have to be turned into tiny elements which can be pixels and sample for sound; later every single pixel is assigned a unique number.</p>
                                <p className='text-sm py-[10px]'>This is the very reason why this number system is most commonly used in computer engineering and networking. Whereas, Hex or call it Hexadecimal number system has the system of base 16; also, it is interesting in many ways as our decimal system uses only ten digits to represent numbers, hexadecimal uses sixteen. The six figures after ten are letters of the English alphabets, (A, B, C, D, E, and F). This number is used in two different places:</p>
                            </div>
                            <div className='py-[16px]'>
                                <ul className='flex px-[]'>
                                    <span className='px-[20px]'> 1.</span>
                                    <li className='text-sm'> <span className='text-[#505050] font-[600]'>Information Technologies</span> In information technologies or math’s, each hex number represent four binary digits, and if there aren’t four digits, then extra zeros are added on the left to meet the condition. If you haven’t seen, in the URL (Uniform Resource Links) character codes are found with percentage prefixes; such numbers are also hexadecimal. In XML and Html, we use the Hexadecimal numbers for representing colors where each color is assigned a six-digit hex value. The IPV6 addresses can also be noted as eight groups of hex digits, where every group is divided or separated by a colon.</li>
                                </ul>
                                <ul className='flex pt-[10px]'>
                                    <span className='px-[20px]'> 2.</span>
                                    <li className='text-sm'> <span className='text-[#505050] font-[600]'>In Mathematics</span> When it comes to solving problems and equations and to understand the purpose of hexadecimal characters Math is the subject for you. It is really difficult sometimes to turn binary numbers to hexadecimal characters when they have a large grouping of numbers. It takes a lot of time as the steps include the gathering of figures in four digits, if the long binary number can’t be separated in the group of fours then you will need to add extra zeros to complete the number. Later you will need to consult a chart of hex numbers if you haven’t added them to your memory.</li>
                                </ul>
                                <p className='text-sm py-[16px]'>You can avoid all of these steps by using our <span className='text-[#505050] font-[600]'>binary to hex online converter</span>. This is where you can add long binary numbers for conversion to hex. Hexadecimal digits are used to view the values of bytes contained in the file and are also used in assembly language where the operand is specified as a hex value. In a decimal system when you get to number ten, there is no specified number for this digit, and thus it is represented as 10</p>
                            </div>
                            <div>
                                <h3 className='text-[15px] font-bold mb-[10px] text-[#420075]'>How To Use Binary To Hexadecimal Calculator – A Free Binary To Hexa Transformer</h3>
                                <div className='my-[14px] pl-[40px]'></div>
                                <p className='text-sm mb-[10px]'>You can turn all the binary numbers to hexadecimal with our tool, so you don’t have to carry the binary to the hexadecimal table for conversion purposes. It definitely takes a lot of time when converting large binary numbers to hex plus if you make a mistake, the result will not appear as you expect. Sometimes even re-checking a manual conversion doesn’t help in finding a tiny error and you don’t also have to proofread when you have a <span className='text-[#505050] font-[600]'> Binary to Hexadecimal</span> converter online. Follow the below-given steps for converting binary to hex.</p>
                            </div>
                            <div className='pt-[16px]'>
                                <ul className='flex pt-[10px]'>
                                    <span className='px-[20px]  text-black'>1.</span>
                                    <li className='text-sm'>On the page of Binary to the hexadecimal converter, you will find a large rectangular text box, where you can copy/paste the binary code or write it yourself if you have it in mind, as shown in the picture below:</li>
                                </ul>
                                <ul className='flex pt-[10px]'>
                                    <span className='px-[20px]  text-black'>2.</span>
                                    <li className='text-sm'>When you are done writing, all you have to do is hit the <span className='text-[#505050] font-[600]'>“Process”</span> button, and the results will be displayed under the tool, like this:</li>
                                </ul>
                                <ul className='flex pt-[10px] pb-[40px]'>
                                    <span className='px-[20px] text-black'>3.</span>
                                    <li className='text-sm'>After getting your results, you can copy the converted form of the binary by clicking on the <span className='text-[#505050] font-[600]'>“Copy to ClipBoard”</span> button and paste it in your file where the code is required.
                                        This <a href="#" className='text-[#420075] font-[600] underline'>Binary to text</a> <span className='text-[#505050] font-[600]'>converter</span> is easy to use & completely Free.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Binarytohex