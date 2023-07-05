import React, { useState } from 'react'
import { AiOutlineCalendar } from "react-icons/ai"
import moment from 'moment';
import { range } from 'lodash';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Footer from '@/Components/Footer/Footer'
import Header from '@/Components/Header/Header'

const Agecalc = () => {
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
    
            setValues({year: years, months: months,
                monthA: monthA,days_diff:days_diff,
                weekNumber:weekNumber,day:day, 
                totalDays:totalDays, hours: hours, 
                minutes:minutes, seconds: seconds
            })
        }
    }

    const handleReset = () => {
        setOpen(false)
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
            <div className="h-[98px] my-[20px] bg-[#80808014] max-w-[700px] m-auto"></div>
            <div className='mainbg max-w-[1260px] m-auto px-[15px] py-[10px]'>
                <div className=''>
                    <div className='text-center'>
                        <h1 className='text-[16px] sm:text-[22px] text-[#420075] md:text-2xl font-bold mb-[10px]'>Age Calculator</h1>
                        <p className='text-sm md:w-[70%] w-[100%] mx-auto font-normal'>Age calculator online helps you find your age from date of birth or interval between two dates. Calculate age in years, months, weeks, days, hours, minutes, and seconds.</p>
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
                {open ? <div>
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
                                <h3 className='text-[18px] font-bold mb-[0px] text-[#420075]'>About Age Calculator (How old am I?)</h3>
                                <p className='text-sm py-[10px]'>The age calculator on SmallSEOTools is an intelligent utility that lets you check age of a person, building, or anything in a matter of seconds. The usage of our web-based utility doesn't involve any intricate procedures to be followed by the users. You can use our age calculator online on any device by following a few simple steps. The date of birth calculator is compatible with all operating systems; the users are just required to connect their device with an internet connection to access this utility. If you're asked how old are you? Calculate age online and easily answer it in terms of years. But when you want to know your age in weeks, months, or hours, there is no better way to find it except by using our exact age calculator. You can make use of this tool without paying a penny. Besides calculating the age, you can also use this tool to determine your contract end date. For instance, if you are in a contract of one year, you can adjust the contract's starting date in this tool and figure out how much time is left to terminate the agreement.</p>
                                <p className='text-sm py-[10px]'>Age calculation can be done in various ways since different cultures have different ways of calculating age. Our calculator uses the conventional American and European methods and relies on the date of birth.</p>
                            </div>
                            <div>
                                <h3 className='text-[16px] mt-[10px] font-bold mb-[0px] text-[#420075]'>How to Use this Online Age Calculator?</h3>
                                <p className='text-sm py-[10px]'>How old are you? Don't be curious anymore and calculate age from date of birth.</p>
                                <p className='text-sm py-[10px]'>Just try our date of birth calculator without facing any hassle. You don't need to take any training or memorize formulas to calculate your age with this online age calculator. The only thing you need to do is follow the simple steps mentioned below.</p>
                                <div className='ml-[40px] mt-[10px]'>
                                    <p className='text-sm py-[5px]'>1. After accessing the tool, select the date of birth. Choose the year, month, and date to calculate age.</p>
                                    <p className='text-sm py-[5px]'>2. Now, select the date in either the past or future to make the calculations. Today's date is set by default. If you don't want to change it, leave this step and follow the next one.</p>
                                    <p className='text-sm py-[5px]'>3. Lastly, hit the "Calculate Age" button. The results will be displayed on your screen in a blink.</p>
                                </div>
                            </div>
                            <div>
                                <h3 className='text-[16px] font-bold pt-[10px] text-[#420075]'>How many days/weeks/months old am I?</h3>
                                <p className='text-sm py-[10px]'>Our birth year calculator uses a range of time units to answer individual questions like "How many days old am I?" "How many years old am I?" "How old is someone?" and so on. The tool provides extensive details related to the dates entered by the user, which include:</p>
                                <ul className='list-disc ml-[60px]'>
                                    <li className='text-sm py-[3px]'>Age in months</li>
                                    <li className='text-sm py-[3px]'>Age in weeks</li>
                                    <li className='text-sm py-[3px]'>Age in days</li>
                                    <li className='text-sm py-[3px]'>Age in hours</li>
                                    <li className='text-sm py-[3px]'>Age in minutes</li>
                                    <li className='text-sm py-[3px]'>Age in seconds</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className='text-[16px] font-bold pt-[10px] mb-[0px] text-[#420075]'>Get the Exact Age Detail as on Date</h3>
                                <p className='text-sm py-[10px]'>The top-notch feature of the old calculator on SmallSEOTools is that it allows the users to get the exact age detail on any date. You are not limited to calculating age only on today's date, as we do not fix it. You can alter the date as you like and find the age between the two dates without hassle. The specified dates chosen by the user are processed by the age counter as they hit the calculate button. The whole process doesn't take more than a couple of seconds, and the users are provided with the exact age detail without investing time or money.</p>
                            </div>
                            <div>
                                <h3 className='text-[16px] font-bold mb-[0px] text-[#420075]'>Calculate to Know your Day of Birth</h3>
                                <p className='text-sm py-[10px]'>We all know the date, month, and year we were born, but have you ever wondered what the day of your birth was? Whether it was Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, or Sunday? If you are unaware of it, there's no need to scratch your head anymore, as our age finder is available to resolve your query. You can find the exact day of birth with the dob calculator in a couple of seconds.</p>
                            </div>
                            <div>
                                <h3 className='text-[16px] font-bold mb-[0px] text-[#420075]'>Calculate your Age to Future Date</h3>
                                <p className='text-sm py-[10px]'>The online age counter lets you calculate age from date of birth to any year in the past or future. If you want to know how old you will be in the upcoming years, you can use this tool and get results instantly. For example, by quickly adjusting the dates on this free-to-use tool, you can find out how old you will be in 2030.</p>
                            </div>
                            <div>
                                <h3 className='text-[16px] font-bold mb-[0px] text-[#420075]'>Who Can Use the Online Age Calculator?</h3>
                                <p className='text-sm py-[10px]'>The online age calculator by year can be used by people working in various domains. The top uses of this DOB calculator are discussed below.</p>
                            </div>
                            <div>
                                <h3 className='text-[16px] font-bold mb-[0px] text-[#420075]'>Who Can Use the Online Age Calculator?</h3>
                                <p className='text-sm py-[10px]'>The online age calculator by year can be used by people working in various domains. The top uses of this DOB calculator are discussed below.</p>
                            </div>
                            <div>
                                <h3 className='text-[14px] font-bold mb-[0px] text-[#420075]'>Admission Offices</h3>
                                <p className='text-sm py-[10px]'>Using the exact age calculator at admission offices is necessary to determine the exact age of the students enrolling in a specific program. There is a certain age limit for the students who can obtain a seat for particular programs. Admission offices can utilize the birth calculator facility to ensure students' age lies within the limit.</p>
                            </div>
                            <div>
                                <h3 className='text-[14px] font-bold mb-[0px] text-[#420075]'>Government Organizations</h3>
                                <p className='text-sm py-[10px]'>The government organizations often have to deal with the personal details of the individuals, which they need to ensure that the correct birth date and current age entry have been completed. The age calculator by date of birth is a helpful tool to rely on in this scenario, as this facility ensures accurate results.</p>
                            </div>
                            <div>
                                <h3 className='text-[14px] font-bold mb-[0px] text-[#420075]'> HR Faculties</h3>
                                <p className='text-sm py-[10px]'>The HR faculties in every organization are responsible for recording all the data relevant to their employees. When recording an employee's age, it wouldn't be wise to manually count the years from the date of birth, as it consumes ample time and there are chances of inaccuracies. Therefore, the HR faculties can get their hands on the birthday calculator to effortlessly calculate the ages of as many employees as they want without any restrictions.</p>
                            </div>
                            <div>
                                <h3 className='text-[16px] font-bold py-[20px] mb-[0px] text-[#420075]'>FAQs</h3>
                                <div>
                                    <h3 className='text-[14px] font-bold mb-[0px] text-[#420075]'>How Old Was I On this Date?</h3>
                                    <p className='text-sm py-[10px]'>To check how old you were on a date in the past or how old you would be on a specific date in the future, you can use this age calculator online by date of birth or select the date at which you need to check your age and get accurate results instantly. </p>
                                </div>
                                <div>
                                    <h3 className='text-[14px] font-bold mb-[0px] text-[#420075]'>If I Was Born in 2004, How Old Would I Be in 2025?</h3>
                                    <p className='text-sm py-[10px]'>If you were born in 2004, you would be 21 years old in 2025. </p>
                                </div>
                                <div>
                                    <h3 className='text-[14px] font-bold mb-[0px] text-[#420075]'>When Was I Born if My Current Age is 25 Years in the Year 2022?</h3>
                                    <p className='text-sm py-[10px]'>If your current age is 25 in 2022, you were born in 1997.</p>
                                </div>
                                <div>
                                    <h3 className='text-[14px] font-bold mb-[0px] text-[#420075]'>How Old Am I Today If I Was Born in the Year 1960?</h3>
                                    <p className='text-sm py-[10px]'>If you were born in the year 1960, then you are 62 years old today.</p>
                                </div>
                                <div>
                                    <h3 className='text-[14px] font-bold mb-[0px] text-[#420075]'>How to Calculate Age from Two Dates?</h3>
                                    <p className='text-sm py-[10px]'>If you want to calculate your age from two dates, you can use this age calculator. All you need to do is set the correct dates from the given tabs to check how old you are at a specific time.</p>
                                </div>
                                <div>
                                    <h3 className='text-[14px] font-bold mb-[0px] text-[#420075]'>What is the Chronological Age?</h3>
                                    <p className='text-sm py-[10px]'>Chronological age is an individual's age from a specific date to birth. Use this chronological age calculator to determine your age based on any date.</p>
                                </div>
                                <div>
                                    <h3 className='text-[14px] font-bold mb-[0px] text-[#420075]'>How Can You Figure Out How Old is Someone?</h3>
                                    <p className='text-sm py-[10px]'>Using our online age finder, you can figure out how old someone is. Besides this tool, you can also figure out someone's age by checking their social media accounts, asking their friends, using public records, or bringing up memories.</p>
                                </div>
                                <div>
                                    <h3 className='text-[14px] font-bold mb-[0px] text-[#420075]'>Who is the Oldest Person Alive in 2022?</h3>
                                    <p className='text-sm py-[10px]'>According to Guinness World Records, the oldest person alive in 2022 is a Venezuelan man, Juan Vincente Mora. Recently, he crossed the milestone of his 113th birthday on May 27, 2022. Anyone can use this birthday calculator to know their age.</p>
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

export default Agecalc