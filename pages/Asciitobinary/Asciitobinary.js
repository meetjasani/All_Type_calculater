import React, { useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Image from 'next/image'
import clear_txt from '../../Assets/Images/clear_txt.svg'
import upload_file from '../../Assets/Images/upload_file.svg'
import Footer from '@/Components/Footer/Footer'
import Header from '@/Components/Header/Header'

const sampleAToB = '84 104 97 116 32 105 115 32 115 97 109 112 108 101 32 116 101 120 116'

const Asciitobinary = () => {
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
        setText(sampleAToB)
        setFile('')
    }

    const handleClear = () => {
        inputRef.current.value = "";
        setText('')
        setFile('')
    }

    const asciiToBinary = (e) => {
        e.preventDefault()
        let output = '';

        if(text !== ''){
            for (let i = 0; i < text.length; i++) {
                output += text[i].charCodeAt(0).toString(2) + " ";
            }
            setAsciiAns(output)
        } else if (file !== '') {
            for (let i = 0; i < file.trim().length; i++) {
                output += file[i].charCodeAt(0).toString(2) + " ";
            }
            setAsciiAns(output)
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
                            <h1 className='text-[16px] sm:text-[22px] text-[#420075] md:text-2xl font-bold mb-[10px]'>ASCII To Binary</h1>
                            <p className='text-sm md:w-[70%] w-[100%] mx-auto'>Convert ASCII characters to binary numbers, Enter or past an ASCII text in a text box i.e. "hello" and enter the convert button and it will result in a translated binary code. You can convert 128 ASCII characters to binary code.</p>
                        </div>
                        <div className='h-[98px] my-[20px] bg-[#80808014] max-w-[700px] m-auto'></div>
                        <div className='text-center md:flex items-center md:flex-wrap justify-center max-w-[700px] m-auto'>
                            <p className=' text-[#420075] md:w-[73%] w-[100%] md:pl-[50px] pl-[0px] text-[16px] font-[600]'>Enter your ASCII:</p>
                            <button className='bg-[#420075] text-[14px] px-[10px] md:pt-[0px] mt-[10px] py-[5px] text-[#fff] rounded-md' onClick={handleSample}>Sample</button>
                        </div>
                        <div className='mt-[20px] relative'>
                            <div className='w-full  m-auto md:w-[50%] '>
                                <textarea name="" id="" cols="30" rows="10" placeholder='Paste Your ASCII Here' className='relative text-sm p-[10px] w-full min-h-[24vh] bg-[#f8eeff] focus:outline-0' 
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
                            <button className='btnlogin text-white py-[10px] px-[10px] sm:px-[40px] my-[20px]' onClick={asciiToBinary}>Convert To Binary</button>
                        </div>
                        <div className='flex bg-[#80808014]  max-w-[800px] m-auto my-[20px] min-h-[250px]'>{asciiAns}</div>
                        <div className=' w-full lg:w-[900px] mt-[15px] m-auto card p-[15px] mb-[15px] bg-white border rounded-lg'>
                            <div>
                                <h3 className='text-[15px] font-bold mb-[10px] text-[#420075]'>How To Convert ASCII To Binary With Our Free Tool</h3>
                                <div className='my-[14px] pl-[40px]'></div>
                                <p className='text-sm mb-[10px]'>ASCII to binary conversion through our online tool is quite easy when compared to doing it manually. You won’t need to transform each letter by using the ASCII characters to the binary table. Also, the ASCII to the binary converter is available on all operating systems; all you need is the link to where you already are, a working internet connection and the below-given steps.</p>
                            </div>
                            <div>
                                <div className='my-[8px] pl-[40px]'></div>
                                <div className=''>
                                    <ul className='flex pt-[10px]'>
                                        <span className='px-[20px]  text-black'>1.</span>
                                        <li className='text-sm'>After reaching the page of <span className='text-[#505050] font-[600]'>ASCII to the Binary Converter</span> you will see a text box with the title “Enter your ASCII,” this is where you will be writing your ASCII characters (English text) for transformation to a binary like shown in the image.</li>
                                    </ul>
                                    <ul className='flex pt-[10px]'>
                                        <span className='px-[20px]  text-black'>2.</span>
                                        <li className='text-sm'>After writing or pasting your ASCII codes for conversion just hit the <span className='text-[#505050] font-[600]'>Convert To Binary</span> button and the results will be displayed in the following manner under the tool.</li>
                                    </ul>
                                    <ul className='flex pt-[10px]'>
                                        <span className='px-[20px]  text-black'>3.</span>
                                        <li className='text-sm'>You can copy the result, click on the <span className='text-[#505050] font-[600]'>Copy to clipboard</span> button for copying all instantly.</li>
                                    </ul>
                                    <p className='text-sm py-[16px]'>If you want to convert binary values back to its original ASCII Characters use this <a href="#" className='text-[#420075] font-[600]'> binary to ASCII converter</a> by SmallSEOTools.com</p>
                                </div>
                            </div>
                            <div>
                                <div className='my-[14px] pl-[40px]'></div>
                                <div>
                                    <h6 className='text-[#420075] font-[600]'>ASCII Characters and Binary Numbers System</h6>
                                    <p className='text-sm pt-[10px] mb-[10px]'>The (ASCII) American Standard Code for Information Interchange is an encoding system. Which was designed for old computers and other machines like telephone and telegraphic codes etc. it was then based on 128 symbols which include numbers, alphabets and special characters (punctuation marks, space and delete characters). At that time the commands used were few like start, wait, or complete. Today, with the evolving programs and number system, ASCII systems are used widely in almost every computing and telecom equipment.</p>
                                    <p className='text-sm pt-[10px] mb-[10px]'>A computer can only understand the number systems and the binary numbers are the most commonly used system in the machines. If you don’t know ASCII stores information technically in ones and zeros, the significant difference in both these formats is you can upload various text type files or CGI documents in ASCII but when it comes to files like audio, images, etc. then the binary mode is considered as it is used to send files as raw data. An ASCII is basically a character set that consists of 128 <span className='text-[#505050] font-[600]'>7-bit</span> characters.</p>
                                    <p className='text-sm pt-[10px] mb-[10px]'>Our ASCII to Binary converter can let you convert all the characters into the binary code. All the characters have been assigned a particular binary number of eight digits. For example, if you write the word “SEA,” you will see these numbers <span className='font-[#505050] font-[600]'>(01110011 01100101 01100001)</span>, where the first series represents the letter S and so on. As a MAC-based system uses these two formats for sending PostScript files, you can convert all the data to binary using our ASCII to Binary online converter tool.</p>
                                </div>
                                <div>
                                    <h6 className='text-[#420075] font-[600]'>ASCII Text To Binary Code – The Main Differences</h6>
                                    <p className='text-sm pt-[10px] mb-[10px]'>In ASCII, the protocol is assembled with data which is encoded with the values of ASCII. The minimal addition of controls that are added in the protocol is then translated by the printer. All the communications like Ethernet, parallel and serial support ASCII, and have considered it a standard.</p>
                                    <p className='text-sm pt-[10px] mb-[10px]'>If we talk about the files in a computer, they are comprised of tiny fragments of data, which is known as bits. The most common example of an ASCII file can be a text file with no formatting or styling. ASCII characters occupy 7-bits out of eight, which means seven bits are needed to represent an ASCII character.</p>
                                    <p className='text-sm pt-[10px] mb-[10px]'>Which also means you are not using the 8th part of the byte. A binary file doesn’t have such limitations and/or restrictions. An ASCII is used in various places today such as web pages, HTML, etc. The reason is each ASCII character has a unique function or meaning that can only be read by the browsers.</p>
                                    <p className='text-sm pt-[10px] mb-[10px]'>Whereas, Binary modes are used to send files that are executable, compressed or are images. If you have ever tried uploading an image in ASCII mode, then you might have noticed a mess displaying on the page where the picture was supposed to be viewed.</p>
                                    <p className='text-sm pt-[10px] mb-[10px]'>Which happens because the ASCII code has corrupted the coding because binary encoding is done in BCP (Binary Communication Protocol) where each byte is built in one of the 256-bit patterns. A binary file is a series of ones and zeros in compound configurations. What differs is these characters can be used to build text, images or any kind of data which means lesser characters are required to represent most of the elements of language and operator names than in the ASCII coding.</p>
                                </div>
                            </div>
                            <div>
                                <h3 className='text-[15px] font-bold m-0 py-[10px] text-[#420075]'>ASCII Characters To Binary Numbers Conversion Table</h3>
                                <div>
                                    <p className='text-sm pt-[10px] mb-[10px]'>Each character symbol must have an integer value representing it in the electronic device because all the electronic devices only deal with numbers (i.e “01100001” binary number representing “a” character) that’s why each number has its own ASCII code. So, with a standard representation for each character electronic devices can communicate with each other. Get binary codes of characters from the ASCII - binary character table.</p>
                                </div>
                            </div>
                            <div>
                                <div className=''>
                                    <table className="table-auto w-[100%] border-[1px] text-sm Conversion_table border-[#ccc]">
                                        <thead>
                                            <tr>
                                                <th className='text-start text-[#212529] text-[14px]'>ASCII</th>
                                                <th className='text-start text-[#212529] text-[14px]'>Binary</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>NUL</td>
                                                <td>00000000</td>

                                            </tr>
                                            <tr>
                                                <td>00000001</td>
                                                <td>SOH</td>
                                            </tr>
                                            <tr>
                                                <td>00000010</td>
                                                <td>STX</td>
                                            </tr>
                                            <tr>
                                                <td>00000011</td>
                                                <td>ETX</td>
                                            </tr>
                                            <tr>
                                                <td>00000100</td>
                                                <td>EOT</td>
                                            </tr>
                                            <tr>
                                                <td>00000101</td>
                                                <td>ENQ</td>
                                            </tr>
                                            <tr>
                                                <td>00000110</td>
                                                <td>ACK</td>
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
            <Footer />
        </>
    )
}

export default Asciitobinary