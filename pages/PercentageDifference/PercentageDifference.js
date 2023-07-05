import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '@/Components/Footer/Footer'
import Header from '@/Components/Header/Header'

function PercentageDifference() {
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
            const value1 = Math.abs(initValue - finalValue)
            const value2 = (parseInt(initValue) + parseInt(finalValue))/2
            setOpen(true)
            setPercentage(((value1 / value2) *100).toFixed(2))
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
                    <h1 className='text-[16px] sm:text-[22px] text-[#420075] md:text-2xl font-bold mb-[10px]'>Percentage Difference Calculator</h1>
                    <p className='text-sm md:w-[40%] w-[100%] mx-auto font-normal'>The percentage difference calculator will calculate percentage difference between two numbers. Estimate the difference between two positive numbers greater than zero swiftly.</p>
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
                                <p>Percentage Difference</p>
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
                            <h3>Percentage Difference Calculator</h3>
                            <p> Calculating percentage difference between two numbers in terms of a percentage has become immensely easy with the assistance of this online utility. Our percentage difference calculator provides a helping hand to individuals with weak mathematical skills to compute the percentage difference of given values. The order of the numbers does not matter while using the % difference calculator. Moreover, the simple interface of this web-based utility makes it no uphill task for anyone to calculate percent difference accurately.</p>
                        </div>
                        <div>
                            <h3>How to Calculate Percentage Difference?</h3>
                            <p>Follow the simple instructions to calculate percentage difference between two numbers instantly.</p>
                            <div>
                                <ul className='list-disc ml-[40px]'>
                                    <li className='text-sm py-[2.5px]'>Access our percentage difference calculator online.</li>
                                    <li className='text-sm py-[2.5px]'>Enter the first value V1 in the given field.</li>
                                    <li className='text-sm py-[2.5px]'>Enter the second value V2 in the designated box.</li>
                                    <li className='text-sm py-[2.5px]'>Press the Calculate button to start the process. </li>
                                </ul>
                                <p>The percent difference calculator will automatically compute the difference between two percentages and give you quick output within a fraction of a second.</p>
                            </div>
                        </div>
                        <div>
                            <h3>What Is Meant by Percentage Difference?</h3>
                            <p>The percentage difference is the difference between two values divided by the average of those values and shown as a percentage. It defines the measurement of two values where one value is bigger than the other one. Simply saying, the % difference is denoted as the absolute value of the ratio of the difference between two values and their averages defined as a percentage.</p>
                            <div>
                                <h4> Percent Difference Formula and Examples</h4>
                                <p> The formula to calculate percent difference between the initial and final values after a change is as follows:</p>
                                <p>The percent difference formula for values, V1 and V2:</p>
                                <p> Percentage difference = |Absolute difference between the two values| / (Average of both the values) × 100%</p>
                                <p> Or,</p>
                                <p> Percentage difference formula=  |V1 – V2| / [(V1 + V2)/2] × 100</p>
                                <p> In this formula, 'V1' represents the initial value while 'V2' denotes the final value. The formula enables people to estimate the percent difference between two numbers. It is important to state here that the order of the number doesn't matter in this regard. We calculate the average of values to avoid any ambiguity between selecting the initial and final values at the denominator.</p>
                                <p>Let's use this formula in examples to find percentage difference.</p>
                                <p><span className='font-[600]'>Example 1:</span>The height of a building is increased from 80 ft to 100 ft. Calculate percentage difference.</p>
                                <p className='font-[600]'>Solution:</p>
                                <p>Initial height = V1 =  80 ft.</p>
                                <p>Final height = V2 = 100 ft.</p>
                                <p>By using Percent difference formula:</p>
                                <p>=  |V1 – V2| / [(V1 + V2)/2] × 100</p>
                                <p>= |80-100| /  [(80 + 100)/2] ×  100</p>
                                <p>= 20/90 × 100</p>
                                <p>= 22%</p>
                                <p> The percentage difference is 22%.</p>
                                <p><span className='font-[600]'>Example 2:</span> If the price of two jackets at a store is $80 and $50 respectively, calculate percentage difference between the two prices.</p>
                                <p className='font-[600]'>Solution:</p>
                                <p> Price of 1st jacket = V1= $80</p>
                                <p>Price of 2nd jacket = V2 =  $50</p>
                                <p>Let’s perform percent difference calculation: </p>
                                <p> Percentage difference formula =  |V1 – V2| / [(V1 + V2)/2] × 100</p>
                                <p>= |80 – 50| / [(80 + 50)/2] × 100</p>
                                <p>= 30/65 × 100</p>
                                <p>The percentage difference = 46.15 %</p>
                            </div>
                        </div>
                        <div>
                            <h3> Applications or Use of Percent Difference Calculator</h3>
                            <p>A percent difference calculator is a highly useful utility that helps people from various fields of life complete their assigned tasks effectively. Below are a few major applications of this % difference calculator.</p>
                            <div>
                                <h4>Products Prices Comparison:</h4>
                                <p>The <a href="#" className='text-[#420075] underline font-[600]'>percentage difference calculator</a> is widely used to compare the price of products offered by different companies and vendors. This analysis will help you find the most affordable price in the market.</p>
                            </div>
                            <div>
                                <h4>Finance Analysis:</h4>
                                <p>Using a percent difference calculator, investors can estimate the performance of the investment and calculate the amount they can get in accordance with an investment they have made in a business.</p>
                            </div>
                            <div>
                                <h4>Salary Increment/Decrement:</h4>
                                <p>The assistance of percentage difference calculator enables salaried persons to examine the raise or decrease in their salary. The utility is ideal for people who want to calculate the salary percentage increased after a promotion or increment.</p>
                            </div>
                            <div>
                                <h4>Statistics and Research:</h4>
                                <p>People who are associated with engineering or statistics-related project need a reliable utility that can help them compare the difference between two values at a given time. The percentage difference calculator is the best option that allows them to interpret and examine the change in data effectively.</p>
                            </div>
                        </div>
                        <div>
                            <h3>Percent Difference vs Percent Change</h3>
                            <p>Many people often confuse percentage difference with percentage change and, therefore, end up with an error. It is essential to understand that percentage difference is entirely different from percentage change. Here are a few major differences between both terms that will assist you in understanding them efficiently.</p>
                            <div className='my-[20px]'>
                                <table className='table-auto w-[100%] border-[1px] text-sm Conversion_table border-[#ccc]'>
                                    <thead>
                                        <tr>
                                            <th className='text-start text-[#212529] font-normal text-[14px]'>Percentage Difference</th>
                                            <th className='text-start text-[#212529] font-normal text-[14px]'>Percentage Change</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>It is the ratio of the difference between two values and the average of two values, where one value is bigger than the second one</td>
                                            <td>It is the difference between two values where the old value is compared to the new value or vice-versa</td>
                                        </tr>
                                        <tr>
                                            <td>To find the percentage difference, the difference between final value and initial value is divided by the average of the two values.</td>
                                            <td>To calculate percent change, the difference between old value and new value is divided by the old value. </td>
                                        </tr>
                                        <tr>
                                            <td>The minus sign has to be ignored (if the resultant value is negative) and the value will be taken as it is.</td>
                                            <td>The negative value ( if the derived answer is negative) shows a decrease; while a positive value displays an increase in the value.</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className='mt-[20px]'>
                                    <h4>Are Percentage Difference and Percentage Change Equal?</h4>
                                    <p>Not at all!  It’s clear from the above discussion that percentage difference and percentage change are completely different from each other.</p>
                                </div>
                                <div>
                                    <h4>How to calculate percent difference Between 28 And 38?</h4>
                                    <p> Follow the steps to find the percentage difference between 28 and 38:</p>
                                    <div>
                                        <ul className='ml-[40px] list-disc'>
                                            <li className='text-sm py-[2.5px]'>Calculate the absolute difference between both numbers: |28 - 38| = |-10| = 10;</li>
                                            <li className='text-sm py-[2.5px]'>Now, calculate their average: (28 + 38) / 2 = 60 / 2 = 30;</li>
                                            <li className='text-sm py-[2.5px]'>Then, divide the difference by their average: 10 / 33 = 0.3030</li>
                                            <li className='text-sm py-[2.5px]'>Display the result as a percentage: 0.3030 × 100 = 30.30%.</li>
                                            <li className='text-sm py-[2.5px]'>Simplify the manual process by using the percentage difference calculator.</li>
                                        </ul>
                                        <div>
                                            <h4>When Is the Percentage Difference Equal to 100%?</h4>
                                            <p>The percentage difference is equal to 100 only if any of the values in the equation is three times to other value. To understand this, remember </p>
                                            <div className='ml-[40px]'>
                                                <p>1. The percentage difference between two values is equal to 100% if a - b = (a + b) / 2.</p>
                                                <p>2. We estimate a ≥ b, so we can neglect the absolute value on the left-hand side. It trails that 2a - 2b = a + b</p>
                                                <p>3. Hence, a = 3b, as defined above. </p>
                                            </div>
                                            <div>
                                                <h4>Does the Percentage Difference Indicate Accuracy and Precision?</h4>
                                                <p> Yes! Percent difference displays accuracy and precision as it takes all the values and compares them with each other. For more accuracy take the assistance of  percentage difference calculator online.</p>
                                            </div>
                                        </div>
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

export default PercentageDifference