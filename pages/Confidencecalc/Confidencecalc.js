import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Footer from '@/Components/Footer/Footer'
import Header from '@/Components/Header/Header'

const Confidencecalc = () => {
    const [mean, setMean] = useState('')
    const [size, setSize] = useState('')
    const [deviation, setDeviation] = useState('')
    const [zScores, setZscore] = useState([
        {cl: "99.9", zScore: 3.290527},
        {cl: "95.5",zScore: 2.807034},
        {cl: "99",zScore: 2.575829},
        {cl: "95",zScore: 1.959964},
        {cl: "90",zScore: 1.644854},
        {cl: "85",zScore: 1.439531},
        {cl: "80",zScore: 1.281551},
        {cl: "75",zScore: 1.15035},
        {cl: "70",zScore: 1.036433},
        {cl: "65",zScore: 0.934589},
        {cl: "60",zScore: 0.841621},
        {cl: "55",zScore: 0.755415},
        {cl: "50",zScore: 0.67449},
    ])
    const [selectedOption, setSelectedOption] = useState(zScores[0])

    const [marginError, setMarginError] = useState()
    const [upperBound, setUpperBound] = useState()
    const [lowerBound, setLowerBound] = useState()
    const [outputMean, setOutputMean] = useState()
    const [outputCl, setOutputCl] = useState()
    const[open, setOpen] = useState(false)

    const handleConfidence = () => {
        if(mean === '' || size === '' || deviation === ''){
            toast.error('Please Fill all Fields!.')
        }else{
            setOpen(true)
            const averages = selectedOption.zScore * (deviation /Math.sqrt(size))
            const lBound  = mean - averages
            const Bound = parseFloat(averages) + parseFloat(mean)
            setMarginError(averages.toFixed(2))
            setUpperBound(Bound.toFixed(4))
            setLowerBound(lBound.toFixed(4))
            setOutputMean(mean)
            setOutputCl(selectedOption.cl)
        }
    }
    const handleChange = (e) => {
        const selectedZScore = zScores.find(({ cl }) => cl === e.target.value)?.zScore;
        setSelectedOption({ cl: e.target.value, zScore: selectedZScore });
    }
    const handleReset = () => {
        setOpen(false)
        setMean('')
        setSize('')
        setDeviation('')
    }
    return (
        <>
            <Header />
            <ToastContainer theme="colored"/>
            <div className="h-[98px] my-[20px] bg-[#80808014] max-w-[700px] m-auto"></div>
            <div className='mainbg max-w-[1260px] m-auto px-[15px] py-[10px]'>
                <div className=''>
                    <div className='text-center'>
                        <h1 className='text-[16px] sm:text-[22px] text-[#420075] md:text-2xl font-bold mb-[10px]'>Confidence Interval Calculator</h1>
                    </div>
                    <div className='flex bg-[#80808014] max-w-[700px] m-auto items-center my-[20px] min-h-[250px]'>
                        <div></div>
                        <div></div>
                    </div>
                    <div className='max-w-[350px] m-auto'>
                        <div>
                            <div className='mb-[15px]'>
                                <p className='mb-[10px]'>Sample Mean (x)</p>
                                <input type="number" className='w-full h-[40px] border border-[#ccc] focus:outline-0 px-4' 
                                    value={mean} 
                                    onChange={(e) => setMean(e.target.value)}
                                />
                            </div>
                            <div className='mb-[15px]'>
                                <p>Sample Size (n)</p>
                                <input type="number" className='w-full h-[40px] border border-[#ccc] focus:outline-0 px-4' 
                                    value={size} 
                                    onChange={(e) => setSize(e.target.value)}
                                />
                            </div>
                            <div className='mb-[15px]'>
                                <p>Standard Deviation (s)</p>
                                <input type="number" className='w-full h-[40px] border border-[#ccc] focus:outline-0 px-4' 
                                    value={deviation} 
                                    onChange={(e) => setDeviation(e.target.value)}
                                />
                            </div>
                            <div className='mb-[15px] gap-3 flex items-center'>
                                <div className='w-[50%]'>
                                    <p>Confidence Level</p>
                                    <select value={selectedOption.cl} className='w-full border-[1px] border-[#ccc] h-[40px] focus:outline-0 p-[10px]' onChange={(e) => handleChange(e)}>
                                    {
                                        zScores.map(({ cl, zScore }) => (
                                            <option key={cl} value={cl}>{cl}%</option>
                                        ))
                                    }
                                    </select>
                                </div>
                                <div className='w-[50%]'>
                                    <p>or Z-score (Z)</p>
                                    <input type="number" readOnly className='w-full h-[40px] border border-[#ccc] focus:outline-0 px-4' 
                                        value={selectedOption.zScore}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-[98px] my-[20px] bg-[#80808014] max-w-[700px] m-auto"></div>
                    <div className='flex justify-center gap-3'>
                        <button className='btnlogin text-white py-[10px] px-[10px] sm:px-[40px] my-[20px]' onClick={handleConfidence}>Calculate</button>
                        <button className='btnlogin text-white py-[10px] px-[10px] sm:px-[40px] my-[20px]' onClick={handleReset}>Reset</button>
                    </div>
                    <div className='flex bg-[#80808014] max-w-[700px] m-auto items-center my-[20px] min-h-[250px]'>
                        <div></div>
                        <div></div>
                    </div>
                   { open ? 
                        <div className='w-full lg:w-[900px] mt-[15px] m-auto'>
                            <h3 className='text-center text-[24px] pt-[20px] text-[#420075] font-[600]'>Result</h3>
                            <div className='md:flex block w-[100%] gap-[20px] my-[40px]'>
                                <div className='bg-[#F6F8FA] border border-[#ccc]  md:w-[36%] w-[100%] p-[20px]'>
                                    <h5 className='font-[600] px-[40px] text-center mx-auto'>x = {outputMean}, {outputCl}% CI [{lowerBound} , {upperBound}]</h5>
                                    <p className='text-sm text-center py-[10px]'>You can be 99.9% confident that the population mean (μ) falls between {lowerBound} and {upperBound}.</p>
                                </div>
                                <div className='md:w-[70%] w-[100%] md:mt-0 mt-[20px]'>
                                <div className='flex border border-[#ccc]'>
                                    <p className='w-[300px] px-[16px] py-[8px] items-center h-[59px] border-r border-[#ccc] flex bg-[#F6F8FA]'>Lower Bound</p>
                                    <p className=' px-[16px] py-[8px] h-[59px] flex items-center w-[100%]'>{!isNaN(parseFloat(lowerBound).toFixed(2)) && parseFloat(lowerBound).toFixed(2)}</p>
                                </div>
                                <div className='flex border border-[#ccc]'>
                                    <p className='w-[300px] px-[16px] py-[8px] items-center h-[59px] border-r border-[#ccc] flex bg-[#F6F8FA]'>Upper Bound</p>
                                    <p className=' px-[16px] py-[8px] h-[59px] flex items-center w-[100%]'>{!isNaN(parseFloat(upperBound).toFixed(2)) && parseFloat(upperBound).toFixed(2)}</p>
                                </div>
                                <div className='flex border border-[#ccc]'>
                                    <p className='w-[300px] px-[16px] py-[8px] items-center h-[59px] border-r border-[#ccc] flex bg-[#F6F8FA]'>Margin of Error (E)</p>
                                    <p className=' px-[16px] py-[8px] h-[59px] flex items-center w-[100%]'>{!isNaN(marginError) && marginError}</p>
                                </div>
                            </div>
                        </div>
                    </div> : <></>}
                </div>
                <div className='w-full lg:w-[900px] mt-[15px] m-auto'>
                    <div>
                        <div className='card p-[15px] mb-[15px] bg-white border rounded-lg'>
                            <div>
                                <h3>What Is Confidence Interval?</h3>
                                <p>A confidence interval is a range of values that measure the level of certainty or uncertainty after conducting analysis on a sampling method with an anticipated confidence level. Any number of probabilities can be taken by a confidence interval. Basically, the confidence interval computes the range of values that would likely comprise an unknown population parameter.</p>
                                <p>For instance, a researcher chooses different samples from the same population and find varying results in each of them. As the results are different, some intervals wouldn’t contain true parameters, while others will. Confidence interval might be a trickier topic to understand due to the complexities involved in it. And solving confidence interval problems is an even more daunting issue. But there’s no need to worry anymore, as you have free access to the confidence interval calculator on SmallSEOTools.</p>
                            </div>
                            <div>
                                <h3>How Is The Confidence Interval Calculated?</h3>
                                <p>It’s important for a person to grasp a good knowledge of solving mathematical problems to manually calculate the confidence interval. You cannot perform the calculation directly on a calculator, as the formula involves several components; hence, you’ll need a pen and paper to note it down. This tedious and time-consuming task can make you frustrated, as the chances of ending up with incorrect results, in the end, are very high. The formula to calculate the confidence interval is:</p>
                                <p className='font-[600]'></p>
                                <p>The symbols in this formula represent the following components</p>
                                <p>X = Mean</p>
                                <p>Z = Z score from the table (given below)</p>
                                <p>S = Standard deviation</p>
                                <p>n = Sample size</p>
                            </div>
                            <div>
                                <h3>How To Use A Confidence Interval Calculator?</h3>
                                <p>You don’t have to learn and work with the confidence interval formula anymore, as the confidence interval calculator is here for your rescue. You don’t have to make an account on our website for calculating confidence interval, as you can start using our tool as soon as you access it. There is no need to worry about paying a penny, as our confidence interval calculator is a free of cost web-based service. By following the steps mentioned below, you can easily calculate the confidence interval for the population mean in a matter of instance.</p>
                                <div>
                                    <ul className='list-disc ml-[40px]'>
                                        <li className='text-sm py-[2.5px]'>Firstly, you need to enter the relevant values in the given boxes, which include mean (X), standard deviation (s), and sample size (n).</li>
                                        <li className='text-sm py-[2.5px]'>After entering these values, click on the confidence level drop-down list and select a confidence level for the problem you are solving. The confidence level calculator provides a different confidence level.</li>
                                        <li className='text-sm py-[2.5px]'>Lastly, hit the calculate button to make the confidence interval calculator process your entered values.</li>
                                        <li className='text-sm py-[2.5px]'>This smart tool will take a couple of seconds and display results on your screen. </li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <h3>Factors That Affect Confidence Intervals</h3>
                                <p>The width of a confidence interval could be either narrow or wide. If we look at the confidence interval formula, we can see several factors that can impact the confidence intervals. It’s vital to have narrower confidence intervals as you can gain more information about a population parameter with it. Let’s look into some factors that affect a confidence interval inversely or directly.</p>
                                <div>
                                    <h4>Size of Sample</h4>
                                    <p>In the confidence interval formula, the size of the sample is represented with n. The sample size works indirectly with a confidence interval; as the size of the sample increases, the confidence interval decreases, and vice. However, all of the other values should remain the same. A bigger sample size generates more reliable results as it has more information about a population parameter.</p>
                                </div>
                                <div>
                                    <h4>Confidence Level</h4>
                                    <p>The confidence interval increases as the confidence level are increased while all of the other factors are fixed. It’s essential to reduce the margin of error, and that’s only possible by improving the quality of data and using a higher confidence level.</p>
                                </div>
                                <div>
                                    <h4>Standard Deviation</h4>
                                    <p>The formula mentioned above shows that the standard deviation is denoted with S to calculate the confidence interval. The width of the confidence interval increases with the increase in standard deviation. Standard deviation is difficult to estimate but with the population mean calculator, it becomes possible to estimate. The population estimation becomes difficult because large amounts of data aren't existing, but the standard deviation is high.</p>
                                </div>
                            </div>
                            <div>
                                <h3>How Do I Calculate The 95% Confidence Interval?</h3>
                                <p>If you wish to calculate a 95% confidence interval, you would need other data, such as mean, standard deviation, and sample size. Let’s look into an example for solving 95% of a confidence interval manually. 95 confidence interval formula</p>
                            </div>
                            <div>
                                <h3>Example:</h3>
                                <p>Mean (X) = 160</p>
                                <p>Confidence level = 95%</p>
                                <p>Standard deviation = 15</p>
                                <p>Sample size (n) = 40</p>
                                <p>Z score for 95% confidence level (from the Z-score table) = 1.960</p>
                                <p>Now, as we have all the information that’s required to calculate the confidence interval, let’s put these values in the confidence interval formula.</p>
                                <p>95 confidence interval formula: =X ± ZS√n</p>
                                <p>= 160 ± 1.960 15√40</p>
                                <p>= 160 ± 4.6485</p>
                                <p>The 95% confidence interval for this example is between 61.5 and 68.5. You can see that this whole calculation required time and the use of a calculator is a must to obtain accurate results. The easy way for it to use a 95% confidence interval calculator. Which is on the other hand, if you opt to use the automated 95 confidence interval calculator on our site, you’d just need to enter the values in the given boxes, and results will be in front of you within no time.</p>
                            </div>
                            <div>
                                <h3>What Are Different Levels Of Confidence?</h3>
                                <p>A confidence level is the percentage of the total population within which the true population parameter is expected to exist. The 95% confidence level indicates that 95% of the confidence intervals would include the true population parameter, and similar is for the other confidence levels. Each confidence level has a Z score value. Look at them in the table given below.</p>
                            </div>
                            <div className='pb-[40px]'>
                                <p className='text-[#420075] font-[600]'>Z Score Table</p>
                                <table className=" mt-[20px] table-auto w-[100%] border-[1px] text-sm Conversion_table border-[#ccc]">
                                    <thead>
                                        <tr>
                                            <th className='text-start text-[#212529] text-[14px]'>Confidence Level	</th>
                                            <th className='text-start text-[#212529] text-[14px]'>Z</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>80%</td>
                                            <td>1.282
                                            </td>

                                        </tr>
                                        <tr>
                                            <td>85%	</td>
                                            <td>1.440
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>90%	</td>
                                            <td>1.645
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>95%	</td>
                                            <td>1.960
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>99%	</td>
                                            <td>2.576
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>99.5%	</td>
                                            <td>2.807</td>
                                        </tr>
                                        <tr>
                                            <td>99.9%	</td>
                                            <td>3.291</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Confidencecalc