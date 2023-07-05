import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Footer from '@/Components/Footer/Footer'
import Header from '@/Components/Header/Header'

const Gstcalc = () => {
    const [selectCoun, setSelectCoun] = useState('other')
    const [amount, setAmount] = useState()
    const [disAmount, setDisAmount] = useState('')
    const [tax, setTax] = useState('')
    const [taxRate, setTaxRate] = useState()
    const [grossAmount, setGrossAmount] = useState()
    const [radioValue, setRadioValue] = useState({
        exInclusiveTax:'gstExclusive'
    })
    const [disTax, setDisTax] = useState()
    const [open, setOpen] = useState(false)

    const handleTax = () => {
        if(amount === '' || tax === ''){
            toast.error('Please fill all required fields.')
        }else {
            setOpen(true)
            const TaxRate = tax/100
            const gAmount = parseFloat(amount) + parseFloat(amount* TaxRate)
            setDisAmount(amount)
            setTaxRate((amount * TaxRate).toFixed(2))
            setGrossAmount(parseFloat(gAmount).toFixed(2))
            setDisTax(tax)
        }
    }
    const handleInclusiveTax = () => {
        if(amount === '' || tax === ''){
            toast.error('Please fill all required fields.')
        }else {
            setOpen(true)
            const TaxRate = tax/100
            const dAmount = parseFloat(amount) / parseFloat(TaxRate+ 1)
            const tRate =  amount - (amount/ (TaxRate+ 1))
            const gAmount = parseFloat(dAmount) + parseFloat(tRate)
            setDisAmount(dAmount)
            setTaxRate(tRate.toFixed(2))
            setGrossAmount(parseFloat(gAmount).toFixed(2))
            setDisTax(tax)
        }
    }
    const handleRChange = (e) => {
        setRadioValue({exInclusiveTax: e.target.value})
    }
    const handleReset = () => {
        setAmount('')
        setTax('')
    }
    return (
        <>
            <div className=''>
                <Header />
                <ToastContainer theme="colored"/>
                <div className="h-[98px] my-[20px] bg-[#80808014] max-w-[700px] m-auto"></div>
                <div className='text-center'>
                    <h3 className='font-[600] text-[24px] text-[#420075]'>GST Calculator</h3>
                    <p className='text-[sm] md:w-[50%] py-[10px] w-[100%] px-[10px] mx-auto'>The GST calculator of Smallseotools allows you to calculate the GST Amount with inclusive & exclusive GST.</p>
                </div>
                <div className='flex bg-[#80808014] max-w-[700px] m-auto items-center my-[20px] min-h-[250px]'></div>
                <div className='bg-[#F6F8FA] p-[20px]'>
                    <div className='bg-[#fff] p-[20px] border md:w-[410px] w-full border-[#ccc] mx-auto'>
                        <div className='flex md:gap-[100px] gap-[14px]'>
                            <div className='flex gap-[5px]'>
                                <input type="radio"
                                    value='gstExclusive' 
                                    onChange={(e) => handleRChange(e)} 
                                    checked={radioValue.exInclusiveTax === 'gstExclusive'}
                                />
                                <label htmlFor="" className='text-sm'>GST Exclusive </label>
                            </div>
                            <div className='flex gap-[5px]'>
                                <input type="radio" aria-disabled
                                    value='gstInclusive'
                                    onChange={(e) => handleRChange(e)} 
                                    checked={radioValue.exInclusiveTax === 'gstInclusive'}
                                />
                                <label htmlFor="" className='text-sm'>GST Inclusive </label>
                            </div>
                        </div>
                        <div className='py-[10px]'>
                            <div>
                                <label htmlFor="" className='text-sm font-[600]'>Amount</label>
                            </div>
                            <input type="number" placeholder='$' className='w-[100%] h-[40px] outline-none indent-2 border border-[#ccc]' 
                                value={amount} 
                                onChange={(e) => setAmount(e.target.value)}
                            />
                        </div>
                        <div className='py-[10px] relative'>
                            <div>
                                <label htmlFor="" className='text-sm font-[600]'>GST</label>
                            </div>
                            <input type="number" className='w-[100%] h-[40px] outline-none indent-2 border border-[#ccc]'
                                value={tax} 
                                onChange={(e) => setTax(e.target.value)}
                            />
                            <p className='absolute right-[13px] top-[36px]'>%</p>
                        </div>
                        <div className='py-[10px]'>
                            <div>
                                <label htmlFor="" className='text-sm font-[600]'>Country</label>
                            </div>
                            <select className='w-[100%] h-[40px] border text-[14px] border-[#ccc] outline-none' 
                                onChange={(e) => setSelectCoun(e.target.value)} value={selectCoun}
                            >
                                <option value='other' >Other</option>
                                <option value='australia'>Australia</option>
                                <option value='canada'>Canada</option>
                                <option value='hongkong'>Hong Kong</option>
                                <option value='india'>India</option>
                                <option value='malaysia'>Malaysia</option>
                                <option value='newzeland'>New Zeland</option>
                                <option value='singapore'>Singapore</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center gap-3 mt-[20px]'>
                    { radioValue.exInclusiveTax === 'gstInclusive' ? (
                    <button className='btnlogin text-white py-[10px] px-[10px] sm:px-[40px] my-[20px]' 
                        onClick={handleInclusiveTax} >Calculate GST</button>
                        ) : (
                            <button className='btnlogin text-white py-[10px] px-[10px] sm:px-[40px] my-[20px]' 
                                onClick={handleTax}>Calculate GST</button>
                        )
                    }
                    <button className='btnlogin text-white py-[10px] px-[10px] sm:px-[40px] my-[20px]' onClick={handleReset}>Reset</button>
                </div>
                <div className='h-[98px] my-[20px] bg-[#80808014] max-w-[700px] m-auto'></div>
                {open && (
                    <>
                        <div className='text-center'>
                            <h2 className='text-[18px] font-[600] text-[#420075]'>Result</h2>
                        </div>
                        <div className='my-[20px] logic-table max-w-[700px] m-auto'>
                            <div className=' border border-[#ccc] flex w-[100%]'>
                                <p className=' bg-[#F6F8FA] w-[100%] px-[16px] border-r border-[#ccc] py-[10px]'>Net Amount (excluding GST)</p>
                                <p className='px-[16px] py-[10px] w-[100%]'>${ !isNaN(disAmount) && parseFloat(disAmount).toFixed(2)}</p>
                            </div>
                            <div className=' border border-[#ccc] flex w-[100%]'>
                                <p className='w-[100%] bg-[#F6F8FA] px-[16px] border-r border-[#ccc] py-[10px]'>GST ({disTax}%)</p>
                                <p className='px-[16px] py-[10px] w-[100%]'>${!isNaN(taxRate) && taxRate}</p>
                            </div>
                            <div className=' border border-[#ccc] flex w-[100%]'>
                                <p className='w-[100%] bg-[#F6F8FA] px-[16px] border-r border-[#ccc] py-[10px]'>Gross Amount (including GST)</p>
                                <p className='px-[16px] py-[10px] w-[100%]'>${ !isNaN(grossAmount) && grossAmount}</p>
                            </div>
                        </div>
                    </>
                )}
                <div className='w-full lg:w-[900px] mt-[15px] m-auto'>
                    <div className='card p-[15px] mb-[15px] bg-white border rounded-lg'>
                        <div>
                            <h3 className='text-[#420075] font-[600]'>What is GST?</h3>
                            <p className='text-sm py-[5px]'>The Goods and Services Tax is a tax that is applied to most of the goods and services supplied for domestic or commercial use. The purchasers of these goods pay the GST amount, but governments mostly collect it from the businesses’ owners. The goods and services tax is a federal sales tax that is levied on the total amount of specific goods and services.</p>
                            <p className='text-sm py-[5px]'>The business owners usually add up the GST in the amount, and the purchasers who buy these products pay the price inclusive of the GST. Goods and sales tax is also mentioned as a Value-Added Tax (VAT) in various countries.</p>
                        </div>
                        <div>
                            <h3 className='text-[#420075] font-[600]'>How To Calculate GST With Our Online Tool</h3>
                            <p className='text-sm py-[5px]'>The conventional method of calculating GST isn’t an easy task. But, with our online GST calculator, you can find the GST easily. You can use our GST calculator online tool by following these simple and straightforward steps.</p>
                            <div>
                                <ul className='ml-[50px] list-disc py-[10px]'>
                                    <li className='text-sm py-[5px]'>If you want to add GST, click on the “GST Inclusive” button, or tap on the “GST Exclusive” button if you need to calculate without adding GST.</li>
                                    <li className='text-sm py-[5px]'>Once you are done with that, insert the applicable percentage of GST and select the country on our GST tax calculator online tool.</li>
                                    <li className='text-sm py-[5px]'>That’s all. You will get the accurate calculation results within no time after clicking the calculate button.</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className='text-[14px] font-[600] text-[#420075]'>GST Calculation: Basics of GST Conversion with Examples</h4>
                                <p className='text-sm py-[10px]'>Our GST calculator uses the basic formula for calculating the GST amount. The following example will enable you to understand the working of the GST formula.</p>
                                <p className='text-sm py-[10px]'>We all know that the formula for finding GST amount is = Supply value x GST%</p>
                                <p className='text-sm py-[10px]'>Now, we’ll insert values in the formula for better understanding.</p>
                                <p className='text-sm py-[10px]'>For instance, the total amount is $600, and the GST rate is 5%.</p>
                                <p className='text-sm py-[10px]'>Net amount (excluding GST) = 600/ (1+5/100) = 600/1.05 = $571.49</p>
                                <p className='text-sm py-[10px]'>Or, if the GST exclusive net amount is $600 and the rate of GST is 5% then,</p>
                                <p className='text-sm py-[10px]'>Net amount (including GST) = 600* (1+5/100) = 600*1.05 = $630</p>
                                <p className='text-sm py-[10px]'>We all know that the formula for finding GST amount is = Supply value x GST%</p>
                            </div>
                            <div>
                                <h3 className='text-[#420075] font-[600]'>What is GST Inclusive and Exclusive?</h3>
                                <p className='text-sm py-[5px]'>What is the difference between GST exclusive and GST inclusive</p>
                                <div className='py-[10px]'>
                                    <h4 className='text-[14px] text-[#420075] font-[600]'>GST Inclusive</h4>
                                    <p>The total price of the product after adding up the GST is known as GST inclusive value.</p>
                                </div>
                                <div className='py-[100px]'>
                                    <h4 className='text-[14px] text-[#420075] font-[600]'>GST Exclusive</h4>
                                    <p>The amount of a product that doesn’t include GST is called exclusive GST.</p>
                                </div>
                            </div>
                            <div>
                                <h3 className='text-[#420075] font-[600]'>List Of Countries With GST Tax Rate</h3>
                                <p className='text-sm py-[5px]'>The governments of almost all countries collect Goods and Services Tax. The governments invest this collection in making roads, schools, etc. However, it is essential to know that the GST percentage can be different in various states or countries. The following table will let you know the percentage of GST on the total amount of sales.</p>
                            </div>
                            <div className='my-[40px]'>
                                <table className='table-auto w-[100%] border-[1px] text-sm Conversion_table border-[#ccc]'>
                                    <thead>
                                        <tr>
                                            <th className='text-start text-[#212529] text-[14px]'>Binary</th>
                                            <th className='text-start text-[#212529] text-[14px]'>Binary</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Canada</td>
                                            <td>5% (Can be varied from province to province)</td>
                                        </tr>
                                        <tr>
                                            <td>Vietnam</td>
                                            <td>10%</td>
                                        </tr>
                                        <tr>
                                            <td>Australia</td>
                                            <td>10%</td>
                                        </tr>
                                        <tr>
                                            <td>United Kingdom	</td>
                                            <td>20%</td>
                                        </tr>
                                        <tr>
                                            <td>Singapore</td>
                                            <td>7%</td>
                                        </tr>
                                        <tr>
                                            <td>Spain</td>
                                            <td>16%</td>
                                        </tr>
                                        <tr>
                                            <td>Italy</td>
                                            <td>20%</td>
                                        </tr>
                                        <tr>
                                            <td>Brazil</td>
                                            <td>17%</td>
                                        </tr>
                                        <tr>
                                            <td>India</td>
                                            <td>10% (varies according to the amount)</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <h3 className='text-[#420075] font-[600]'>The components of goods and services tax</h3>
                                <p className='text-sm py-[5px]'>There are 4 tax taxes under GST, known as CGST, SGST, IGST, and UTGST. We’ll discuss them one by one to understand the difference between them.</p>
                                <div>
                                    <h4 className='text-[14px] font-[600] text-[#420075]'>Central GST</h4>
                                    <p className='text-am py-[5px]'>It is a tax that is charged and collected by the federal government and imposed on intra-state supplies. This tax is applied to all the sales and transactions which are made within the state, and it is charged by adding its amount with the basic rate of goods.</p>
                                </div>
                                <div>
                                    <h4 className='text-[14px] font-[600] text-[#420075]'>State GST</h4>
                                    <p className='text-am py-[5px]'>State Goods and Sales Tax is a type of tax that is levied on transactions of goods and services of each state. The state government charges this tax to generate revenue to initiate various projects in the state like opening new educational institutes, building new roads, etc.</p>
                                </div>
                                <div>
                                    <h4 className='text-[14px] font-[600] text-[#420075]'>Integrated GST</h4>
                                    <p className='text-am py-[5px]'>Integrated Goods and Sales Tax is imposed on the interstate businesses of goods and services. This component of GST is charged when the transaction of products and services happens from one state to another.</p>
                                </div>
                                <div>
                                    <h4 className='text-[14px] font-[600] text-[#420075]'>Union Territory GST</h4>
                                    <p className='text-am py-[5px]'>The primary purpose of imposing this tax is similar to SGST, which is collecting revenue. The Union Territory Goods and Sales Tax is applied to the union territory supply of goods and services.</p>
                                </div>
                                <div>
                                    <h3 className='text-[#420075] font-[600]'>Impact of GST on Product Pricing</h3>
                                    <p className='text-sm py-[5px]'>The amount of GST affects the products’ price directly, as the selling price increases due to it. The business owners add up the GST in the actual amount of the product, and the buyer has to pay it at the time of purchase. This may decrease the demand for the goods, as it may become unaffordable for many people to purchase them. However, to stay alive in the business competition, the business owners may have to decrease the products’ price, so their products still remain in demand.</p>
                                    <p className='text-sm py-[5]'>The GST is applied by the ruling governments; however, the shopkeepers don’t have much to do with it. They also have to add that amount of tax to the actual price of the product according to the government’s instructions, and the consumer at the end has to bear this increase in the total price.</p>
                                </div>
                                <div>
                                    <h3 className='text-[#420075] font-[600]'>Features and Benefits of GST Calculator</h3>
                                    <p className='text-sm py-[5px]'>Our easy GST Calculator enables you to find accurate GST rapidly. The other main advantages of using our online GST amount calculator are as follows:</p>
                                   <div>
                                    <ul className='list-disc ml-[50px]'>
                                        <li className='text-sm py-[5px]'>You will not be asked to install any software on your device to use this GST Inclusive Calculator.</li>
                                        <li className='text-sm py-[5px]'>There is no need to go through any boring sign-up procedures to calculate GST.</li>
                                        <li className='text-sm py-[5px]'>You can use this GST calculator from any device running on any operating system.</li>
                                        <li className='text-sm py-[5px]'>There are no charges for using this online GST Calculator.</li>
                                        <li className='text-sm py-[5px]'>Our GST converter yields 100% accurate GST calculations.</li>
                                    </ul>
                                   </div>
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

export default Gstcalc