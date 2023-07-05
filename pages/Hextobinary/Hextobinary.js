import React, { useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import clear_txt from '../../Assets/Images/clear_txt.svg'
import upload_file from '../../Assets/Images/upload_file.svg'
import Image from 'next/image'
import Header from '@/Components/Header/Header'
import Footer from '@/Components/Footer/Footer'

const sampleHToB = '54 68 61 74 20 69 73 20 73 61 6d 70 6c 65 20 74 65 78 74'

function Hextobinary() {
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
        setText(sampleHToB)
        setFile('')
    }

    const handleClear = () => {
        inputRef.current.value = "";
        setText('')
        setFile('')
    }

    const hexToBinary = (e, str) => {
        e.preventDefault()

        if(text !== ''){
            const isValidBinary = /^[0-9A-Fa-f ]+$/.test(text);
            if (isValidBinary) {
                const hexTobin = text.split(' ').map(i => 
                    parseInt(i, 16).toString(2)).join(' ');
                    setAns(hexTobin)
            }else {
                toast.error('Please Add Only Hex Value');
            }
        } else if (file !== ''){
            const isValidBinary = /^[0-9A-Fa-f ]+$/.test(file);
            if (isValidBinary) {
                const hexFileTobin = file.split(' ').map(i => 
                    parseInt(i, 16).toString(2)).join(' ');
                    setAns(hexFileTobin)
            }else {
                toast.error('Please Add Only Hex Value');
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
                            <h1 className='text-[16px] sm:text-[22px] text-[#420075] md:text-2xl font-bold mb-[10px]'>Hex To Binary</h1>
                        </div>
                        <div className='h-[98px] my-[20px] bg-[#80808014] max-w-[700px] m-auto'></div>
                        <div className='text-center md:flex items-center md:flex-wrap justify-center max-w-[700px] m-auto'>
                            <p className=' text-[#420075] md:w-[73%] w-[100%] md:pl-[50px] pl-[0px] text-[16px] font-[600]'>Enter your Hex numbers with space:</p>
                            <button className='bg-[#420075] text-[14px] px-[10px] md:mt-[0px] mt-[10px] py-[5px] text-[#fff] rounded-md' onClick={handleSample}>Sample</button>
                        </div>
                        <div className='mt-[20px] relative'>
                            <div className='w-full  m-auto md:w-[50%] '>
                                <textarea name="" id="" cols="30" rows="10" placeholder='Paste Your HEX Here' className='relative text-sm p-[10px] w-full min-h-[24vh] bg-[#f8eeff] focus:outline-0' 
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
                            <button className='btnlogin text-white py-[10px] px-[10px] sm:px-[40px] my-[20px]' onClick={hexToBinary}>Convert To Binary</button>
                        </div>
                        <div className='flex bg-[#80808014]  max-w-[800px] m-auto my-[20px] min-h-[250px]'>{ans}</div>
                        <div className=' w-full lg:w-[900px] mt-[15px] m-auto card p-[15px] mb-[15px] bg-white border rounded-lg'>
                            <div>
                                <h3 className='text-[15px] font-bold mb-[10px] text-[#420075]'>From Hexadecimal To Binary – The Trouble-Free Way</h3>
                                <div className='my-[14px] pl-[40px]'></div>
                                <p className='text-sm mb-[10px]'>Computers and other related machines use binary numbers for storing data. A binary digit also known as a bit is the smallest unit of data in computing and is represented in ones and zeros. If we talk about the transistors in a machine, it is a tiny switch which upon receiving electrical signals activates, it uses signals like 0 and 1 which represent off and on.</p>
                                <p className='text-sm py-[10px]'>Just like a computer machine that run on a set of instructions which are converted into machine code upon receiving, and they are natural binary numbers. A binary number is more manageable for a machine to understand but not for a human and today there isn’t a large number of people who deal with machine language.</p>
                                <p className='text-sm py-[10px]'>When developers and programmers are coding, their every line and letter is translated using a translator to help a processor understand the instructions for execution. It is without a doubt easy for computers to understand, but as not for humans they convert it to <span className='text-[#505050] font-[bold]'>hexadecimal values</span> to shorten and to better perceive the code.</p>
                                <p className='text-sm py-[10px]'>The hexadecimal is also known as hex or <span className='text-[#505050] font-[600]'>base 16</span> and is used to share values in the numerical form. Hex uses extra numbers that help it to create large quantities; it also incorporates the first six letters of Alphabets (A, B, C, D, E, and F). The most used numeral system in the world, after that binary, is the most popular one, and we all know the reason that it is a language understood by computers.</p>
                            </div>

                            <div>
                                <h3 className='text-[15px] font-bold mb-[10px] text-[#420075]'>Hex to Binary Utilization</h3>
                                <div className='my-[14px] pl-[40px]'></div>
                                <p className='text-sm mb-[10px]'>The binary system is utilized in many ways, one of which is the files we store on a computer, either image or audio, can be easily transformed to binary by assigning each character or pixel a specific binary number.</p>
                                <p className='text-sm'>With the help of <span className='text-[#505050] font-[600]'>hex Calculator</span>, you can turn all the hex values without performing any calculations manually using a calculator or a pen. The <a href="" className='text-[#420075] font-[600] underline'>Hex to Binary</a> conversion method involves multiple steps if done manually which are:</p>
                            </div>
                            <div className='pt-[16px]'>
                                <ul className='pl-[40px] list-disc'>
                                    <li className='text-sm py-[3px]'>You will need hexadecimal to the binary table from where you will write down the hex numbers to represent each digit by its binary equivalent number.</li>
                                    <li className='text-sm py-[3px]'>You will need to add more zeros if the current grouping number is less than four.</li>
                                    <li className='text-sm py-[3px]'>After which you will need to concatenate the digits together to begin assigning.</li>
                                </ul>
                            </div>
                            <div>
                                <p className='text-sm py-[12px]'>Hex numbers are no doubt used at various places like in an assembly language for processing instructions and for bytes to represent each value as a hex. However, binary numbers are more manageable when it comes to calculations because you will be using only two numbers zero and one.</p>
                                <p className='text-sm py-[12px]'>There is a reason for why computers only use binary numbers it is because they represent on and off plus machines can just read and store data in this format. In I.T there are many places where binary numbers are utilized, one of which is the code of developers, all the colors are represented in hex values, but for storing files on a computer, they are translated to binary.</p>
                                <p className='text-sm py-[12px]'>Today, in subjects like math and computer, people always talk about equations, where the binary form is present in both which helps us better understand the machine language made of ones and zeros. The above steps can take a lot of your time when we are talking about a large group of hex numbers no doubt while reading them, they seem short because they are a better representation of binary digits, but when you convert them, it can become a really large file.</p>
                            </div>
                            <div>
                                <h3 className='text-[15px] font-bold mb-[10px] text-[#420075]'>Binary Converter Tool Without Any Hex To Binary Formula</h3>
                                <div className='my-[14px] pl-[40px]'></div>
                                <p className='text-sm mb-[10px]'>Hex to binary online conversion is entirely trouble-free as compared to manual conversion. Our Hexadecimal to Binary encoder doesn’t require any additional usage of software or asks for extra permissions. You just need to follow some easy below given steps to convert from hexadecimal to binary code:</p>
                            </div>
                            <div className='pt-[16px]'>
                                <ul className='flex pt-[10px]'>
                                    <span className='px-[20px]  text-black'>1.</span>
                                    <li className='text-sm'>When you have opened the page that comes with title <a href="#" className='text-[#420075] underline font-[600]'>Hex Converter</a> online, you will find a text field where you can type your binary code or paste it from the file if you already have it stored on your computer, as shown in the image:
                                    </li>
                                </ul>
                                <ul className='flex pt-[10px]'>
                                    <span className='px-[20px]  text-black'>2.</span>
                                    <li className='text-sm'>There’s an example of hexadecimal values pasted in the text box, and when you hit the “Process” button after completing the first step, the results will be displayed with not even a second delay below the tool, like this:
                                    </li>
                                </ul>
                                <ul className='flex pt-[10px] pb-[40px]'>
                                    <span className='px-[20px] text-black'>3.</span>
                                    <li className='text-sm'>You can copy the code either by highlighting it or pressing the “Copy to clipboard” button as shown in the above image.
                                    </li>
                                </ul>
                            </div>
                            <div className='py-[20px] text-sm'>
                                <p>Note: You can also do some other conversions like: <a href="" className='text-[#420075] underline'>binary to text</a> or <a href="" className='text-[#420075] underline'>text to binary</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Hextobinary