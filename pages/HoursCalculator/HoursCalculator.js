import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Footer from '@/Components/Footer/Footer'
import Header from '@/Components/Header/Header'

function HoursCalculator() {
    const [startTime, setStartTime] = useState('01:00')
    const [endTime, setEndTime] = useState('12:00')
    const [hoursType, setHoursType] = useState('12')
    const [open, setOpen] = useState(false)
    const [display, setDisplay] = useState({
        totalTime: '',
        decimalHours: '',
        minutes: '',
        seconds: ''
    });
    const handleHours = () => {
        const [startHours, startMinutes, startSeconds] = startTime.split(':').map(Number);
        const [endHours, endMinutes, endSeconds] = endTime.split(':').map(Number);

        let totalHours = Math.abs(endHours - startHours);
        let totalMinutes = endMinutes - startMinutes;
        let totalSeconds = endSeconds - startSeconds;
        if (totalSeconds < 0) {
            totalMinutes--;
            totalSeconds += 60;
        }
      
        if (totalMinutes < 0) {
            totalHours--;
            totalMinutes += 60;
        }

        const formattedTotalHours = totalHours.toString().padStart(2, '0');
        const formattedTotalMinutes = totalMinutes.toString().padStart(2, '0');
        const formattedTotalSeconds = totalSeconds >= 0 ? totalSeconds.toString().padStart(2, '0') : '00';

        const formattedDecimalHour = parseFloat(formattedTotalHours) + (parseFloat(formattedTotalMinutes)/60) + (parseFloat(formattedTotalSeconds)/3600)
        if( startTime.match(/\d+:\d+/) === null || endTime.match(/\d+:\d+/) === null){
            toast.error("Please fill the correct time format. ")
        }else{
            setOpen(true)
            setDisplay({
                totalTime: `${formattedTotalHours}:${formattedTotalMinutes}:${formattedTotalSeconds}`,
                decimalHours: formattedDecimalHour.toFixed(2),
                minutes: formattedDecimalHour*60,
                seconds: formattedDecimalHour*3600
            });
        }
    }
    const handleReset = () => {
        setStartTime('01:00')
        setEndTime('12:00')
    }
    return (
        <>
            <Header />
            <ToastContainer theme="colored"/>
            <div className='h-[98px] my-[20px] bg-[#80808014] max-w-[900px] m-auto'></div>
            <div className='mainbg max-w-[1260px] m-auto  py-[10px]'>
                <div>
                    <div className='text-center'>
                        <h1 className='text-[16px] sm:text-[22px] text-[#420075] md:text-2xl font-bold mb-[10px]'>Hours Calculator</h1>
                        <p className='text-sm md:w-[70%] w-[100%] mx-auto font-normal'>The hours calculator easily calculates hours and minutes between two times within a day. So no need to wonder how many hours did I work? Just input values and get your calculated work hours.</p>
                    </div>
                </div>
                <div className='flex bg-[#80808014] max-w-[700px] m-auto items-center my-[20px] min-h-[250px]'>
                    <div></div>
                    <div></div>
                </div>
                <div className='bg-[#fff] md:px-[48px] px-[20px] md:py-[28px] py-[20px] md:w-[900px] mx-auto'>
                    <div>
                        <div>
                            <label htmlFor="" className='text-sm font-[600]'>Time Format</label>
                        </div>
                        <select className='p-[10px] border border-[#ccc] md:w-[49%] w-[100%]'
                            value={hoursType}
                            onChange={e => setHoursType(e.target.value)}
                        >
                            <option value="12">12 Hours</option>
                            <option value="24">24 Hours</option>
                        </select>
                    </div>
                    <div className='md:flex block gap-[20px] my-[20px]'>
                        <div className='w-[100%] md:my-[0px] my-[20px]'>
                            <div>
                                <label htmlFor="" className='text-sm font-[600]'>Start Time</label>
                            </div>
                            <input type={hoursType === "12" ? "time" : "text"}  className='w-[100%] p-[10px] border border-[#ccc] outline-none' min="01:00" max="23:00"
                                value={startTime}
                                onChange={e => setStartTime(e.target.value)}
                            />
                        </div>
                        <div className='w-[100%] md:my-[0px] my-[20px]'>
                            <div>
                                <label htmlFor="" className='text-sm font-[600]'>End Time</label>
                            </div>
                            <input type={hoursType === "12" ? "time" : "text"} className='w-[100%] p-[10px] border border-[#ccc] outline-none' min="01:00" max="23:00"
                                value={endTime}
                                onChange={e => setEndTime(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="h-[98px] my-[20px] bg-[#80808014] max-w-[700px] m-auto"></div>
                    <div className='flex justify-center gap-3'>
                        <button className='btnlogin text-white py-[10px] px-[10px] sm:px-[40px] my-[20px]' onClick={handleHours}>Calculate Hours</button>
                        <button className='btnlogin text-white py-[10px] px-[10px] sm:px-[40px] my-[20px]' onClick={handleReset}>Reset</button>
                    </div>
                    <div className='flex bg-[#80808014] max-w-[700px] m-auto items-center my-[20px] min-h-[250px]'>
                        <div></div>
                        <div></div>
                    </div>
                    {open && (
                        <div className='text-center'>
                            <h4 className='text-[#420075] text-[20px] font-bold'>Result</h4>
                            <div className='w-[100%] flex justify-center my-[20px]'>
                                <table className='table-auto w-[100%] border-[1px] text-sm Conversion_table border-[#ccc]'>
                                    <thead>
                                        <tr>
                                            <th className='text-center text-[#212529] text-[14px]'>Total Time</th>
                                            <th className='text-center text-[#212529] text-[14px]'>Decimal Hours</th>
                                            <th className='text-center text-[#212529] text-[14px]'>Minutes</th>
                                            <th className='text-center text-[#212529] text-[14px]'>Seconds</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr><td>{display.totalTime}</td>
                                            <td>{display.decimalHours}</td>
                                            <td>{display.minutes}</td>
                                            <td>{display.seconds}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                    <div className='flex bg-[#80808014]  max-w-[800px] m-auto items-center my-[20px] min-h-[250px]'></div>
                </div>
                <div className=' w-full lg:w-[900px] mt-[15px] m-auto card p-[15px] mb-[15px] bg-white border rounded-lg'>
                    <div>
                        <h3 className='text-[15px] font-bold mb-[10px] text-[#420075]'>What Is an Hour?</h3>
                        <p className='text-sm py-[5px]'>An hour is measured as the time period equal to 60 minutes. A minute equals 60 seconds, and a second is the time duration that elapses during 9,192,631,770 cycles of the radiation shaped by the transition between two levels of the cesium-133 atom. </p>
                        <p className='text-sm py-[5px]'>A single day has 24 hours, and most people read time using either a 12-hour clock or a 24-hour clock. </p>
                        <div>
                            <h4 className='text-[420075] font-[600] text-[14px] py-[5px] text-[#420075]'>12-Hour Clock</h4>
                            <p className='text-sm py-[5px]'>The 12-hour clock contains the number from 1 to 12. These clocks are widely used all around the globe and have both analog and digital versions. In analog clocks, there is often no sign of whether the mentioned time is in the morning or evening. However, the digital 12-hour clock includes "AM," which stands for ante meridiem, meaning "before midday," and "PM," which stands for post meridiem, or "afternoon." This signifies that 12 AM denotes midnight and 12 PM denotes noon. Using these terms can eliminate the ambiguity in reading the time. If you still have any doubts use the hours calculator for calculating hours within a day.</p>
                        </div>
                        <div>
                            <h4 className='text-[420075] font-[600] text-[14px] py-[5px] text-[#420075]'>24-Hour Clock</h4>
                            <p className='text-sm py-[5px]'>There are 0-23 numbers on a 24-hour clock where 0:00 defines midnight, and a day starts at midnight and ends at midnight over 24 hours. The 24-hour clock is an international standard that is mainly used to avoid the complications people often face while using the 12-hour clock. This clock system is referred to as military time because it's used by militaries all around the globe where definite time measurement is particularly important.</p>
                        </div>
                        <div>
                            <h3 className='text-[15px] font-bold mb-[10px] text-[#420075]'>How to Use Our Hours Calculator? </h3>
                            <p className='text-sm py-[5px]'>The procedure of using this hour calculator is immensely simple and straightforward. Following the steps shared below will enable you to calculate hours efficiently.  </p>
                            <div>
                                <ul className='list-disc py-[5px] ml-[40px]'>
                                    <li className='text-sm py-[2.5px]'>Reach on this online hours calculator. </li>
                                    <li className='text-sm py-[2.5px]'>Choose the time format as per your preference. You can select the 12-clock hour or 24-clock hour from the given options. </li>
                                    <li className='text-sm py-[2.5px]'>Enter the Start Time in a given field. </li>
                                    <li className='text-sm py-[2.5px]'>Add End Time in the next field. </li>
                                    <li className='text-sm py-[2.5px]'>Press the Calculate button to initiate the hours calculation process. </li>
                                    <p className='text-sm py-[5px]'> The hourly calculator will process your inputs and give you authentic and flawless results instantly. </p>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h4 className='font-[600] text-[14px] py-[5px] text-[#420075]'>Calculate Hours Between Two Times</h4>
                            <p className='text-sm py-[5px]'>How many hours remain before my birthday? What will be the difference between 05:30 PM and 8:50 AM? No need to calculate work hours yourself at all, as our free hours calculator is here to serve you in this regard. Get the assistance of our web-based utility for calculating hours without making any manual effort. All you require is to enter the two times and hit the Calculate button. </p>
                        </div>
                        <div>
                            <h4 className=' font-[600] text-[14px] py-[5px] text-[#420075]'>Calculate Work Hours in Minutes and Seconds</h4>
                            <p className='text-sm py-[5px]'>How many hours did I work? is the biggest query of individuals working in different sectors. Calculation of working hours can be performed by the following method. </p>
                            <p className='text-sm py-[5px]'>7:30 + 1:45 =?</p>
                            <p className='text-sm py-[5px]'>6:30 (30/60=0.5) = 6.5 </p>
                            <p className='text-sm py-[5px]'>1:45 (45/60=0.75) = 1.75</p>
                            <p className='text-sm py-[5px]'>2:00 = 2 hours</p>
                            <p className='text-sm py-[5px]'>_______________</p>
                            <p className='text-sm py-[5px]'>6.5 + 1.75 = 8.25 hours</p>
                            <p className='text-sm py-[5px]'>But, this method requires immense time. Instead, use our advanced hourly calculator to save your time and eliminates all chances of mistakes. Easily calculate hours in minutes and seconds with the help of an hours calculator. This approach makes hours' calculation quite simple and easier for individuals. However, it is essential to understand that an hour has 60 minutes. Moreover, hours and minutes are different units of time. Therefore, minutes cannot be denoted by a decimal number of hours. </p>
                        </div>
                        <div>
                            <h3 className='font-[600] py-[5px] text-[#420075]'>Hours in Different Time Periods</h3>
                            <p className='text-sm py-[5px]'>There are instances where you need to find the difference in hours between two periods. Similarly, the possibility is that you instantly need to calculate the total number of working hours in a week, month, or year. Making such calculations will certainly consume an extensive amount of time and effort. But you can instantly use the information shared below and calculate hours in a specific period. </p>
                            <div>
                                <h4 className='font-[600] text-[14px] py-[5px] text-[#420075]'>How Many Hours in A Year?</h4>
                                <p className='text-sm py-[5px]'>There are 365 days in a calendar year. Therefore, to calculate hours per year, simply use the following method.</p>
                                <p className='text-sm py-[5px] '>Hours per Year = Number of Days in a Year x Total Hours in One Day </p>
                                <p className='text-sm py-[5px] '>= 365 x 24</p>
                                <p className='text-sm py-[5px] '>= 8760 Hours</p>
                                <p className='text-sm py-[5px] '>However, if it's a leap year, then </p>
                                <p className='text-sm py-[5px] '>= 366 x 24</p>
                                <p className='text-sm py-[5px] '>= 8,784, Hours</p>
                                <div>
                                    <h4 className='font-[600] text-[14px] py-[5px] text-[#420075]'>How Many Hours in A Month?</h4>
                                    <p className='text-sm py-[5px]'> There are 730.5 hours in a calendar month, on average. However, the total number of days varies. Therefore, each month has a different number of hours:</p>
                                    <div>
                                        <ul className='list-disc ml-[50px]'>
                                            <li className='text-sm py-[5px]'>January, March, May, July, August, October, and December have 744 hours. </li>
                                            <li className='text-sm py-[5px]'>The number of hours in April, June, September, and November is 730. </li>
                                            <li className='text-sm py-[5px]'>February has the lowest 672 hours in a non-leap year and 696 in a leap year. </li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                            <div>
                                <h4 className='font-[600] text-[14px] py-[5px] text-[#420075]'>How Many Hours in A Week?</h4>
                                <p className='text-sm py-[5px] '>There are seven days in one week, and each day has 24 hours. </p>
                                <p className='text-sm py-[5px] '>Hours a Week = Total number of days x Hours in Each Day</p>
                                <p className='text-sm py-[5px] '>= 7 x 24</p>
                                <p className='text-sm py-[5px] '>= 168</p>
                                <p className='text-sm py-[5px] '>So, there are 168 hours in one week. </p>
                                <div>
                                    <h4 className='font-[600] text-[14px] py-[5px] text-[#420075]'>How Many Hours in A Day?</h4>
                                    <p className='text-sm py-[5px]'> There are twenty-four hours in one day. </p>
                                </div>
                            </div>
                            <div>
                                <h4 className='font-[600] text-[14px] py-[5px] text-[#420075]'>Salary vs. Hourly</h4>
                                <p className='text-sm py-[5px]'>Do you know the difference between hourly-based employees and salary employees? Well, the hourly employees work based on per-hour salaries, like $20 per hour. But on the other hand, salaried employees get regular paychecks and other perks and privileges than hourly workers. Also, they don't get any additional payment for working overtime, unlike hourly wage earners, who can get an extra payment if they work for more hours than decided ones.</p>
                                <p className='text-sm py-[5px]'>The hourly calculator enables you to find the earnings within a few seconds. You don't need to download or install any application to calculate your salary. Just add the working hours and minutes in this hours calculator, and it will highlight your total working hours. </p>
                                <p className='text-sm py-[5px]'>Below we are sharing the topmost highly paid and regularly paid jobs in the US that you can compare with your current salary and take the required steps to enhance your income. </p>
                                <p className='text-sm py-[5px] font-[600]'> 10 Jobs That Pay $25/Hour (Average Hourly Pay)</p>
                                <div>
                                    <ul className='list-disc ml-[40px]'>
                                        <li className='text-sm py-[5px]'>Mental health counselors and behavioral disorder counselors = $23.75</li>
                                        <li className='text-sm py-[2.5px]'>Athletic trainers = $24.12</li>
                                        <li className='text-sm py-[2.5px]'>Education teachers = $24.37</li>
                                        <li className='text-sm py-[2.5px]'>Mechanics and installers = $24.03</li>
                                        <li className='text-sm py-[2.5px]'>Technicians = $23.77</li>
                                        <li className='text-sm py-[2.5px]'>Social workers = $24.03</li>
                                        <li className='text-sm py-[2.5px]'>Planners = $26.02</li>
                                        <li className='text-sm py-[2.5px]'>Clinical laboratory technologists = $25.93</li>
                                        <li className='text-sm py-[2.5px]'>Construction equipment operators and operating engineers = $25.52</li>
                                        <li className='text-sm py-[2.5px]'>Environmental science and protection counselors = $24.49</li>
                                    </ul>
                                </div>
                                <p className='text-sm py-[5px] font-[600]'> 10 Jobs That Pay $25/Hour (Average Hourly Pay)</p>
                                <div>
                                    <ul className='list-disc ml-[40px]'>
                                        <li className='text-sm py-[2.5px]'>Life coach</li>
                                        <li className='text-sm py-[2.5px]'>Underwater welder</li>
                                        <li className='text-sm py-[2.5px]'>Freelance photographer</li>
                                        <li className='text-sm py-[2.5px]'>Speechwriter</li>
                                        <li className='text-sm py-[2.5px]'>Visual graphic artist</li>
                                        <li className='text-sm py-[2.5px]'>Physiotherapist</li>
                                        <li className='text-sm py-[2.5px]'>Graphic designer</li>
                                        <li className='text-sm py-[2.5px]'>Commercial pilot</li>
                                        <li className='text-sm py-[2.5px]'>Anesthesiologist</li>
                                        <li className='text-sm py-[2.5px]'>Orthodontist</li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <h3 className='text-[#420075] font-[600]'>Calculating How Much You're Making Per Hour</h3>
                                <p className='text-sm py-[5px]'>If you're working full time on a monthly salary basis (40 hours weekly) and getting a two-week yearly vacation, as all leading companies offer to their employees, you probably work for 2000 hours per year. Many companies also offer two weeks of paid leaves only to employees who have been working for more than one year. </p>
                                <p className='text-sm py-[5px]'>To calculate per hour salary, you must drop three zeros from your total income and divide it by 2. For example, if you earn $80,000 yearly, now drop three zeros, it will become $80. Now, divide it by 2, and you will get $40, which is your per-hour salary. </p>
                                <p className='text-sm py-[5px]'>However, to calculate your hourly based salary, you need to calculate work hours and minutes flawlessly. Our work hours calculator is the best way to determine working hours. Enter your starting working time and ending time, and that's all; the tool will process your inputs and give you instant output.  </p>
                            </div>
                            <div>
                                <h3 className='text-[#420075] font-[600]'>FAQs </h3>
                                <div>
                                    <h4 className='font-[600] text-[14px] py-[5px] text-[#420075]'>How Many Work Hours Are in A Typical Workday?</h4>
                                    <p className='text-sm py-[5px]'>The typical working day is usually 8 working hours, making it 40 hours a week (5 working days). There are 52 weeks in one year, making it 2,080 working hours a year.</p>
                                </div>
                                <div>
                                    <h4 className='font-[600] text-[14px] py-[5px] text-[#420075]'>How Many Hours Is 7:30 to 3:30?</h4>
                                    <p className='text-sm py-[5px]'>There are a total of 8 hours and 480 minutes between 7:30 and 3:30. You can swiftly find hours between two periods using the work hours calculator. </p>
                                </div>
                                <div>
                                    <h4 className='font-[600] text-[14px] py-[5px] text-[#420075]'>How Many Seconds in an Hour?</h4>
                                    <p className='text-sm py-[5px]'>There are 60 seconds in an hour.</p>
                                </div>
                                <div>
                                    <h4 className='font-[600] text-[14px] py-[5px] text-[#420075]'>How to Calculate Work Hours?</h4>
                                    <p className='text-sm py-[5px]'>The web-based work hour calculator allows you to calculate working hours without making any manual effort. Enter your starting and ending time at this hour counter and get the total work hours in a fraction of a second. </p>
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

export default HoursCalculator