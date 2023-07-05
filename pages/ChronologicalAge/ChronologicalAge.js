import React, { useState } from 'react'
import { AiOutlineCalendar } from 'react-icons/ai'
import moment from 'moment';
import { range } from 'lodash';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Footer from '@/Components/Footer/Footer'
import Header from '@/Components/Header/Header'

function ChronologicalAge() {
    const [open, setOpen] = useState(false)
    const [birthday, setBirthday] = useState(moment())
    const [selectedDate, setSelectedDate] = useState(moment());
    const [values, setValues] = useState({
        year: '',
        months: '',
        monthA: '',
        days_diff: '',
        weekNumber: '',
        day: '',
        totalDays: '',
        hours: '',
        minutes: '',
        seconds: ''
    });

    const diffInMonths = (end, start) => {
        let timeDiff = Math.abs(end.getTime() - start.getTime());
        return Math.round(timeDiff / (2e3 * 3600 * 365.25));
    }

    const changeBirthday = () => {
        const birthdayDate = moment(`${birthday.year()}-${birthday.month() + 1}-${birthday.date()}`,
        "YYYY-MM-DD");
        const TodayDate = moment(`${selectedDate.year()}-${selectedDate.month() + 1}-${selectedDate.date()}`,
        "YYYY-MM-DD");
        let birthDate = new Date(birthdayDate);
        let currentDate = new Date(TodayDate);
        if (birthDate > currentDate) {
            toast.error('Date of birth needs to be earlier than the age at date.')
        }else{
            setOpen(true)
            let days1 = Math.floor((currentDate - birthDate) / (24 * 60 * 60 * 1000));
            let weekNumber = Math.ceil(days1 / 7);
    
            let today = new Date(birthdayDate).getTime();
            let birthdate = new Date(TodayDate).getTime();
            let diff = Math.abs(today - birthdate);
            let totalDays = diff / (1000 *3600*  24);
            let days = Math.floor((diff % 31556736000) / 86400000);
            let days_diff = Math.floor(days% 30.42)
    
            let day = diff % 7
    
            const months = diffInMonths(new Date(birthdayDate), new Date(TodayDate));
            let years = Math.floor(totalDays / 365);
            let hours = Math.floor(totalDays * 24);
            let minutes = Math.floor(totalDays * 1440);
            let seconds = Math.floor(totalDays * 86400);
            let monthA = Math.floor(days / 30.42);
    
            setValues({year: years, months: months,monthA: monthA,days_diff:days_diff,weekNumber:weekNumber,day:day, totalDays:totalDays, hours: hours, minutes:minutes, seconds: seconds})
        }
    }

    const handleReset = () => {
        const current_date = new Date();
        const current_year = current_date.getFullYear();
        const current_month = current_date.getMonth();
        const current_day = current_date.getDate();
        const date = moment([current_year, current_month, current_day]);
        setBirthday(date);
        document.getElementById('year').value = current_year;
        document.getElementById('month').value = current_month + 1;
        document.getElementById('day').value = current_day;
    }

    const handleDateChange = (event) => {
        const year = parseInt(event.target.form.year.value);
        const month = parseInt(event.target.form.month.value) - 1;
        const day = parseInt(event.target.form.day.value);
        const date = moment([year, month, day]);
        setSelectedDate(date);
    }

    const handleBirthDateChange = (event) => {
        const year = parseInt(event.target.form.year.value);
        const month = parseInt(event.target.form.month.value) - 1;
        const day = parseInt(event.target.form.day.value);
        const date = moment([year, month, day]);
        setBirthday(date);
    }
    const currentYear = moment().year();
    const yearOptions = range(currentYear, currentYear - 100, -1).map((year) => (
        <option key={year} value={year}>
        {year}
        </option>
    ));

    const monthOptions = range(0, 12).map((month) => (
        <option key={month} value={month + 1}>
        {moment().month(month).format('MMMM')}
        </option>
    ));

    const dayOptions1 = birthday
    ? range(1, birthday.daysInMonth() + 1).map((day) => (
        <option key={day} value={day}>
        {day}
        </option>
    ))
    : null;

    const dayOptions = selectedDate
        ? range(1, selectedDate.daysInMonth() + 1).map((day) => (
            <option key={day} value={day}>
            {day}
            </option>
        ))
        : null;
    return (
        <>
            <Header />
            <ToastContainer theme="colored"/>
            <div className='h-[98px] my-[20px] bg-[#80808014] max-w-[900px] m-auto'>
            </div>
            <div className='mainbg max-w-[1260px] m-auto px-[15px] py-[10px]'>
                <div className=''>
                    <div className='text-center'>
                        <h1 className='text-[16px] sm:text-[22px] text-[#420075] md:text-2xl font-bold mb-[10px]'>Chronological Age Calculator</h1>
                        <p className='text-sm md:w-[70%] w-[100%] mx-auto font-normal'>Our chronological age calculator lets you count your age on any date. Calculate choronological age of you or any other person to determine the eligibility for school, employment and retirement.</p>
                    </div>
                    <div className='flex bg-[#80808014] max-w-[700px] m-auto items-center my-[20px] min-h-[250px]'>
                        <div></div>
                        <div></div>
                    </div>
                    <div className='card mb-7 py-[20px] max-w-[700px] m-auto'>
                        <div className='border-b border-[#ccc] pb-[32px]'>
                            <div className='flex items-center gap-[10px] justify-center pb-[16px]'>
                                <AiOutlineCalendar className='text-[#420075] text-[16px]' />
                                <h2 className='text-[16px] font-[500]'>Select Your Date Of Birth</h2>
                            </div>
                            <form>
                                <div className='md:px-[100px] px-[20px] m-auto sm:flex grid gap-[30px] items-center sm:justify-between justify-center text-center'>
                                    <div>
                                        <select id='year' name='year' className='focus:outline-0  border-[1px] border-[#ccc] pr-[20px] pl-[6px] py-[6px] w-[100px]'
                                            onChange={e => handleBirthDateChange(e)}
                                            defaultValue={birthday.year()}
                                        >
                                        {yearOptions}
                                        </select>
                                    </div>
                                    <div>
                                        <select id='month' name='month' className='focus:outline-0 border-[1px] border-[#ccc] pr-[20px] pl-[6px] py-[6px] p-[10px] w-[220px]' 
                                            onChange={e => handleBirthDateChange(e)}
                                            defaultValue={birthday.month() + 1}
                                        >
                                            {monthOptions}
                                        </select>
                                    </div>
                                    <div>
                                        <select id="day" name="day" className='focus:outline-0 border-[1px] border-[#ccc] pr-[20px] pl-[6px] py-[6px] p-[10px] w-[100px]'
                                            onChange={e => handleBirthDateChange(e)}
                                            defaultValue={birthday.date()}
                                        >
                                            {dayOptions1}
                                        </select>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div>
                            <div className='flex mt-[20px] items-center gap-[10px] justify-center pb-[16px]'>
                                <AiOutlineCalendar className='text-[#420075] text-[16px]' />
                                <h2 className='text-[18px] font-[500]'>Today's Date</h2>
                            </div>
                            <form>
                                <div className='md:px-[100px] px-[20px] sm:gap-[30px] gap-[20px] m-auto sm:flex grid  items-center sm:justify-between justify-center text-center'>
                                    <div>
                                        <select name="year" className='focus:outline-0 border-[1px] border-[#ccc] pr-[20px] pl-[6px] py-[6px] w-[100px]' 
                                            onChange={e => handleDateChange(e)}
                                            defaultValue={selectedDate.year()}
                                        >
                                            {yearOptions}
                                        </select>
                                    </div>
                                    <div>
                                        <select name="month" className='focus:outline-0 border-[1px] border-[#ccc] pr-[20px] pl-[6px] py-[6px] w-[220px]' 
                                            onChange={e => handleDateChange(e)}
                                            defaultValue={selectedDate.month() + 1}
                                        >
                                            {monthOptions}
                                        </select>
                                    </div>
                                    <div className='pb-[13px]'>
                                        <select name="day" className='focus:outline-0 border-[1px] border-[#ccc] pr-[20px] pl-[6px] py-[6px] w-[100px]' 
                                            onChange={e => handleDateChange(e)}
                                            defaultValue={selectedDate.date()}
                                        >
                                            {dayOptions}
                                        </select>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="h-[98px] my-[20px] bg-[#80808014] max-w-[700px] m-auto"></div>
                    <div className='flex justify-center gap-3'>
                        <button onClick={changeBirthday} className='btnlogin text-white py-[10px] px-[10px] sm:px-[40px] my-[20px]'>Calculate Age</button>
                        <button onClick={handleReset} className='btnlogin text-white py-[10px] px-[10px] sm:px-[40px] my-[20px]'>Reset</button>
                    </div>
                    <div className='flex bg-[#80808014] max-w-[700px] m-auto items-center my-[20px] min-h-[250px]'>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                { open ? <div>
                    <div className='text-center'>
                        <h3 className='text-[24px] font-[600] text-[#420075]'>Result</h3>
                    </div>
                    <div className='w-full lg:w-[900px] mt-[15px] m-auto py-[20px]'>
                        <div>
                            <div className='flex'>
                                <h4 className='p-[10px] bg-[#e3e7ed] w-[100%] text-center border-r border-[#ccc]'>Your Age: <span className='text-[#505050] font-[600] text-[18px]'>{values.year} years old</span></h4>
                                <h4 className='p-[10px] bg-[#e3e7ed] w-[100%] text-center'>You Born at: <span className='text-[#505050] font-[600] text-[18px]'>{moment(birthday).format('YYYY dddd, Do MMMM')}</span></h4>
                            </div>
                        </div>
                        <div className='border  border-[#E3E7ED] mt-[16px]'>
                            <div className='flex border border-[#E3E7ED] w-[100%]'>
                                <p className='md:px-[16px] px-[6px] py-[8px] border-r-[1px] border-[#E3E7ED] md:text-[14px] text-[12px] w-[41%] bg-[#F6F8FA]'>Your Current Age is</p>
                                <p className='md:px-[16px] px-[6px] py-[8px]  md:text-[14px] text-[12px]'>{values.year} <span className='text-[#420075] font-[500]'>years</span> , {values.monthA} <span className='text-[#420075] font-[600]'>months</span> , {values.day} <span className='text-[#420075] font-[600]'>days</span></p>
                            </div>
                            <div className='flex border border-[#E3E7ED] w-[100%]'>
                                <p className='md:px-[16px] px-[6px] py-[8px] border-r-[1px] border-[#E3E7ED] md:text-[14px] text-[12px] w-[41%] bg-[#F6F8FA]'>Age in month is</p>
                                <p className='md:px-[16px] px-[6px] py-[8px]  md:text-[14px] text-[12px]'>{values.months} <span className='text-[#420075] font-[500]'>months</span> , {values.weekNumber} <span className='text-[#420075] font-[600]'>weeks </span> , {values.day} <span className='text-[#420075] font-[600]'>days</span></p>
                            </div>
                            <div className='flex border border-[#E3E7ED] w-[100%]'>
                                <p className='md:px-[16px] px-[6px] py-[8px] border-r-[1px] border-[#E3E7ED] md:text-[14px] text-[12px] w-[41%] bg-[#F6F8FA]'>Age in weeks is</p>
                                <p className='md:px-[16px] px-[6px] py-[8px]  md:text-[14px] text-[12px]'>{values.weekNumber} <span className='text-[#420075] font-[500]'>weeks</span> , {values.day} <span className='text-[#420075] font-[600]'>days </span> , {values.hours} <span className='text-[#420075] font-[600]'>hours</span></p>
                            </div>
                            <div className='flex border border-[#E3E7ED] w-[100%]'>
                                <p className='md:px-[16px] px-[6px] py-[8px] border-r-[1px] border-[#E3E7ED] md:text-[14px] text-[12px] w-[41%] bg-[#F6F8FA]'>Age in days is</p>
                                <p className='md:px-[16px] px-[6px] py-[8px]  md:text-[14px] text-[12px]'>{values.totalDays} <span className='text-[#420075] font-[500]'>days</span> </p>
                            </div>
                            <div className='flex border border-[#E3E7ED] w-[100%]'>
                                <p className='md:px-[16px] px-[6px] py-[8px] border-r-[1px] border-[#E3E7ED] md:text-[14px] text-[12px] w-[41%] bg-[#F6F8FA]'>Age in hours is</p>
                                <p className='md:px-[16px] px-[6px] py-[8px]  md:text-[14px] text-[12px]'>{values.hours} <span className='text-[#420075] font-[500]'>hours</span> </p>
                            </div>
                            <div className='flex border border-[#E3E7ED] w-[100%]'>
                                <p className='md:px-[16px] px-[6px] py-[8px] border-r-[1px] border-[#E3E7ED] md:text-[14px] text-[12px] w-[41%] bg-[#F6F8FA]'>Age in minutes is</p>
                                <p className='md:px-[16px] px-[6px] py-[8px]  md:text-[14px] text-[12px]'>{values.minutes} <span className='text-[#420075] font-[500]'>minutes</span> </p>
                            </div>
                            <div className='flex border border-[#E3E7ED] w-[100%]'>
                                <p className='md:px-[16px] px-[6px] py-[8px] border-r-[1px] border-[#E3E7ED] md:text-[14px] text-[12px] w-[41%] bg-[#F6F8FA]'>Age in seconds is</p>
                                <p className='md:px-[16px] px-[6px] py-[8px]  md:text-[14px] text-[12px]'>{values.seconds} <span className='text-[#420075] font-[500]'>seconds </span> since your birth </p>
                            </div>
                        </div>
                    </div>
                </div> : <></>}
                <div className='w-full lg:w-[900px] mt-[15px] m-auto'>
                    <div>
                        <div className='card p-[15px] mb-[15px] bg-white border rounded-lg'>
                            <div>
                                <h3 className='text-[18px] font-bold mb-[0px] text-[#420075]'>What is Chronological Age?</h3>
                                <p className='text-sm py-[10px]'>A chronological age is any individual’s age concerning the amount of time that has passed from your time of birth. It is calculated in terms of years, months, and days. The chronological age is the primary method used by people around the globe to define their age. </p>
                            </div>
                            <div>
                                <h3 className='text-[16px] mt-[10px] font-bold mb-[0px] text-[#420075]'>How to Calculate Chronological Age?</h3>
                                <p className='text-sm py-[10px]'>The manual calculation of chronological age can be a tricky task, especially when you need to calculate it in days. It’s because every month has a different number of days and the month of February has 29 days after every 4 years. Users can take assistance via an online chronological age calculator to prevent this headache.</p>
                                <p className='text-sm py-[10px]'>Still, if someone wish to do it on their own, they can follow the ways described below to calculate their chronological age.</p>
                                <div>
                                    <p className='text-sm py-[5px]'><span className='font-[600]'>Years : </span>Count the number of years passed from the year of birth.</p>
                                    <p className='text-sm py-[5px]'><span className='font-[600]'>Months : </span>Multiply your years in age by 12.</p>
                                    <p className='text-sm py-[5px]'><span className='font-[600]'>Days : </span>Multiply the full years since your birth year by 365. Add the product of the number of full months that passed from your last birthday with 31. Then finally, add the number of days passed in the current month.</p>
                                    <p className='text-sm py-[5px]'><span className='font-[600]'>Hours : </span>Multiply your age in days by 24.</p>
                                    <p className='text-sm py-[5px]'><span className='font-[600]'>Minutes : </span>Multiply your age in days by 1440.</p>
                                    <p className='text-sm py-[5px]'><span className='font-[600]'>Seconds : </span>Multiply your age in days by 86400.</p>
                                </div>
                            </div>
                            <div>
                                <h3 className='text-[16px] font-bold pt-[10px] text-[#420075]'>How to use the Chronological Age Calculator?</h3>
                                <p className='text-sm py-[10px]'>Our chronological age calculator can save you from the intricate procedures involved in its manual calculation. It is also referred as pearson age calculator because both have the same functionality with different names. It runs on automated algorithms and provides accurate results in a matter of seconds. It won’t ask you to register on this platform to calculate pearson chronological age. Just follow the instructions given below:</p>
                                <ul className=' ml-[40px]'>
                                    <li className='text-sm py-[3px]'>1. Access the online Pearson age calculator.</li>
                                    <li className='text-sm py-[3px]'>2. Enter your date of birth by selecting month, date, and year.</li>
                                    <li className='text-sm py-[3px]'>3. Select the date till which you need to find your age.</li>
                                    <li className='text-sm py-[3px]'>4. Hit the “Calculate Chronological Age” button.</li>
                                    <li className='text-sm py-[3px]'>5. Get results instantly.</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className='text-[16px] font-bold pt-[10px] mb-[0px] text-[#420075]'>What Was My Age on a Given Date?</h3>
                                <p className='text-sm py-[10px]'>Your age on a given date depends upon the date you have chosen. Calculating age won’t change when you need to find your real age on a specific date. Besides allowing you to calculate chronological age till the current date, our chronological age calculator also provides you with an option to find it until a specific date of your choice. As you select any date after your birth date, the tool will compute your age and display results in years, months, days, etc.</p>
                            </div>
                            <div>
                                <h3 className='text-[16px] font-bold mb-[0px] text-[#420075]'>What’s the Average Life Expectancy in Different Countries?</h3>
                                <p className='text-sm py-[10px]'>The pearson age calculator lets you know about your age in different modes of depicting time, such as years, days, hours, minutes, etc. Let’s take a look at the average life expectancy of individuals living in different countries.</p>
                                <div>
                                    <ul className='list-disc ml-[40px]'>
                                        <li className='text-sm py-[5px]'>The average life expectancy of the citizens of the United States is 76.1 years. There is a significant difference between the life expectancy of males and females living in the US.</li>
                                        <li className='text-sm py-[5px]'>The residents of the UK have an average life expectancy of 80.9 years.</li>
                                        <li className='text-sm py-[5px]'>In India, the average life expectancy of individuals is 70.15 years.</li>
                                        <li className='text-sm py-[5px]'>Spaniards have a life expectancy of 83.1 years, which is the longest in the entire of Europe. Overall, the people living in the European Union countries have a life expectancy of 80.9 years.</li>
                                        <li className='text-sm py-[5px]'>The citizens of Australia have an average lifespan of 83.2 years.</li>
                                    </ul>
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

export default ChronologicalAge