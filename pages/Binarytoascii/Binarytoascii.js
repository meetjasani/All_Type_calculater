import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import clear_txt from '../../Assets/Images/clear_txt.svg'
import upload_file from '../../Assets/Images/upload_file.svg'
import Header from '@/Components/Header/Header'
import Footer from '@/Components/Footer/Footer'

const sampleBToT = '01010100 01101000 01100001 01110100 0100000 01101001 01110011 0100000 01110011 01100001 01101101 01110000 01101100 01100101 0100000 01110100 01100101 01111000 01110100'
const Binarytoascii = () => {
    const inputRef = useRef(); 
    const [text, setText] = useState('')
    const [ans, setAns] = useState('')
    const [file, setFile] = useState('')

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

    const binaryToAscii = (e) => {
        e.preventDefault()
        
        let binCode = [];
        if (text !== '') {
            const newBin = text?.split(" ");
            const isValidBinary = /^[01 ]+$/.test(text);
    
            if (isValidBinary) {
                for (let i = 0; i < newBin?.length; i++) {
                    binCode.push(String.fromCharCode(parseInt(newBin[i], 2)));
                }
                setAns(binCode.join(""));
            } else {
                toast.error('Please Add Only Binary');
            }
        } else if (file !== '') {
            const fileBinary = file.split(" ");
            const isValidBinary = /^[01 ]+$/.test(file);
    
            if (isValidBinary) {
                for (let i = 0; i < fileBinary?.length; i++) {
                    binCode.push(String.fromCharCode(parseInt(fileBinary[i], 2)));
                }
                setAns(binCode.join(""));
            } else {
                toast.error('Please Add Only Binary');
            }
        } else {
            toast.error('No text found! Please add some text.');
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
                            <h1 className='text-[16px] sm:text-[22px] text-[#420075] md:text-2xl font-bold mb-[10px]'>Binary To ASCII</h1>
                            <p className='text-sm md:w-[70%] w-[100%] mx-auto'>Convert Binary code to ASCII text. Just enter a binary number i.e. 01000001 and click the "Convert To ASCII" button, You can Enter Binary value of unlimited length to translate it into ASCII character. Our tool: Binary to ASCII Converter can transform your given binary numbers to ASCII on the click of a button.</p>
                        </div>
                        <div className='h-[98px] my-[20px] bg-[#80808014] max-w-[700px] m-auto'></div>
                        <div className='text-center md:flex items-center md:flex-wrap justify-center max-w-[700px] m-auto'>
                            <p className=' text-[#420075] md:w-[73%] w-[100%] md:pl-[50px] pl-[0px] text-[16px] font-[600]'>Enter your Binary:</p>
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
                            <button className='btnlogin text-white py-[10px] px-[10px] sm:px-[40px] my-[20px]' onClick={binaryToAscii}>Convert To ASCII</button>
                        </div>
                        <div className='flex bg-[#80808014]  max-w-[800px] m-auto my-[20px] min-h-[250px]'>{ans}</div>
                        <div className=' w-full lg:w-[900px] mt-[15px] m-auto card p-[15px] mb-[15px] bg-white border rounded-lg'>
                            <div>
                                <h3 className='text-[15px] font-bold mb-[10px] text-[#420075]'>How Does This Online Binary to ASCII Converter Work</h3>
                                <div className='my-[14px] pl-[40px]'></div>
                                <p className='text-sm mb-[10px]'>You can convert all of your binary codes to ASCII characters, as the sequence of ones and zeros can be really confusing when trying to switch manually. It is also quite a time-consuming task when you have to match each binary bit to find its ASCII character. Not to worry, Translation of binary numbers to ASCII text is quite easy; you just have to paste the binary string and it will result in a translated ASCII Word. our <a href="#" className='text-[#420075] font-[600] underline'>Binary to ASCII</a> text converter can transform the data for you by following the below-given steps:</p>
                            </div>
                            <div>
                                <h3 className='text-[15px] pt-[10px] m-0 font-bold mb-[10px] text-[#420075]'>How To Translate Binary to ASCII Text In 2 Simple Steps.</h3>
                                <div className='my-[8px] pl-[40px]'></div>
                                <div className=''>
                                    <ul className='flex pt-[10px]'>
                                        <span className='px-[20px]  text-black'>1.</span>
                                        <li className='text-sm'>You can translate binary to ASCII text by searching for a large text box with the title <span className='text-[#505050] font-[600]'>“Enter your Binary”</span> on this page. In the text box, you can either choose to write the numbers yourself or copy and paste from an already saved file. The below-given picture shows how to write binary numbers.

                                        </li>
                                    </ul>
                                    <ul className='flex pt-[10px]'>
                                        <span className='px-[20px]  text-black'>2.</span>
                                        <li className='text-sm'>When you are done writing all you have to do is press the button “Convert To ASCII,” and the results will be displayed instantly. The translated material can be copied <span >to ClipBoard</span>.
                                        </li>
                                    </ul>
                                    <p className='text-sm py-[16px]'>You can also Convert ASCII Values back to Binary numbers with <a href="" className='text-[#420075] font-[600] underline'>ASCII to Binary Tool</a> by SmallSEOTools.com</p>
                                </div>
                            </div>
                            <div>
                                <h3 className='text-[15px] font-bold mb-[10px] text-[#420075]'>Why We Use Binary ASCII Converter: Basic Concepts Explained</h3>
                                <div className='my-[14px] pl-[40px]'></div>
                                <div>
                                    <h6 className='text-[#420075] font-[600]'>Binary Number System</h6>
                                    <p className='text-sm pt-[10px] mb-[10px]'>You can convert all of your binary codes to ASCII characters, as the sequence of ones and zeros can be really confusing when trying to switch manually. It is also quite a time-consuming task when you have to match each binary bit to find its ASCII character. Not to worry, Translation of binary numbers to ASCII text is quite easy; you just have to paste the binary string and it will result in a translated ASCII Word. our Binary to ASCII text converter can transform the data for you by following the below-given steps:</p>
                                </div>
                                <div>
                                    <h6 className='text-[#420075] font-[600]'>ASCII TEXT</h6>
                                    <p className='text-sm pt-[10px] mb-[10px]'>ASCII stands for American Standard Code for Information Interchange these codes were developed when computers were invented.</p>
                                    <p className='text-sm py-[10px]'>The ASCII codes consist of 128 7-bit characters, where 7-bits are required when you are representing an ASCII character. You can easily create an ASCII file using a text editor like notepad and if you aren’t already aware ASCII can store information in the form of ones and zeros. Also, these files are stored like you save regular files because a computer only understands this system.</p>
                                    <p className='text-sm py-[10px]'>All the ASCII characters are assigned a unique binary number so the text you enter will be matched to the already allocated binary number list and upon processing will convert all the Binary numbers to ASCII text. There are 128 characters in the ASCII standard which include 32 control characters that are unprintable and used to control external devices such as printers, Other 94 characters from 32-127 are printable characters represent digits, letters, graphic characters, a space character, a delete character, and a few miscellaneous symbols.</p>
                                    <p className='text-sm py-[10px]'>In the beginning, the commands that machines used were limited to “start, wait, and complete” but today The ASCII standard is utilized in every device.</p>
                                </div>
                            </div>
                            <div>
                                <h3 className='text-[15px] font-bold m-0 py-[10px] text-[#420075]'>Binary & ASCII Encoding, The Main Points To Notice</h3>
                                <div className='my-[0px] pl-[40px]'></div>
                                <div>
                                    <p className='text-sm pt-[10px] mb-[10px]'>As the coded characters set contains 128 7-bit characters, minimal control codes are placed in the data, and today all the communication mediums have considered the ASCII a standard.</p>
                                    <p className='text-sm pt-[10px] mb-[10px]'>The files on the computer are stored in the form of small pieces which are known as bits, and as 7-bits are necessitated to indicate an ASCII character, you are not using the 8th part of the bit which also means the most critical bit of one byte is not being utilized.</p>
                                    <p className='text-sm pt-[10px] mb-[10px]'>When it comes to binary files, they don’t have such restrictions, all the 256-bit patterns can work, and any pattern can be added in any byte of the data. ASCII files have vital importance when it comes to programming and development of web pages. All the ASCII codes have a specific purpose and HTML is also written in ASCII plus every character has a unique meaning that can be read by the browsers to display the information.</p>
                                    <p className='text-sm pt-[10px] mb-[10px]'>Today, the binary modes are used to transfer .exe files, compressed versions of records, and various types of images. When we talk about browsers, they use the binary information which is coded in it to analyze the HTML ASCII file and transform it into a displayable webpage. Do you know that the data of Photoshop and other programs generated files are considered to be binary files? You might have come across the term encoding many times. It means the data is being converted to binary code.</p>
                                </div>
                            </div>
                            <div>
                                <h3 className='text-[15px] font-bold m-0 py-[10px] text-[#420075]'>Where ASCII Characters Stored and Retrieved in Memory?</h3>
                                <div className='my-[0px] pl-[40px]'></div>
                                <div>
                                    <p className='text-sm pt-[10px] mb-[10px]'>The Truth is characters do not exist, they do not exist in any kind of data storage of computers. Computers and electronic devices just store data in binary numbers and nothing else. In order to store letters, words, and texts, computer devices have to follow common character-encoding schemes to support characters.</p>
                                </div>
                            </div>
                            <div>
                                <h3 className='text-[15px] font-bold m-0 py-[10px] text-[#420075]'>Binary To ASCII Characters Conversion Table</h3>
                                <div className='overflow-x-scroll'>
                                <table className="table-auto sm:w-[100%] w-[400px] mx-auto overflow-x-scroll border-[1px] text-sm Conversion_table border-[#ccc]">
                                    <thead>
                                        <tr>
                                            <th className='text-start text-[#212529] text-[14px]'>Binary</th>
                                            <th className='text-start text-[#212529] text-[14px]'>ASCII</th>
                                            <th className='text-start text-[#212529] text-[14px]'>Hexadecimal</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>00000000</td>
                                            <td>NUL</td>
                                            <td>00</td>

                                        </tr>
                                        <tr>
                                            <td>SOH</td>
                                            <td>00000001</td>
                                            <td>01</td>
                                        </tr>
                                        <tr>
                                            <td>STX</td>
                                            <td>00000010</td>
                                            <td>02</td>
                                        </tr>
                                        <tr>
                                            <td>ETX</td>
                                            <td>00000011</td>
                                            <td>03</td>
                                        </tr>
                                        <tr>
                                            <td>EOT</td>
                                            <td>00000100</td>
                                            <td>04</td>
                                        </tr>
                                        <tr>
                                            <td>ENQ</td>
                                            <td>00000101</td>
                                            <td>05</td>
                                        </tr>
                                        <tr>
                                            <td>ACK</td>
                                            <td>00000110</td>
                                            <td>06</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>                               
                            </div>
                            <div className='py-[40px]'>
                                <p className='text-sm'>Note: You can also do some other conversions like: <a href="" className='text-[#420075] underline'>binary to text</a> or <a href="" className='text-[#420075] underline'>text to binary</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Binarytoascii