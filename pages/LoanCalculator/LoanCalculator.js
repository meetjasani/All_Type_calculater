import React, { useState } from 'react'
import Footer from '@/Components/Footer/Footer'
import Header from '@/Components/Header/Header'

function LoanCalculator() {
    const [select, setSelect] = useState('FindTheLoanAmount')
    const [userValues, setUserValues] = useState({
        interest: '',
        numMonths: '',
        payment: '',
    })
    const [results, setResults] = useState({
        loanAmount: '',
        totalPayment: '',
        totalInterest: '',
        isResult: false,
      });
    const handleInputChange = (e) => {
        setUserValues({ ...userValues, [e.target.name]: e.target.value })
    }

    return (
        <>
            <Header />
            <div className='h-[98px] my-[20px] bg-[#80808014] max-w-[900px] m-auto'></div>
            <div className='mainbg max-w-[1260px] m-auto px-[15px] py-[10px]'>
                <div>
                    <div className='text-center'>
                        <h1 className='text-[16px] sm:text-[22px] text-[#420075] md:text-2xl font-bold mb-[10px]'>Loan Calculator</h1>
                        <p className='text-sm md:w-[70%] w-[100%] mx-auto font-normal'>Find out how much interest you'll pay and how long it will take to pay off your loan using our calculator.</p>
                    </div>
                    <div className='flex bg-[#80808014] max-w-[700px] m-auto items-center my-[20px] min-h-[250px]'>
                        <div></div>
                        <div></div>
                    </div>
                    <div className='bg-[#fff] md:px-[48px] px-[20px] md:py-[28px] py-[20px] md:w-[900px] mx-auto'>
                        <div>
                            <div>
                                <label htmlFor="" className='text-sm font-[600]'>Choose a Calculation</label>
                            </div>
                            <select className='p-[10px] border border-[#ccc] md:w-[30%] w-[100%]'
                                value={select}
                                onChange={(e) => setSelect(e.target.value)} 
                            >
                                <option value="FindTheLoanAmount">Find The Loan Amount</option>
                                <option value="FindTheInterestRate">Find the Interest Rate</option>
                                <option value="FindTheNumberOfMonths">Find the Number of Months</option>
                                <option value="FindTheMonthlyPayment">Find the Monthly Payment</option>
                            </select>
                        </div>
                        <div className='md:flex block gap-[20px] my-[20px]'>
                            <div className='w-[100%] md:my-[0px] my-[20px]'>
                                <div>
                                    <label htmlFor="" className='text-sm font-[600]'>Interest Rate: %</label>
                                </div>
                                <input type="number" name='interest' className='w-[100%] p-[10px] border border-[#ccc] outline-none' 
                                    value={userValues.interest}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className='w-[100%] md:my-[0px] my-[20px]'>
                                <div>
                                    <label htmlFor="" className='text-sm font-[600]'>Number of Months:</label>
                                </div>
                                <input type="number" name='numMonths' className='w-[100%] p-[10px] border border-[#ccc] outline-none' 
                                    value={userValues.numMonths}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className='w-[100%] md:my-[0px] my-[20px]'>
                                <div>
                                    <label htmlFor="" className='text-sm font-[600]'>Monthly Payment: $</label>
                                </div>
                                <input type="number" name='payment' className='w-[100%] p-[10px] border border-[#ccc] outline-none' 
                                    value={userValues.payment}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="h-[98px] my-[20px] bg-[#80808014] max-w-[700px] m-auto"></div>
                    <div className='flex justify-center gap-3'>
                        <button className='btnlogin text-white py-[10px] px-[10px] sm:px-[40px] my-[20px]'>Calculate Age</button>
                        <button className='btnlogin text-white py-[10px] px-[10px] sm:px-[40px] my-[20px]'>Reset</button>
                    </div>
                    <div className='flex bg-[#80808014] max-w-[700px] m-auto items-center my-[20px] min-h-[250px]'>
                        <div></div>
                        <div></div>
                    </div>
                    <div className='text-center'>
                        <h4 className='text-[#420075] text-[20px] font-bold'>Result</h4>
                        <div className='w-[100%] flex justify-center my-[20px]'>
                            <p className='text-[16px] font-[600] border border-[#ccc] bg-[#F6F8FA] w-[30%] p-[10px]'>The Loan Amount</p>
                            <p className='text-[16px] font-[600] border border-[#ccc] p-[10px] w-[30%]'>0.999</p>
                        </div>
                    </div>
                    <div className='w-full lg:w-[900px] mt-[15px] m-auto'>
                        <div>
                            <div className='card p-[15px] mb-[15px] bg-white border rounded-lg'>
                                <div>
                                    <h3 className='text-[18px] font-bold mb-[0px] text-[#420075]'>Loan Calculator by SmallSEOTools</h3>
                                    <p className='text-sm py-[10px]'>SmallSEOTools’ loan calculator is a web-based utility designed to help people compute the total payable amount in their specified payment frequencies. The loan payment calculator runs on smart algorithms that calculate loan instalments on your behalf and displays results in seconds. It just asks the users to enter their loan specifications; you don’t need to go through any manual procedure to use this online loan repayment calculator.</p>
                                </div>
                                <div>
                                    <h3 className='text-[18px] font-bold mb-[0px] text-[#420075]'>How to Use this Loan or Credit Calculator?</h3>
                                    <p className='text-sm py-[10px]'>The usage of our loan calculator depends upon what you look forward to calculating through it. The loan payment calculator comes with 4 different modes and helps you calculate the values and amounts without errors. The easy-to-follow instructions below can help you use this calculator to calculate the results you’re looking for. </p>
                                </div>
                                <div>
                                    <h4 className='text-[#422075] font-[600] text-[14px] py-[5px]'>Find the Payment Amount</h4>
                                    <ul className='list-disc ml-[40px]'>
                                        <li className='text-sm py-[2.5px]'>Choose the “find the monthly payment” calculation from the drop-down menu of modes.</li>
                                        <li className='text-sm py-[2.5px]'>Enter the loan amount.</li>
                                        <li className='text-sm py-[2.5px]'>Add the interest rate.</li>
                                        <li className='text-sm py-[2.5px]'>Choose the number of months.</li>
                                        <li className='text-sm py-[2.5px]'>Hit the calculate button. </li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className='text-[#422075] font-[600] text-[14px] py-[5px]'>How Does it Work?</h4>
                                    <p className='text-sm py-[5px]'>This mode of the calculator works on the following formula:</p>
                                    <ul className='list-disc ml-[40px]'>
                                        <li className='text-sm py-[2.5px]'>PMT = Monthly Payment</li>
                                        <li className='text-sm py-[2.5px]'>i = Interest Rate</li>
                                        <li className='text-sm py-[2.5px]'>PV = Loan Amount</li>
                                        <li className='text-sm py-[2.5px]'>n = total number of months </li>
                                    </ul>
                                </div>
                                <div className='py-[10px]'>
                                    <h4 className='text-[#422075] font-[600] text-[14px] py-[5px]'>Find the Loan Amount</h4>
                                    <ul className='list-disc ml-[40px]'>
                                        <li className='text-sm py-[2.5px]'>Choose the “find the loan amount” calculation from the list of given modes.</li>
                                        <li className='text-sm py-[2.5px]'>Type the interest rate.</li>
                                        <li className='text-sm py-[2.5px]'>Add the number of months in the next field.</li>
                                        <li className='text-sm py-[2.5px]'>Enter the monthly payment that needs to be paid. </li>
                                        <li>Click the calculate button to find the loan amount. </li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className='text-[#422075] font-[600] text-[14px] py-[5px]'>How Does it Work?</h4>
                                    <ul className='list-disc ml-[40px]'>
                                        <li className='text-sm py-[2.5px]'>PMT = Monthly Payment</li>
                                        <li className='text-sm py-[2.5px]'>i = Interest Rate</li>
                                        <li className='text-sm py-[2.5px]'>PV = Loan Amount</li>
                                        <li className='text-sm py-[2.5px]'>n = total number of months </li>
                                    </ul>
                                    <p className='text-sm py-[5px]'>The loan amount can be calculated with this formula. Instead of entering amounts manually in this formula and using a calculator, you can rely on our online loan calculator to find the loan amount in an instant.</p>
                                </div>
                                <div className='py-[10px]'>
                                    <h4 className='text-[#422075] font-[600] text-[14px] py-[5px]'>Find the Interest Rate</h4>
                                    <ul className='list-disc ml-[40px]'>
                                        <li className='text-sm py-[2.5px]'>Select the “find the interest rate” calculation from the given modes.</li>
                                        <li className='text-sm py-[2.5px]'>Enter the loan amount.
                                        </li>
                                        <li className='text-sm py-[2.5px]'>Choose the number of months.
                                        </li>
                                        <li className='text-sm py-[2.5px]'>Choose the number of months.
                                        </li>
                                        <li>Hit the calculate button to find the interest rate.
                                        </li>
                                    </ul>
                                </div>
                                <div className='py-[10px]'>
                                    <h4 className='text-[#422075] font-[600] text-[14px] py-[5px]'>How Does it Work?</h4>
                                    <ul className='list-disc ml-[40px]'>
                                        <li className='text-sm py-[2.5px]'>PMT = Monthly Payment</li>
                                        <li className='text-sm py-[2.5px]'>i = Interest Rate
                                        </li>
                                        <li className='text-sm py-[2.5px]'>PV = Loan Amount
                                        </li>
                                        <li className='text-sm py-[2.5px]'>n = total number of months
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className='text-[#420075] font-[600]'>How to Estimate Loans?</h3>
                                    <p className='text-sm py-[5px]'>The estimation of loans is based on certain factors, which include the following: </p>
                                    <div>
                                        <h4 className='text-[14px] text-[#420075] font-[600] py-[5px]'>Loan Amount</h4>
                                        <p className='text-sm py-[5px]'>A loan amount is an amount that an individual, group of people, or company borrows from a financial institute. </p>
                                    </div>
                                    <div>
                                        <h4 className='text-[14px] text-[#420075] font-[600] py-[5px]'>Loan Term</h4>
                                        <p className='text-sm py-[5px]'>The loan term is the time in months or years in which the loan amount needs to be repaid by the borrower to the financial institution that has issued the loan. </p>
                                    </div>
                                </div>
                                <div>
                                    <h3 className='text-[#420075] font-[600]'>Interest Rate</h3>
                                    <p className='text-sm py-[5px]'>Interest rate is a proportion of the loan amount charged additionally by a financial institute from the borrower. It’s a percentage representation of the loan amount that is typically charged every year. </p>
                                    <div>
                                        <h4 className='text-[14px] text-[#420075] font-[600] py-[5px]'>Compounding</h4>
                                        <p className='text-sm py-[5px]'>Compounding is the process in which the interest is credited to the principal loan amount and the paid amount of interest. It is generally depicted as an interest on interest. </p>
                                    </div>
                                    <div>
                                        <h4 className='text-[14px] text-[#420075] font-[600] py-[5px]'>Monthly Payment</h4>
                                        <p className='text-sm py-[5px]'>Monthly payment is the amount that needs to be paid against the loan you have borrowed until the loan is cleared. </p>
                                    </div>
                                </div>
                                <div>
                                    <h3 className='text-[#420075] font-[600]'>Disclaimer: Loan Calculator</h3>
                                    <p className='text-sm py-[5px]'>The calculations made through this loan calculator aren’t based on or related to any financial institute or bank. The credit calculator is based on the formula used all over the globe to calculate loan specifications. The actual amount of the loan, interest rate, monthly payments, and total instalments may vary depending on the bank or institute you will borrow money from. The aim of this calculator is to help you find the estimated value of a loan, the number of instalments, the repayable amount per month, and the interest rate. Its results are entirely based on your submitted values; hence, it cannot be held responsible in case of any variations in the actual terms of the financial institute. </p>
                                </div>
                                <div>
                                    <h3 className='text-[#420075] font-[600]'>Types of Loan Calculators</h3>
                                    <p className='text-sm py-[5px]'>Individuals use different types of loan calculators to calculate loans to meet their specific needs. Here are the calculators you can use to calculate particular loan types. </p>
                                    <div>
                                        <h4 className='text-[14px] text-[#420075] font-[600] py-[5px]'>Auto Loan Calculator</h4>
                                        <p className='text-sm py-[5px]'>The auto loan calculator is a vital tool used by people looking forward to borrowing an amount to purchase a vehicle. It allows the users to understand the rate of interest the auto loan provider is charging or the total outstanding amount of the car after adding interest. </p>
                                    </div>
                                    <div>
                                        <h4 className='text-[14px] text-[#420075] font-[600] py-[5px]'>Mortgage Loan Calculator</h4>
                                        <p className='text-sm py-[5px]'>The mortgage loan calculator is a widely used online utility, as it helps people calculate monthly payments for buying a property over a set duration. You can adjust the amount of the down payment on a mortgage loan calculator and see the difference in the monthly payments you need to pay against it. </p>
                                    </div>
                                    <div>
                                        <h4 className='text-[14px] text-[#420075] font-[600] py-[5px]'>Home Loan Calculator</h4>
                                        <p className='text-sm py-[5px]'>Are you looking forward to getting a home loan? Do you wish to know the monthly payments you’ll need to make against the home loan? You can get answers to these queries with the help of a home loan calculator. This tool smartly calculates the instalments that need to be paid against home loans based on advance equity, interest rate, and other factors. </p>
                                    </div>
                                    <div>
                                        <h4 className='text-[14px] text-[#420075] font-[600] py-[5px]'>Personal Loan Calculator</h4>
                                        <p className='text-sm py-[5px]'>The personal loan calculator allows you to find the amount that needs to be paid against the unsecured personal loan you are looking forward to borrowing. This tool is a perfect companion for individuals to make wise financial decisions, as they can easily figure out the amount they need to pay as a loan installment every month. </p>
                                    </div>
                                    <div>
                                        <h4 className='text-[14px] text-[#420075] font-[600] py-[5px]'>Student Loan Calculator</h4>
                                        <p className='text-sm py-[5px]'>You can easily calculate your degree’s funding plan through the student loan rate calculator. From the date you enter college to the date of your degree’s completion, you can calculate the entire expenses and figure out the payback amount and period after you graduate with this online calculator. </p>
                                    </div>
                                    <div>
                                        <h4 className='text-[14px] text-[#420075] font-[600] py-[5px]'>Business Loan Calculator</h4>
                                        <p className='text-sm py-[5px]'>Calculate the total payback amount and monthly payments of a business loan with the business loan amount calculator. With this calculator’s assistance, you can learn about the actual percentage rate per annum and APR for the business loan.</p>
                                    </div>
                                </div>
                                <div>
                                    <h3 className='text-[#420075] font-[600]'>Secured Vs. Unsecured Loan</h3>

                                    <div>
                                        <h4 className='text-[14px] text-[#420075] font-[600] py-[5px]'>Secured Loan:</h4>
                                        <p className='text-sm py-[5px]'>A secured loan is a type of loan in which a borrower provides an asset as collateral to the lender. The mortgage loan and the auto loan are generally considered secured loans.</p>
                                    </div>
                                    <div>
                                        <h4 className='text-[14px] text-[#420075] font-[600] py-[5px]'>Unsecured Loan: </h4>
                                        <p className='text-sm py-[5px]'>An unsecured loan is borrowed without providing an asset as collateral. In this type of loan, the lender considers the borrower's financials and makes the decision after assessing their capacity to repay the loan.</p>
                                    </div>
                                </div>
                                <div>
                                    <h3 className='text-[#420075] font-[600] py-[5px]'>FAQs</h3>
                                    <div>
                                        <h4 className='text-[14px] text-[#420075] font-[600] py-[5px]'>What’s a Good Interest Rate on a Personal Loan?</h4>
                                        <p className='text-sm py-[5px]'>A good interest rate on a personal loan varies from economy to economy, as the economic conditions aren’t the same all around the globe. Generally, the interest rate is considered good if it’s below the current national average. </p>
                                    </div>
                                    <div>
                                        <h4 className='text-[14px] text-[#420075] font-[600] py-[5px]'>Where is the Best Place to Get a Personal Loan? </h4>
                                        <p className='text-sm py-[5px]'>The best places to get a personal loan are:</p>
                                    </div>
                                    <ul className='list-disc ml-[40px]'>
                                        <li className='text-sm py-[2.5px]'>Online lenders</li>
                                        <li className='text-sm py-[2.5px]'>Peer-to-peer lenders</li>
                                        <li className='text-sm py-[2.5px]'>Credit unions</li>
                                        <li className='text-sm py-[2.5px]'>banks </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className='text-[#420075] font-[600] py-[5px]'>What Factors Affect the Interest Rate on a Loan?</h3>
                                    <p className='text-sm py-[5px]'>The type of loan can greatly affect the interest rate on it. Secured loans generally have lower interest rates. The overall interest rate environment in an economy also affects the interest rate on loans. In addition, the credit score of a borrower is also a decisive factor in this matter, as the riskier loanee has to pay a higher interest rate and vice versa. </p>
                                </div>
                                <div>
                                    <h3 className='text-[#420075] font-[600] py-[5px]'>What is the Best Way to Determine How Much Loan I Can Afford?</h3>
                                    <p className='text-sm py-[5px]'>The loan calculator is the best way to determine the amount of loan you can afford. You can submit the number of monthly payments you can make, interest rate, and total tenure for the loan to figure out how much loan you can afford.</p>
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

export default LoanCalculator