import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '@/Components/Footer/Footer'
import Header from '@/Components/Header/Header'

function IncreaseCalculator() {
    const [open, setOpen] = useState(false)
    const [initValue, setInitValue] = useState('')
    const [finalValue, setFinalValue] = useState('')
    const [percentage, setPercentage] = useState()

    const handleClick = () => {
        if(initValue === ''){
            toast.error("The start value must be a number.")
        } else if(finalValue === ''){
            toast.error("The end value must be a number.")
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
                    <h1 className='text-[16px] sm:text-[22px] text-[#420075] md:text-2xl font-bold mb-[10px]'>Percentage Increase Calculator</h1>
                    <p className='text-sm md:w-[70%] w-[100%] mx-auto font-normal'>Percentage increase calculator allows you to find percentage increase, gain, or rise between two values. Enter values and get result.</p>
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
                                <p>Percentage Increase </p>
                            </div>
                            <div className='] text-center p-[8px] border border-[#ccc] w-[50%]'>
                                <p>{percentage}%</p>
                            </div>
                        </div>
                    </>
                )}
                <div className='w-full lg:w-[900px] mt-[15px] m-auto'>
                    <div className='card p-[15px] mb-[15px] bg-white border rounded-lg'>
                        <div>
                            <h3 className='text-[18px] font-bold mb-[0px] text-[#420075]'>About Percentage Increase Calculator</h3>
                            <p className='text-sm py-[10px]'>The percentage increase calculator by SmallSEOTools allows users to find the increase of a value to another in terms of the percentage of the initial amount. The easy-to-use interface of our percent increase calculator makes the process of calculating percentage increase quite simple and hassle-free.</p>
                            <p className='text-sm py-[10px]'>The percentage increase calculator by SmallSEOTools allows users to find the increase of a value to another in terms of the percentage of the initial amount. The easy-to-use interface of our percent increase calculator makes the process of calculating percentage increase quite simple and hassle-free.</p>
                            <p className='text-sm py-[10px]'>Try the percentage increase calculator for free now to get 100% accurate results instantly!</p>
                        </div>
                        <div>
                            <h3>How to Calculate Percentage Increase?</h3>
                            <p>You don’t need to follow an intricate procedure to use percent raise calculator. By following the simple steps shared below, you can find percentage increase without any hassle.</p>
                            <div>
                                <ul className=''>
                                    <li>Access the online percentage increase calculator.</li>
                                    <li>Enter the initial and final values in the given boxes.</li>
                                    <li>Press the “Calculate” button and find the percentage increase.</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h3>How to Find the Percentage Increase Manually?</h3>
                            <p>The calculation of percentage increase can be done manually; In the manual calculation of percentage increase, firstly, you need to find the gap between the new value and the initial value. After finding the difference, you need to divide it by the original amount. As a result, you’ll find how much value has increased in decimal. In order to find the percentage increase, multiply the result by 100. This final outcome will be the percentage increase of the final value as compared to the initial amount.</p>
                            <div>
                                <h4>Percentage Increase Formula:</h4>
                                <p>The percentage increase formula can be used to make this calculation manually. </p>
                                <p>Percentage Increase = [(Final Value – Initial Value / |Initial Value|)] × 100</p>
                                <p>Examples:</p>
                                <p>1. The price of a house in 2021 was $40,000. The price increased to $55,000 in the next. What is the percentage increase in its price?</p>
                                <p>As per the given information:</p>
                                <p>Initial Value = $40,000</p>
                                <p>Final Value = $55,000</p>
                                <p>By incorporating these values in the formula, we get:</p>
                                <p>Percentage Increase = [(55000 – 40000 / |40000|)] × 100</p>
                                <p>= 15000/40000 x 100</p>
                                <p>= 37.5%</p>
                                <p>Hence, the percentage increase in the house price is 37.5%. </p>
                                <p>2. Martin purchased a limited edition bike for $25,000. After a few months, he got to know that the same bike was being sold in the market for $35,000. What is the percentage increase in the cost of the bike since Martin purchased it?   </p>
                                <p>As per the given information:</p>
                                <p>Initial Value = $25,000</p>
                                <p>Final Value = $35,000</p>
                                <p>By incorporating these values in the formula, we get:</p>
                                <p>Percentage Increase = [(35000 – 25000/ |25000|)] x 100</p>
                                <p>= 10000/25000 x 100</p>
                                <p>= 40%</p>
                                <p>The percentage increase in the cost of the bike since Martin purchased it is 40%.</p>
                                <p>3. Rock made an investment of $1,500 in the stock exchange. In two years, Rock’s total investment increased in value to $2,250. What is the percentage increase in the value of investment made by Rock?</p>
                                <p>As per the given information:</p>
                                <p>Initial Value = $1,500</p>
                                <p>Final Value = $2,250</p>
                                <p>By incorporating these values in the formula, we get:</p>
                                <p>Percentage Change = [(2250 – 1500/ |1500|)] x 100</p>
                                <p>= 750/1500 x 100</p>
                                <p>= 50%</p>
                                <p>Rock’s investment increased by 50%. </p>
                            </div>
                        </div>
                        <div>
                            <h3>Features of Percent Increase Calculator </h3>
                            <p>The percent increase calculator offered by SmallSEOTools stands out from other utilities available over the web due to its outstanding features. These features include the following:</p>
                            <div>
                                <h4>100% Accurate percentage gain calculator</h4>
                                <p>The percentage gain calculator ensures accuracy in the results it offers. You can calculate percent increase of your desired values without having any doubts about the authenticity of outcomes delivered by % increase calculator.</p>
                            </div>
                            <div>
                                <h4>Unlimited Usage</h4>
                                <p>There is no restriction on the usage of our <a href="#" className='text-[#420075] underline font-[500]'>percentage increase calculator.</a> It allows you to determine percentage increase for as many values as you require without imposing any limitations. In addition, you won’t be asked to pay a single penny, no matter how many times you want to use this tool.</p>
                            </div>
                            <div>
                                <h4>No Installation Required</h4>
                                <p>The percent increase calculator is an online tool that doesn’t need to be installed on your device. You don’t need to worry about finding a specific device to find percent increase with percent gain calculator. All you need is a stable internet connection to use percentage increase calculator.</p>
                            </div>
                            <div>
                                <h4>Easy Accessibility</h4>
                                <p>Accessing and using online percent increase calculator is quite an easy task. This platform doesn’t let you go through the hassle of getting registered. You can access rise percentage calculator whenever you want and start calculating percentage increase on the go! </p>
                            </div>
                        </div>
                        <div>
                            <h3>FAQs</h3>
                            <div>
                                <h4>What is the Percentage Increase?</h4>
                                <p>Percentage increase refers to the relative increase in the value of anything with respect to the initial value. You need to find the difference between the two values and present it as a percentage of the original amount.</p>
                            </div>
                            <div>
                                <h4>IS this Percentage Rise Calculator free?</h4>
                                <p>Yes! The percentage raise calculator is absolutely free of cost. You can make percentage increase calculations through it without paying any charges.</p>
                            </div>
                            <div>
                                <h4>How to Calculate Percent Increase in Excel?</h4>
                                <p>In Excel, the percent increase can be calculated through the following steps:</p>
                                <div>
                                    <ul className='list-disc ml-[40px]'>
                                        <li className='text-sm py-[2.5px]'>Enter the actual and increased values in distinct cells.</li>
                                        <li className='text-sm py-[2.5px]'>Write down the percent increase formula (=SUM(NEW – OLD)/OLD).</li>
                                        <li className='text-sm py-[2.5px]'>Press the Enter key to get percentage increase results.</li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <h4>How Do I Calculate a 20% Increase?</h4>
                                <p>You can calculate a 20% increase by multiplying it by the initial amount. The result after the multiplication will represent a 20% increase. You can add the increased value to the initial value to find the final amount after a 20% increase.</p>
                            </div>
                            <div>
                                <h4>How Do I Calculate a 5% Increase?</h4>
                                <p>Calculating a 5% increase requires the multiplication of the original amount by 5%.</p>
                                <p>For instance, if you need to find a 5% increase in your salary, which was $4,000, the increased amount is:</p>
                                <p>= 4000 x 5%</p>
                                <p>= 200</p>
                                <p>Hence, the 5% increase on $4,000 is $200.</p>
                            </div>
                            <div>
                                <h4>How Do You Calculate a 2% Raise?</h4>
                                <p>In order to calculate a 2% raise, you need to multiply 2% by the actual value. The result will represent a 2% increase from the original amount.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default IncreaseCalculator