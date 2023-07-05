import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Footer from '@/Components/Footer/Footer'
import Header from '@/Components/Header/Header'

function SalaryCalculator() {
    const [open, setOpen] = useState(false)
    const [selectType, setSelectType] = useState('hour')
    const [amount, setAmount] = useState('100')
    const [selectPay, setSelectPay] = useState([
        {label: 'Daily', value: '8'},
        {label: 'Weekly', value: '40'},
        {label: 'Bi Weekly', value: '41'},
        {label: 'Semi Monthly', value: '87'},
        {label: 'Monthly', value: '174'},
        {label: 'Quarterly', value: '520'},
        {label: 'Semi Annually', value: '1040'},
        {label: 'Annually', value: '2080'},
    ])
    const [selectPaySal, setSelectPaySal] = useState('365')
    const [pay, setPay] = useState('8')
    const [hours, setHours] = useState('8')
    const [selectLabel, setSelectLabel] = useState('Daily');
    const [disSalary, setDisSalary] = useState()

    const handlePayChange = (e) => {
        let selectedOption = selectPay.find((option) => option.value === e.target.value);
  
        if (selectedOption) {
            setSelectLabel(selectedOption.label);
            setPay(selectedOption.value);
            setHours(selectedOption.value)
        }
    }
    const handleInputChange = (e) => {
        setHours(e.target.value)
    }
    const handleTotalSalary = () => {
        if(amount === '') {
            toast.error('The salary amount must be a number.')
        }else if(selectType === 'hour' && hours === ''){
            toast.error('The hours must be a number.')
        }else {
            if(selectType === 'hour'){
                setOpen(true)
                setDisSalary(parseFloat(amount)*(hours))
            }else{
                setOpen(true)
                setDisSalary((amount/selectPaySal).toFixed(0))
            }
        }
    }
    const handleReset = () => {
        setPay('8')
        setHours('')
        setAmount('100')
        setSelectPaySal('365')
    }
    return (
        <>
            <Header />
            <ToastContainer theme="colored"/>
            <div className="h-[98px] my-[20px] bg-[#80808014] max-w-[700px] m-auto"></div>
            <div className='mainbg max-w-[1260px] m-auto px-[15px] py-[10px]'>
                <div>
                    <div className='text-center'>
                        <h1 className='text-[16px] sm:text-[22px] text-[#420075] md:text-2xl font-bold mb-[10px]'>Salary Calculator</h1>
                        <p className='text-sm md:w-[70%] w-[100%] mx-auto font-normal'>The salary calculator allows you to calculate salary based on different pay frequencies and salary amount. Use this paycheck calculator Now!</p>
                    </div>
                    <div className='flex bg-[#80808014] max-w-[700px] m-auto items-center my-[20px] min-h-[250px]'>
                        <div></div>
                        <div></div>
                    </div>
                    <div className='card py-[20px]  mb-7  max-w-[700px] m-auto md:p-[48px] p-[24px]'>
                        <div className=''>
                            <div>
                                <div>
                                    <label htmlFor="" className='text-sm font-[500]'>Type</label>
                                </div>
                                <select className=' border mt-1 border-[#ccc] outline-none p-2 md:w-[300px] w-[100%]'
                                    value={selectType}
                                    onChange={e => setSelectType(e.target.value)}
                                >
                                    <option value="hour">Hour</option>
                                    <option value="salary">Salary</option>
                                </select>
                            </div>
                            <div className='md:flex block mt-2 gap-[10px] w-100'>
                                <div className='w-[100%]'>
                                    <div>
                                        <label htmlFor="" className='text-sm font-[500]'>
                                            {selectType === 'hour' ? 'Hourly Amount $' : 'Salary Amount (Per Year) $'}
                                        </label>
                                    </div>
                                    <input type="number" className='border mt-1 outline-none border-[#ccc] p-2 w-[100%]' 
                                        value={amount}
                                        onChange={e => setAmount(e.target.value)}
                                    />
                                </div>
                                <div className='w-[100%]'>
                                    <div>
                                        <label htmlFor="" className='text-sm font-[500]'>Pay Frequency</label>
                                    </div>
                                    {selectType === 'hour' ? (
                                        <div className='w-[100%] md:my-[0px] my-[20px]'>
                                            <select name='gradeLetters' className='w-[100%] p-[10px] my-[10px] border border-[#ccc] outline-none'
                                                value={pay} 
                                                onChange={handlePayChange}
                                            >
                                                {selectPay.map((option) =>(
                                                    <option key={option.value} value={option.value}>{option.label}</option>
                                                ))}
                                            </select>
                                        </div>
                                    ) : (
                                        <div className='w-[100%] md:my-[0px] my-[20px]'>
                                            <select name='gradeLetters' className='w-[100%] p-[10px] my-[10px] border border-[#ccc] outline-none'
                                                value={selectPaySal} 
                                                onChange={e => setSelectPaySal(e.target.value)}
                                            >
                                                <option value="365">Daily</option>
                                                <option value="52">Weekly</option>
                                                <option value="26">Bi Weekly</option>
                                                <option value="24">Semi Monthly</option>
                                                <option value="12">Monthly</option>
                                                <option value="4">Quarterly</option>
                                                <option value="2">Semi Annually</option>
                                                <option value="1">Annually</option>
                                            </select>
                                        </div>
                                    )}
                                </div>
                            </div>
                            {selectType === 'hour' && (
                                <div className='w-[100%] mt-2'>
                                    <div>
                                        <label htmlFor="" className='text-sm font-[500]'>Hours per {selectLabel}</label>
                                    </div>
                                    <input type="number" className='border mt-1 outline-none border-[#ccc] p-2 w-[100%]' 
                                        value={hours}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            )}
                            <div className='h-[98px] my-[20px] bg-[#80808014] max-w-[700px] m-auto'></div>
                            <div className='flex justify-center gap-3 flex-wrap'>
                                <button onClick={handleTotalSalary} className='btnlogin text-white py-[10px] my-0 px-[10px] sm:px-[40px] md:my-[20px]'>Calculate Salary</button>
                                <button onClick={handleReset} className='btnlogin text-white py-[10px] my-0 px-[10px] sm:px-[40px] md:my-[20px]'>Reset</button>
                            </div>
                            <div className='flex bg-[#80808014] max-w-[700px] m-auto items-center my-[20px] min-h-[250px]'></div>
                           { open ? <div>
                                <h6 className='text-[#420057] text-[20px] text-center font-bold'>Result</h6>
                                <div className='w-[100%] pt-[16px]'>
                                    <div className='w-[100%] text-center text-[14px] border border-[#E3E7ED] p-[10px] font-[500] bg-[#F6F8FA]'>
                                    Your Estimated Daily Salary
                                    </div>
                                    <div className='w-[100%] text-center text-[14px] border border-[#E3E7ED] p-[10px] font-[500]'>
                                     ${disSalary}
                                    </div>
                                </div>
                            </div> : "" }
                            <div className='w-full lg:w-[900px] mt-[15px] m-auto'>
                            </div>
                        </div>
                    </div>
                    <div className='w-full mt-[30px] lg:w-[900px] m-auto'>
                        <div className='card p-[15px] mb-[15px] bg-white border rounded-lg'>
                            <div>
                                <h3 className='text-[16px] font-bold mb-[10px] text-[#420075]'>About Salary Calculator</h3>
                                <p> SmallSEOtools is offering an advanced salary calculator to its users that makes salary calculation a simply executable task. The utility is based on AI-based algorithms that process your inputs and gives you flawless results instantly. </p>
                                <p>The user-friendly interface of this paycheck calculator enables everyone to calculate salary without taking the assistance of any professional. Also, the gross income calculator doesn’t demand any account creation or installation from its users. Moreover, the tool supports all operating systems and devices, allowing users to calculate paycheck without facing any obstacles. However, a secure internet connection is required to reach this web-based pay calculator. </p>
                            </div>
                            <div>
                                <h3 className='text-[16px] font-bold mb-[10px] text-[#420075]'>Difference between Salary & Wage</h3>
                                <p>  The primary difference between salary and wage is that a salary is paid in a fixed amount throughout the year. On the other hand, the wage varies in accordance with the time or amount someone works. </p>
                                <p>The salary amount includes all holidays and sick day compensations etc. However, wages don’t include any such compensations at all. Employers in different industries prefer wages, especially to individuals whose schedules are inconsistent. In the wage payment system, employees will get paid for the hours they work or for each piece of work they complete. Calculate salary based on hours with the help of an online hours calculator to avoid any hassle. In price wage, workers agree on a specific amount for each piece. </p>
                            </div>
                            <div>
                                <h3 className='text-[16px] font-bold mb-[10px] text-[#420075]'>How to Calculate Salary or Net income? </h3>
                                <p>Here are a few examples that will help you learn the manual method of salary calculation appropriately. </p>
                                <p className='text-[18px] text-[#420075] font-[500]'> Example 1: </p>
                                <p>If Jack’s monthly income is about $1720, then how much will he make in a year?</p>
                                <p className='text-[18px] text-[#420075] font-[500]'> Solution:</p>
                                <p>Calculate annual income using formula:</p>
                                <p>Annual Salary = Monthly Salary * 12</p>
                                <p>Annual Salary = $1720 * 12</p>
                                <p>Annual Salary = $20,640</p>
                                <p>So, Jack’s yearly salary will be $20,640. </p>
                                <p className='text-[18px] text-[#420075] font-[500]'> Example 2:</p>
                                <p> Sara has an annual salary of about $28, 468. Calculate salary of a month. </p>
                                <p className='text-[18px] text-[#420075] font-[500]'>  Solution: </p>
                                <p> Monthly Salary = Gross Annual Salary / 12</p>
                                <p>Monthly Salary = $28, 468 / 12</p>
                                <p>Monthly Salary = $2372.33</p>
                                <p> If you don’t want to follow the manual method to calculate paycheck, simply try our online salary calculator for quick income calculation. </p>
                                <p className='text-[18px] text-[#420075] font-[500]'>   Example 3:</p>
                                <p>Shaw is working in a factory at an hourly rate of $12.8 for 8 hours daily. Calculate annual income. </p>
                                <p className='text-[18px] text-[#420075] font-[500]'> Solution:</p>
                                <p>Shaw is working 8 hours a day, making it 40 hours a week. (If there are 5 working days). </p>
                                <p>Annual Salary = Hourly salary * 2080</p>
                                <p>Annual Salary = $12.8 * 2080</p>
                                <p>Annual Salary = $26,624</p>
                                <p>Shaw’s annual salary will be $26,624. </p>
                            </div>
                            <div>
                                <h3 className='text-[16px] font-bold mb-[10px] text-[#420075]'> How Does this Salary Calculator Work? </h3>
                                <p>  Calculating salary with our pay calculator is extremely simple and straightforward. So follow the easy steps mentioned below and calculate pay right away. </p>
                                <div>
                                    <ul className='list-disc ml-[50px]'>
                                        <li className='text-sm py-[5px]'>Access this online salary calculator from your web browser. </li>
                                        <li className='text-sm py-[5px]'>Choose your Pay Frequency (Hourly, Monthly, Quarterly, Half-Yearly, or Yearly)</li>
                                        <li className='text-sm py-[5px]'>Enter the Salary Amount </li>
                                        <li className='text-sm py-[5px]'>Select the type of Wage (Hourly or Salary) </li>
                                        <li className='text-sm py-[5px]'>Add your total working hours per week. </li>
                                        <li className='text-sm py-[5px]'>Hit the Calculate button to find your salary.</li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <h3 className='text-[16px] font-bold mb-[10px] text-[#420075]'>Different Pay Frequencies</h3>
                                    <p> Pay frequency, also known as payroll frequency, defines how often you pay your employees. The pay frequency also determines the total number of paychecks employees will receive from their company or employer in a year. </p>
                                    <p>Below we will discuss the most popular pay frequencies. </p>
                                    <div className='mt-[10px]'>
                                        <ul className='list-disc ml-[50px]'><li className='text-[16px] font-[500]'>Daily</li></ul>
                                        <p> With daily pay frequency, workers usually get paid each day. This pay frequency is used where the work duration is not defined or might be inconsistent. Also, there will be no paid leaves for the employees getting daily wages. </p>
                                    </div>
                                    <div className='mt-[10px]'>
                                        <ul className='list-disc ml-[50px]'><li className='text-[16px] font-[500]'>Weekly</li></ul>
                                        <p>  On weekly frequency, employers give wages to their workers each week. As a result, employees get paid weekly and receive 52 paychecks each year. </p>
                                    </div>
                                    <div className='mt-[10px]'>
                                        <ul className='list-disc ml-[50px]'><li className='text-[16px] font-[500]'>Bi-Weekly</li></ul>
                                        <p> With this pay frequency, the workers get paid every other week. In bi-weekly wages, a worker gets 26 paychecks each year. Moreover, the workers usually get paid on the same day of each week in each pay period. Also, they normally receive two paychecks every month from their employer.  </p>
                                    </div>
                                    <div className='mt-[10px]'>
                                        <ul className='list-disc ml-[50px]'><li className='text-[16px] font-[500]'>Semi-Monthly</li></ul>
                                        <p> The semi-monthly pay frequency can easily be confused with the bi-weekly pay schedule. The reason is that in both frequencies, the workers get wages twice per month. However, there are major differences in semi-monthly and biweekly frequencies. For example, with semi-monthly pay, the workers get 24 paychecks each year. </p>
                                    </div>
                                    <div className='mt-[10px]'>
                                        <ul className='list-disc ml-[50px]'><li className='text-[16px] font-[500]'>Monthly</li></ul>
                                        <p> In monthly pay frequency, the employee receives a salary once a month. So, there will be a total of 12 paychecks each year in monthly pay frequency. This pay frequency is widely used all around the world and is more famous other than any other pay frequency. </p>
                                    </div>

                                </div>
                            </div>
                            <div>
                                <h3 className='text-[16px] font-bold mb-[10px] text-[#420075]'>Benefits of Using Wage Calculator</h3>
                                <p> The process of wage calculation becomes a no-uphill task using our salary calculator online. Here are a few major benefits of our pay calculator. </p>
                                <div className='pt-[10px]'>
                                    <h6 className='text-[16px] font-[500]'> Simple and Easy</h6>
                                    <p>The wage calculator has a super-friendly interface that allows people from any field to find their monthly, weekly, or hourly salary without any restrictions. Moreover, you don’t have to learn any special technical skills or prior knowledge to use this gross income calculator. </p>
                                </div>
                                <div className='pt-[10px]'>
                                    <h6 className='text-[16px] font-[500]'> Quick and Accurate Results</h6>
                                    <p> Manual calculation of monthly or yearly salary may consume extensive time and energy. Instead, using our salary estimator offers you instant results. All you require is to enter the values on this utility to calculate pay. The facility will automatically process your values and give you the quickest and most accurate salary calculation results. </p>
                                </div>
                                <div className='pt-[10px]'>
                                    <h6 className='text-[16px] font-[500]'>Unlimited Calculations</h6>
                                    <p> The salary calculator doesn’t put any restrictions on its users for accessing and making salary calculations. Users can make countless wage calculations according to their requirements without facing any restrictions. </p>
                                </div>
                                <div className='pt-[10px]'>
                                    <h6 className='text-[16px] font-[500]'>Multiplatform Supported</h6>
                                    <p> Whether you are accessing this wage calculator from your smartphone, personal computer, or laptop, you can easily calculate your salary without observing any hurdles. Also, the paycheck calculator is compatible with all operating systems and web browsers.  </p>
                                </div>
                            </div>
                            <div>
                                <h3 className='text-[16px] font-bold mb-[10px] text-[#420075]'>FAQs</h3>
                                <div className='pt-[10px]'>
                                    <h6 className='text-[16px] font-[500]'>  What Is The US Median Salary?</h6>
                                    <p>  The median salary in the US observed in the second quarter of 2022 was approximately $54,132 per year. However, this value can be different state-wise, as the yearly income of a person living in New York will be different from the person working in the same industry in Massachusetts. </p>
                                </div>
                                <div className='pt-[10px]'>
                                    <h6 className='text-[16px] font-[500]'> What Is The UK Median Salary?</h6>
                                    <p>  In the UK, the median salary is £33K, according to the financial report 2022. But, the media salary can increase or decrease in different cities in the UK.</p>
                                </div>
                                <div className='pt-[10px]'>
                                    <h6 className='text-[16px] font-[500]'> How to Calculate Annual Income?</h6>
                                    <p>  Using our advanced salary calculator, users can easily find their annual income. Simply enter your daily, weekly, or monthly salary on the tool, and it will calculate your income instantly. </p>
                                </div>
                                <div className='pt-[10px]'>
                                    <h6 className='text-[16px] font-[500]'> Can A Salary Calculator Help Me Negotiate My Salary?</h6>
                                    <p>  Yes! Using a salary calculator will help you find out what your salary should be in the given industry in a particular position. This will help you negotiate your salary with your interviewer or employers. </p>
                                </div>
                                <div className='pt-[10px]'>
                                    <h6 className='text-[16px] font-[500]'>  How Do I Calculate My Hourly Pay from My Salary?</h6>
                                    <p>   To calculate hourly salary from monthly salary, simply multiply the total number of working hours by the total weeks in a month. Now, divide this by the total monthly salary. The resultant value will be your hourly salary. Else, you can try our salary calculator to find your monthly or yearly salary. </p>
                                </div>
                                <div className='pt-[10px]'>
                                    <h6 className='text-[16px] font-[500]'> What Is My Hourly Pay If My Monthly Salary Is $8,500?</h6>
                                   <p> Monthly Salary = $8500</p>
                                   <p>Working Hours per Week = 40</p>
                                   <p>Weeks in a Month = 4.33</p>
                                   <p>Now, multiply the working hours per week by the total weeks in a month</p>
                                   <p>= 40 X 4.33</p>
                                   <p>=173.2</p>
                                   <p>Now, divide this number by the total salary</p>
                                   <p>= 8500/173.2</p>
                                   <p>= 49.076</p>
                                </div>
                                <div className='pt-[10px]'>
                                    <h6 className='text-[16px] font-[500]'>Can this Salary Calculator Provide a Breakdown of Salary Components?</h6>
                                    <p>No! Our salary calculator is simple to use that allows you to calculate your hourly, weekly, monthly, half-yearly, and yearly salary only with a few clicks. </p>
                                </div>
                                <div className='pt-[10px]'>
                                    <h6 className='text-[16px] font-[500]'> Is A Salary Calculator Accurate?</h6>
                                    <p> SmallSEOtools’ salary calculator is based on advanced algorithms that provide 100% accurate results. In addition, you can cross-check the calculation results with any other software.  </p>
                                </div>
                                <div className='pt-[10px]'>
                                    <h6 className='text-[16px] font-[500]'>How Do I Calculate My Hourly Wage?</h6>
                                    <p> Follow the simple steps shared below to calculate your hourly salary: </p>
                                    <div>
                                        <ul className='list-disc ml-[50px]'>
                                            <li className='text-sm py-[5px]'>  Calculate your total working hours. For example, if you work n hours in a single day, 5 days a week, then:</li>
                                            <p>n × 5 hours weekly;</p> 
                                            <p>n × 5 × 52 hours yearly;</p>
                                            <p>n × 5 × 52/12 hours monthly.</p>
                                            <li className='text-sm py-[5px]'> Now, divide the salary by your total number of working hours. </li>
                                            <li className='text-sm py-[5px]'>The result value will be your hourly salary. </li>
                                            <p>Avoid this hassle and use paycheck calculator to calculate salary.</p>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default SalaryCalculator