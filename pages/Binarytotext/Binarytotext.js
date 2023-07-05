import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import clear_txt from '../../Assets/Images/clear_txt.svg'
import upload_file from '../../Assets/Images/upload_file.svg'
import Header from '@/Components/Header/Header'
import Footer from '@/Components/Footer/Footer'

const sampleBToT = '01010100 01101000 01100001 01110100 0100000 01101001 01110011 0100000 01110011 01100001 01101101 01110000 01101100 01100101 0100000 01110100 01100101 01111000 01110100'
const Binarytotext = () => {
    const inputRef = useRef(); 
    const [text, setText] = useState('')
    const [ans, setAns] = useState('')
    const [file, setFile] = useState('')

    const handleSample = () => {
        inputRef.current.value = ""
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
    
    const handleTextChange = (e) => {
        setText(e.target.value)
    }
    const binaryToText = (e) => {
        e.preventDefault();

        let binCode = [];

        if (text !== '') {
            const isValidBinary = /^[01\s]+$/.test(text);

            if (isValidBinary) {
                const newBin = text.split(" ");
                for (let i = 0; i < newBin?.length; i++) {
                    binCode.push(String.fromCharCode(parseInt(newBin[i], 2)));
                }
                setAns(binCode.join(""));
            } else {
                toast.error('Please Add Only Binary');
            }
        } else if (file !== '') {
            const isValidBinary = /^[01\s]+$/.test(file);
            if (isValidBinary) {
                const fileBinary = file.split(" ");
                for (let i = 0; i < fileBinary?.length; i++) {
                    binCode.push(String.fromCharCode(parseInt(fileBinary[i], 2)));
                }
                setAns(binCode.join(""));
            } else {
                toast.error('Please Add Only Binary');
            }
        } else {
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
                            <h1 className='text-[16px] sm:text-[22px] text-[#420075] md:text-2xl font-bold mb-[10px]'>BINARY TO TEXT</h1>
                            <p className='md:w-[50%] w-full mx-auto text-sm font-normal'>Binary to text converter is a completely free tool that helps you to convert binary to English text online. Simply enter binary and get the text for free.</p>
                        </div>
                        <div className='h-[98px] my-[20px] bg-[#80808014] max-w-[700px] m-auto'></div>
                        <div className='text-center md:flex items-center md:flex-wrap justify-center max-w-[700px] m-auto'>
                            <p className=' text-[#420075] md:w-[73%] w-[100%] md:pl-[50px] pl-[0px] text-[16px] font-[600]'>Enter or paste your Binary:</p>
                            <button className='bg-[#420075] text-[14px] px-[10px] md:pt-[0px] mt-[10px] py-[5px] text-[#fff] rounded-md' onClick={handleSample}>Sample</button>
                        </div>
                        <div className='mt-[20px] relative'>
                            <div className='w-full  m-auto md:w-[50%]'>
                                <textarea cols="30" rows="10" placeholder='Paste Your Text Here' className='relative text-sm p-[10px] w-full min-h-[24vh] bg-[#f8eeff] focus:outline-0' 
                                    value={file === '' ? text : file}
                                    onChange={handleTextChange}
                                />
                            </div>
                            <div className='flex items-center justify-between w-full m-auto md:w-[50%]'>
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
                            <button className='btnlogin text-white py-[10px] px-[10px] sm:px-[40px] my-[20px]' onClick={binaryToText}>Convert To Binary</button>
                        </div>
                        <div className='flex bg-[#80808014]  max-w-[800px] m-auto my-[20px] min-h-[250px]'>{ans}</div>
                        <div className=' w-full lg:w-[900px] mt-[15px] m-auto card p-[15px] mb-[15px] bg-white border rounded-lg'>
                            <div>
                                <h3 className='text-[15px] font-bold mb-[10px] text-[#420075]'>Use The Best Binary To Text Converter Online</h3>
                                <div className='my-[14px] pl-[40px]'></div>
                                <p className='text-sm mb-[10px]'>Converting binary to the English alphabet has been made very easy with SmallSEOTools' binary to text tool. You can now easily get it converted to information. This can be done for free, without registration or installation stress, and within seconds. Our online converter is suited to translate a long stretch of binary code to words or in a single letter which depends on your input you enter in our online binary code translator.</p>
                            </div>
                            <div className='pt-[16px]'>
                                <h3 className='text-[15px] font-bold mb-[10px] text-[#420075]'>How To Convert Binary To Text?</h3>
                                <div className='my-[14px] pl-[40px]'></div>
                                <p className='text-sm py-[5px]'>To convert binary to English letters using the best binary to text converter, take these steps;</p>
                                <p className='text-sm py-[5px]'>Step 1: Enter or paste your binary into the text box.</p>
                                <p className='text-sm py-[5px]'>Step 2: Click on <span className='font-[600]'>“Convert to Text”</span></p>
                                <p className='text-sm py-[5px]'>Step 3: The tool will convert your binary Input e.g (01000001), into Plain Text (A)</p>
                                <p className='text-sm py-[5px]'>The right result is provided immediately.</p>
                                <p className='text-sm py-[5px]'>Although there are multiple online binary to text converters, our tool ensures accuracy in every task. Some tools help you convert binary to text online and for its vice versa, you can try <a href="" className='text-[#420075] underline'>Text to Binary Converter.</a> We equally have specific tools for the two distinct tasks.</p>

                            </div>
                            <div className='pt-[16px]'>
                                <h3 className='text-[15px] font-bold mb-[10px] text-[#420075]'>Ensure You Input The Right Code In Binary to Text Converter</h3>
                                <div className='my-[14px] pl-[40px]'></div>
                                <p className='text-sm mb-[10px]'>To get accurate English text, make sure you input the right binary number in the binary to English converter. You must, however, ensure that the right code is inputted from you to have the accurate result from our converter. Using a binary to English text converter saves you some of the stress of learning how the binary system works. Knowing that each letter of the word has a corresponding binary value. It is simply impossible to memorize what each letter represents in binary. This is why you need a binary to plain text converters such as ours which is versatile and super-efficient. While computers make use of these codes to function, they still need to be interpreted, particularly when you have no coding experience. Coding with binary has been made easy with tools that can aid in encoding and decoding data. Try out our binary-to-text converter today and get smooth results</p>
                            </div>
                            <div className='pt-[16px]'>
                                <h3 className='text-[15px] font-bold mb-[10px] text-[#420075]'>What Are Binary Numbers?</h3>
                                <div className='my-[14px] pl-[40px]'></div>
                                <p className='text-sm mb-[10px]'>In digital electronics, a binary number is expressed in the base of 2 numerical numbers. Which is (0, 1). The computer reads these bits as On and Off respectively (0 as off/false & 1 as on/true). The digital term BIT means "Binary digIT” The bit is the smallest unit of data in a computer system that represents a single binary value, either 0 or 1. The byte is equal to 8 bits, a combination of 8 bits (byte) used to encode a single text character</p>
                                <p className='text-sm py-[5px]'>Representation of binary value (01001101) equivalent text (M) in eight (bits) switches.</p>
                                <p className='text-sm py-[5px]'>The computer cannot understand human language, and humans usually don’t understand binary language (0,1). Then how can we transmit our instructions to the computer? Obviously, we need a tool that can convert human language into binary digits or digits into plain text so we can understand it easily. SST offers you a fantastic free tool that can convert a binary to words that can easily be understood and printed by humans.</p>
                            </div>
                            <div className='pt-[16px]'>
                                <h3 className='text-[15px] font-bold mb-[10px] text-[#420075]'>What term can be used to describe anything that uses binary numbers?</h3>
                                <div className='my-[14px] pl-[40px]'></div>
                                <p className='text-sm mb-[10px]'>Usually, the devices use binary numbers. The term "Digital" can be used to describe them. Mostly all of the digital data is stored in binary format.</p>
                            </div>
                            <div className='pt-[16px]'>
                                <h3 className='text-[15px] font-bold mb-[10px] text-[#420075]'>Binary to English Converter: Convert Binary To English Text</h3>
                                <div className='my-[14px] pl-[40px]'></div>
                                <p className='text-sm mb-[10px]'>When you come across a long stretch of information written in codes of 0s and 1s, you might wonder how to translate it into plain text. These details cannot be decoded easily to normal text. To convert binary to text online, The tool will save you time by directly converting binary into its English text. If you want to do it manually first, you will need to change binary to decimal, then decimal to ASCII value (English Text), which is a very time-consuming task. To change it manually, you can take help from the Binary table below.</p>
                            </div>
                            <div className='pt-[16px]'>
                                <h3 className='text-[15px] font-bold mb-[10px] text-[#420075]'>Converting Manually Can Be Tiring – Use Binary to English Converter </h3>
                                <div className='my-[14px] pl-[40px]'></div>
                                <p className='text-sm py-[10px]'>This would be a long process when converting every long string or even 8 bits code to plain text. Translating a length of code into text can be a frightening experience due to the long string of numbers that would be translated to only a few words in a text. This can, however, be made easy when you use an online <a href="" className='text-[#420075] underline'>binary to text converter</a></p>
                                <p className='text-sm py-[10px]'>Binary code is mostly used and interpreted by computers. It is functional in passing instructions to the computer. However, when the computer or any electronic device presents results in binary form, they would need it to translate to text for this purpose; they use the binary decoder. It is tough to understand binary digits for the human so electronic devices use a binary decoder to present it into any human-readable language (English text)</p>
                                <p className='text-sm py-[10px]'>Some of the binary numbers and their meaning in English text (ASCII)</p>
                            </div>
                            <div className='pt-[16px]'>
                                <h3 className='text-[15px] font-bold mb-[10px] text-[#420075]'>What does binary digit 01000001 mean in Text (ASCII)?</h3>
                                <div className='my-[14px] pl-[40px]'></div>
                                <p className='text-sm mb-[10px]'>This stands for the uppercase alphabet “A” in ASCII text, which you can verify from ASCII Table and with the Binary to plain text converter.</p>
                            </div>
                            <div className='pt-[16px]'>
                                <h3 className='text-[15px] font-bold mb-[10px] text-[#420075]'>What does binary number 01100001 mean in English Text (ASCII)?</h3>
                                <div className='my-[14px] pl-[40px]'></div>
                                <p className='text-sm mb-[10px]'>This stands for the lowercase letter “a” in ASCII text; use the binary to English words conversion tool given at the start to verify the number or use the ASCII Table.</p>
                            </div>
                            <div className='pt-[16px]'>
                                <h3 className='text-[15px] font-bold mb-[10px] text-[#420075]'>Can I change Binary digits to Decimal too?</h3>
                                <div className='my-[14px] pl-[40px]'></div>
                                <p className='text-sm mb-[10px]'>Yes, you can! if you want to change any binary number first into a decimal value, use binary to a <a href="" className='text-[#420075] underline'>decimal translator</a></p>
                            </div>
                            <div className='pt-[16px]'>
                                <h3 className='text-[15px] font-bold mb-[10px] text-[#420075]'>Binary Numbers To ASCII Characters Conversion Table</h3>
                                <div className='my-[14px] pl-[40px]'></div>
                                <p className='text-sm mb-[10px]'>Get the English text of binary numbers from the Binary text conversion table</p>
                            </div>
                            <div className='pt-[10px] pb-[40px]'>
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
                        </div>

                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Binarytotext