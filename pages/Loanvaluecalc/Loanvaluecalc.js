import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Footer from '@/Components/Footer/Footer'
import Header from '@/Components/Header/Header'

const Loanvaluecalc = () => {
    const maxInputFields = 3
    const [open, setOpen] = useState(false)
    const [selectCurr, setSelectCurr] = useState('$')
    const [property, setProperty] = useState('')
    const [totalAmt, setTotalAmt] = useState()
    const [values, setValues] = useState([
        { morgageAmt: '' },
    ]);
    const [morgageLoan, setMorgageLoan] = useState()
    const [loanVal, setLoanVal] = useState({
        loan1: '',
        loan2: '',
        loan3: ''
    })
    const [disIcon, setDisIcon] = useState()

    const handleChange = (e, index) => {
        const value = [...values]
        value[index].morgageAmt = e.target.value;
        setValues(value)
    }
    const handleRemoveFields = (index) => {
        const value  = [...values];
        value.splice(index, 1);
        setValues(value);
    }
    const handleAddFields = () => {
        if(values.length < maxInputFields){
            setValues([...values, { morgageAmt: '' }]);
        }
    }
    const handleLTV = () => {
        if(property === '' || values[0].morgageAmt === ''){
            toast.error('Please fill all the required fields')
        }else{
            setOpen(true)
            const value = [...values];
            const arrayVal = value.map((val) => Number(val.morgageAmt))
            let result = 0;
            for (let i = 0; i < arrayVal.length; i++){
                result += arrayVal[i];
                setLoanVal({
                    loan1 : (arrayVal[0] * 100 / property).toFixed(2), 
                    loan2 : (arrayVal[1] * 100 / property).toFixed(2),
                    loan3 : (arrayVal[2] * 100 / property).toFixed(2)
                })
            }
            setDisIcon(selectCurr)
            setTotalAmt(result)
            setMorgageLoan((result * 100/property).toFixed(2))
        }
    }
    const handleReset = () => {
        setProperty('')
        setOpen(false)
        const newValues = Array.from({ length: values.length }, () => ({ morgageAmt: '' }));
        setValues(newValues);
        setSelectCurr('$')
    }
    return (
        <>
            <Header />
            <ToastContainer theme="colored"/>
            <div className="h-[98px] my-[20px] bg-[#80808014] max-w-[700px] m-auto"></div>
            <div className='text-center'>
                <h3 className='font-[600] text-[24px] text-[#420075]'>LTV Calculator</h3>
                <p className='text-[sm] md:w-[50%] py-[10px] w-[100%] px-[10px] mx-auto'>ltv calculator helps you to calculate the value of your mortgage with the amount as a lander you are getting from a bank.</p>
            </div>
            <div className='flex bg-[#80808014] max-w-[700px] m-auto items-center my-[20px] min-h-[250px]'></div>
            <div className='w-full lg:w-[900px] mt-[15px] m-auto'>
                <div className='bg-[#fff] md:px-[48px] px-[24px] py-[28px] border border-[#ccc]'>
                    <div className='md:flex block items-baseline gap-[20px] justify-between'>
                        <div className='w-[100%]'>
                            <div>
                                <label htmlFor="" className='text-sm py-[5px] font-[600]'>Currency (optional)</label>
                            </div>
                            <select className='w-[100%] border border-[#ccc] my-[5px]  h-[48px] px-[10px]'
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
                        <div className='mt-[20px] w-[100%]'>
                            <div>
                                <label htmlFor="" className='text-sm py-[5px font-[600]'>
                                    {selectCurr ? 
                                        `Estimated Property Value ${selectCurr} `: 'Estimated Property Value'
                                    }
                                </label>
                                <input type="number" placeholder='250000' className='placeholder:text-[14px] my-[5px] w-[100%] h-[48px] indent-2 outline-none border border-[#ccc]' 
                                    value={property}
                                    onChange={(e) => setProperty(e.target.value)} 
                                />
                            </div>
                        </div>
                    </div>
                    <div className='my-[20px]'>
                    {
                        values?.map((value, index) => (
                            <div key={index}>
                                <label htmlFor="" className='text-sm py-[5px font-[600]'>
                                    {index === 1  ? `Second Mortgage Amount Owed ${selectCurr}` 
                                        : index === 2 ? `Third Mortgage Amount Owed ${selectCurr}` 
                                        : `First Mortgage Amount Owed ${selectCurr}`
                                    }
                                </label>
                                <input type="number" placeholder='250000' className='placeholder:text-[14px] my-[5px] w-[100%] h-[48px] indent-2 outline-none border border-[#ccc]' 
                                    value={value.morgageAmt} 
                                    onChange={(e) => handleChange(e, index)}
                                />
                                {index < 1 ? '' : (
                                    <button onClick={() => handleRemoveFields(index)} className='w-[220px] rounded-md h-[42px] bg-[#000] text-[#fff] text-[14px]'>- Remove</button>
                                )}
                            </div>
                        ))
                    } 
                    </div>
                    <div>
                        { values.length < maxInputFields && (
                            <button onClick={handleAddFields} className='w-[220px] rounded-md h-[42px] bg-[#000] text-[#fff] text-[14px]'>+ Add Another Mortgage</button>
                        )}
                    </div>
                </div>
            </div>
            <div className='flex justify-center gap-[20px] my-[40px]'>
                <button className='btnlogin text-white py-[10px] px-[20px] sm:px-[40px] my-[20px]' onClick={handleLTV}>Calculate LTV</button>
                <button className='btnlogin text-white py-[10px] px-[20px] sm:px-[40px] my-[20px]' onClick={handleReset}>Reset</button>
            </div>
            {open && 
                <>        
                    <div className='py-[20px] text-center'>
                        <h2 className='text-[20px] font-[600] text-[#420075]'>Result</h2>
                    </div>
                    <div className='bg-[#f6f8fa] w-full lg:w-[900px] mt-[15px] m-auto p-[30px]'>
                        <p className='text-sm py-[5px]'>Total amount owed: <span className='font-[600]'>{disIcon}{totalAmt}</span></p>
                        <p className='text-sm py-[5px]'>First mortgage loan-to-value (LTV) Ratio:  <span className='font-[600]'>{isNaN(loanVal.loan1) ? '0.00%' : `${loanVal.loan1}%`}</span></p>
                        <p className='text-sm py-[5px]'>Second mortgage loan-to-value (LTV) Ratio: <span className='font-[600]'>{isNaN(loanVal.loan2) ? '0.00%' : `${loanVal.loan2}%`}</span></p>
                        <p className='text-sm py-[5px]'>Third mortgage loan-to-value (LTV) Ratio: <span className='font-[600]'>{isNaN(loanVal.loan3) ? '0.00%' : `${loanVal.loan3}%`}</span></p>
                        <p className='text-sm py-[5px]'>Combined loan-to-value (CLTV) Ratio <span className='font-[600]'>{!isNaN(morgageLoan) && `${morgageLoan}%`}</span></p>
                    </div>
                </>
            }
            <div className='w-full lg:w-[900px] mt-[15px] m-auto'>
                <div className='card p-[15px] mb-[15px] bg-white border rounded-lg'>
                    <div>
                        <h3 className='font-[600] text-[#420075]'>What are LTV and CLTV?</h3>
                        <p className='text-sm py-[5px]'>The LTV stands for loan to value ratio, and it’s a method used for assessing the risk involved with a mortgage before its approval. It’s a common ratio used by lenders and financial institutes to figure out whether the risk involved with a mortgage is high or low. LTV plays a crucial role as it helps the lenders decide the interest rate that should be charged to the applicant.</p>
                        <p className='text-sm py-[5px]'>CLTV or combined loan to value ratio also has the same function, but it’s used when an applicant has already taken more than one loan. CLTV is a crucial aspect for the lenders as it helps them calculate the capability of a mortgagor to afford another property. CLTV and LTV are quite similar, but the only difference is that CLTV accounts for all mortgages during its calculation.</p>
                    </div>
                    <div className=''>
                        <h3 className='font-[600] text-[#420075]'>About Our LTV Calculator - Online Tool</h3>
                        <p className='text-sm py-[5px]'>Our LTV calculator has been developed to make the process of calculating loan to value ratio easier for everyone dealing with mortgages. Whether you’re a mortgagor or a mortgagee, this utility can help you figure out the exact Ltv ratio for any given amount. The loan to value calculator on SmallSEOTools is a web-based service that doesn’t need to be downloaded on your device. It’s an online tool that doesn’t require any plugins installed for the calculation of loan to value ratio.</p>
                        <p className='text-sm py-[5px]'>Whether you want to calculate LTV one time or you want to do it multiple times, our LTV calculator will not impose restrictions on its usage. It's a free of cost tool with top-notch features which make the process of LTV calculation a piece of cake for everyone. Anyone with a device connected to an internet connection can access our loan value calculator. You don’t need to get a specific device for using this online utility. You can get accurate results with this LTV calculation service from all kinds of devices, as it is compatible with all operating systems, including iOS, Android, Windows, Mac, and Linux.</p>
                    </div>
                    <div>
                        <h3 className='font-[600] text-[#420075]'>How To Calculate LTV?</h3>
                        <p className='text-sm py-[5px]'>The manual calculation of a loan to value ratio is an intricate process as you’ll need to memorize the LTV formula. You will need a calculator after putting the values in the LTV formula to get your hands on the LTV ratio. The formula for LTV is given below.</p>
                        <p className='font-[600] py-[20px] text-sm'>LTV = Mortgage Amount/Appraised Property Value</p>
                    </div>
                    <div>
                        <h3 className='text-[#420075] font-[600]'>How to Use Our Loan to Value Calculator?</h3>
                        <p className='text-sm py-[5px]'>The loan to value calculator on SmallSEOTools is easy to use as it comes with a user-friendly interface. You don’t have to follow intricate procedures for calculating LTV anymore, as our LTV calculator eliminates all hurdles the users could face on other online platforms. You don’t need to get registered for accessing this LTV calculation utility or follow any hard and fast rules for using it. All you need to do for calculating LTV is access this tool through any web browser and follow the simple steps given below.</p>
                        <div>
                            <ul className='list-disc ml-[50px]'>
                                <li className='text-sm py-[5px]'>Firstly, enter the mortgage amount and appraised property value in the boxes given on this tool.</li>
                                <li className='text-sm py-[5px]'>The next step is to click on the Calculate LTV button.</li>
                                <li className='text-sm py-[5px]'>The LTV calculator will work on your provided values and display the accurate LTV ratio in a matter of seconds.</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h3 className='text-[#420075] font-[600]'>What Is A Good Loan To Value Ratio?</h3>
                        <p className='text-sm py-[5px]'>As such, there isn’t a decisive good LTV, but we can say that the lower the percentage of LTV, the better. LTV basically describes your ability to pay back the borrowing amount to the mortgagee. In simple words, it assesses the risk associated with your purchase or remortgage for lenders. A good loan to value ratio is the one that ensures the financial institutes won’t suffer a loss as a result of negative equity. If the equity in your home has the ability to cover debts and costs for the lenders, it would be considered a good LTV ratio.</p>
                    </div>
                    <div>
                        <h3 className='text-[#420075] font-[600]'>Is A High Loan To Value Good Or Bad?</h3>
                        <p className='text-sm py-[5px]'>A high loan to value ratio is obviously bad for the lenders as the chances of suffering losses are pretty much higher. A high LTV means that your equity in the home is quite low, which means that by selling your property, the debts won’t be recovered fully by the mortgagee or lender.</p>
                    </div>
                    <div>
                        <h3 className='text-[#420075] font-[600]'>What Is A Maximum Loan To Value (LTV)?</h3>
                        <p className='text-sm py-[5px]'>The maximum LTV ratio might vary from time to time, and it all depends upon the set limit by the lender. Typically, the maximum LTV ratio is 95%, but it doesn’t mean you’ll get it from all financial institutes. For instance, if a financial institute has criteria to lend up to 90% LTV, it won’t mortgage the applicants whose LTV is going beyond this maximum limit.</p>
                    </div>
                    <div>
                        <h3 className='text-[#420075] font-[600]'>What To Do If Your Loan To Value Ratio Is Too High?</h3>
                        <p className='text-sm py-[5px]'>Most of the financial institutes don’t accept mortgage applications with a high loan to value ratio. However, there are some exceptions that even lend money to the mortgages with 95% LTV. But due to high LTV, you will have to pay a higher interest rate. Some lenders might ask you to get private mortgage insurance if the LTV is high.</p>
                        <p className='text-sm py-[5px]'>You can reduce your LTV by making bigger down payments. By getting assistance from family members, your down payment can increase, which will result in better loan terms with the lender. Moreover, you can also work on downsizing your home to reduce the borrowing amount that will also decrease the LTV. The lower LTV is always better as the interest rate charged for it is lower, which will make it easier for the borrower to repay the amount in lesser monthly installments.</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Loanvaluecalc