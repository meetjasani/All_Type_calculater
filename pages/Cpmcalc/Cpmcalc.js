import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Footer from '@/Components/Footer/Footer'
import Header from '@/Components/Header/Header'

const Cpmcalc = () => {
    const [open, setOpen] = useState(false)
    const [cost, setCost] = useState('')
    const [cpm, setCpm] = useState('')
    const [result, setResult] = useState()
    const [disCost, setDisCost] = useState()
    const [disCmp, setDisCmp] = useState()

    const handleCpm = () => {
        if(cost === '' || cpm === ''){
            toast.error('Please enter two values in order to solve for the other field.')
        }else {
            setOpen(true)
            const cpms = (cost / cpm) * 1000
            setResult(cpms.toFixed(0))
            setDisCost(cost)
            setDisCmp(cpm)
        }
    }
    const handleReset = () => {
        setCost('')
        setCpm('')
    }
    return (
        <>
            <Header />
            <ToastContainer theme="colored"/>
            <div className="h-[98px] my-[20px] bg-[#80808014] max-w-[700px] m-auto"></div>
            <div className='text-center'>
                <h3 className='font-[600] text-[24px] text-[#420075]'>CPM Calculator</h3>
                <p className='text-[sm] md:w-[50%] py-[10px] w-[100%] px-[10px] mx-auto'>Online CPM calculator helps to calculate the cost of your ad by a thousand impressions or views. Enter the total cost of the campaign and total numbers of impressions to calculate CPM.</p>
            </div>
            <div className='flex bg-[#80808014] max-w-[700px] m-auto items-center my-[20px] min-h-[250px]'></div>
            <div className='w-full lg:w-[900px] mt-[15px] m-auto'>
                <div className='bg-[#fff] md:px-[48px] px-[24px] py-[28px] border border-[#ccc]'>
                    <div>
                        <div>
                            <label htmlFor="" className='text-sm font-[600]'>Campaign Cost</label>
                        </div>
                        <input type="number" className='w-[100%] h-[48px] indent-2 placeholder:text-[14px] outline-none border border-[#ccc]' placeholder='$' 
                            onChange={(e) => setCost(e.target.value)}
                            value={cost}
                        />
                    </div>
                    <div className='mt-[10px]'>
                        <div>
                            <label htmlFor="" className='text-sm font-[600]'>CPM</label>
                        </div>
                        <input type="number" className='w-[100%] h-[48px] indent-2 placeholder:text-[14px] outline-none border border-[#ccc]' placeholder='CPM' 
                            onChange={(e) => setCpm(e.target.value)}
                            value={cpm}
                        />
                    </div>
                    <div className='mt-[10px]'>
                        <div>
                            <label htmlFor="" className='text-sm font-[600]'>Ad Impressions</label>
                        </div>
                        <input type="number" className='w-[100%] h-[48px] indent-2 placeholder:text-[14px] outline-none border border-[#ccc]' placeholder='Ad Impressions'/>
                    </div>

                    <div className='flex justify-center gap-3'>
                        <button onClick={handleCpm} className='btnlogin text-white py-[10px] px-[10px] sm:px-[40px] my-[20px]'>Calculate CPM</button>
                        <button onClick={handleReset} className='btnlogin text-white py-[10px] px-[10px] sm:px-[40px] my-[20px]'>Reset</button>
                    </div>
                </div>
                {open && disCmp && disCost? <div className='bg-[#202223] w-full lg:w-[900px] mb-[15px] m-auto md:flex block  text-[#fff]'>
                    <div className='px-[16px] py-[24px] w-[100%] text-center border-r border-[#515151]'>
                        <p className='text-[22px] font-[600]'>${disCost}</p>
                        <p className='text-sm'>Campaign Cost</p>
                    </div>
                    <div className='px-[16px] py-[24px] w-[100%] text-center border-r border-[#515151]'>
                        <p className='text-[22px] font-[600]'>${disCmp}</p>
                        <p className='text-sm'>CPM</p>
                    </div>
                    <div className='px-[16px] py-[24px] w-[100%] text-center border-r border-[#515151]'>
                        <p className='text-[22px] font-[600]'>{result}</p>
                        <p className='text-sm'>Ad Impressions</p>
                    </div>
                </div> : <></>}
                <div className='h-[98px] my-[20px] bg-[#80808014] max-w-[700px] m-auto'></div>
                <div className='w-full lg:w-[900px] mt-[15px] m-auto'>
                    <div className='card p-[15px] mb-[15px] bg-white border rounded-lg'>
                        <div>
                            <h3 className='text-[16px] text-[#420075] font-[600]'>CPM Calculation - Online Utility</h3>
                            <p className='text-sm py-[5px]'>CPM calculation is a hectic task as it involves several intricacies, and a person can end up calculating the wrong values. Therefore, we have developed a CPM calculator tool to make your life easier. Before this tool’s inception, people had to rely on software programs that need to be downloaded on the device. Plus, the users need to learn the difficult procedures involved with the usage of these programs. The CPM calculator has been developed to resolve users’ queries of calculating the total cost of a campaign, rate of CPM, or the total number of impressions without downloading any application on their device. It is a web-based utility that doesn’t become a burden on your device, and it can be accessed from any corner of the world at any time of the day.</p>
                        </div>
                        <div>
                            <h3 className='text-[#420075] font-[600] text-[16px]'>How To Calculate CPM?</h3>
                            <p className='text-sm py-[5px]'>As earlier discussed, it’s a strenuous job to calculate CPM manually. Before doing its calculation, first, you should need to know actually what is a CPM? Which is the cost per thousand impressions, which means how much is the cost of 1000 views/impressions of an advertisement and for calculation, you will have to use a CPM formula for calculating the total cost of the campaign or the cost per thousand impressions for any campaign.</p>
                            <p className='text-sm py-[5px]'>The CPM rate can be calculated with the formula given below:</p>
                            <p className='text-sm font-[600]'>CPM Rate = (Total Cost of Campaign/Total Impressions) * 1000</p>
                            <p className='text-sm py-[5px]'></p>
                        </div>
                        <div>
                            <h3 className='text-[#420075] font-[600] text-[16px]'>How to Use Our CPM Calculator?</h3>
                            <p className='text-sm py-[5px]'>Our CPM calculator is an online tool, and its interface is easy to use and understand. The users don’t have to follow any hard and fast rules for using this CPM calculation service. There are no costs involved with the usage of this utility. You can get access to this tool by merely connecting your device to an internet connection. The CPM can be calculated with this online tool without going through the hassle of the registration process. The simple steps given below will help you calculate CPM in a matter of seconds.</p>
                            <ul className='list-disc ml-[50px]'>
                                <li className='text-sm py-[5px]'>Three boxes are displayed on the screen for the total cost of the campaign, rate of CPM, and the number of impressions. You need to enter the values in two of the boxes to calculate the required one.</li>
                                <li className='text-sm py-[5px]'>After entering the values, click on the Calculate CPM button.</li>
                                <li className='text-sm py-[5px]'>As you will click this button, the desired results will be generated and displayed within no time.</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className='text-[#420075] font-[600] text-[16px]'>CPM Calculation for Different Advertising Networks</h3>
                            <p className='text-sm py-[5px]'>Different advertising networks have different CPM rates and methodologies for its calculation. Let’s discuss the CPM calculation for prominent advertising networks over the web.</p>
                            <div className='py-[10px]'>
                                <h4 className='text-[14px] font-[600] text-[#420075]'>Calculate CPM for Facebook Ads Campaigns</h4>
                                <p>The Facebook ads campaign with a feature that provides you with the estimation of your campaign’s reach. CPM for Facebook ads campaigns can be calculated easily with the same formula discussed above, i.e.,</p>
                                <p className='text-sm py-[10px]'>CPM Rate = (Total Cost of Campaign/Total Impressions) * 1000</p>
                            </div>
                            <div className='py-[10px]'>
                                <h4 className='text-[14px] font-[600] text-[#420075]'>Calculate CPM for AdWords Campaigns</h4>
                                <p>The AdWords campaigns also work on the same model for the calculation of CPM, just like Facebook. You can divide the total cost of the campaign by total numbers and multiply it by 1000 to calculate CPM for AdWords campaigns. For instance, the total cost is $5000, and the total impressions you’ll get are 400000, the CPM rate for this campaign would be $12.5. This means you will be paying $0.0125 for each click.</p>
                            </div>
                            <div className='py-[10px]'>
                                <h4 className='text-[14px] font-[600] text-[#420075]'>Calculate CPM for Email Marketing Campaigns</h4>
                                <p>Things are different for calculating CPM for email marketing campaigns. In email marketing campaigns, it’s difficult to calculate the cost per thousand impressions. The CPM rate for email marketing campaigns can vary as it depends upon the number of subscribers involved in it. For instance, if the email marketing campaign costs $500 and it’s sent to 10,000 subscribers, the CPM will be $50. However, if it’s sent to 100,000 subscribers, the CPM would come down to $5.</p>
                            </div>
                        </div>
                        <div className='py-[30px]'>
                            <h3 className='text-[16px] text-[#420075] font-[600]'>What Can you do with this CPM Calculator?</h3>
                            <p className='text-sm py-[5px]'>The CPM calculator on our website isn’t just limited to the calculation of CPM only, as it allows you to figure out values involved in an advertising campaign as well. Let’s discuss the top uses of our CPM online calculator.</p>
                            <div className='py-[30px]'>
                                <h4 className='text-[14px] text-[#420075] font-[600]'>Find CPM (Cost per Thousand Impressions)</h4>
                                <p>The CPM calculator gives you the easiest and most reliable way to find CPM. You just need to enter the values of the total cost of the campaign and the number of impressions in the given boxes. You can use the formula given above to calculate manually.</p>
                            </div>
                            <div className='py-[30px]'>
                                <h4 className='text-[14px] text-[#420075] font-[600]'>Find Ad Impressions</h4>
                                <p>This tool has made it a piece of cake for every person who wants to find the number of ad impressions he will get on an advertising network. By entering the cost of the campaign and CPM rate in this tool, you can easily figure out the number of impressions you’ll be getting. The formula to find ad impressions is:</p>
                                <p className='text-sm font-[600] pt-[20px]'>Ad impressions = (Cost of campaign/ CPM) * 1000</p>
                            </div>
                            <div className='py-[30px]'>
                                <h4 className='text-[14px] text-[#420075] font-[600]'>Find Total Cost of Campaign</h4>
                                <p>If you want a specific number of impressions through an advertising network like Facebook, you can enter the CPM and number of impressions value to find the total cost of the campaign on this CPM calculator. The total cost of the campaign can also be calculated with the following formula:</p>
                                <p className='text-sm font-[600] pt-[20px]'>Total Cost of Campaign = (Total impressions/1000) * CPM</p>
                            </div>
                        </div>
                        <div className=''>
                            <h3 className='text-[16px] font-[600] text-[#420075]'>Why Do You Need To Calculate CPM?</h3>
                            <p className='text-sm py-[5px]'>CPM model is widely used by marketers these days to estimate the number of the audience they can attract towards their business or brand. You need to calculate CPM for budgeting and financing reasons, as it will let you know the cost you have to pay for each click or visit by a potential customer. By calculating CPM for advertising on multiple networks, you can easily evaluate the platform, which is most efficient for your business. Most of the time, businesses are unaware of the results they will get against their spending on advertisements. However, CPM eliminates this issue as it provides you with clear estimates of the number of impressions.</p>
                        </div>
                        <div className='py-[30px]'>
                            <h3 className='text-[16px] font-[600] text-[#420075]'>How CPM Becomes the Best Option for Advertisers and Publishers?</h3>
                            <p className='text-sm py-[5px]'>The CPM model is becoming quite famous among advertisers and publishers. In fact, it’s the best option for them due to several reasons. The most prominent ones are discussed below.</p>
                        </div>
                        <div className='py-[30px]'>
                            <h4 className='text-[14px] font-[600] text-[#420075]'>Increase Brand Awareness:</h4>
                            <p className='text-sm py-[5px]'>The CPM calculation allows the marketers to increase brand awareness as you’ll be assured of clicks for the investment you are making through this model on platforms like Facebook.</p>
                        </div>
                        <div className='py-[30px]'>
                            <h4 className='text-[14px] font-[600] text-[#420075]'>Find Better Audience:</h4>
                            <p className='text-sm py-[5px]'>With CPM, you can advertise your business on major social media platforms, including Twitter, Facebook, and Instagram, to find a better audience.</p>
                        </div>
                        <div className='py-[30px]'>
                            <h4 className='text-[14px] font-[600] text-[#420075]'>Get Cheaper Traffic than CPC and CPA:</h4>
                            <p className='text-sm py-[5px]'>CPM is considered a cheaper pricing model as compared to CPC and CPA. It works best for the publishers as it is suitable for every ad format on a website.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Cpmcalc