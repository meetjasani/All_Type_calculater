import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Footer from '@/Components/Footer/Footer'
import Header from '@/Components/Header/Header'
import { margincalcdata } from '@/Components/Json/margincalcdata'

const Margincalc = () => {
    const [buttons, setButtons] = useState('single')
    const [selectCalc, setSelectCal] = useState('profitMarginCal')
    const [marginRatio, setMarginRatio] = useState([
        {mr: "1:1", val:'1'},
        {mr: "5:1", val:'5'},
        {mr: "10:1", val:'10'},
        {mr: "15:1", val:'15'},
        {mr: "20:1", val:'20'},
        {mr: "25:1", val:'25'},
        {mr: "30:1", val:'30'},
        {mr: "35:1", val:'35'},
        {mr: "40:1", val:'40'},
        {mr: "45:1", val:'45'},
        {mr: "50:1", val:'50'},
    ])
    const [result, setResult] = useState('1')
    const [costItem, setCostItem] = useState('')
    const [markup, setMarkup] = useState('')
    const [salePrice, setSalePrice] = useState()
    const [profit, setProfit] = useState()
    const [grossMargin, setGrossMargin] = useState()
    const [stockPrice, setStockPrice] = useState('')
    const [shares, setShares] = useState('')
    const [margin, setMargin] = useState('')
    const [disMargin, setDisMargin] = useState()
    const [rate, setRate] = useState('')
    const [units, setUnits] = useState('')
    const [display, setDisplay] = useState()
    const [open, setOpen] = useState(false)

    const handleChange = (e) => {
        setResult(e.target.value)
    }
    console.log('result', result)
    const handleSelectChange = (e) => {
        setOpen(false)
        setSelectCal(e.target.value)
        if(e.target.value === 'stockTradingMCal') {
            setStockPrice('')
            setShares('')
            setMargin('')
        }
        if(e.target.value === 'currencyExchangeMCal') {
            setRate('')
            setUnits('')
            setResult('1')
        }
    }
    const handleProfitMargin = () => {
        if(costItem === '' || markup === ''){
            toast.error('Please Fill All Required Fields.')
        }else{
            setOpen(true)
            const Profit = (markup/100) * costItem
            const SalePrice = parseFloat(Profit) + parseFloat(costItem)
            setSalePrice(SalePrice.toFixed())
            setProfit(Profit.toFixed())
            setGrossMargin(((Profit/SalePrice)*100).toFixed(2))
        }
    }
    const handleMargin = () => {
        if(stockPrice === '' || shares === '' || margin === ''){
            toast.error('Please Fill All Required Fields.')
        }else{
            setOpen(true)
            setDisMargin(((shares*stockPrice)* (margin/100)).toFixed(2))
        }
    }
    const handleExMargin = () => {
        if(rate === '' || units === ''){
            toast.error('Please Fill All Required Fields.')
        }else{
            setOpen(true)
            setDisplay(((rate*units)/result).toFixed(2))
        }
    }

    const handleMultipleMargin = () => {
        if(costItem === '' || markup === '' || stockPrice === '' 
            || shares === '' || margin === '' || rate === '' || units === ''){
            toast.error('Please Fill All Required Fields.')
        }else{
            setOpen(true)
            const Profit = (markup/100) * costItem
            const SalePrice = parseFloat(Profit) + parseFloat(costItem)
            setSalePrice(SalePrice.toFixed())
            setProfit(Profit.toFixed())
            setGrossMargin(((Profit/SalePrice)*100).toFixed(2))

            setDisMargin(((shares*stockPrice)* (margin/100)).toFixed(2))

            setDisplay(((rate*units)/result).toFixed(2))
        }
    }

    const handleReset = () => {
        if(selectCalc === 'stockTradingMCal') {
            setStockPrice('')
            setShares('')
            setMargin('')
        }else if(selectCalc === 'currencyExchangeMCal'){
            setRate('')
            setUnits('')
            setResult('1')
        }else{
            setCostItem('')
            setMarkup('')
        }
    }
    const handleMultiReset = () => {
        setOpen(false)
        setRate('')
        setUnits('')
        setStockPrice('')
        setShares('')
        setCostItem('')
        setMarkup('')
        setResult('1')
        setMargin('')
    }
    const handleMButton = () => {
        setOpen(false)
        setButtons('multiple')
        setRate('')
        setUnits('')
        setStockPrice('')
        setShares('')
        setCostItem('')
        setMarkup('')
    }
    const handleSButton = () => {
        setButtons('single')
        setCostItem('')
        setMarkup('')
    }
    return (
        <>
            <Header />
            <ToastContainer theme="colored"/>
            <div className="h-[98px] my-[20px] bg-[#80808014] max-w-[700px] m-auto"></div>
            <div className='mainbg max-w-[1260px] m-auto px-[15px] py-[10px]'>
                <div className=''>
                    <div className='text-center'>
                        <h1 className='text-[24px]  text-[#420075]  font-bold mb-[10px]'>Margin Calculator</h1>
                        <p className='text-sm mx-auto md:w-[60%] w-[100%]  font-normal'>Online Margin Calculator helps you to calculate the following numbers, the sale price of your product, Gross Margin, and profit.</p>
                    </div>
                    <div className='flex bg-[#80808014] max-w-[700px] m-auto items-center my-[20px] min-h-[250px]'>
                        <div></div>
                        <div></div>
                    </div>
                    <div className='w-full md:w-[690px] mt-[15px] m-auto'>
                        <div className='flex flex-wrap justify-center gap-3'>
                            <button onClick={handleSButton} className={buttons === 'single' ? ' bg-[#420075] text-white text-sm h-[40px] rounded-md w-[240px]' : "border text-sm border-[#ccc]  text-black  font-[500] h-[40px] rounded-md w-[240px]"}>Single margin Calculate</button>
                            <button onClick={handleMButton} className={buttons === 'multiple' ? 'bg-[#420075] text-white text-sm  h-[40px] rounded-md w-[240px]' : "border border-[#ccc]  text-black text-sm  font-[500] h-[40px] rounded-md w-[240px]"}>Multiple margin calculator</button>
                        </div>
                            <>
                                <div className='max-w-[350px] my-[40px] m-auto'>
                                    {buttons === 'single' && (
                                        <div className='my-[16px]'>
                                            <label className='text-sm'>Margin Calculator</label>
                                            <select className='border border-[#ccc] w-full focus:outline-0 p-[10px]'
                                                value={selectCalc}
                                                onChange={handleSelectChange} 
                                            >
                                                <option value='profitMarginCal'>Profit Margin Calculator</option>
                                                <option value='stockTradingMCal'>Stock Trading Margin Calculator</option>
                                                <option value='currencyExchangeMCal'>Currency Exchange Margin Calculator</option>
                                            </select>
                                        </div>
                                    )}
                                    {
                                        buttons === 'single' ? (
                                        selectCalc === 'stockTradingMCal' ? (
                                            <div>
                                                <div className='mb-[15px]'>
                                                    <p className=''>Stock Price</p>
                                                    <input type="number" className='w-full border border-[#ccc] h-[40px] focus:outline-0 px-4' 
                                                        onChange={(e) => setStockPrice(e.target.value)}
                                                        value={stockPrice}
                                                    />
                                                </div>
                                                <div className='mb-[15px]'>
                                                    <p className=''>No of Shares</p>
                                                    <input type="number" className='w-full border border-[#ccc] h-[40px] focus:outline-0 px-4' 
                                                        onChange={(e) => setShares(e.target.value)}
                                                        value={shares}
                                                    />
                                                </div>
                                                <div className='mb-[15px]'>
                                                    <p>Margin Requirement %</p>
                                                    <input type="number" className='w-full h-[40px] border border-[#ccc] focus:outline-0 px-4' 
                                                        onChange={(e) => setMargin(e.target.value)}
                                                        value={margin}
                                                    />
                                                </div>
                                                <button className='btnlogin text-white py-[10px] px-[10px] sm:px-[40px] my-[20px]' onClick={handleMargin}>Calculate Margin</button>
                                                <button className='btnlogin text-white py-[10px] px-[10px] sm:px-[40px] my-[20px]' onClick={handleReset}>Reset</button>
                                            </div>
                                        ):  selectCalc === 'currencyExchangeMCal' ?(
                                            <div>
                                                <div className='mb-[15px]'>
                                                    <p className=''>Exchange Rate</p>
                                                    <input type="number" className='w-full border border-[#ccc] h-[40px] focus:outline-0 px-4' 
                                                        onChange={(e) => setRate(e.target.value)} 
                                                        value={rate}
                                                    />
                                                </div>
                                                <div className='mb-[15px]'>
                                                    <p className=''>Margin Ratio</p>
                                                    <select className='border border-[#ccc] w-full focus:outline-0 p-[10px]'
                                                        value={result}
                                                        onChange={(e) => handleChange(e)}
                                                    >
                                                        {marginRatio.map((val, index) => (<option key={index} value={val.val}>{val.mr}</option>))}
                                                    </select>
                                                </div>
                                                <div className='mb-[15px]'>
                                                    <p>Units</p>
                                                    <input type="number" className='w-full h-[40px] border border-[#ccc] focus:outline-0 px-4' 
                                                        value={units}
                                                        onChange={(e) => setUnits(e.target.value)} 
                                                    />
                                                </div>
                                                <button className='btnlogin text-white py-[10px] px-[10px] sm:px-[40px] my-[20px]' onClick={handleExMargin}>Calculate Margin</button>
                                                <button className='btnlogin text-white py-[10px] px-[10px] sm:px-[40px] my-[20px]' onClick={handleReset}>Reset</button>
                                            </div>
                                        ): (
                                            <div>
                                                <div className='mb-[15px]'>
                                                    <p className=''>Cost of Item ($)</p>
                                                    <input type="number" className='w-full border border-[#ccc] h-[40px] focus:outline-0 px-4' 
                                                        onChange={(e) => setCostItem(e.target.value)} value={costItem}
                                                    />
                                                </div>
                                                <div className='mb-[15px]'>
                                                    <p className=''>Markup %</p>
                                                    <input type="number" className='w-full border border-[#ccc] h-[40px] focus:outline-0 px-4' 
                                                        onChange={(e) => setMarkup(e.target.value)} value={markup}
                                                    />
                                                </div>
                                                <button className='btnlogin text-white py-[10px] px-[10px] sm:px-[40px] my-[20px]' onClick={handleProfitMargin}>Calculate Margin</button>
                                                <button className='btnlogin text-white py-[10px] px-[10px] sm:px-[40px] my-[20px]' onClick={handleReset}>Reset</button>
                                            </div>
                                        )) :(
                                            <><div className='my-[40px]'>
                                                <div>
                                                    <div>
                                                        <h4 className='text-[20px] font-[500] text-sm'>Profit Margin Calculator</h4>
                                                    </div>
                                                    <div className='flex md:flex-wrap md:justify-start justify-center gap-[20px] mt-[10px]'>
                                                        <div className='mb-[15px]'>
                                                            <p className='mb-[10px]'>Cost of Item ($)</p>
                                                            <input type="number" className='md:w-[350px] w-[100%] border border-[#ccc] h-[40px] focus:outline-0 px-4' 
                                                                value={costItem}
                                                                onChange={(e) => setCostItem(e.target.value)} 
                                                            />
                                                        </div>
                                                        <div className='mb-[15px]'>
                                                            <p className='mb-[10px]'>Markup %</p>
                                                            <input type="number" className='md:w-[150px] w-[100%] border border-[#ccc] h-[40px] focus:outline-0 px-4' 
                                                                value={markup}
                                                                onChange={(e) => setMarkup(e.target.value)} 
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div>
                                                        <h4 className='text-[20px] font-[500] text-sm'>Stock Trading Margin Calculator</h4>
                                                    </div>
                                                    <div className='flex flex-wrap gap-[20px] mt-[10px]'>
                                                        <div className='mb-[15px]'>
                                                            <p className='mb-[10px]'>Stock Price</p>
                                                            <input type="number" className='md:w-[150px] w-[100%] border border-[#ccc] h-[40px] focus:outline-0 px-4' 
                                                                onChange={(e) => setStockPrice(e.target.value)}
                                                                value={stockPrice}
                                                            />
                                                        </div>
                                                        <div className='mb-[15px]'>
                                                            <p className='mb-[10px]'>No of Shares</p>
                                                            <input type="number" className='md:w-[150px] w-[100%] border border-[#ccc] h-[40px] focus:outline-0 px-4' 
                                                                onChange={(e) => setShares(e.target.value)}
                                                                value={shares}
                                                            />
                                                        </div>
                                                        <div className='mb-[15px]'>
                                                            <p className='mb-[10px]'>Margin Requirement %</p>
                                                            <input type="number" className='md:w-[350px] w-[100%] border border-[#ccc] h-[40px] focus:outline-0 px-4' 
                                                                onChange={(e) => setMargin(e.target.value)}
                                                                value={margin}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-[20px]'>
                                                    <div>
                                                        <h4 className='text-[20px] pb-[10px] font-[500] text-sm'>Currency Exchange Margin Calculator</h4>
                                                    </div>
                                                    <div className='flex flex-wrap gap-[20px]'>
                                                        <div className='mb-[15px]'>
                                                            <p className='mb-[10px]'>Exchange Rate</p>
                                                            <input type="number" className='md:w-[150px] w-[100%] border border-[#ccc] h-[40px] focus:outline-0 px-4' 
                                                                onChange={(e) => setRate(e.target.value)} 
                                                                value={rate}
                                                            />
                                                        </div>
                                                        <div className='mb-[15px]'>
                                                            <p className='mb-[10px]'>Margin Ratio</p>
                                                            <select className='border md:w-[150px] w-[100%] border-[#ccc] p-[10px] px-[6px] py-[7px]'
                                                                value={result}
                                                                onChange={(e) => handleChange(e)}
                                                            >
                                                                {marginRatio.map((val, index) => (<option key={index} value={val.val}>{val.mr}</option>))}
                                                            </select>
                                                        </div>
                                                        <div className='mb-[15px]'>
                                                            <p className='mb-[10px]'>Units</p>
                                                            <input type="number" className='md:w-[350px] w-[100%] border border-[#ccc] h-[40px] focus:outline-0 px-4' 
                                                                onChange={(e) => setUnits(e.target.value)} 
                                                                value={units}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='flex justify-center gap-3'>
                                                <button className='btnlogin text-white py-[10px] px-[10px] sm:px-[40px] my-[20px]' onClick={handleMultipleMargin}>Calculate Margin</button>
                                                <button className='btnlogin text-white py-[10px] px-[10px] sm:px-[40px] my-[20px]' onClick={handleMultiReset}>Reset</button>
                                            </div></>
                                        )}
                                </div>
                            </>
                    </div>
                    <div className="h-[98px] my-[20px] bg-[#80808014] max-w-[700px] m-auto"></div>
                    <div className='flex bg-[#80808014] max-w-[700px] m-auto items-center my-[20px] min-h-[250px]'>
                        <div></div>
                        <div></div>
                    </div>
                    <div className='max-w-[700px] m-auto'>
                        {
                            (buttons === 'single' && open) ? (
                            (selectCalc === 'stockTradingMCal' && open) ? (
                                <>
                                    <h6 className='text-[18px] text-[#420075] font-[600] text-center'>Result</h6>
                                    <div className='flex w-[100%] text-start '>
                                        <h6 className='md:w-[200px] w-[100%] border border-[#E3E7ED] text-sm bg-[#F6F8FA] px-[16px] py-[8px]'>Amount Required:</h6>
                                        <h6 className='md:w-[100%] w-[100%] border border-[#E3E7ED] px-[16px] py-[8px] text-sm'>{disMargin}</h6>
                                    </div>
                                </>
                            ) : (selectCalc === 'currencyExchangeMCal' && open) ?(
                                <>
                                    <h6 className='text-[18px] text-[#420075] font-[600] text-center'>Result</h6>
                                    <div className='flex w-[100%] text-start '>
                                        <h6 className='md:w-[200px] w-[100%] border border-[#E3E7ED] text-sm bg-[#F6F8FA] px-[16px] py-[8px]'>Amount Required:</h6>
                                        <h6 className='md:w-[100%] w-[100%] border border-[#E3E7ED] px-[16px] py-[8px] text-sm'>{display}</h6>
                                    </div>
                                </>
                            ):(
                                <div className='w-[100%] my-[20px]'>
                                    <h6 className='text-[18px] text-[#420075] font-[600] text-center'>Result</h6>
                                    <div className='flex w-[100%] text-start '>
                                        <h6 className='md:w-[200px] w-[100%] border border-[#E3E7ED] text-sm bg-[#F6F8FA] px-[16px] py-[8px]'>Your Sale Price</h6>
                                        <h6 className='md:w-[100%] w-[100%] border border-[#E3E7ED] px-[16px] py-[8px] text-sm'>{salePrice}</h6>
                                    </div>
                                    <div className='flex w-[100%] text-start '>
                                        <h6 className='md:w-[200px] w-[100%] border border-[#E3E7ED] text-sm bg-[#F6F8FA] px-[16px] py-[8px]'>Your Profit</h6>
                                        <h6 className='md:w-[100%] w-[100%] border border-[#E3E7ED] px-[16px] py-[8px] text-sm'>{profit}</h6>
                                    </div>
                                    <div className='flex w-[100%] text-start '>
                                        <h6 className='md:w-[200px] w-[100%] border border-[#E3E7ED] text-sm bg-[#F6F8FA] px-[16px] py-[8px]'>Gross Margin</h6>
                                        <h6 className='md:w-[100%] w-[100%] border border-[#E3E7ED] px-[16px] py-[8px] text-sm'>{`${grossMargin}%`}</h6>
                                    </div>
                                </div>
                            )): ''}
                            {
                                (buttons === 'multiple' && open) && (
                                    <div className='w-[100%] my-[20px]'>
                                        <h6 className='text-[18px] text-[#420075] font-[600] text-center'>Result</h6>
                                    <h2>Profit Margin Calculator</h2>
                                    <div className='flex w-[100%] text-start '>
                                        <h6 className='md:w-[200px] w-[100%] border border-[#E3E7ED] text-sm bg-[#F6F8FA] px-[16px] py-[8px]'>Your Sale Price</h6>
                                        <h6 className='md:w-[100%] w-[100%] border border-[#E3E7ED] px-[16px] py-[8px] text-sm'>{salePrice}</h6>
                                    </div>
                                    <div className='flex w-[100%] text-start '>
                                        <h6 className='md:w-[200px] w-[100%] border border-[#E3E7ED] text-sm bg-[#F6F8FA] px-[16px] py-[8px]'>Your Profit</h6>
                                        <h6 className='md:w-[100%] w-[100%] border border-[#E3E7ED] px-[16px] py-[8px] text-sm'>{profit}</h6>
                                    </div>
                                    <div className='flex w-[100%] text-start '>
                                        <h6 className='md:w-[200px] w-[100%] border border-[#E3E7ED] text-sm bg-[#F6F8FA] px-[16px] py-[8px]'>Gross Margin</h6>
                                        <h6 className='md:w-[100%] w-[100%] border border-[#E3E7ED] px-[16px] py-[8px] text-sm'>{`${grossMargin}%`}</h6>
                                    </div>
                                    <h2>Stock Trading Margin Calculator</h2>
                                    <div className='flex w-[100%] text-start '>
                                        <h6 className='md:w-[200px] w-[100%] border border-[#E3E7ED] text-sm bg-[#F6F8FA] px-[16px] py-[8px]'>Amount Required:</h6>
                                        <h6 className='md:w-[100%] w-[100%] border border-[#E3E7ED] px-[16px] py-[8px] text-sm'>{disMargin}</h6>
                                    </div>
                                    <h2>Currency Exchange Margin Calculator</h2>
                                    <div className='flex w-[100%] text-start '>
                                        <h6 className='md:w-[200px] w-[100%] border border-[#E3E7ED] text-sm bg-[#F6F8FA] px-[16px] py-[8px]'>Amount Required:</h6>
                                        <h6 className='md:w-[100%] w-[100%] border border-[#E3E7ED] px-[16px] py-[8px] text-sm'>{display}</h6>
                                    </div>
                                </div>
                                )
                            }
                    </div>
                </div>
                <div className='w-full lg:w-[900px] mt-[15px] m-auto'>
                    <div>
                        <div className='card p-[15px] mb-[15px] bg-white border rounded-lg'>
                            {margincalcdata.map((data) => {
                                return (
                                    <>
                                        <h3 className='text-[16px] font-bold mb-[10px] text-[#420075]'>{data.title}</h3>
                                        <p className='text-sm mb-[10px]'>{data.sentence}</p>
                                        <p className='text-sm mb-[10px]'>{data.tiny}</p>
                                        <p className='text-sm mb-[10px]'><span className='text-[14px] font-semibold'>{data.step}</span>{data.detail}</p>
                                        <p className='text-sm mb-[10px]'><span className='text-[14px] font-semibold'>{data.step2}</span>{data.detail2}</p>
                                        <p className='text-sm mb-[10px]'><span className='text-[14px] font-semibold'>{data.step3}</span>{data.detail3}</p>
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

export default Margincalc