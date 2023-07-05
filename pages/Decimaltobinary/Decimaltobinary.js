import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import clear_txt from '../../Assets/Images/clear_txt.svg'
import upload_file from '../../Assets/Images/upload_file.svg'
import Footer from '@/Components/Footer/Footer'
import Header from '@/Components/Header/Header'

const sampleDToB = '84 104 97 116 32 105 115 32 115 97 109 112 108 101 32 116 101 120 116'
const Decimaltobinary = () => {
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
        reader.readAsText(file);
    }

    const handleSample = () => {
        inputRef.current.value = "";
        setText(sampleDToB)
        setFile('')
      }
  
      const handleClear = () => {
          inputRef.current.value = "";
          setText('')
          setFile('')
      }

    const decToBinary = (e) => {
        e.preventDefault()
       
        if(text !== ''){
            const isValidDecimal = /^\d+( \d+)*$/.test(text);
            const isValidBinary = /^[01 ]+$/.test(file);
            if (isValidDecimal || isValidBinary) {
                const decToB = text.split(' ').map(i => 
                    Math.floor(i).toString(2)).join(' ');
                    setAns(decToB)
            }else {
                toast.error('Please Add Only Decimal');
            }
        }else if (file !== '') {
            const isValidDecimal = /^\d+( \d+)*$/.test(text);
            const isValidBinary = /^[01 ]+$/.test(file);
            if (isValidDecimal || isValidBinary) {
                const fileDecToB = file.split(' ').map(i => 
                    Math.floor(i).toString(2)).join(' ');
                    setAns(fileDecToB)
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
                        <h1 className='text-[16px] sm:text-[22px] text-[#420075] md:text-2xl font-bold mb-[10px]'>Decimal To Binary</h1>
                    </div>
                    <div className='h-[98px] my-[20px] bg-[#80808014] max-w-[700px] m-auto'></div>
                    <div className='text-center md:flex items-center md:flex-wrap justify-center max-w-[700px] m-auto'>
                        <p className=' text-[#420075] md:w-[73%] w-[100%] md:pl-[50px] pl-[0px] text-[16px] font-[600]'>Enter your each decimal numbers with space:</p>
                        <button className='bg-[#420075] text-[14px] px-[10px] md:mt-[0px] mt-[10px] py-[5px] text-[#fff] rounded-md' onClick={handleSample}>Sample</button>
                    </div>
                    <div className='mt-[20px] relative'>
                        <div className='w-full  m-auto md:w-[50%] '>
                            <textarea cols="30" rows="10" placeholder='Paste Your Decimal Here' className='relative text-sm p-[10px] w-full min-h-[24vh] bg-[#f8eeff] focus:outline-0' 
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
                        <button className='btnlogin text-white py-[10px] px-[10px] sm:px-[40px] my-[20px]' onClick={decToBinary}>Convert To Binary</button>
                    </div>
                    <div className='flex bg-[#80808014]  max-w-[800px] m-auto my-[20px] min-h-[250px]'>{ans}</div>
                    <div className=' w-full lg:w-[900px] mt-[15px] m-auto card p-[15px] mb-[15px] bg-white border rounded-lg'>
                        <div>
                            <h3 className='text-[15px] font-bold mb-[10px] text-[#420075]'>Decimal And Binary Numbering Systems</h3>
                            <div className='my-[14px] pl-[40px]'></div>
                            <p className='text-sm mb-[10px]'>The decimal or “denary” binary counting system makes use of base ten numbers which is from 0 to 9. It is the most commonly known numbering system. In this system, every digit has a position and also a decimal point. The binary system, however, uses numbers in base two which is from 0 to 1. This system is, in fact, the simplest system because it only uses two digits which are 0 and 1. As a result, there is usually a need to convert the decimal code to binary, especially for experts in computer programming or such related engineering specialists.</p>
                        </div>
                        <div>
                            <h3 className='text-[15px] font-bold mb-[10px] text-[#420075]'>Decimal To Binary Calculator Because Manual Is Boring</h3>
                            <div className='my-[14px] pl-[40px]'></div>
                            <p className='text-sm mb-[10px]'>Converting decimal number to binary is popularly done by dividing the digit by 2 and writing out the remainder aside. After which the result/quotient is divided repeatedly by 2 until the quotient gets to zero. Reversing all the arranged remainders is what gives the binary equivalent. However, the process of this calculation can seem too long or stressful, particularly if you do not have so much time. Therefore, it becomes necessary to know how to convert decimal fractions to binary easily and quickly. Also, decimal to signed binary conversions needs to be accurate, particularly when there are long integer and remainder values.</p>
                        </div>
                        <div>
                            <h3 className='text-[15px] font-bold mb-[10px] text-[#420075]'>Online Decimal To Binary Converter</h3>
                            <div className='my-[14px] pl-[40px]'></div>
                            <p className='text-sm mb-[10px]'>In such a case, you would need to use a decimal to the binary calculator in converting the decimal code to binary online. When you search the internet, you would definitely find a lot of online conversion tools. However, not all of these services you accurately and easily. Basically, all you need to do is put in your decimal integer, click on convert to binary, and you get your answer in the binary system. Going through the <a href="#" className='text-[#420075] font-[600] underline'>Decimal to Binary</a> conversion method manually can result in errors and can slow down a process.</p>
                        </div>
                        <div>
                            <h3 className='text-[15px] font-bold mb-[10px] text-[#420075]'>How To Convert Decimal To Binary Online</h3>
                            <div className='my-[14px] pl-[40px]'></div>
                            <p className='text-sm mb-[10px]'>Therefore, at Small SEO Tools, our tool offers you easy means of converting decimal number to binary. You have the advantage of getting your calculations done accurately, quickly and efficiently. Not only this, our tool provides a way of converting the decimal code to binary code with solutions. You can explore this tool and observe how accurate the conversions are. When a decimal integer or dyadic fraction value is converted to binary, you can also recheck it to ensure that the decimal matches the original decimal value, the result will be an approximation of the original decimal number.</p>
                            <p>You can now get your calculations done easily with our decimal to the binary calculator in the following simple steps:</p>
                        <div className='pt-[16px]'>
                            <ul className='pl-[40px] list-disc'>
                                <li className='text-sm py-[3px]'>You will need hexadecimal to the binary table from where you will write down the hex numbers to represent each digit by its binary equivalent number.</li>
                                <li className='text-sm py-[3px]'>You will need to add more zeros if the current grouping number is less than four.</li>
                                <li className='text-sm py-[3px]'>After which you will need to concatenate the digits together to begin assigning.</li>
                            </ul>
                        </div>
                        </div>
                        <div>
                            <p className='text-sm py-[12px]'>Not every online <a href="#" className='text-[#420075] font-[600] underline'>Decimal to Binary Converter</a> is reliable as ours is. Besides, you can do multiple conversions, and our converter is guaranteed to get them all done freely. The tool has served different users over time, both experts and non-experts, amateurs and even students. Every user who needs to have decimal code to binary code conversions done need not search too far anymore.</p>
                        </div>
                      
                        <div className='py-[20px] text-sm'>
                            <p>Note: You can also do some other conversions like: <a href="" className='text-[#420075] underline'>binary to text</a> or <a href="" className='text-[#420075]  underline'>text to binary</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </>
    )
}

export default Decimaltobinary