import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '@/Components/Footer/Footer'
import Header from '@/Components/Header/Header'

function PercentageChange() {
    const [open, setOpen] = useState(false)
    const [initValue, setInitValue] = useState('')
    const [finalValue, setFinalValue] = useState('')
    const [percentage, setPercentage] = useState()

    const handleClick = () => {
        if(initValue === ''){
            toast.error("The value 1 must be a number.")
        } else if(finalValue === ''){
            toast.error("The value 2 must be a number.")
        }else{
            setOpen(true)
            setPercentage(((finalValue - initValue) / initValue) *100)
        }
    }
    const handleReset = () => {
        setInitValue('')
        setFinalValue('')
    }
    return (
        <>
            <Header />
            <ToastContainer theme='colored' />
            <div className='mainbg max-w-[1260px] m-auto px-[15px] py-[10px]'>
                <div className='h-[98px] my-[20px] bg-[#80808014] max-w-[700px] m-auto'></div>
            </div>
            <div>
                <div className='text-center'>
                    <h1 className='text-[16px] sm:text-[22px] text-[#420075] md:text-2xl font-bold mb-[10px]'>Percentage Change Calculator</h1>
                    <p className='text-sm md:w-[70%] w-[100%] mx-auto font-normal'>Percentage decrease calculators help you to find percentage drops between two values. </p>
                </div>
                <div className='flex bg-[#80808014] max-w-[700px] m-auto items-center my-[20px] min-h-[250px]'>
                    <div></div>
                    <div></div>
                </div>
                <div className='bg-[#fff] md:px-[48px] px-[20px] md:py-[28px] py-[20px] lg:w-[900px] mx-auto'>
                    <div>
                        <div>
                            <label htmlFor="" className='text-sm font-[600]'>Initial Value</label>
                        </div>
                        <input type="number" className='p-[10px] w-[100%] border border-[#ccc] outline-none mt-[5px]' 
                            value={initValue}
                            onChange={e => setInitValue(e.target.value)}
                        />
                    </div>
                    <div className='my-[20px]'>
                        <div>
                            <label htmlFor="" className='text-sm font-[600]'>Final Value</label>
                        </div>
                        <input type="number" className='p-[10px] w-[100%] border border-[#ccc] outline-none mt-[5px]' 
                            value={finalValue}
                            onChange={e => setFinalValue(e.target.value)}
                        />
                    </div>
                </div>
                <div className="h-[98px] my-[20px] bg-[#80808014] max-w-[700px] m-auto"></div>
                <div className='flex justify-center gap-3'>
                    <button className='btnlogin text-white py-[10px] px-[10px] sm:px-[40px] my-[20px]' onClick={handleClick}>Calculate</button>
                    <button className='btnlogin text-white py-[10px] px-[10px] sm:px-[40px] my-[20px]' onClick={handleReset}>Reset</button>
                </div>
                <div className='flex bg-[#80808014] max-w-[700px] m-auto items-center my-[20px] min-h-[250px]'>
                    <div></div>
                    <div></div>
                </div>
                { open && (
                    <>
                        <div className='text-center'>
                            <h3>Result</h3>
                        </div>
                        <div className='flex justify-center w-full lg:w-[700px] mt-[15px] m-auto'>
                            <div className='bg-[#F6F8FA] text-center w-[50%] p-[8px] border border-[#ccc]'>
                                <p>Percentage Change</p>
                            </div>
                            <div className='] text-center p-[8px] border border-[#ccc] w-[50%]'>
                                <p>{percentage}%</p>
                            </div>
                        </div>
                    </>
                )}
                <div className='w-full mt-[30px] lg:w-[900px] m-auto'>
                    <div className='card p-[15px] mb-[15px] bg-white border rounded-lg'>
                        <div>
                            <h3 className='text-[18px] font-bold mb-[0px] text-[#420075]'>Percent Change Calculator</h3>
                            <p>The percentage change calculator is a web-based utility that offers assistance to users in the percentage change calculation between two values. It allows the users to find how much percentage increase or decrease has occurred in two numbers. </p>
                            <p>The easy-to-use interface of our percent change calculator makes this task effortless for everyone. You don’t need to install this calculator on your device, as it can be easily accessed over the web. </p>
                            <p>If you don’t wish to put yourself in trouble with manual calculation, you can turn to this % change calculator. Calculate percent change for free without imposing any restrictions!</p>
                        </div>
                        <div>
                            <h3> How to Calculate Percentage Change?</h3>
                            <p>Calculate percent change between two values. Follow the easy steps given below to find percent of change:</p>
                            <div>
                                <ul className='ml-[40px] list-disc'>
                                    <li className='text-sm py-[2.5px]'>Access the <a href="#" className='text-[#420075] underline'>percent change calculator</a></li>
                                    <li className='text-sm py-[2.5px]'>Enter the two values between which you wish to find change in the given fields</li>
                                    <li className='text-sm py-[2.5px]'>Hit the Calculate button to get your hands on accurate results instantaneously!</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h3> Percent Change Formula</h3>
                            <p>This advanced percent change calculator works on the % change formula, which is:</p>
                            <p>Percent Change Formula= (V2 – V1)/ |V1| x 100</p>
                            <p>The percent change formula is defined as the ratio of the difference of final value V2 and initial value V1 to the initial value, multiplied by 100.</p>
                        </div>
                        <div>
                            <h3>Examples of Percentage Change Calculation</h3>
                            <p>The percentage change calculation can help you evaluate the percent of change in terms of increase or decrease between two numbers. Let’s take you through its examples.</p>
                            <div>
                                <h4> Percentage Increase Example</h4>
                                <p>In January 2022, Alan worked on a daily wage of $120. In February 2022, her wage increased to $150 per day. Calculate percent change in Alan’s daily wage.</p>
                                <p className='font-[600]'>Solution</p>
                                <p>January Wage: $120</p>
                                <p>February Wage: $150</p>
                                <p>Input the given values in the percent change formula</p>
                                <p>Percentage Change = (V2 – V1)/ |V1| x 100</p>
                                <p>= (150 – 120)/ |120| x 100</p>
                                <p>= 30/120 x 100</p>
                                <p>= 25%</p>
                                <p>The percent of change in Alan’s daily wage is a 25% increase.</p>
                            </div>
                            <div>
                                <h4>Percentage Decrease Example</h4>
                                <p>Henry’s net income at the end of 2021 was $10,000. His net income at the end of 2022 was $-2000. What is the percent rate of change in his income?</p>
                                <p>Solution:</p>
                                <p>Add values in the percentage rate of change formula </p>
                                <p>Percentage Change Formula = (V2 – V1)/ |V1| x 100</p>
                                <p>= (-2000 – 10000)/ |10000| x 100</p>
                                <p>= -12000/10000 x 100</p>
                                <p>= -120%</p>
                                <p>Hence, the percentage change in Henry’s income is a 120% decrease.</p>
                            </div>
                        </div>
                        <div>
                            <h3>How to Calculate Percentage Change Between Negative Numbers?</h3>
                            <p>You can calculate percentage change between negative numbers by ignoring the negative sign from the final result in percentage. The formula for percentage change remains the same even where you are finding percent of change between negative numbers. If you’re facing difficulty in executing this complex calculation, you can get your hands on the percentage change calculator and easily figure out the exact percentage increase or decrease with a couple of clicks.</p>
                        </div>
                        <div>
                            <h3>Uses of Percent Change Calculator in Daily Life</h3>
                            <p>The percentage change calculator can be used across various domains of life. Calculating percent change is mainly important for people involved in dealing with finances, taxes, psychics, sales, and inflation rates. Whether you’re working in a taxation department, private bank, or running a private business, it’s important for you to calculate the shifts between two values in order to understand percentage increase or percentage decrease. These tasks need to be executed without making any errors; hence, using the rate of change calculator is becoming crucial. This tool helps users in making precise percentage change calculations without any hassle.</p>
                        </div>
                        <div>
                            <h3>FAQs</h3>
                            <h3>What is Percentage Change?</h3>
                            <p>The percentage change is regarded as the ratio of the difference between two quantities to the initial value and multiplied by 100 to get results in percentage. When there is an upward or downward shift from a value, the percentage change occurs. Even if a single digit or decimal value has changed, the result can be regarded as a percentage increase or decrease.</p>
                            <div>
                                <h4>Is Percentage Difference Equal to Percentage Change?</h4>
                                <p>The percentage difference is not equal to the percentage change. The percentage change simply calculate percentage change (increase or decrease) between two numbers. On the other hand, percentage difference evaluate the difference between two positive integers in comparison to their average.</p>
                            </div>
                            <div>
                                <h4>What is the Percentage Change from 6 to 15?</h4>
                                <p>The percentage change from 6 to 15 can be calculated as follows:</p>
                                <p>Percentage change formula= (15 – 6)/ |6| x 100</p>
                                <p>9/6 x 100</p>
                                <p>= 150%</p>
                                <p>Hence, the change of 15 from 6 has resulted in a 150% increase.</p>
                                <div>
                                    <h4>What is the Percentage Change from 4 to 5?</h4>
                                    <p>You can calculate the percentage change from 4 to 5 in the following manner:</p>
                                    <p>Percentage Change = (5 – 4)/ |4| x 100</p>
                                    <p>= 1/4 x 100</p>
                                    <p>= 25%</p>
                                    <p>Hence, the change from 4 to 5 is due to a 25% increase.</p>
                                </div>
                                <div>
                                    <h4>What is the Percentage Change When 52 is increased to 150?</h4>
                                    <p>When you increase 52 to 150, the percentage change will be:</p>
                                    <p>Percentage Change = (150 – 52)/ |52| x 100</p>
                                    <p>= 98/52 x 100</p>
                                    <p>= 188.5%</p>
                                    <p>188.5% increase has occurred when 52 is increased to 150. Use the percent change calculator to avoid the manual effort and save your time</p>
                                </div>
                                <div>
                                    <h4>How to Calculate Percent Change between Two Numbers in Excel?</h4>
                                    <p>Here is the method of calculating percentage change between two numbers in Excel.  </p>
                                    <div>
                                        <ul className='ml-[40px] list-disc'>
                                            <li className='text-sm py-[2.5px]'>Choose a blank cell for tracking the calculated percentage change then enter formula =(A3-A2)/A2 into the Formula Bar. </li>
                                            <li className='text-sm py-[2.5px]'>After entering the % change formula, press the Enter key. </li>
                                            <li className='text-sm py-[2.5px]'>Keep selecting the result cell and press the Percent Style button in the Number group under the Home tab to format the cell as a percentage</li>
                                        </ul>
                                        <p> This way, you will find percent change in Excel straightaway. Save your time and effort and use a rate of change calculator to perform you calculations.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default PercentageChange