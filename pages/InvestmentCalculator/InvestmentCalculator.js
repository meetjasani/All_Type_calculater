import Footer from '@/Components/Footer/Footer'
import Header from '@/Components/Header/Header'
import React from 'react'

function InvestmentCalculator() {
  return (
    <>
      <Header />
      <div className="h-[98px] my-[20px] bg-[#80808014] max-w-[700px] m-auto"></div>
      <div className='mainbg max-w-[1260px] m-auto px-[15px] py-[10px]'>
        <div>
          <div className='text-center'>
            <h1 className='text-[16px] sm:text-[22px] text-[#420075] md:text-2xl font-bold mb-[10px]'>Investment Calculator</h1>
            <p className='text-sm md:w-[70%] w-[100%] mx-auto font-normal'>The investment calculator estimates how much your investments grow by considering the impact of the initial deposit, contribution, return rate, and time. Calculate investment growth right now!</p>
          </div>
          <div className='flex bg-[#80808014] max-w-[700px] m-auto items-center my-[20px] min-h-[250px]'>
            <div></div>
            <div></div>
          </div>
          <div className='card py-[20px]  mb-7  max-w-[700px] m-auto md:p-[48px] p-[24px]'>
            <div>
              <div>
                <label htmlFor="" className='text-sm'>Starting Amount($)</label>
              </div>
              <input type="number" className='border border-[#ccc] mt-[5px] md:w-[300px] w-[100%] py-2 outline-none' />
            </div>
            <div className='md:flex block gap-[10px] items-end'>
              <div className='mt-[10px]'>
                <div>
                  <label htmlFor="" className='text-sm py-[5px]'>Additional Contribution($)</label>
                </div>
                <input type="number" className='border border-[#ccc] px-2 mt-[5px] w-[100%] py-2 outline-none' />
              </div>
              <div className='mt-[10px]'>
                <div>
                  <label htmlFor="" className='text-sm py-[5px]'>Compound</label>
                </div>
                <input type="number" className='border border-[#ccc] px-2 mt-[5px] w-[100%] py-2 outline-none' />
              </div>
              <div className='mt-[10px]'>
                <div>
                  <label htmlFor="" className='text-sm py-[5px]'>Rate of Return (%)</label>
                </div>
                <input type="number" className='border border-[#ccc] px-2 mt-[5px] w-[100%] py-2 outline-none' />
              </div>
              <div className='mt-[10px]'>
                <div>
                  <label htmlFor="" className='text-sm py-[5px]'>Years to Grow</label>
                </div>
                <input type="number" className='border border-[#ccc] px-2 w-[100%] mt-[5px] py-2 outline-none' />
              </div>
            </div>
            <div className='h-[98px] my-[20px] bg-[#80808014] max-w-[700px] m-auto'></div>
            <div className='flex justify-center gap-3 flex-wrap'>
              <button className='btnlogin text-white py-[10px] my-0 px-[10px] sm:px-[40px] md:my-[20px]'>Calculate Investment</button>
              <button className='btnlogin text-white py-[10px] my-0 px-[10px] sm:px-[40px] md:my-[20px]'>Reset</button>
            </div>
            <div className='flex bg-[#80808014] max-w-[700px] m-auto items-center my-[20px] min-h-[250px]'></div>
            <div>
              <h6 className='text-[#420057] text-[20px] text-center font-bold'>Result</h6>
              <div className='overflow-auto mt-[20px]'>
                <table className='md:overflow-visible overflow-scroll'>
                  <thead>
                    <tr>
                      <th className='text-[14px] font-normal bg-[#F6F8FA] py-[10px] px-[8px] border border-[#ccc]'>Year</th>
                      <th className='text-[14px] font-normal bg-[#F6F8FA] py-[10px] px-[8px] border border-[#ccc]'>Starting Amount</th>
                      <th className='text-[14px] font-normal bg-[#F6F8FA] py-[10px] px-[8px] border border-[#ccc]'>Annual Contribution	</th>
                      <th className='text-[14px] font-normal bg-[#F6F8FA] py-[10px] px-[8px] border border-[#ccc]'>Total Contribution	</th>
                      <th className='text-[14px] font-normal bg-[#F6F8FA] py-[10px] px-[8px] border border-[#ccc]'>Interest Earned	</th>
                      <th className='text-[14px] font-normal bg-[#F6F8FA] py-[10px] px-[8px] border border-[#ccc]'>Total Interest Earned	</th>
                      <th className='text-[14px] font-normal bg-[#F6F8FA] py-[10px] px-[8px] border border-[#ccc]'>End Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='text-center border border-[#ccc] py-[10px] px-[8px]'>2023</td>
                      <td className='text-center border border-[#ccc] py-[10px] px-[8px]'>$3</td>
                      <td className='text-center border border-[#ccc] py-[10px] px-[8px]'>$3</td>
                      <td className='text-center border border-[#ccc] py-[10px] px-[8px]'>$3</td>
                      <td className='text-center border border-[#ccc] py-[10px] px-[8px]'>$0</td>
                      <td className='text-center border border-[#ccc] py-[10px] px-[8px]'>$0</td>
                      <td className='text-center border border-[#ccc] py-[10px] px-[8px]'>$6</td>
                    </tr>
                    <tr>
                      <td className='text-center border border-[#ccc] py-[10px] px-[8px]'>2023</td>
                      <td className='text-center border border-[#ccc] py-[10px] px-[8px]'>$3</td>
                      <td className='text-center border border-[#ccc] py-[10px] px-[8px]'>$3</td>
                      <td className='text-center border border-[#ccc] py-[10px] px-[8px]'>$6</td>
                      <td className='text-center border border-[#ccc] py-[10px] px-[8px]'>$0</td>
                      <td className='text-center border border-[#ccc] py-[10px] px-[8px]'>$0</td>
                      <td className='text-center border border-[#ccc] py-[10px] px-[8px]'>$9</td>
                    </tr>
                    <tr>
                      <td className='text-center border border-[#ccc] py-[10px] px-[8px]'>2023</td>
                      <td className='text-center border border-[#ccc] py-[10px] px-[8px]'>$3</td>
                      <td className='text-center border border-[#ccc] py-[10px] px-[8px]'>$3</td>
                      <td className='text-center border border-[#ccc] py-[10px] px-[8px]'>$9</td>
                      <td className='text-center border border-[#ccc] py-[10px] px-[8px]'>$0</td>
                      <td className='text-center border border-[#ccc] py-[10px] px-[8px]'>$1</td>
                      <td className='text-center border border-[#ccc] py-[10px] px-[8px]'>$13</td>
                    </tr>
                  </tbody>
                </table>
                <div className='text-center'>
                  <button className='btnlogin text-white py-[10px] my-0 px-[10px] sm:px-[40px] md:my-[20px]'>Recalculate</button>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full lg:w-[900px] mt-[15px] m-auto'>
            <div className='card p-[15px] mb-[15px] bg-white border rounded-lg'>
              <h3>About Investment Calculator</h3>
              <p>How much are you expecting to gain against investing a certain amount? If you want to ensure that your investment goals are met, then you must make the entire evaluation through an investment calculator. This tool is equally helpful for beginners and experienced investors, as they can use it to figure out how much their starting investment will grow after a specific time. The investment growth calculator helps you analyze how much your initial investment will accumulate after evaluating your entered interest rate and any additional contribution you’re planning to make. It’s a free-of-cost tool that offers all investors an easy and accurate way to calculate investment return in no time. </p>
              <div>
                <h3>Terms involved in Investment</h3>
                <p>You need to understand the terms involved in investment, as without having a clear idea, you’ll be reluctant to take the first step in this journey. Here are the terminologies that you must have a clear idea of before you make any investment.</p>
                <div className=''>
                  <div>
                    <h4> Starting Amount</h4>
                    <p>The starting amount is the initial money you are looking forward to investing. It’s the actual risk that you are willing to take to grow your saved money. Whether your starting amount is big or small, this free investment calculator doesn’t have an issue, as it just focuses on delivering precise results to all users.</p>
                  </div>
                  <div>
                    <h4>Contributions</h4>
                    <p>Contributions are the additional sums of money you add up to your investment over time. Our investment growth calculator takes this factor into account, as it is a critical element that influences the growth of your investment.</p>
                  </div>
                  <div>
                    <h4>Rate of Return on Investment</h4>
                    <p>The rate of return or interest rate is the profit you expect to earn on your investment. It is expressed in terms of percentage. The rate of return calculator shows percentages to reach the target.</p>
                  </div>
                  <div>
                    <h4>Years to Accumulate</h4>
                    <p>The years to accumulate is the time for which you are willing to store your investment and expect it to grow. During this time, you don’t withdraw your initial investment or sell it.</p>
                  </div>
                  <div>
                    <h4>End Amount</h4>
                    <p>The end amount is the accumulated money you will have after the completion of your decided investment length. The investment calculator helps you calculate investment growth after considering your rate of return and additional contributions.</p>
                  </div>
                </div>
              </div>
              <div className=''>
                <h3>How to Use the Investment Calculator?</h3>
                <p>The process of using the investment return calculator on this platform doesn’t involve any intricate procedures. The following steps can allow you to calculate investment return: </p>
                <div>
                  <ul>
                    <li className='text-sm py-[5px]'>1.  Access the online investment calculator.</li>
                    <li className='text-sm py-[5px]'>2. Enter starting amount, years to accumulate, additional contribution, and interest rate in the given fields.</li>
                    <li className='text-sm py-[5px]'>3. Click the Calculate Investment button to initiate the process.</li>
                    <li className='text-sm py-[5px]'>4. Instantly get to know how much your investment will be worth instantaneously.</li>
                  </ul>
                </div>
              </div>
              <div className=''>
                <h3>How Investing Works?</h3>
                <p>Investing refers to using the surplus money you have besides your expenses and putting it to grow for you. If you make smart investing decisions, your investment can result in modest profits that can transform into larger nest eggs over time.</p>
                <p>In an economy, individuals have multiple choices for making investments. Stocks and bonds are the most popular among different types of investments. The money you invest in stocks or bonds is used by companies or governments, respectively.</p>
                <p>In return for this investment, you can earn compound interest. People usually make investments to achieve future aims and objectives. It can be a long-term investment to buy a house or accumulate reserves to support the education of a kid.</p>
              </div>
              <div>
                <h3>Different Types of Investments</h3>
                <p>Our investment calculator can be used for any investment opportunity. Let’s take you through various investment opportunities to help you achieve your goals.</p>
                <div>
                  <h4>CDs</h4>
                  <p>The CD is the abbreviation for Certificate of Deposit, and it is a kind of savings account where an investor keeps an amount for a certain period and earns a fixed interest rate. When investors redeem the certificates of deposit, they get back their original amount plus the interest they earned.</p>
                </div>
                <div>
                  <h4>Bonds</h4>
                  <p>The bonds are issued by companies and governments to investors to raise money. If you purchase a bond, the amount you’ve paid for it will be considered a loan amount to the bond issuer. The value of the bond is returned to individuals on a specific date. During this time, you’ll receive a fixed interest against your investment. Due to the backing of the government, bonds are considered safe and gain the attention of many investors.</p>
                </div>
                <div>
                  <h4>Stocks</h4>
                  <p>Stocks, also known as shares, are listed on the stock market in which a company offers part ownership to the general public. It’s a popular form of capital-raising tactic for growing a company. For investing in stocks, you should know the stock market and how the companies are performing in it. Various factors need to be considered for investing in stocks so that you make investments in the companies that will grow, and their share price will also increase. In return for investing in stocks, the shareholders receive a dividend. However, if a company doesn’t make a profit, the dividend won’t be paid.</p>
                </div>
                <div>
                  <h4>Real Estate</h4>
                  <p>Investment in real estate can be made in various forms. Purchasing and renting houses out is a popular type of real estate investing. An investor purchases a property and rents it out; the received rent is actually the profit being made against this investment. </p>
                </div>
                <div>
                  <h4>Commodities</h4>
                  <p>The raw material and agricultural products are called commodities. You can make your investment in a commodity fund to trade these resources. The principles of demand and supply drive the commodity market. The most popular form of commodities bought and sold to earn profit include precious metals, such as gold and silver.</p>
                </div>
                <div>
                  <h4>Mutual Funds</h4>
                  <p>Mutual funds are a type of investment in which different investors are authorized to pool their money and invest in something together. They are professionally managed investment portfolios that take multiple investors to purchase securities collectively. Different types of mutual funds including equity mutual funds, asset allocation mutual funds, commodity mutual funds, target date mutual funds, and many more can be calculated using our investment calculator. </p>
                </div>
                <div>
                  <h3>Rate of Return on Investment</h3>
                  <p>How much profit you’re going to make against the investment you’re making? This is the first question that arises in the minds of investors, as they wish to make a wise decision and gain maximum benefit from their investments. Our investment growth calculator also considers this factor in helping you find how much your investment will be worth in the forthcoming years. If you look at the average rate of return on investing in the stock market, it’s 10%. The condition of the stock market can drastically change; hence, the rate of return can vary significantly each year. Similarly, the other types of investments come with different rates of return. It’s up to you how much risk you are willing to take and what kind of investment is suitable for you.</p>
                </div>
                <div>
                  <h3>FAQs</h3>
                  <div>
                    <h4> How Accurate is the Investment Calculator?</h4>
                    <p>The calculation of the annual return for your investment with SmallSEOTools’ investment calculator is 100% accurate. However, submit wrong details about the initial amount, contribution, interest rate, or the number of years you’re investing for. The results won’t be justifiable with your actual investment. That’s why you must enter the right details to calculate investment growth accurately.</p>
                  </div>
                  <div>
                    <h4>How Do I Get Started with Investing?</h4>
                    <p>You’ll keep having second thoughts about considering investing in a good option until the day you start. It’s not an easy decision to put your hard-earned money at stake and expect it to grow over time. Therefore, you must use the right tools, like an investment return calculator, and consider multiple investment options to choose the right type of investment you’re ready to make.</p>
                  </div>
                  <div>
                    <h4>What is a Good Rate of Return?</h4>
                    <p>Generally, investors consider stocks offering more than a 10% rate of return as a good rate of return. Arguably, several investors even find a 5-7% rate of return good due to the overall liquidity and reputation of the company. Use the rate of return calculator for an estimated rate of return and investment length.</p>
                  </div>
                  <div>
                    <h4>How Do I Calculate What My Initial Investment Will be in a Few Years?</h4>
                    <p>The free investment calculator on SmallSEOTools can allow you to calculate how much your initial investment will be in a few years. With the assistance of this online tool, you can figure out how much you can accumulate by investing a certain amount. This calculator takes multiple factors into include for the calculation of your investment growth, which includes the initial amount, additional contribution, rate of interest, and the number of years for which you are investing.</p>
                  </div>
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

export default InvestmentCalculator  