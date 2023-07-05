import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Footer from '@/Components/Footer/Footer'
import Header from '@/Components/Header/Header'

const Earningscalc = () => {
    const [open, setOpen] = useState(false)
    const [selectCurr, setSelectCurr] = useState('$')
    const [income, setIncome] = useState('')
    const [dividends, setDividends] = useState('')
    const [shares, setShares] = useState('')
    const [result, setResult] = useState()
    const [disCurrency, setDisCurrency] = useState()

    const handleEps = () => {
        if(income === '' || dividends === '' || shares === ''){
            toast.error('Please fill all the required fields')
        }else {
            const countShare = Math.abs(parseFloat(income)-parseFloat(dividends)) / parseFloat(shares)
            setOpen(true)
            setResult(countShare.toFixed())
            setDisCurrency(selectCurr)
        }
    }
    const handleReset = () => {
        setOpen(false)
        setSelectCurr('$')
        setIncome('')
        setDividends('')
        setShares('')
        setResult('')
        setDisCurrency('')
    }
    return (
        <>
            <Header />
            <ToastContainer theme="colored"/>
            <div className="h-[98px] my-[20px] bg-[#80808014] max-w-[700px] m-auto"></div>
            <div className='text-center'>
                <h3 className='font-[600] text-[24px] text-[#420075]'>Earnings Per Share Calculator</h3>
                <p className='text-[sm] md:w-[50%] py-[10px] w-[100%] mx-auto'>The earnings per share calculator helps to measures the EPS ratio. To calculate enter the amounts of net income, dividends on preference shares, and the number of shares issued by the company.</p>
            </div>
            <div className='flex bg-[#80808014] max-w-[700px] m-auto items-center my-[20px] min-h-[250px]'></div>
            <div className='w-full lg:w-[900px] mt-[15px] m-auto'>
                <div className='bg-[#fff] px-[48px] py-[28px] border border-[#ccc]'>
                    <div>
                        <div>
                            <label htmlFor="" className='text-sm font-[600]'>Currency (optional)</label>
                        </div>
                        <select className='my-[5px] w-[100%] h-[48px] px-[10px] outline-none border border-[#ccc]'
                            value={selectCurr}
                            onChange={(e) => setSelectCurr(e.target.value)} 
                        >
                            <option value="$">$ (dollar)</option>
                            <option value="£">£ (pound sterling)</option>
                            <option value="€">€ (euro)</option>
                            <option value="¥">¥ (yen)</option>
                            <option value="none">none</option>
                        </select>
                    </div>
                    <div className='mt-[10px]'>
                        <div>
                            <label htmlFor="" className='text-sm font-[600]'>Net Income (I), {selectCurr}</label>
                        </div>
                        <input type="number" className='w-[100%] h-[48px] indent-2 placeholder:text-[14px] outline-none border border-[#ccc]' placeholder='net_income' 
                            onChange={(e) => setIncome(e.target.value)}
                            value={income}
                        />
                    </div>
                    <div className='mt-[10px]'>
                        <div>
                            <label htmlFor="" className='text-sm font-[600]'>Preferred Dividends (D), {selectCurr}</label>
                        </div>
                        <input type="number" className='w-[100%] h-[48px] indent-2 placeholder:text-[14px] outline-none border border-[#ccc]' placeholder='Dividend' 
                            onChange={(e) => setDividends(e.target.value)}
                            value={dividends}
                        />
                    </div>
                    <div className='mt-[10px]'>
                        <div>
                            <label htmlFor="" className='text-sm font-[600]'># of Shares Outstanding ({selectCurr})</label>
                        </div>
                        <input type="number" className='w-[100%] h-[48px] indent-2 placeholder:text-[14px] outline-none border border-[#ccc]' placeholder='Shares' 
                            onChange={(e) => setShares(e.target.value)}
                            value={shares}
                        />
                    </div>
                    <div className='flex justify-center gap-3'>
                        <button onClick={handleEps} className='btnlogin text-white py-[10px] px-[10px] sm:px-[40px] my-[20px]'>Calculate EPS</button>
                        <button className='btnlogin text-white py-[10px] px-[10px] sm:px-[40px] my-[20px]' onClick={handleReset}>Reset</button>
                    </div>
                </div>
                {open ? <div className='bg-[#202223] w-full lg:w-[900px] mb-[15px] m-auto md:flex block  text-[#fff]'>
                    <div className='px-[16px] py-[24px] w-[100%] text-center border-r border-[#515151]'>
                        <p className='text-[22px] font-[600]'>{disCurrency !== 'none' && disCurrency} {result}</p>
                        <p className='text-sm'>Earnings per Share (EPS):</p>
                    </div>
                </div> : <></>}
                <div className='h-[98px] my-[20px] bg-[#80808014] max-w-[700px] m-auto'></div>
                <div className='w-full lg:w-[900px] mt-[15px] m-auto'>
                    <div className='card p-[15px] mb-[15px] bg-white border rounded-lg'>
                        <div>
                            <h3 className='text-[16px] text-[#420075] font-[600]'>What is (EPS) Earnings Per Share?</h3>
                            <p className='text-sm py-[5px]'>Earnings per share is a financial ratio used by businesses and investors to estimate a company’s value. EPS is basically a module that calculates the division of a company’s net profit to each of its shares from the issued stock. The earnings per share manual calculation is an intricate process that might land people on inaccurate results. For calculating earnings per share, you will have to memorize a formula that might not be easy, and the risk of getting mistaken outcomes would be high. Therefore, we have developed the earnings per share calculator utility to save people from the nuisance of manual calculations. You can get your hands on accurate results in a matter of instance, by using this EPS calculation online utility. There are two types of earnings per share, and they are discussed below.</p>
                            <div className='py-[10px]'>
                                <h4 className='text-[14px] font-[600] text-[#420075]'>Basic Earnings Per Share</h4>
                                <p className='text-sm py-[5px]'>The businesses with simple capital structures are only required to calculate basic earnings per share. The basic EPS helps the investors figure out a rough idea of how much a company’s capability is to offer a return against each issued share.</p>
                            </div>
                            <div className='py-[10px]'>
                                <h4 className='text-[14px] font-[600] text-[#420075]'>Diluted Earnings Per Share</h4>
                                <p className='text-sm py-[5px]'>Diluted earnings per share are usually calculated by businesses with complex capital structures. In the calculation of diluted earnings per share, a business has to convert all of its securities to common stock. If your company is able to convert securities into common stock, then you can calculate diluted earnings per share.</p>
                            </div>
                            <div className='py-[10px]'>
                                <h4 className='text-[14px] font-[600] text-[#420075]'>Earnings Per Share Formula</h4>
                                <p className='text-sm py-[5px]'>The eps formula for calculating earnings per share is as follows:</p>
                                <p className='text-sm py-[10px] font-[600]'>EPS = ((Net Income – Preferred Stock Dividend)) / (Average Number of Outstanding Common Shares)</p>
                                <p className='text-sm'>Let’s discuss the essential factors of the earnings per share formula.</p>
                            </div>
                            <div className='py-[30px]'>
                                <h4 className='text-[14px] font-[600] text-[#420075]'>Net Income:</h4>
                                <p className='text-sm py-[5px]'>It’s the amount calculated after deduction of all expenses, taxes, and interests from the revenue of a business.</p>
                            </div>
                            <div className='py-[30px]'>
                                <h4 className='text-[14px] font-[600] text-[#420075]'>Dividends on Preferred Stock:</h4>
                                <p className='text-sm py-[5px]'>The amount paid to the preference shareholders as a return for their investment is known as the dividend on preferred stock.</p>
                            </div>
                            <div className='py-[30px]'>
                                <h4 className='text-[14px] font-[600] text-[#420075]'>Average Outstanding Common Shares:</h4>
                                <p className='text-sm py-[5px]'>It’s the number of shares issued by a company from its common stock.</p>
                            </div>
                        </div>
                        <div>
                            <h3 className='text-[#420075] font-[600] text-[16px]'>How To Calculate EPS(Earnings Per Share)?</h3>
                            <p className='text-sm py-[5px]'>The earnings per share calculator on SmallSEOTools is an easy to use tool that doesn’t ask the users to learn the specific procedure for its usage. The user-friendly interface of our EPS calculator allows you to calculate earnings per share in a couple of clicks. For using this tool, you can follow the simple steps given below after accessing it.</p>
                            <div>
                                <ul className='list-disc ml-[50px]'>
                                    <li className='text-sm py-[10px]'>First of all, enter the amounts of net income, dividends on preference shares, and the number of shares issued by the company.</li>
                                    <li className='text-sm py-[10px]'>After entering these values, just click on the Calculate EPS button.</li>
                                    <li className='text-sm py-[10px]'>As a result, the EPS calculator will calculate and display results in a blink of an eye.</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h3 className='text-[#420075] font-[600] text-[16px]'>How Does This EPS Calculator Work?</h3>
                            <p className='text-sm py-[5px]'>The earnings per share calculator is a straightforward tool based on advanced algorithms. The EPS calculator works on the values entered by the user in the backend of the tool without asking the user to invest any manual efforts.</p>
                            <p className='text-sm py-[5px]'>The users don’t have to worry about going through the hurdles for calculating earnings per share. Our tool doesn’t ask you to get registered on the website for using the EPS calculation service. You can use this EPS calculator as many times as you desire without signing up or creating an account on this website.</p>
                        </div>
                        <div>
                            <h3 className='text-[#420075] font-[600] text-[16px]'>Top Features Of Our EPS Calculator</h3>
                            <p className='text-sm py-[5px]'>Our EPS calculator comes with top-notch features, which makes the process of calculating EPS a piece of cake for everyone. The top features of this earnings per share calculator are described below.</p>
                            <div className='py-[30px]'>
                                <h4 className='text-[14px] font-[600] text-[#420075]'>Free and Easy to Use:</h4>
                                <p>You don’t need to pay a penny for using this online service. This easy to use tool provides quality service to all of its users without any charges.</p>
                            </div>
                            <div className='py-[30px] text-sm'>
                                <p>Accurate Calculation: This advanced calculator provides you with accurate calculations every time you enter values on it. There’s no need to rely on estimated values anymore, as you can get your hands on exact values with our EPS calculator.</p>
                            </div>
                            <div className='py-[30px]'>
                                <h4 className='text-[14px] font-[600] text-[#420075]'>Fast and Secure:</h4>
                                <p>Our earnings per share calculator is a super-fast tool that delivers results instantaneously. You don’t have to spend an ample amount of time in the manual calculation of earnings per share, as this fast and secure service is available 24/7.</p>
                            </div>
                            <div className='py-[30px]'>
                                <h4 className='text-[14px] font-[600] text-[#420075]'>Supports All Platforms:</h4>
                                <p>You won’t face compatibility issues for using this EPS calculation service. Whether your device is running on iOS, Android, Windows, Mac, or Linux operating system, you can easily access this tool and calculate EPS at any time of the day.</p>
                            </div>
                            <div className='py-[30px]'>
                                <h4 className='text-[14px] font-[600] text-[#420075]'>Access from Anywhere:</h4>
                                <p>This tool is available for people living all across the globe. It’s a web-based service that can be accessed from anywhere by merely connecting your device to the internet connection.</p>
                            </div>
                        </div>
                        <div className='py-[30px]'>
                            <h3 className='text-[16px] text-[#420075] font-[600]'>What Can You Do With The Earnings Per Share Calculator?</h3>
                            <p className='text-sm py-[5px]'>There are several advantages of using earnings per share calculator. You can use this online tool for multiple reasons. The EPS calculator can be utilized for the following purposes:</p>
                            <div className='py-[30px]'>
                                <h4 className='text-[14px] text-[#420075] font-[600]'>Calculate your Income:</h4>
                                <p>With earnings per share, you can calculate the total profit you are making for the investment you have made. The total share stock you have of a company can be multiplied with EPS to find out the income you’re making with your investment.</p>
                            </div>
                            <div className='py-[30px]'>
                                <h4 className='text-[14px] text-[#420075] font-[600]'>Measure Performance:</h4>
                                <p>EPS can be used as a performance measuring tool by the management to assess whether a company is doing a good or bad job. After calculating EPS of multiple years, it becomes easier for the managers to figure out how much they have improved over the years.</p>
                            </div>
                            <div className='py-[30px]'>
                                <h4 className='text-[14px] text-[#420075] font-[600]'>Earnings Vs. Dividends:</h4>
                                <p>The amount of EPS belongs to the shareholders, and it has to be repaid to them sooner or later. As the profit is the earning of a company, the board of directors has to decide whether to reinvest some of its proportion or pay the full dividend to the shareholders.</p>
                            </div>
                        </div>
                        <div className=''>
                            <h3 className='text-[16px] font-[600] text-[#420075]'>Who Can Use This EPS Calculator?</h3>
                            <p className='text-sm py-[5px]'>The usage of the earnings per share calculator isn’t limited to a specific group of people. The top users of this EPS calculation service are described below.</p>
                            <div className='py-[30px]'>
                                <h4 className='text-[14px] text-[#420075] font-[600]'>Company Owners:</h4>
                                <p>The owners of the company use the EPS calculator to measure their financial health. It will help them make a decision on withdrawing their investment or investing more in the company.</p>
                            </div>
                            <div className='py-[30px]'>
                                <h4 className='text-[14px] text-[#420075] font-[600]'>Stock Traders & Investors:</h4>
                                <p>The investors are always in the hunt for companies that offer them a higher return on investment. The EPS calculator helps investors in calculating the division of profits of each company to its shareholders.</p>
                            </div>
                            <div className='py-[30px]'>
                                <h4 className='text-[14px] text-[#420075] font-[600]'>Consultors:</h4>
                                <p>EPS calculation is vital for consultors as they can provide their consultation service to the investors on making the right decision for investing in a profitable company by checking their earnings per share.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Earningscalc