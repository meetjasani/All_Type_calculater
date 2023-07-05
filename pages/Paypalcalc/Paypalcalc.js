import React, { useEffect, useState } from 'react'
import { BsCurrencyDollar } from 'react-icons/bs';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Footer from '@/Components/Footer/Footer';
import Header from '@/Components/Header/Header'
import { country } from '@/Components/Json/Country';

const Paypalcalc = () => {
    const defaultCountryCode = "USA"
    const [selCountry, setSelCountry] = useState()
    const [selRate, setSelRate] = useState([])
    const [rates, setRates] = useState()
    const [amount, setAmount] = useState('')
    const [total, setTotal] = useState()
    const [receive, setReceive] = useState()
    const [disAmt, setDisAmt] = useState()
    const [sendMoney, setSendMoney] = useState()
    const [icon, setIcon] = useState()
    const [open, setOpen] = useState(false)

    const handlePaypalFees = () => {  
        if(amount === ''){
            toast.error('Please enter an amount')
        }else{
            setOpen(true)
            let rateValue= parseFloat(rates.split(' ')[0])
            let price = parseFloat(rates.split(' ')[2])
            const rate = amount * (rateValue/100)  
            const amt = parseFloat(rate) + parseFloat(price)
            setTotal((amt).toFixed(2))
            setReceive((amount-amt).toFixed(2))
            setDisAmt(amount)
            setSendMoney((parseFloat(amount)+parseFloat(amt)).toFixed(2))
            { country.map((val, index) => (
                val.country.value === selCountry.value && setIcon(val.country.icon)
            ))}
        }
    }
    const handleCountrySelect = (event) => {
        const countryCode = event.target.value;
        const countryData = country.find(
            (countryData) => countryData.country.value === countryCode
        )
        
        setSelCountry(countryData.country)
        const rateOptions = countryData.rate.local?.map((option) => ({
            label: option.label,
            value: option.value
        }));
        setSelRate(rateOptions)
        setRates(rateOptions[0].value)
    }
    const handleReset = () => {
        setAmount('')
    }
    useEffect(() => {
        const event = { target: { value: defaultCountryCode } };
        handleCountrySelect(event);
    }, []);
    return (
        <>
            <Header />
            <ToastContainer theme="colored"/>
            <div className="h-[98px] my-[20px] bg-[#80808014] max-w-[700px] m-auto"></div>
            <div className='text-center'>
                <h3 className='font-[600] text-[24px] text-[#420075]'>PayPal Fee Calculator</h3>
                <p className='text-[sm] md:w-[50%] py-[10px] w-[100%] mx-auto'>PayPal fee calculator helps you to calculate the fees while sending or receiving the money and gives you the idea of how much you will be charged for each transaction, or how much you should ask for to get a certain amount.</p>
            </div>
            <div className='flex bg-[#80808014] max-w-[700px] m-auto items-center my-[20px] min-h-[250px]'></div>
            <div className='w-full lg:w-[900px] mt-[15px] m-auto'>
                <h3 className='text-[18px] text-[#420075] font-[600] text-center'>Enter An Amount (USD)</h3>
                <div className='p-[10px] flex w-[100%]'>
                    <div className='w-[90px] bg-[#ccc] text-center flex items-center justify-center h-[90px]'>
                        <BsCurrencyDollar className='text-[28px] text-[#495057]' />
                    </div>
                    <div className='w-[100%]'>
                        <input type="number" onChange={(e) => setAmount(e.target.value)} value={amount} placeholder='0.00' className='placeholder:text-[24px] border border-[#ccc] bg-[#F6F8FA] text-[24px] py-[40px] h-[90px] outline-none px-[10px] w-[100%]' />
                    </div>
                </div>
                <div className='w-[100%] md:flex block gap-[20px] my-[20px] p-[10px]'>
                    <div className='w-[100%]'>
                        <div>
                            <label className='text-sm font-[500]' htmlFor="">Country or Region (currency)</label>
                        </div>
                        <select className='border-[#ccc] border p-[10px] w-[100%] outline-none' 
                            onChange={handleCountrySelect}
                            defaultValue="USA"
                        >
                            {country.map((countryData, index) => (
                                <option key={index} value={countryData.country.value}>{countryData.country.label}</option>
                            ))}
                        </select>
                    </div>
                    <div className='w-[100%] md:mt-[0px] mt-[20px]'>
                        <div>
                            <label className='text-sm font-[500]' htmlFor="">Country or Region (currency)</label>
                        </div>
                        <select className='border-[#ccc] border p-[10px] w-[100%] outline-none' 
                            onChange={(e) => setRates(e.target?.value)}
                        >
                           {selRate?.map((rateData, index) => (
                                <option key={index} value={rateData.value}>
                                    {rateData.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className='flex gap-[20px] justify-center'>
                    <button className='btnlogin text-white py-[10px] px-[10px] sm:px-[40px] my-[20px]' onClick={handlePaypalFees}>Calculate Fees</button>
                    <button className='btnlogin text-white py-[10px] px-[10px] sm:px-[40px] my-[20px]' onClick={handleReset}>Reset</button>
                </div>
                { open && (
                <>
                    <div className='my-[10px] text-center'>
                        <h3 className='text-[20px] text-[#420075] font-[600]'>Paypal Fee Calculation result</h3>
                    </div>
                    <div className='bg-[#202223] md:flex block w-[100%] text-[#fff] my-[20px]'>
                        <div className='px-[16px] py-[24px] w-[100%] text-center border-r border-[#515151]'>
                            <p className='text-[22px] font-[600]'>{icon} {total}</p>
                            <p className='text-[14px]'>Total fees</p>
                        </div>
                        <div className='px-[16px] py-[24px] w-[100%] text-center border-r border-[#515151]'>
                            <p className='text-[22px] font-[600]'>You will receive</p>
                            <p className='text-[14px]'> {icon}{receive} If you invoice for {icon}{disAmt}</p>
                        </div>
                        <div className='px-[16px] py-[24px] w-[100%] text-center border-r border-[#515151]'>
                            <p className='text-[22px] font-[600]'>{icon}{sendMoney}</p>
                            <p className='text-[14px]'>You should ask for If you need {icon}{disAmt}</p>
                        </div>
                    </div>
                    </>
                )}
                <div className='h-[98px] my-[20px] bg-[#80808014] max-w-[700px] m-auto'></div>
                <div className='card p-[15px] mb-[15px] bg-white border rounded-lg'>
                    <div>
                        <h3 className='text-[16px] font-[600] text-[#420075] py-[5px]'>PayPal Fee Calculation - Online Utility</h3>
                        <p className='text-sm py-[10px]'>PayPal fee calculation has become easier now due to the inception of the PayPal fee calculator. This calculator has been designed to make the users of PayPal service know how much they will be charged for each transaction. PayPal is the most extensively used online platform that allows people to receive or send payments around the world. For using this service, an amount is deducted or charged as a commission by PayPal.</p>
                        <p className='text-sm py-[5px]'>The online PayPal calculator lets you figure out the exact amount you’ll have to pay for using this service. You don’t need to rely on manual calculations for calculating PayPal fees anymore, as this online utility on SmallSEOTools is here for your rescue.</p>
                    </div>
                    <div>
                        <h3 className='text-[16px] font-[600] text-[#420075] pt-[16px]'>How To Calculate PayPal Fees?</h3>
                        <p className='text-sm py-[10px]'>The PayPal fees calculation is an intricate process, as it involves a fee structure that a user would have to remember for getting accurate figures. PayPal charges a fixed fee on each transaction plus a certain percentage of the amount being sent through it. However, users should know that there is no fee charged on the transaction being made from the PayPal balance.</p>
                        <p className='text-sm py-[5px]'>If the amount you’re sending is up to $3000, you will be charged with 4.4% of the amount plus a fixed fee. The percentage level decreases as the transaction amount goes above $3000. Between $3000 and $10000, the percentage rate is 3.9%, 3.7% for the transactions between $10000 and $100000, and 3.4% for the amounts above $100,000.</p>
                    </div>
                    <div>
                        <h3 className='text-[16px] font-[600] text-[#420075] pt-[16px]'>How To Use Our PayPal Fee Calculator?</h3>
                        <p className='text-sm py-[10px]'>The PayPal fees calculator on our website comes with an easy to use interface that doesn’t demand the users to invest manual efforts. You don’t need to learn any special procedure for using to know how much is PayPal fee. All you need to do after accessing this PayPal calculator is to follow the simple set of instructions given below.</p>
                        <ul className='list-disc ml-[50px]'>
                            <li className='text-sm py-[5px]'>As you access our PayPal fees calculator, you’ll see a box where you have to enter the amount for which you wish to calculate the PayPal fees.</li>
                            <li className='text-sm py-[5px]'>After entering the amount, click on the Calculate PayPal Fee button.</li>
                            <li className='text-sm py-[5px]'>As a result of clicking this button, the tool will calculate and display the PayPal fees that you’ll have to pay in a matter of instance.</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-[16px] font-[600] text-[#420075] pt-[16px]'>How Does this PayPal Fee Calculator Work?</h3>
                        <p className='text-sm py-[10px]'>The PayPal fees calculator on SmallSEOTools is a tool based on advanced algorithms for calculating accurate fees for any given amount without creating hurdles for the users. The users can use this hassle-free utility for PayPal fee calculation by just entering the relevant amount in the given box.</p>
                        <p className='text-sm py-[5px]'>You can use this utility on the go, as you aren’t asked to get registered on our website. Whether you want to use it one time or multiple times, it will work the same way without asking you to go through the strenuous signup process. Moreover, there are no charges for using this online utility. This tool is offering premium features to all of its users without demanding a penny.</p>
                    </div>
                    <div>
                        <h3 className='text-[16px] font-[600] text-[#420075] pt-[16px]'>Why Use This PayPal Fee Calculator?</h3>
                        <p className='text-sm py-[10px]'>The primary reason for using this PayPal fees calculator is its smooth and unambiguous nature that eliminates the need to calculate PayPal fees manually. All the users can gain benefit from this tool’s user-friendly interface and get their hands on the results in a couple of seconds. This online utility is a gift for businesses as they don’t need to bear the PayPal fee expenses anymore. Due to the PayPal fee being charged on each transaction, businesses can face a huge downfall in their revenue that could even result in a loss. Instead of bearing risks, people can use this PayPal fee calculator to estimate the expenses and cover the losses by increasing prices.</p>
                    </div>
                    <div>
                        <h3 className='text-[16px] font-[600] text-[#420075] pt-[16px]'>What Makes Our PayPal Calculator Unique?</h3>
                        <p className='text-sm py-[10px]'>Our PayPal fee Calculator is jam-packed with top-notch features that give its users the best experience while calculation PayPal fees online. The most prominent features of this calculator are discussed below.</p>
                        <div className='py-[40px]'>
                            <h4 className='text-[14px] font-[600] text-[#420075] '>User-Friendly Interface:</h4>
                            <p className='text-sm py-[10px]'>The interface of this PayPal calculator is super-easy to understand and use. The users will not find difficulty in understanding the functionality of this online service. It doesn’t ask users to follow or go through difficult procedures for calculating the PayPal fee online.</p>
                        </div>
                        <div className='py-[40px]'>
                            <h4 className='text-[14px] font-[600] text-[#420075]'>Accuracy in Calculations:</h4>
                            <p className='text-sm py-[10px]'>Our tool provides its users with 100% accurate results. You won’t find any inaccuracy in calculations if you opt to calculate it with our online calculator</p>
                        </div>
                        <div className='py-[40px]'>
                            <h4 className='text-[14px] font-[600] text-[#420075]'>Businesses Save a Lot of Money:</h4>
                            <p className='text-sm py-[10px]'>As this PayPal fee calculator allows the businesses to calculate how much extra cost a consumer will have to pay for buying each item, they can increase the prices instead of bearing the fee themselves.</p>
                        </div>
                        <div className='py-[40px]'>
                            <h4 className='text-[14px] font-[600] text-[#420075]'>Access from Anywhere:</h4>
                            <p className='text-sm py-[10px]'>There’s no need to worry about the accessibility of this tool. It’s a web-based service that can be accessed from any corner of the world. You just need to connect your device to an internet connection to use our online calculator.</p>
                        </div>
                        <div className='py-[40px]'>
                            <h4 className='text-[14px] font-[600] text-[#420075]'>Supports all Platforms:</h4>
                            <p className='text-sm py-[10px]'>Whether you have a Mac, Android, iOS, Windows, or Linux device, you can use this tool without facing any restrictions. You can use the PayPal calculator at any time of the day and from any kind of device.</p>
                        </div>
                    </div>
                    <div>
                        <h3 className='text-[16px] font-[600] text-[#420075] pt-[16px]'>Why Does Your Business Need PayPal Fee Calculator?</h3>
                        <p className='text-sm py-[10px]'>This PayPal fee calculator has become a necessity for businesses due to many reasons. The main reasons for using this online calculator are as follows:</p>
                        <div className='py-[40px]'>
                            <h4 className='text-[14px] font-[600]'>Error-Free Calculations:</h4>
                            <p className='text-sm'>The manual calculations are always considered dangerous, as humans are prone to making errors. However, this online utility will provide you with error-free calculations in no time.</p>
                        </div>
                        <div className='py-[40px]'>
                            <h4 className='text-[14px] font-[600]'>Automated Calculations:</h4>
                            <p className='text-sm'>The PayPal fee calculator is based on advanced algorithms that calculate Paypal goods and services fees for any given amount automatically. It’s an instant tool that doesn’t need to be installed on your device.</p>
                        </div>
                        <div className='py-[40px]'>
                            <h4 className='text-[14px] font-[600]'>Save Time and Efforts:</h4>
                            <p className='text-sm'>Now, you can find PayPal fees for multiple transactions in a matter of seconds due to this calculator. It saves you an ample amount of time and doesn’t ask you to invest manual efforts.</p>
                        </div>
                    </div>
                    <div className=''>
                        <h3 className='text-[16px] font-[600] text-[#420075]'>Protect User Privacy</h3>
                        <p className='pb-[40px] text-sm'>When it comes to using online services, trust becomes an issue. SmallSEOTools has been providing hundreds of tools for making the lives of people easier for several years, and it guarantees privacy protection to all of its visitors. The users are reluctant to give their personal information on online tools. Therefore, our PayPal fee calculator hasn’t made it a condition to get registered for using this service. We ensure 100% privacy protection for all of our users.</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </>

    )
}

export default Paypalcalc