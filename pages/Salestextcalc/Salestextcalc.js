import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Footer from '@/Components/Footer/Footer'
import Header from '@/Components/Header/Header'
import { inclusivecalc } from '@/Components/Json/inclusivecalc'

const Salestextcalc = () => {
    const [amount, setAmount] = useState('')
    const [disAmount, setDisAmount] = useState()
    const [tax, setTax] = useState('')
    const [taxRate, setTaxRate] = useState()
    const [grossAmount, setGrossAmount] = useState()
    const [displayRate, setDisplayRate] = useState()
    const[open, setOpen] = useState(false)
    const [radioValue, setRadioValue] = useState({
        exInclusiveTax:'taxExclusive'
    })
    const handleExclusiveTax = () => {
        if(tax === '' || amount === ''){
            toast.error('Add values on both fields to calculate tax.')
        }else{
            const TaxRate = tax/100
            const gAmount = parseFloat(amount) + parseFloat(amount* TaxRate)
            setDisAmount(amount)
            setTaxRate((amount * TaxRate).toFixed(2))
            setGrossAmount(parseFloat(gAmount).toFixed(2))
            setDisplayRate(tax)
            setOpen(true)
        }
    }
    const handleInclusiveTax = () => {
        if(tax === '' || amount === ''){
            toast.error('Add values on both fields to calculate tax.')
        }else{
            const TaxRate = tax/100
            const countTax = amount - (amount/ (TaxRate+ 1))
            const countAmt = amount/ (TaxRate+ 1)
            const gAmount = parseFloat(countTax) + parseFloat(countAmt)
            setDisAmount(parseFloat(countAmt))
            setTaxRate(parseFloat(countTax).toFixed(2))
            setGrossAmount(parseFloat(gAmount).toFixed(2))
            setDisplayRate(tax)
            setOpen(true)
        }
    }
    const handleRChange = (e) => {
        setRadioValue({exInclusiveTax: e.target.value})
    }
    const handleReset = () => {
        setOpen(false)
        setAmount('')
        setTax('')
    }
    return (
        <>
            <Header />
            <ToastContainer theme="colored"/>
            <div className="h-[98px] my-[20px] bg-[#80808014] max-w-[700px] m-auto"></div>
            <div className='mainbg max-w-[1260px] m-auto px-[15px] py-[10px]'>
                <div className=''>
                    <div className='text-center'>
                        <h1 className='text-[16px] sm:text-[22px] text-[#420075] md:text-2xl font-bold mb-[10px]'>Sales Tax Calculator</h1>
                        <p className='text-sm md:w-[70%] w-[100%] mx-auto font-normal'>Our online Sales Tax calculator provides you with the easiest way to calculate sales tax in a few seconds. You are not required to pay a single penny for using this online sales tax calculator.</p>
                    </div>
                    <div className='flex bg-[#80808014] max-w-[700px] m-auto items-center my-[20px] min-h-[250px]'>
                        <div></div>
                        <div></div>
                    </div>
                    <div className='max-w-[350px]  m-auto'>
                        <div className='flex gap-2 py-2'>
                            <div>
                                <input type="radio" className='mr-2' 
                                    value='taxExclusive' 
                                    onChange={(e) => handleRChange(e)} 
                                    checked={radioValue.exInclusiveTax === 'taxExclusive'}
                                />
                                <label htmlFor="html">Tax Exclusive</label>
                            </div>
                            <div>
                                <input type="radio" className='mr-2' 
                                    value='taxInclusive'
                                    onChange={(e) => handleRChange(e)} 
                                    checked={radioValue.exInclusiveTax === 'taxInclusive'}
                                />
                                <label htmlFor="css">Tax Inclusive</label>
                            </div>
                        </div>
                        <div>
                            <div className='mb-[15px]'>
                                <p className='mb-[10px]'>Amount</p>
                                <input type="number" className='w-full h-[40px] border border-[#ccc] focus:outline-0 px-4' 
                                    value={amount} 
                                    onChange={(e) => setAmount(e.target.value)}
                                />
                            </div>
                            <div className='mb-[15px]'>
                                <p>Sales Tax Rate</p>
                                <input type="number" className='w-full h-[40px] border border-[#ccc] focus:outline-0 px-4' 
                                    value={tax} onChange={(e) => setTax(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="h-[98px] my-[20px] bg-[#80808014] max-w-[700px] m-auto"></div>
                    <div className='flex justify-center gap-3'>
                        {
                            radioValue.exInclusiveTax === 'taxInclusive' ? (
                                <button className='btnlogin text-white py-[10px] px-[10px] sm:px-[40px] my-[20px]' onClick={handleInclusiveTax}>Calculate Tax</button>
                            ) : (
                                <button className='btnlogin text-white py-[10px] px-[10px] sm:px-[40px] my-[20px]' onClick={handleExclusiveTax}>Calculate Tax</button>
                            )
                        }
                        <button className='btnlogin text-white py-[10px] px-[10px] sm:px-[40px] my-[20px]' onClick={handleReset}>Reset</button>
                    </div>
                    <div className='flex bg-[#80808014] max-w-[700px] m-auto items-center my-[20px] min-h-[250px]'>
                        <div></div>
                        <div></div>
                    </div>
                    {
                        open ? 
                            <div className='w-full py-[20px] logic-table lg:w-[900px] mt-[15px] m-auto'>
                                <div className='flex border border-[#ccc]'>
                                    <p className='w-[350px] px-[16px] py-[8px] items-center h-[59px] border-r border-[#ccc] flex bg-[#F6F8FA]'>Net Amount (excluding tax)</p>
                                    <p className=' px-[16px] py-[8px] h-[59px] flex items-center w-[100%]'>${ !isNaN(disAmount) && parseFloat(disAmount).toFixed(2)}</p>
                                </div>
                                <div className='flex border border-[#ccc]'>
                                    <p className='w-[350px] px-[16px] py-[8px] items-center h-[59px] border-r border-[#ccc] flex bg-[#F6F8FA]'>Tax Rate ({displayRate}%)</p>
                                    <p className=' px-[16px] py-[8px] h-[59px] flex items-center w-[100%]'>${!isNaN(taxRate) && taxRate}</p>
                                </div>
                                <div className='flex border border-[#ccc]'>
                                    <p className='w-[350px] px-[16px] py-[8px] items-center h-[59px] border-r border-[#ccc] flex bg-[#F6F8FA]'>Gross Amount (including tax)</p>
                                    <p className=' px-[16px] py-[8px] h-[59px] flex items-center w-[100%]'>${!isNaN(grossAmount) && grossAmount}</p>
                                </div>
                            </div>
                        : <></>
                    }
                </div>
                <div className='w-full lg:w-[900px] mt-[15px] m-auto'>
                    <div>
                        <div className='card p-[15px] mb-[15px] bg-white border rounded-lg'>
                            {inclusivecalc.map((data) => {
                                return (
                                    <>
                                        <h3 className='text-[16px] font-bold mb-[10px] text-[#420075]'>{data.title}</h3>
                                        <p className='text-sm mb-[10px]'>{data.sentence}</p>
                                        <p className='text-sm mb-[10px]'>{data.tiny}</p>
                                        <p className='text-sm mb-[10px]'>{data.interval}</p>
                                        <p className='text-sm mb-[10px]'>{data.symbol}</p>
                                        <div className='my-[14px] px-[40px] flex flex-col gap-2'>
                                            <h6 className='flex'><span className='mr-[4px] pr-2'>{data.no}</span><p className='text-sm font-normal'>{data.use}</p></h6>
                                            <h6 className='flex mt-[-4px]'><span className='mr-[4px] pr-2'>{data.no1}</span><p className='text-sm font-normal'>{data.use1}</p></h6>

                                        </div>
                                        <p className='text-sm mb-[10px]'>{data.xdata}</p>
                                        <div className='my-[14px] px-[40px] flex flex-col gap-2'>
                                            <h6 className='flex mt-[-4px]'><span className='mr-[4px] pr-2'>{data.no2}</span><p className='text-sm font-normal'>{data.use2}</p></h6>
                                            <h6 className='flex mt-[-4px]'><span className='mr-[4px] pr-2'>{data.no3}</span><p className='text-sm font-normal'>{data.use3}</p></h6>
                                            <h6 className='flex mt-[-4px]'><span className='mr-[4px] pr-2'>{data.no4}</span><p className='text-sm font-normal'>{data.use4}</p></h6>
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Salestextcalc