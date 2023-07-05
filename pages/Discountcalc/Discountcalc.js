import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Footer from '@/Components/Footer/Footer'
import Header from '@/Components/Header/Header'

const Discountcalc = () => {
    const [Open, setOpen] = useState(false)
    const [price, setPrice] = useState('')
    const [discount, setDiscount] = useState('')
    const [result, setResult] = useState()
    const [disPrice, setDisPrice] = useState()

    const handleDiscount = () => {
        if(price === '' || discount === ''){
            toast.error('Please fill all required fields.')
        }else {
            setOpen(true)
            const saving = (price * discount) / 100
            setResult(saving.toFixed(2))
            const DisPrice = price - saving
            setDisPrice(DisPrice.toFixed(2))
        }
    }
    const handleReset = () => {
        setOpen(false)
        setPrice('')
        setDiscount('')
        setDisPrice('')
        setResult('')
    }
    return (
        <>
            <Header />
            <ToastContainer theme="colored"/>
            <div className="h-[98px] my-[20px] bg-[#80808014] max-w-[700px] m-auto"></div>
            <div className='text-center'>
                <h3 className='font-[600] text-[24px] text-[#420075]'>Discount Calculator</h3>
                <p className='text-[sm] md:w-[50%] py-[10px] w-[100%] mx-auto px-[10px]'>The Discount rate calculator helps to find the Sale Discount Price, To know the original price after discount enters the values in the calculator.</p>
            </div>
            <div className='flex bg-[#80808014] max-w-[700px] m-auto items-center my-[20px] min-h-[250px]'></div>
            <div className='p-[10px]'>
                <div className='border border-[#ccc] w-full lg:w-[900px] mt-[15px] m-auto md:px-[48px] px-[24px] py-[24px]'>
                    <div>
                        <div>
                            <label htmlFor="" className='text-sm font-[600]'>Original price</label>
                        </div>
                        <input type="number" className='h-[48px] my-[10px] indent-2 outline-none w-[100%] border-[1px] border-[#E3E7ED]' 
                            onChange={(e) => setPrice(e.target.value)}
                            value={price}
                        />
                    </div>
                    <div>
                        <div>
                            <label htmlFor="" className='text-sm font-[600]'>Discount Percentage</label>
                        </div>
                        <input type="number" className='h-[48px] my-[10px] indent-2 outline-none w-[100%] border-[1px] border-[#E3E7ED]' 
                            onChange={(e) => setDiscount(e.target.value)}
                            value={discount}
                        />
                    </div>
                    <div className='flex justify-center gap-3'>
                        <button onClick={handleDiscount} className='btnlogin text-white py-[10px] px-[10px] sm:px-[40px] my-[20px]'>Calculate Discount</button>
                        <button className='btnlogin text-white py-[10px] px-[10px] sm:px-[40px] my-[20px]' onClick={handleReset}>Reset</button>
                    </div>
                </div>
                {Open && result !== undefined ? <div className='bg-[#202223] w-full lg:w-[900px] mb-[15px] m-auto md:flex block  text-[#fff]'>
                    <div className='px-[16px] py-[24px] w-[100%] text-center border-r border-[#515151]'>
                        <p className='text-[22px] font-[600]'>$ {result}</p>
                        <p className='text-[14px]'>Saving</p>
                    </div>
                    <div className='px-[16px] py-[24px] w-[100%] text-center border-r border-[#515151]'>
                        <p className='text-[22px] font-[600]'>$ {disPrice}</p>
                        <p className='text-[14px]'>Discounted Price</p>
                    </div>
                </div> : <></>}
                <div className='h-[98px] my-[20px] bg-[#80808014] max-w-[700px] m-auto'></div>
                <div className='w-full lg:w-[900px] mt-[15px] m-auto'>
                    <div className='card p-[15px] mb-[15px] bg-white border rounded-lg'>
                        <div>
                            <h3 className='text-[16px] font-[600] text-[#420075]'>Discount Calculator - Calculate Discount Online</h3>
                            <p className='text-sm py-[5px]'>A discount calculator is a tool designed for shoppers as well as business owners to calculate the discounted price of any good or service without going through the hassle of manual calculation. Before the inception of this online discount calculator, people had to use multiple discount formulas to calculate the percentage of discounts given on products or the actual price before discount. This problem has been resolved ever since this discount calculation utility came to play its role. Without putting values into a discount rate formula, you can use this calculator by just entering the values in the relevant boxes. The percent off calculator on <a href="#" className='text-[#420075] underline'>SmallSEOTools</a> is the best utility you can find over the web that never lets its users face hurdles in discount calculation.</p>
                        </div>
                        <div>
                            <h3 className='text-[16px] font-[600] text-[#420075]'>How To Calculate Discount Rate?</h3>
                            <p className='text-sm py-[5px]'>Our discount rate calculator is an easy to use web-based service that allows its users to calculate discount rates or prices for any given values without following any hard and fast rules. The users don’t need to learn anything about using this tool as it comes with a user-friendly interface. Read the following steps to know how to calculate percentage discount.</p>
                            <ul className=' ml-[50px] py-[16px]'>
                                <li className='text-sm py-[10px]'><span className='text-sm pr-[5px]'>1.</span> Access the tool and enter any two values in the relevant boxes to calculate the third value. The values can be actual price, discount percentage, and discounted price.</li>
                                <li className='text-sm py-[10px]'><span className='text-sm pr-[5px]'>2.</span>After entering the values precisely hit the “Calculate Discount” button.</li>
                                <li className='text-sm py-[10px]'><span className='text-sm pr-[5px]'>3.</span>The tool will process your entered values as this button will be pressed and display the required results in a matter of seconds.</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className='text-[16px] font-[600] text-[#420075]'>How Does This Discount Rate Calculator Work?</h3>
                            <p className='text-sm py-[5px]'>The discount calculation utility on SmallSEOTools is based on advanced algorithms that keep the front-end users safe from following any type of intricate procedures. The users can access this tool and start using it on the go. There is no restriction on any user to go through the signup process for using this online. Getting registered on websites for using their services is a tiring procedure, and most of the users are reluctant to do so. Therefore, we have eliminated this process for providing our users with free and easy access to this discount calculation service.</p>
                            <p className='text-sm py-[5px]'>There are no costs involved with the usage of this percent discount calculator utility. You can enjoy the services of this advanced online percentage discount calculator without paying a penny. Moreover, you just need to connect your device with an internet connection to access this online tool. This tool is compatible with all kinds of devices, so you don’t have to worry about getting a special device for calculating discount prices on it.</p>
                        </div>
                        <div className='py-[10px]'>
                            <h3 className='text-[16px] font-[600] text-[#420075]'>Key Features of Online Discount Calculator</h3>
                            <p className='text-sm py-[5px]'>The discount calculation service on our website comes with top-notch features. It’s not an ordinary tool that just allows you to calculate the discount price. The key features of this discount calculating utility are discussed below.</p>
                            <div className='py-[10px]'>
                                <h4 className='text-[14px] text-[#420075] font-[600]'>Percentage of Discount</h4>
                                <p>At times you can see the actual price is cancelled out and a lower price written on the tags of certain products. This tool can help you figure out how much percentage of discount you will get on buying any product.</p>
                            </div>
                            <div className='py-[10px]'>
                                <h4 className='text-[14px] text-[#420075] font-[600]'>Original Price</h4>
                                <p>If you are given the discounted rate and price, but you want to calculate how much was the original price of the product, then this tool has got you covered. By entering the percentage of discount and the price after the product in the relevant boxes, you can easily find out the original price with this online tool.</p>
                            </div>
                            <div className='py-[10px]'>
                                <h4 className='text-[14px] font-[600] text-[#420075]'>Discounted Price</h4>
                                <p>If you are given the discounted rate and price, but you want to calculate how much was the original price of the product, then this tool has got you covered. By entering the percentage of discount and the price after the product in the relevant boxes, you can easily find out the original price with this online tool.</p>
                            </div>
                            <div className='py-[10px]'>
                                <h4 className='text-[14px] font-[600] text-[#420075]'>2 for 1 Discount</h4>
                                <p>2 for 1 is basically the concept of getting 2 free products on the purchase of 1 product. After taking the prices of two free products into consideration, the discounted price that you will be charged to avail offer will be generated by the tool.</p>
                            </div>
                        </div>
                        <div>
                            <h3 className='text-[16px] font-[600] text-[#420075]'>Where Can This Percent Off Calculator Help You?</h3>
                            <p className='text-sm py-[5px]'>The discount calculation utility isn’t designed only for calculating the discounted price. You can use this online tool in various ways, such as:</p>
                            <ul className='list-disc ml-[50px] py-[10px]'>
                                <li className='text-sm py-[5px]'>Calculate Discount rate from original price and sale price</li>
                                <li className='text-sm py-[5px]'>Calculate Original price from discount price and discounted price</li>
                                <li className='text-sm py-[5px]'>Calculate Discount price from the original price and discount percentage</li>
                            </ul>
                        </div>
                        <div className='py-[10px]'>
                            <h3 className='text-[16px] font-[600] text-[#420075]'>Who Can Use This Online Percentage Off Calculator?</h3>
                            <p className='text-sm py-[5px]'>The online percentage off calculator can be utilized by various people for personal or commercial use. The most prominent users of this discount calculation service are as follows.</p>
                            <div className='py-[30px]'>
                                <h4 className='text-[14px] font-[600] py-[5px] text-[#420075]'>Drop Shippers:</h4>
                                <p className='text-sm'>The drop shippers can utilize this tool to figure out the discount they are receiving from a third-party business and the profit they will be making after delivering the product to the consumer.</p>
                            </div>
                            <div className='py-[30px]'>
                                <h4 className='text-[14px] font-[600] py-[5px] text-[#420075]'>Shop keepers:</h4>
                                <p className='text-sm'>Shop keepers often have to put those items on discount, which aren’t receiving much demand from the customers. They can use the tool to set the discounted price at which the products will be sold after a certain percentage of the discount.</p>
                            </div>
                            <div className='py-[30px]'>
                                <h4 className='text-[14px] font-[600] py-[5px] text-[#420075]'>Merchants:</h4>
                                <p className='text-sm'>This discount calculator is a vital tool for merchants or wholesale traders who have to give cash discounts to the retailers who are purchasing in bulk and paying by cash at the same time.</p>
                            </div>
                            <div className='py-[30px]'>
                                <h4 className='text-[14px] font-[600] py-[5px] text-[#420075]'>Business Owners:</h4>
                                <p className='text-sm'>While setting up the season-end sale or special discounts on festivals, the business owners don’t need to rely on manual discount calculation anymore. The discount calculation service makes their lives by making this process a piece of cake.</p>
                            </div>
                            <div className='py-[30px]'>
                                <h4 className='text-[14px] font-[600] py-[5px] text-[#420075]'>Traders:</h4>
                                <p className='text-sm'>Before purchasing goods for retail sale, the discount calculator online can help traders estimate the profit they can make if they get a certain percentage of discount on bulk buying.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Discountcalc