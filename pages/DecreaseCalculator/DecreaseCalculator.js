import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '@/Components/Footer/Footer'
import Header from '@/Components/Header/Header'

function DecreaseCalculator() {
    const [open, setOpen] = useState(false)
    const [initValue, setInitValue] = useState('')
    const [finalValue, setFinalValue] = useState('')
    const [percentageD, setPercentageD] = useState()

    const handleClick = () => {
        if(initValue === ''){
            toast.error("The start value must be a number.")
        } else if(finalValue === ''){
            toast.error("The end value must be a number.")
        }else{
            setOpen(true)
            setPercentageD(((initValue - finalValue) / initValue) *100)
        }
    }
    const handleReset = () => {
        setInitValue('')
        setFinalValue('')
    }
    return (
        <>
            <Header />
            <ToastContainer theme='colored'/>
            <div className='mainbg max-w-[1260px] m-auto px-[15px] py-[10px]'>
                <div className='h-[98px] my-[20px] bg-[#80808014] max-w-[700px] m-auto'></div>
            </div>
            <div>
                <div className='text-center'>
                    <h1 className='text-[16px] sm:text-[22px] text-[#420075] md:text-2xl font-bold mb-[10px]'>Percentage Decrease Calculator</h1>
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
                                <p>Percentage Decrease</p>
                            </div>
                            <div className='] text-center p-[8px] border border-[#ccc] w-[50%]'>
                                <p>{percentageD}%</p>
                            </div>
                        </div>
                    </>
                )}
                <div className='w-full mt-[30px] lg:w-[900px] m-auto'>
                    <div className='card p-[15px] mb-[15px] bg-white border rounded-lg'>
                        <div>
                            <h3 className='text-[18px] font-bold mb-[0px] text-[#420075]'>About Percentage Decrease Calculator</h3>
                            <p className='text-sm py-[10px]'>Looking for an easy way to calculate percentage decrease between two values without manual calculations? Try this free percentage decrease calculator to find percent decrease from one value to another swiftly. </p>
                            <p className='text-sm py-[10px]'>The percentage calculator enables users to determine the decrease from one amount to a lesser amount in percentage effortlessly. This online utility allows users to calculate percentage decreases without facing complicated procedures. Whether you are accessing this percentage decrease calculator from a smartphone, personal computer, or tablet, you can easily find the percentage decrease between an original value and a new value. Moreover, the facility allows you to make countless percentage decrease calculations without restrictions. </p>
                        </div>
                        <div>
                            <h3>How to Calculate Percentage Decrease? </h3>
                            <p>The percentage calculator allows its users to find the reduction from one value to another in terms of percentage without facing any ambiguity. The simple and easy steps will allow you to calculate percentage difference with this calculator. </p>
                            <div>
                                <ul className='list-disc ml-[40px]'>
                                    <li className='text-sm py-[2.5px]'>Reach this percentage decrease calculator online.</li>
                                    <li className='text-sm py-[2.5px]'>Insert both values in the given fields. </li>
                                    <li className='text-sm py-[2.5px]'>Press the calculate button to get accurate percentage decrease calculation results instantly.  </li>
                                </ul>
                            </div>
                            <div>
                                <h4>Percentage Decrease Formula </h4>
                                <p>The calculation for the decrease in the percentage of two values is based on the percentage decrease formula. Below is the formula to calculate the % decrease between the values a and b:  </p>
                                <p>Percentage Decrease: [(Starting Value−Final Value / Starting Value)] ×100</p>
                                <p className='my-[20px]'>Using this method, you can calculate the difference between values for the initial value in percentage. </p>
                            </div>
                        </div>
                        <div>
                            <h3>How to Calculate Percentage Decrease Manually?</h3>
                            <p>Find percentage decrease between two numbers becomes straightforward using the above-shared formula. Here are a few examples that will enable you to learn the method of calculating percentage decrease manually using the formula. </p>
                            <p>Percentage Decrease Example 1: </p>
                            <p>The original price of a book was $20. The business owner announced a discount on the books, and the new price of the pen is now $10. What is the percent decrease in the book price?</p>
                            <p>Solution</p>
                            <p>Old Price of Book: $20 </p>
                            <p>New Price of Book: $10</p>
                            <p>Enter the values in the percent decrease formula:</p>
                            <p>Percentage decrease: [(Old Value - New Value) / Old Value] × 100</p>
                            <p>= [(20-10)/20] x 100</p>
                            <p>= [10/20] x 100</p>
                            <p>= 0.5 x 100</p>
                            <p>= 50%</p>
                            <p>So, the percent decrease in the price of book is 50%.</p>
                            <p>Percentage Decrease Example 2:</p>
                            <p>Bella averaged 80 mph driving on the highway. But, while returning during rush hour, she averaged 50 mph. What is the % decrease in her rate of travel?</p>
                            <p>Solution:</p>
                            <p>Initial Speed: 80 mph </p>
                            <p>Final Speed: 50 mph </p>
                            <p>Enter the values in the percent decrease formula:</p>
                            <p>Percentage decrease: [(Initial Value – Final Value) / Initial Value] × 100 </p>
                            <p>= [(80-50)/80] x 100 </p>
                            <p>= [30/80] x 100 </p>
                            <p>= 0.375 x 100 </p>
                            <p>= 37.5% </p>
                            <p>So, Bella travelled 37.5% more slowly on her second trip. </p>
                            <p>Percent Decrease Example 3 </p>
                            <p>Alex scored a 90 on her first Physics test and a 74 on her second Physics test. Find the percentage decrease between test scores? </p>
                            <p>Solution: </p>
                            <p>Old Test Score: 90</p>
                            <p>New Test Score: 74 </p>
                            <p>Enter the values in the percentage decrease formula: </p>
                            <p>Percentage decrease: [(Old Value - New Value) / Old Value] × 100 </p>
                            <p>= [(90-74)/90] x 100 </p>
                            <p>= [16/90] x 100</p>
                            <p>= 0.117 x 100</p>
                            <p>= 17.77% </p>
                            <p>So, the rate of percentage decrease between Alex's test scores was 17.77%. </p>
                            <p>Percent Decrease Example 4:</p>
                            <p>The price of apples is $12 per Kilogram in the summer season and $8 per Kilogram in the winter season then calculate the percentage decrease in the price of apples. </p>
                            <p>Initial price = $12</p>
                            <p>Final price = $8</p>
                            <p>Enter the values in the formula for percentage decrease:</p>
                            <p className='mt-[20px]'>Percentage decrease: [(Old Value - New Value) / Old Value] × 100</p>
                            <p>= [(12-8)/12] x 100</p>
                            <p>= [4/12] x 100 </p>
                            <p>= 0.333 x 100</p>
                            <p>= 33.33% </p>
                            <p>Percentage decrease of apples prize = 33.33333% </p>
                        </div>
                        <div>
                            <h3>Features of Percent Decrease Calculator </h3>
                            <p>Here are a few unique and prominent features of this online percentage reduction calculator:  </p>
                            <div>
                                <h4>Calculates The Percentage Decrease Between Two Numbers </h4>
                                <p>Determining the drop in percentage between two numbers becomes a simple-to-execute task with this percentage loss calculator. Simply enter the values in the given fields and press the given tab; the percent decrease calculator will automatically process your input and give you instant output.  </p>
                            </div>
                            <div>
                                <h4>Easy-To-Use Interface </h4>
                                <p>The friendly interface of this percentage drop calculator makes it unambiguous for beginners to calculate the difference in percentage values. The clear instructions and simple layout turn this percent decrease calculator the best way to find the percentage drop without taking anyone’s assistance.  </p>
                            </div>
                            <div>
                                <h4>Saves Time and Effort </h4>
                                <p>Making percentage decrease calculations manually requires extensive time and effort. However, the assistance of this online percentage decrease calculator automates the process and provides its users with the fastest results without asking for any manual calculation.  </p>
                            </div>
                            <div>
                                <h4>Provides Accurate Results </h4>
                                <p>The advanced algorithm of the percentage reduction calculator can process your input quickly and give you 100% accurate results. </p>
                            </div>
                        </div>
                        <div>
                            <h4>FAQs</h4>
                            <div>
                                <h4>What Is the Percentage Decrease?  </h4>
                                <p>Percentage decrease is the ratio of the difference of decreasing value to the original value in percentage.  </p>
                            </div>
                            <div>
                                <h4>How Do You Calculate Percent Decrease Before and After?</h4>
                                <p>Using this percent decrease calculator, users can easily find the decrease in the percentage within a few seconds. Or, you can use the percent reduction formula to detect the difference between the initial value and final value with respect to the initial value in terms of percentage.  </p>
                            </div>
                            <div>
                                <h4>Can I Use a Percentage Decrease Calculator to Calculate Percent Increase? </h4>
                                <p>No. The percentage decrease calculator allows you to calculate the decrease in percentage. To find the increase in the percentage of two values, simply try our percentage increase calculator.   </p>
                            </div>
                            <div>
                                <h4>Can I Use a Percentage Decrease Calculator to Calculate the Percentage Difference?</h4>
                                <p>Yes! This free percent decrease calculator enables you to calculate the percentage drop effortlessly. Following the mentioned method will allow you to instantly find the decrease in one value from another for a percentage.   </p>
                            </div>
                            <div>
                                <h4>How Do I Calculate A 5% Decrease?  </h4>
                                <p>Suppose, the original price of a microwave oven is $400 and the new price is $380, and you want to find the percentage decrease, then simply insert the old and new price in the percentage decrease formula.</p>
                                <p>Percentage decrease = [(Old Value - New Value) / Old Value] × 100 </p>
                                <p>= [(400 – 380)] / 400 x 100 = [20/400] x 100 </p>
                                <p>= 0.05 x 100 = 5% </p>
                                <p>So, the percentage decrease is 5%. </p>
                            </div>
                            <div>
                                <h4>How Do You Calculate A 2% Drop? </h4>
                                <p>The price of a car was $1250 in 2022. Now, the owner reduced the price of the car by 2%. What is the price of the car now? </p>
                                <p>Solution</p>
                                <p>Old Price: $1250 </p>
                                <p>New Price: x</p>
                                <p>Percent decrease: 2%</p>
                                <p>Adding the values in the percentage decrease formula </p>
                                <p>Percentage decrease = [(Old Value - New Value) / Old Value] × 100 </p>
                                <p>2 = [(1250 – x)] / 1250 x 100 </p>
                                <p>2/100 = (1250 – x) / 1250</p>
                                <p>1250 – x = 0.5 </p>
                                <p>x = 1225 </p>
                                <p>So, the decreased price of car is $1225. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default DecreaseCalculator