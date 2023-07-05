import React, { useState } from 'react'
import Footer from '@/Components/Footer/Footer'
import Header from '@/Components/Header/Header'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Percentagecalc = () => {
    const [value1, setValue1] = useState()
    const [value2, setValue2] = useState()
    const [value3, setValue3] = useState()
    const [value4, setValue4] = useState()
    const [value5, setValue5] = useState()
    const [value6, setValue6] = useState()
    const [vChange, setVchange] = useState()
    const [vChange2, setVchange2] = useState()
    const [percent, setPercent] = useState()
    const [fraction, setFraction] = useState()
    const [resultDeci, setResultDeci] = useState()
    const [output, setOutput] = useState({
        result1: '',
        result2: '',
        result3: '',
        pChange: '',
        resultConv: '',
        resultDeci : null
    })
    const handlePercentage = () => {
        if(value1 === undefined && value2 === undefined){
            toast.error('Please Enter Values To Calculate')
        }else {
            setOutput({result1: !isNaN(value1 * value2) / 100})
        }
    }
    const handlePercentage2 = () => {
        if(value3 === undefined && value4 === undefined){
            toast.error('Please Enter Values To Calculate')
        }else {
            const percentage = (value3 * 100) / value4
            setOutput({result2: !isNaN(percentage) && `${percentage.toFixed(2)}%`})
        }
    }
    const handlePercentage3 = () => {
        if(value5 === undefined && value6 === undefined){
            toast.error('Please Enter Values To Calculate')
        }else {
            const percentage = (value5 / value6) * 100
            setOutput({result3: !isNaN(percentage) && percentage.toFixed(2)})
        }
    }
    const handleReset = () => {
        setValue1('')
        setValue2('')
        setValue3('')
        setValue4('')
        setValue5('')
        setValue6('')
        setOutput({
            result1: '',
            result2: '',
            result3: ''
        })
    }
    const handleChangePer = () => {
        if(vChange === undefined && vChange2 === undefined){
            toast.error('Please Enter Values To Calculate')
        }else {
            const changeVal = vChange2 - vChange
            const incPer = (changeVal / vChange) *100
            setOutput({pChange: incPer.toFixed(2)})
        }
    }
    const handleRstChange = () => {
        setVchange('')
        setVchange2('')
        setOutput({
            pChange: ''
        })
    }
    const handlePerConv = () => {
        if(percent === undefined){
            toast.error('Please Enter Values To Calculate')
        }else {
            setResultDeci(percent / 100)
            setOutput({resultConv: percent})
            if(percent){
                setFraction(100)
            }
        }
    }
    const handleRstConv = () => {
        setPercent('')
        setFraction('')
        setResultDeci('')
        setOutput({ resultConv: '' })
    }
    return (
        <>
            <Header />
            <div className="h-[98px] my-[20px] bg-[#80808014] max-w-[700px] m-auto"></div>
            <div className='mainbg max-w-[1260px] m-auto px-[15px] py-[10px]'>
                <div className=''>
                    <div className='text-center'>
                        <h1 className='text-[16px] sm:text-[22px] text-[#420075] md:text-2xl font-bold mb-[10px]'>Percentage Calculator</h1>
                        <p className='text-sm md:w-[70%] w-[100%] mx-auto font-normal'>Our percentage calculator helps to calculate the exact percentage of numbers online. You can find the percentage in three ways, Percentage calculation in phrases, Percentage change calculation, and Percentage conversions</p>
                    </div>
                    <div className='flex bg-[#80808014] max-w-[700px] m-auto items-center my-[20px] min-h-[250px]'>
                        <div></div>
                        <div></div>
                    </div>
                    <h2 className='mb-3 text-[22px] text-center text-[#420075] font-bold'>Percentage Calculator in Common Phrases</h2>
                    <div className='card py-[20px]  mb-7  max-w-[700px] m-auto '>
                        <div className='md:overflow-hidden overflow-auto'>
                            <div className='px-[15px] mb-[20px] border-b border-[#ccc] md:w-[100%] w-[650px] md:overflow-x-hidden pb-[20px]'>
                                <div className='flex items-center justify-between mb-5'>
                                    <p className='text-sm'>What is</p>
                                    <input type="number" className='border border-[#ccc] focus:outline-0 px-[10px] w-[100px] h-[40px]' 
                                        value={value1} 
                                        onChange={(e) => setValue1(e.target.value)}
                                    />
                                    <p className='text-sm'>% of</p>
                                    <input type="number" className='border border-[#ccc] focus:outline-0 px-[10px] w-[100px] h-[40px]' 
                                        value={value2} 
                                        onChange={(e) => setValue2(e.target.value)}
                                    />
                                    <ToastContainer theme="colored"/>
                                    <button className='bg-[#8229c7] text-white rounded-md py-[8px] px-[20px]' onClick={handlePercentage}>Calculate</button>
                                    <input type="text" className='border border-[#ccc] focus:outline-0 px-[10px] w-[100px] h-[40px]' readOnly 
                                        value={output.result1 === 0 ? '' : output.result1}
                                    />
                                </div>
                                <div className='flex items-center justify-between mb-5'>
                                    <input type="number" className='border border-[#ccc] focus:outline-0 px-[10px] w-[100px] h-[40px]' 
                                        value={value3} 
                                        onChange={(e) => setValue3(e.target.value)}
                                    />
                                    <p className='text-sm mx-[20px]'>is what % of</p>
                                    <input type="number" className='border border-[#ccc] focus:outline-0 px-[10px] w-[100px] h-[40px]' 
                                        value={value4} 
                                        onChange={(e) => setValue4(e.target.value)}
                                    />
                                    <button className='bg-[#8229c7] text-white py-[8px] rounded-md px-[20px]' onClick={handlePercentage2}>Calculate</button>
                                    <input type="text" readOnly className='border border-[#ccc] focus:outline-0 px-[10px] w-[100px] h-[40px]' 
                                        value={output.result2 !== false ? output.result2 : ''}
                                    />
                                </div>
                                <div className='flex items-center justify-between'>
                                    <input type="number" className='border border-[#ccc] focus:outline-0 px-[10px] w-[100px] h-[40px]' 
                                        value={value5} 
                                        onChange={(e) => setValue5(e.target.value)}
                                    />
                                    <p className='text-sm'>is</p>
                                    <input type="number" className='border border-[#ccc] focus:outline-0 px-[10px] w-[100px] h-[40px]' 
                                        value={value6} 
                                        onChange={(e) => setValue6(e.target.value)}
                                    />
                                    <p className='text-sm'>is of what?</p>
                                    <button className='bg-[#8229c7] text-white rounded-md py-[8px] px-[20px]' onClick={handlePercentage3}>Calculate</button>
                                    <input type="text" readOnly className='border border-[#ccc] focus:outline-0 px-[10px] w-[100px] h-[40px]' 
                                        value={output.result3 !== false ? output.result3 : ''}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center'>
                            <button className=' bg-[#8229c7] text-[#fff] rounded-md h-[40px] w-[100px]' onClick={handleReset}>Reset</button>
                        </div>
                    </div>
                    <h2 className='mb-3 text-[22px] text-center text-[#420075] font-bold'>Percentage Change</h2>
                    <div className='card py-[20px]  mb-7   max-w-[700px] m-auto'>
                        <p className='text-center pb-[20px] text-sm text-[#505050] font-[500]'>What is the percentage change</p>
                        <div className='md:overflow-hidden overflow-auto'>
                            <div className='px-[15px] md:w-[100%] w-[650px] overflow-x-scroll'>
                                <div className='flex items-center border-b border-[#ccc] pb-[20px] justify-between mb-5'>
                                    <p className='text-base'>From</p>
                                    <input type="number" className='border border-[#ccc] focus:outline-0 px-[10px] w-[100px] h-[40px]' 
                                        value={vChange} 
                                        onChange={(e) => setVchange(e.target.value)}
                                    />
                                    <p className='text-base'>to</p>
                                    <input type="number" className='border border-[#ccc] focus:outline-0 px-[10px] w-[100px] h-[40px]' 
                                        value={vChange2} onChange={(e) => setVchange2(e.target.value)}
                                    />
                                    <p className='text-base'>?</p>
                                    <button className='bg-[#8229c7] text-[#fff] rounded-md py-[8px] px-[20px]' onClick={handleChangePer}>Calculate</button>
                                    <input type="text" readOnly className='border border-[#ccc] focus:outline-0 px-[10px] w-[100px] h-[40px]' 
                                        value={output.pChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center'>
                            <button className='bg-[#8229c7] text-white rounded-md h-[40px] w-[100px]' onClick={handleRstChange}>Reset</button>
                        </div>
                    </div>
                    <h2 className='mb-3 text-[22px] text-center text-[#420075] font-bold'>Percentage Conversation</h2>
                    <div className='card py-[20px]  mb-7  max-w-[700px] m-auto'>
                        <div className=''>
                            <div className='md:overflow-hidden overflow-auto'>
                                <div className='flex items-center justify-between border-b md:w-[100%] w-[500px] md:overflow-x-hidden border-[#ccc] pb-[20px]'>
                                    <div className='px-[15px] mb-[20px]'>
                                        <p className='text-sm'>Percentage</p>
                                        <input type="number" className='border border-[#ccc] focus:outline-0 px-[10px] w-[100px] h-[40px]' 
                                            value={percent} 
                                            onChange={(e) => setPercent(e.target.value)}
                                        />
                                    </div>
                                    <p>%</p>
                                    <p className='border border-grey p-2 h-7 w-7 flex items-center justify-center'>=</p>
                                    <div className='flex flex-col'>
                                        <p className='text-sm'>Fraction</p>
                                        <input type="number" readOnly className='border border-[#ccc] focus:outline-0 px-[10px] w-[100px] h-[40px] mb-[15px]' 
                                            value={output.resultConv}
                                        />
                                        <input type="number" readOnly className='border border-[#ccc] focus:outline-0 px-[10px] w-[100px] h-[40px]' 
                                            value={fraction}
                                        />
                                    </div>
                                    <p className='border border-grey p-2 h-7 w-7 flex items-center justify-center'>=</p>
                                    <div className='px-[15px] mb-[20px]'>
                                        <p className='text-sm'>Decimal</p>
                                        <input type="text" readOnly className='border border-[#ccc] focus:outline-0 px-[10px] w-[100px] h-[40px]' 
                                            value={resultDeci}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='flex text-center justify-center mt-[20px] gap-[10px]'>
                                <button className='bg-[#8229c7] text-white rounded-md h-[40px] w-[100px]' onClick={handlePerConv}>Calculate</button>
                                <button className='bg-[#8229c7] text-white rounded-md h-[40px] w-[100px]' onClick={handleRstConv}>Reset</button>
                            </div>
                        </div>
                    </div>
                    <div className="h-[98px] my-[20px] bg-[#80808014] max-w-[700px] m-auto"></div>
                </div>
                <div className='w-full lg:w-[900px] mt-[15px] m-auto'>
                    <div className='card p-[15px] mb-[15px] bg-white border rounded-lg'>
                        <div className=''>
                            <h3 className='text-[16px] font-bold mb-[10px] text-[#420075]'>About Percentage Calculator</h3>
                            <p className='text-sm'>Do you wish to find the accurate percentage of your value without going through the manual procedure? If yes, then you can turn to the percentage calculator, which provides an easy way to calculate percentage.</p>
                            <p className='text-sm py-[10px]'>The percentage calculator online is designed to help users calculate percentage of any value effortlessly. Whether using a smartphone or desktop, you can easily make percentage calculations through this without facing any compatibility issues. It’s a free-of-cost tool that doesn’t charge a penny from you, irrespective of the number of times you use it to calculate percentage.</p>
                            <p className='text-sm py-[10px]'>Start using the percentage finder online today to calculate percentage online!</p>
                        </div>
                        <div className=''>
                            <h3 className='text-[16px] font-bold mb-[10px] text-[#420075]'>How to Calculate Percentage of a Number?</h3>
                            <p className='text-sm'>The percentage calculator has a user-friendly interface that allows you to calculate percentage of a number without following any intricate procedures. Here are the simple steps you need to follow:</p>
                            <ul className='list-disc py-[10px] ml-[40px]'>
                                <li>Access the percentage calculator online.</li>
                                <li>Enter the two values to find the third one.</li>
                                <li>Hit the “calculate” button and get results! </li>
                            </ul>
                        </div>
                        <div className=''>
                            <h3 className='text-[16px] font-bold mb-[10px] text-[#420075]'>How Does Our Percent Calculator Work?</h3>
                            <p className='text-sm'>The percent calculator offered on SmallSEOTools works on smart algorithms that accurately find the percentage of the input values. The functionality of percent finder is based on the percentage calculation formula. It may get tricky for the individuals when they try to manually calculate percentage, as not everyone is a pro at solving math equations. Our percentage finder is readily available to assist you in this task; it just asks the users to submit their values and find the percentage with a single click. You won’t be asked to go through the hassle of getting registered on this platform; use the percent calculator right away.</p>
                        </div>
                        <div className=''>
                            <h3 className='text-[16px] font-bold mb-[10px] text-[#420075]'>Why Use a Percentage Calculator Online?</h3>
                            <p className='text-sm'>Here are the most common cases where a percentage calculator can prove to be a useful tool for people working in various fields.</p>
                            <div className='py-[16px]'>
                                <ul className='list-disc ml-[40px]'>
                                    <li>Calculate the Sales Tax Percentage</li>
                                </ul>
                                <p className='text-sm py-[10px]'>How much are you being charged as sales tax on buying certain products? The sales tax is usually decided in percentage, so you can use a percentage calculator to find how much you’ll have to pay in taxes for buying a good or service.</p>
                            </div>
                            <div className=''>
                                <ul className='list-disc ml-[40px]'>
                                    <li>Income Percentage Calculator</li>
                                </ul>
                                <p className='text-sm py-[5px]'>Do you earn a fixed income and wish to save a certain percentage? If you find it difficult to calculate percentages independently and wish to get accurate results, use the percent calculator. With this tool, you can easily find the amount of a certain percentage of your income you wish to save.</p>
                            </div>
                            <div className=''>
                                <ul className='list-disc ml-[40px]'>
                                    <li>Percentage Discount</li>
                                </ul>
                                <p className='text-sm py-[5px]'>Calculating percentage discounts is another use case of our percentage calculator. When finding products on sale, you’ll see a certain percentage of the actual price that can be saved. The percentage finder can assist you in this process, as you can easily find the discounted amount of the product you’re looking forward to buying.</p>
                            </div>
                            <div className=''>
                                <ul className='list-disc ml-[40px]'>
                                    <li>Calculate Body Fat Percentage</li>
                                </ul>
                                <p className='text-sm py-[5px]'>Many people struggle hard to maintain their body fat percentage to stay fit. So what is the proportion of the fat in your body concerning its weight? You can get to know about it with the help of our online percentage calculator.</p>
                            </div>
                            <div className=''>
                                <ul className='list-disc ml-[40px]'>
                                    <li>Store Discounts</li>
                                </ul>
                                <p className='text-sm py-[5px]'>Have you come across a store that is offering some discounts? They must be in the form of percentages, and you can get your hands on the percentage calculator to understand the final price you need to pay after getting the discount.</p>
                            </div>
                            <div className=''>
                                <ul className='list-disc ml-[40px]'>
                                    <li>Sales Tax</li>
                                </ul>
                                <p className='text-sm py-[5px]'>How much tax are you paying against the goods or services you enjoy? To have a clear idea of sales tax, you can take the assistance of the online percentage calculator. With this tool, you can easily determine the percentage of the sales tax you’re paying against buying products.</p>
                            </div>
                            <div className=''>
                                <ul className='list-disc ml-[40px]'>
                                    <li>Interest Rate</li>
                                </ul>
                                <p className='text-sm py-[5px]'>Are you looking forward to getting a loan? Before you apply for it, check the interest rate and see the amount that will be repayable against the loan you’ll be taking. It can be easily done with the free percentage calculator online.</p>
                            </div>
                            <div className=''>
                                <ul className='list-disc ml-[40px]'>
                                    <li>Statistic</li>
                                </ul>
                                <p className='text-sm py-[5px]'>Statistics students and statisticians can also reap benefits by using the percentage calculator. They can easily clear their concepts about finding percentages with the help of this web-based utility.</p>
                            </div>
                        </div>
                        <div className=''>
                            <h3 className='text-[16px] font-bold py-[10px] text-[#420075]'>How to Calculate It Manually?</h3>
                            <p className='text-sm'>The percentage calculation is based on a percentage formula. You can calculate percentage manually with the help of the following formula:</p>
                            <h3 className='text-[16px] font-bold py-[20px] text-[#420075]'>Percentage Formula: </h3>
                            <p className='text-md py-[10px] text-center'>P x V1 = V2</p>
                            <p className='py-[10px] text-sm'>With this equation, you can easily find P (percentage), V1 (first value), or V2 (second value).</p>
                        </div>
                        <div className=''>
                            <h3 className='text-[16px] font-bold py-[10px] text-[#420075]'>What Does SmallSEOTools Offer?</h3>
                            <p className='text-sm'>Besides the percentage calculator, SmallSEOTools also offer various other utilities for your ease. They include the following:</p>
                            <div className='py-[10px]'>
                                <a href="" className='text-[#420075] text-[14px] font-[600] underline block'>Percentage Increase Calculator</a>
                                <p className='text-sm py-[5px]'>This tool can assist you in finding an increase in the prices of goods and services as a percentage.</p>
                            </div>
                            <div className='py-[5px]'>
                                <a href="" className='text-[#420075] text-[14px] font-[600] underline block'>Percentage Increase Calculator</a>
                                <p className='text-sm py-[10px]'>This tool can assist you in finding an increase in the prices of goods and services as a percentage.</p>
                            </div>
                            <div className='py-[5px]'>
                                <a href="" className='text-[#420075] text-[14px] font-[600] underline block'>Percentage Change Calculator</a>
                                <p className='text-sm py-[10px]'>A percentage change calculator can assist you in quantifying the change from one value to another. </p>
                            </div>
                            <div className='py-[5px]'>
                                <a href="" className='text-[#420075] text-[14px] font-[600] underline block'>Percentage Difference Calculator</a>
                                <p className='text-sm py-[10px]'>The percentage difference calculator is designed to help users calculate the difference between two positive integers greater than zero.</p>
                            </div>
                        </div>
                        <div className=''>
                            <h3 className='text-[16px] font-bold py-[10px] text-[#420075]'>How to Find the Percentage of Something?</h3>
                            <p className='text-sm'>You can find the percentage of something with the help of a percentage calculation formula. Here is an example that can help you understand it:</p>
                            <p className='text-[#420075] py-[20px]'>Example:</p>
                            <p className='text-sm pb-[5px]'>Anna’s monthly salary is $2500. She pays x% income tax on it. The amount deducted as income tax from her salary is $250. What percentage of Anna’s salary is deducted as income tax?</p>
                            <p className='text-[#505050] font-[600] py-[10px]'>Percentage Calculatoin Formula:</p>
                            <p className='text-md text-center py-[20px]'>P x V1 = V2</p>
                            <div>
                                <p className='text-[#505050] pb-[10px] font-[600]'>Solution:</p>
                                <p className='py-[10px]'>P = x</p>
                                <p className='py-[10px]'>V1 = 2500</p>
                                <p className='py-[10px]'>V2 = 250</p>
                            </div>
                            <div className='text-center py-[10px]'>
                                <p className='py-[10px]'>x% x 2500 = 250</p>
                                <p className='py-[10px]'>x% = 250/2500</p>
                                <p className='py-[10px]'>x = 10%</p>
                            </div>
                            <p className='text-sm py-[10px]'>Anna pays a 10% income tax on her salary every month.</p>
                        </div>
                        <div>
                            <h3 className='text-[#420075] py-[10px] text-[20px] font-[600]'>FAQs</h3>
                            <div className=''>
                                <h3 className='text-[16px] font-[600] text-[#420075]'>What is the Percentage?</h3>
                                <p className='text-sm py-[10px]'>The percentage is the ratio of a number expressed as a fraction of 100. It is generally denoted with the percent symbol, “%.”</p>
                            </div>
                            <div className=''>
                                <h3 className='text-[16px] font-[600] text-[#420075]'>How to calculate percentage between two numbers?</h3>
                                <p className='text-sm py-[10px]'>You can calculate the percentage between two numbers with the help of a percentage calculator. This percent calculator online allows you to submit the two numbers and calculate percentage in seconds.</p>
                            </div>
                            <div className=''>
                                <h3 className='text-[16px] font-[600] text-[#420075]'>What Can I Calculate with a Percentage Converter?</h3>
                                <p className='text-sm py-[10px]'>A percentage converter allows you to make any calculation in percentages. Whether you want to calculate the ratio of a student’s marks in an examination or check what amount you’re paying in taxes, you can easily get accurate results with the percentage finder.</p>
                            </div>
                            <div className=''>
                                <h3 className='text-[16px] font-[600] text-[#420075]'>Can a Percentage Be Greater Than 100?</h3>
                                <p className='text-sm py-[10px]'>No! When identifying the percentage of a number, it cannot get greater than 100. However, when finding the difference of values at a certain point in terms of percentage, the percentage can be higher than 100.</p>
                            </div>
                            <div className=''>
                                <h3 className='text-[16px] font-[600] text-[#420075]'>Can a Percentage Be Negative?</h3>
                                <p className='text-sm py-[10px]'>No! The percentage of a number cannot be negative, but you can get a negative percentage when finding the percentage difference between two values. Still, in such cases, you need to ignore the negative sign and write the percentage in positive integers only.</p>
                            </div>
                            <div className=''>
                                <h3 className='text-[16px] font-[600] text-[#420075]'>Can a Percentage Be a Decimal?</h3>
                                <p className='text-sm py-[10px]'>No! A percentage cannot be a decimal because it is formed by multiplying the decimal value by 100. </p>
                            </div>
                            <div className=''>
                                <h3 className='text-[16px] font-[600] text-[#420075]'>Is it Possible to Calculate the Percentage Without a Percent Calculator?</h3>
                                <p className='text-sm py-[10px]'>Yes, you can calculate the percentage without an online percent calculator using the percentage calculation formula. However, if the values are complex, you may need help to calculate the percentage independently.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Percentagecalc