import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import clear_txt from '../../Assets/Images/clear_txt.svg'
import upload_file from '../../Assets/Images/upload_file.svg'
import Footer from '@/Components/Footer/Footer'
import Header from '@/Components/Header/Header'

const sampleBToT = '01010100 01101000 01100001 01110100 0100000 01101001 01110011 0100000 01110011 01100001 01101101 01110000 01101100 01100101 0100000 01110100 01100101 01111000 01110100'
const Binarytranslator = () => {
    const inputRef = useRef(); 
    const [text, setText] = useState('')
    const [ans, setAns] = useState('')
    const [file, setFile] = useState('')

    const handleSample = () => {
        inputRef.current.value = "";
        setText(sampleBToT)
        setFile('')
    }

    const handleClear = () => {
        inputRef.current.value = "";
        setText('')
        setFile('')
    }

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
        reader.readAsBinaryString(file);
    }

    const binaryTranslateor = (e) => {
        e.preventDefault()
        
        let binCode = [];
        if(text !== ''){
            const newBin = text.split(" ");
            const isValidBinary = /^[01 ]+$/.test(text);
            if (isValidBinary) {
                for (let i = 0; i < newBin?.length; i++) {
                    binCode.push(String.fromCharCode(parseInt(newBin[i], 2)));
                }
                setAns(binCode.join(""))
            }else {
                toast.error('Please Add Only Binary');
            }
        }else if (file !== '') {
            const fileBinary = file.split(" ")
            const isValidBinary = /^[01 ]+$/.test(file);
            if (isValidBinary) {
                for (let i = 0; i < fileBinary?.length; i++) {
                    binCode.push(String.fromCharCode(parseInt(fileBinary[i], 2)));
                }
                setAns(binCode.join(""))
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
                            <h1 className='text-[16px] sm:text-[22px] text-[#420075] md:text-2xl font-bold mb-[10px]'>Binary Translator</h1>
                            <p className='text-sm'>Translate binary code to text using this online binary translator. Simply paste the binary code and get plain text in one second.</p>
                        </div>
                        <div className='h-[98px] my-[20px] bg-[#80808014] max-w-[700px] m-auto'></div>
                        <div className='text-center md:flex items-center md:flex-wrap justify-center max-w-[700px] m-auto'>
                            <p className=' text-[#420075] md:w-[73%] w-[100%] md:pl-[50px] pl-[0px] text-[16px] font-[600]'>Enter or paste your Binary:</p>
                            <button className='bg-[#420075] text-[14px] px-[10px] md:mt-[0px] mt-[10px] py-[5px] text-[#fff] rounded-md' onClick={handleSample}>Sample</button>
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
                            <button className='btnlogin text-white py-[10px] px-[10px] sm:px-[40px] my-[20px]' onClick={binaryTranslateor}>Convert To Hex</button>
                        </div>
                        <div className='flex bg-[#80808014]  max-w-[800px] m-auto my-[20px] min-h-[250px]'>{ans}</div>
                        <div className=' w-full lg:w-[900px] mt-[15px] m-auto card p-[15px] mb-[15px] bg-white border rounded-lg'>
                            <div>
                                <h3 className='text-[15px] font-bold mb-[10px] text-[#420075]'>How to Use Binary Translator?</h3>
                                <div className='my-[14px] pl-[40px]'></div>
                                <p className='text-sm mb-[10px]'>Using our binary translator is quite simple and easy to understand. The following steps allow you to execute binary translation without facing any intricacies.</p>
                                <div>
                                    <ul className='list-disc ml-[40px]'>
                                        <li className='text-sm py-[10px]'>First of all, enter the binary values in the given field. You can type, paste, or upload the binary code file on this binary translator.</li>
                                        <li className='text-sm py-[10px]'>After that, hit the "Translate Binary" button to initiate the process.</li>
                                        <li className='text-sm py-[10px]'>The binary code translator will process your request and present results in seconds. You can copy the translated binary code in English or click the Download button to save the file on your device. </li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <h3 className='text-[15px] font-bold mb-[10px] text-[#420075]'>About Binary Translator</h3>
                                <div className='my-[14px] pl-[40px]'></div>
                                <p className='text-sm mb-[10px]'>The binary translator offered on SmallSEOTools is quick and efficient in generating binary code to text. This tool is based on advanced algorithms that precisely go through the binary values submitted by the users and work on generating their actual textual representations. This binary language translator doesn’t ask you to go through any complexities. You don’t need to register on this web portal to convert binary code to text.   </p>
                            </div>
                            <div>
                                <h3 className='text-[15px] font-bold py-[10px] text-[#420075] '>Features of Binary Translator</h3>
                                <p className='text-sm mb-[10px]'>The features make this binary language translator a must-have utility for people looking forward to converting binary to letters. Some of its features include the following. </p>
                                <div>
                                    <div className='ml-[40px]'>
                                        <ul className='list-disc'><li className='text-sm py-[10px] text-[#420075] font-[600]'>Simplicity</li></ul>
                                    </div>
                                    <p className='text-sm'>The users don’t have to carry out complex manual calculations using this binary code translator. Its simple interface makes the binary translation process quite easy for everyone. </p>
                                </div>
                                <div>
                                    <div className='ml-[40px]'>
                                        <ul className='list-disc'><li className='text-sm py-[10px] text-[#420075] font-[600]'>Saves Time and Effort</li></ul>
                                    </div>
                                    <p className='text-sm'>The binary translator doesn’t ask its users to invest much time and effort. You can get your hands on accurate binary translation results by following simple steps. </p>
                                </div>
                                <div>
                                    <div className='ml-[40px]'>
                                        <ul className='list-disc'><li className='text-sm py-[10px] text-[#420075] font-[600]'>Portability</li></ul>
                                    </div>
                                    <p className='text-sm'>The super-compatibility of our binary translator makes it easily accessible to people all around the globe. You don’t need a specific software program to use this facility, as it is entirely web-based. </p>
                                </div>
                                <div>
                                    <div className='ml-[40px]'>
                                        <ul className='list-disc'><li className='text-sm py-[10px] text-[#420075] font-[600]'>Accuracy</li></ul>
                                    </div>
                                    <p className='text-sm'>The binary code translator provides its users with 100% accurate results. A single-digit error can lead to inaccuracy in the manual translation of binary. You can avoid this hassle using this online binary translator that delivers exact outcomes. </p>
                                </div>
                            </div>
                            <div>
                                <h3 className='text-[15px] font-bold py-[10px] text-[#420075]'>Features of Binary Translator</h3>
                                <p className='text-sm mb-[10px] m-0'>The features make this binary language translator a must-have utility for people looking forward to converting binary to letters. Some of its features include the following. </p>
                                <div>
                                    <div className='ml-[40px]'>
                                        <ul className='list-disc'><li className='text-sm py-[10px] text-[#420075] font-[600]'>Supports All Platforms</li></ul>
                                    </div>
                                    <p className='text-sm'>Using this <a href="#" className='text-[#420075] font-[600] underline'>binary translator</a>, you don’t need to get a device running on a specific operating system. All platforms support the binary translator; you can use it from any device. All you need to have to run this binary translator is a stable internet connection.  </p>
                                </div>
                                <div>
                                    <div className='ml-[40px]'>
                                        <ul className='list-disc'><li className='text-sm py-[10px] text-[#420075] font-[600]'>Free of Cost</li></ul>
                                    </div>
                                    <p className='text-sm'>No costs are involved in the usage of this binary translator. The binary code translator allows you to convert binary text as often as possible without charging a single penny.</p>
                                </div>
                                <div>
                                    <div className='ml-[40px]'>
                                        <ul className='list-disc'><li className='text-sm py-[10px] text-[#420075] font-[600]'>Easy Upload Options</li></ul>
                                    </div>
                                    <p className='text-sm'>The binary translator provides easy upload options to convert binary text. You can directly upload the file containing binary code, drag and drop the file, paste binary values, or type it manually without facing any restrictions.</p>
                                </div>
                            </div>
                            <div>
                                <h3 className='text-[15px] font-bold m-0 py-[16px] text-[#420075]'>Binary Number System</h3>
                                <p className='text-sm mb-[10px]'>The binary number system is a system that represents codes, instructions, and other sorts of commands using just two digits, i.e., 0 and 1. This system is also known as the base-2 number system, as it only uses two digits. Every digit in a binary code is referred to as a bit, and 8 bits form a byte. Computers can only understand binary language; hence, it becomes crucial for developers to have a firm grip on the binary number system. Depicting what instruction a lengthy binary string represents becomes hectic for people, as translation is time-consuming. It involves complex calculations that can often lead to inaccurate results. Therefore, you can rely on a binary translator to decode any binary value and find its textual representation instantaneously. </p>
                                <div>
                                    <div className='ml-[40px]'>
                                        <ul className='list-disc'><li className='text-sm py-[10px] text-[#420075] font-[600]'>Examples of Binary Translations </li></ul>
                                    </div>
                                    <p className='text-sm py-[10px]'>1. <span className='text-[#505050] font-[600]'> Binary Code:</span> 1001111 1110000 1100101 1101110 100000 1110100 1101000 1101001 1110011 100000 1100110 1101001 1101100 1100101</p>
                                    <p className='text-sm py-[10px]'>Translation: Open this file </p>
                                    <p className='text-sm py-[10px]'>2. <span className='text-[#505050] font-[600]'> Binary Code:</span> 1000011 1101100 1101001 1100011 1101011 100000 1110100 1101111 100000 1110000 1110010 1101111 1100011 1100101 1100101 1100100</p>
                                    <p className='text-sm py-[10px]'>Translation: Click to proceed </p>
                                    <p className='text-sm py-[10px]'>3. <span className='text-[#505050] font-[600]'> Binary Code:</span> 1001000 1101001 1100100 1100101 100000 1110100 1101000 1101001 1110011 100000 1100010 1110101 1110100 1110100 1101111 1101110</p>
                                    <p className='text-sm py-[10px]'><span className='text-[#505050] font-[600]'>Translation:</span> Hide this button </p>
                                </div>
                            </div>
                            <div>
                                <h3 className='text-[15px]  font-bold  text-[#420075]'>How to Use Binary Translator to Convert Binary to Text, Hex, Decimal, and ASCII?</h3>
                                <p className='text-sm py-[10px]'>Besides finding binary translation with this binary translator, you can also use it to convert <a href="#" className='text-[#420075] font-[600] underline'>binary to text, binary to hex, decimal, ASCII,</a> and vice versa. To convert any value between different number systems, choose the desired options in this tool's ‘From’ and ‘To’ fields and click the convert button to find the required results instantly.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Binarytranslator