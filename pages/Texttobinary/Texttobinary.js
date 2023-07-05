import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import upload_file from '../../Assets/Images/upload_file.svg'
import clear_txt from '../../Assets/Images/clear_txt.svg'
import Header from '@/Components/Header/Header'
import Footer from '@/Components/Footer/Footer'

const Texttobinary = () => {
    const inputRef = useRef(); 
    const [text, setText] = useState('')
    const [ans, setAns] = useState('')
    const [file, setFile] = useState('')

    const handleSample = () => {
        inputRef.current.value = "";
        setText('That is sample text')
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
        reader.readAsText(file);
    }

    const handleClear = () => {
        inputRef.current.value = "";
        setText('')
        setFile('')
    }

    const texttoBinary = (e) => {
        e.preventDefault()
        let arr=[];
        let arrBinary = [];

        if(text !== ''){
            for (let i = 0; i < text.length; i++) {
                arr.push(text.charCodeAt(i));
                arrBinary.push(arr[i].toString(2));
            }
        } else if(file !== '') {
            for (let i = 0; i < file.trim().length; i++) {
                arr.push(file.charCodeAt(i));
                arrBinary.push(arr[i].toString(2));
            }
        }else {
            toast.error('No Text found! Please add some Text');
            return;
        }
        setAns(arrBinary.join(" "))
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
                            <h1 className='text-[16px] sm:text-[22px] text-[#420075] md:text-2xl font-bold mb-[10px]'>Text To Binary Converter</h1>
                            <p className='md:w-[50%] w-full mx-auto text-sm font-normal'>Convert any ASCII Text into Binary numbers. Text to Binary tool is one of the free tools provided by SST for Text conversion. Just enter any English text, of a single character, word, or a long string to convert into a binary code.</p>
                        </div>
                        <div className='h-[98px] my-[20px] bg-[#80808014] max-w-[700px] m-auto'></div>
                        <div className='text-center md:flex items-center md:flex-wrap justify-center max-w-[700px] m-auto'>
                            <p className=' text-[#420075] md:w-[73%] w-[100%] md:pl-[50px] pl-[0px] text-[16px] font-[600]'>Enter or paste Text to convert</p>
                            <button className='bg-[#420075] text-[14px] px-[10px] md:pt-[5px] mt-[10px] py-[5px] text-[#fff] rounded-md' onClick={handleSample}>Sample</button>
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
                            <button className='btnlogin text-white py-[10px] px-[10px] sm:px-[40px] my-[20px]' onClick={texttoBinary}>Convert To Binary</button>
                        </div>
                        <div className='flex bg-[#80808014]  max-w-[800px] m-auto my-[20px] min-h-[250px]'>{ans}</div>
                        <div className=' w-full lg:w-[900px] mt-[15px] m-auto card p-[15px] mb-[15px] bg-white border rounded-lg'>
                            <div>
                                <h3 className='text-[15px] font-bold mb-[10px] text-[#420075]'>About Text To Binary Conversion Online Tool.</h3>
                                <div className='my-[14px] pl-[40px]'></div>
                                <p className='text-sm mb-[10px]'>At SmallSEOTools, our text to binary converter is your best option to get your English words converted to binary digits (binary numbers 0 and 1) that can be interpreted via electronic machines. When Translated, the text becomes a long string of numbers, due to the fact that its own 8-bits code (one byte) represents each letter. For instance, a single letter A is represented in binary as one byte 01000001.</p>
                            </div>
                            <div className='pt-[16px]'>
                                <h3 className='text-[15px] font-bold mb-[10px] text-[#420075]'>Why We Use Text Converter to Get Binary Code?</h3>
                                <div className='my-[14px] pl-[40px]'></div>
                                <p className='text-sm mb-[10px]'>In the computer coding system, binary code is basically used to represent text or instructions for a system to interpret. You need to interact with the electronic device using the language that it understands, and this is basically done with Text converter to provide binary code. There are quite a number of reasons you might require an English text to a binary translator. Binary code has been used for centuries and is commonly used in computers. When you need to convert text into a string of binary numbers consisting of 0 and 1, you need an efficient letter to number converter.</p>
                            </div>
                            <div className='pt-[16px]'>
                                <h3 className='text-[15px] font-bold mb-[10px] text-[#420075]'>Save Time And Energy With Conversion of Text File To Binary File</h3>
                                <div className='my-[14px] pl-[40px]'></div>
                                <p className='text-sm mb-[10px]'>When you need a quick functional machine to confirm that what will be the binary equivalent number of the ASCII text, it would be advisable to use an online letter to binary conversion tool. This is less challenging and can be done in a short time.</p>
                                <p className='text-sm mb-[10px]'>Converting English Text to Binary will allow you to send an encoded message which any random person wouldn’t have access to, thereby securing sensitive information from unauthorized access. The actual purpose of ASCII text is to use in electronic equipment which is a standard for character-sets</p>
                                <p className='text-sm mb-[10px]'>Our easy-to-use text converter enables you to convert letters to binary for free and without the constraints of unnecessary details or instructions. It is an online-based tool that does not require any special installation or expertise before it can be used. All that is required is that you give your text and it would get converted to binary codes in a matter of seconds.</p>
                            </div>
                            <div className='pt-[16px]'>
                                <h3 className='text-[15px] font-bold mb-[10px] text-[#420075]'>How To Use Text To Binary Tool</h3>
                                <div className='my-[14px] pl-[40px]'></div>
                                <ul className='list-disc md:ml-[40px] ml-[20px]'>
                                    <li className='text-sm'>Get started by visiting our tool’s web page at https://smallseotools.com/text-to-binary</li>
                                    <li className='text-sm'>Enter text in the box indicated or upload your text file.</li>
                                    <li className='text-sm'>Click on “Convert to Binary” button</li>
                                    <li className='text-sm'>That’s it! Your text immediately gets displayed in its binary form. Save to clipboard or download in a text file.</li>
                                </ul>
                            </div>
                            <div>
                                <p className='text-sm py-[20px]'>if you want to translate ASCII number to binary code, you can use our <a href="" className='text-[#420075] underline'>ASCII to binary converter</a></p>
                            </div>
                            <div>
                                <p className='text-sm py-[10px]'>Our tool functions as a text to binary code generator where words are accurately translated to binary codes without mistakes. Doing this manually might result in errors that would affect the final outcome of the code. Thus, the best option would be using a reliable and efficient text file to binary file converter. Just the same way a <a href="#" className='text-[#420075] underline'>binary to text decoder</a> might be needed to decode what is the English text encrypted in binary code, our tool can reverse this function and encode plain text. You can try this out by trying to convert the letters of your name to numbers in binary. You are however not limited to one-word texts. You can equally paste a long English word of string and simply convert a complete text file to binary format. Try out our <a href="" className='text-[#420075] underline'> Text to Binary Converter</a> today and get your tasks done with ease and accuracy.</p>
                            </div>
                            <div className='pt-[16px]'>
                                <h3 className='text-[15px] font-bold mb-[10px] text-[#420075]'>How to Convert Text to Binary Manually</h3>
                                <div className='my-[14px] pl-[40px]'></div>
                                <p className='text-sm mb-[10px]'>Although there is a manual calculation that can be done. See ASCII(text) to binary table below, Translate text to binary with the help of ASCII table It’s just simple math, ASCII pronounced as ask-ee, ASCII is the acronym for the American Standard Code for Information Interchange.</p>
                            </div>
                            <div className='flex pt-[20px]'>
                                <div className='h-[48px] border-[1px] border-[#ccc] w-[100%]'></div>
                                <div className='h-[48px] border-[1px] border-[#ccc] w-[100%]'></div>
                            </div>
                            <div className='pt-[16px]'>
                                <h3 className='text-[15px] font-bold mb-[10px] text-[#420075]'>Text To Binary Conversion Table</h3>
                                <div className='my-[14px] pl-[40px]'></div>
                                <p className='text-sm mb-[10px]'>Get the binary numbers of English text from the Text - Binary conversion table</p>
                            </div>
                            <div className=''>
                                <table className="table-auto w-[100%] border-[1px] text-sm Conversion_table border-[#ccc]">
                                    <thead>
                                        <tr>
                                            <th className='text-start text-[#212529] text-[14px]'>Text</th>
                                            <th className='text-start text-[#212529] text-[14px]'>Binary</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>NUL</td>
                                            <td>SOH</td>

                                        </tr>
                                        <tr>
                                            <td>SOH</td>
                                            <td>00000001</td>
                                        </tr>
                                        <tr>
                                            <td>STX</td>
                                            <td>00000010</td>
                                        </tr>
                                        <tr>
                                            <td>ETX</td>
                                            <td>00000011</td>
                                        </tr>
                                        <tr>
                                            <td>EOT</td>
                                            <td>00000100</td>
                                        </tr>
                                        <tr>
                                            <td>ENQ</td>
                                            <td>00000101</td>
                                        </tr>
                                        <tr>
                                            <td>ACK</td>
                                            <td>00000110</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className='pt-[20px] pb-[40px]'>
                                <table className="table-auto w-[100%] border-[1px] text-sm Conversion_table border-[#ccc]">
                                    <thead>
                                        <tr>
                                            <th className='text-start text-[#212529] text-[14px]'>Binary</th>
                                            <th className='text-start text-[#212529] text-[14px]'>Text (ASCII)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>00000000</td>
                                            <td>NUL</td>

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

                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Texttobinary