import Header from '@/Components/Header/Header'
import React, { useState } from 'react'
import Image from 'next/image'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import error from '../../Assets/Images/bmi-indicater.svg'
import graph from '../../Assets/Images/bmi-graph.webp'
import Footer from '@/Components/Footer/Footer'

const Bicalc = () => {
    const [tab1, setTab1] = useState('adult')
    const [selectGender, setSelectGender] = useState('male')
    const [selectHeight, setSelectHeight] = useState('ft/in')
    const [selectWeight, setSelectWeight] = useState('lbs')
    const [heightFt, setHeightFt] = useState('')
    const [heightIn, setHeightIn] = useState('0')
    const [weightIn, setWeightIn] = useState('')
    const [bmi, setBmi] = useState()
    const [kgBmi, setKgBmi] = useState()
    const [result, setResult] = useState()
    const [result2, setResult2] = useState()
    const [age, setAge] = useState('')
    const [open, setOpen] = useState(false)

    const handleBmi = () => {
        if(heightFt === ''){
            toast.error('The height feets field is required when height cm is not present.')
        }else if(heightIn === ''){
            toast.error('The height inches must be a number.')
        }else if(weightIn === ''){
            toast.error('Weight field is required.')
        }else {
            setOpen(true)
            let height  = parseFloat(heightFt *12)+ parseFloat(heightIn)
            let heightM = heightFt/100
            if(selectWeight === 'kg' && selectHeight === 'cm'){
                setKgBmi((weightIn / Math.pow(heightM, 2)).toFixed(2))
            } else if(selectWeight === 'kg' && selectHeight === 'ft/in'){
                const weight = weightIn * 2.205
                setResult(((weight / Math.pow(height, 2))*703).toFixed(2))
            } else if(selectWeight === 'lbs' && selectHeight === 'cm'){
                const heightM = heightFt/100
                const inch = heightM * 39.37
                setResult2(((weightIn / Math.pow(inch, 2))*703).toFixed(2))
            } else (
                setBmi(((weightIn / Math.pow(height, 2))*703).toFixed(2))
            )
        }
    }
    const handleReset = () => {
        setOpen(false)
        if(tab1 === 'child'){
            setAge('')
        }
        setHeightFt('')
        setHeightIn('0')
        setWeightIn('')
        setSelectHeight('ft/in')
        setSelectWeight('lbs')
    }
    return (
        <>
            <Header />
            <ToastContainer theme="colored"/>
            <div className="h-[98px] my-[20px] bg-[#80808014] max-w-[700px] m-auto"></div>
            <div className='text-center'>
                <h3 className='font-[600] text-[24px] text-[#420075]'>BMI Calculator</h3>
                <p className='text-[sm] md:w-[50%] py-[10px] w-[100%] px-[10px] mx-auto'>BMI Calculator calculates BMI for adults based on entering some of your information, including gender, height, and weight, to determine your height to weight ratio.</p>
            </div>
            <div className='flex bg-[#80808014] max-w-[700px] m-auto items-center my-[20px] min-h-[250px]'></div>
            <div className='my-[10px] justify-center flex gap-[20px]'>
                <button onClick={() => setTab1('adult')} className={tab1 === 'adult' ? 'bg-[#420075] text-[#fff] px-[40px] h-[48px] rounded-md' : 'border border-[#ccc] px-[40px] h-[48px]'}>Adults</button>
                <button onClick={() => setTab1('child')} className={tab1 === 'child' ? 'bg-[#420075] text-[#fff] px-[40px] h-[48px] rounded-md' : 'border border-[#ccc] px-[40px] h-[48px]'}>Child & Teen</button>
            </div>
            <div className='bg-[#F6F8FA] w-full lg:w-[900px] mt-[15px] m-auto py-[24px] md:px-[48px] px-[24px]'>
                <div className='my-[20px] items-center md:flex block gap-[30px]'>
                    <div>
                        <div>
                            <label className='text-sm font-[600]' htmlFor="">Gender</label>
                        </div>
                        <select className='border border-[#ccc] my-5 md:w-[200px] w-[100%] md:my-0  h-[42px]' 
                            value={selectGender}
                            onChange={(e) => setSelectGender(e.target.value)}
                        >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    {tab1 === 'child' &&
                        <div className=''>
                            <div>
                                <label className='text-sm font-[600]' htmlFor="">Age (2 to 20 years)</label>
                            </div>
                            <input type="number" placeholder='2' min='2' maxlength='20' className=' indent-2 outline-none placeholder:text-[14px] w-[100%] h-[42px] border border-[#ccc]' 
                                value={age}
                                onChange={e => setAge(e.target.value)}
                            />
                        </div>
                    }
                </div>

                <div className='md:flex block w-[100%] items-end my-[20px] gap-[20px]'>
                    <div className='w-[100%] md:my-0 my-5'>
                        <div>
                            <label className='text-sm font-[600]' htmlFor="">Height {selectHeight !== 'cm' ? '(ft)' : '(cm)'}</label>
                        </div>
                        <input type="number" className=' indent-2 outline-none placeholder:text-[14px] w-[100%] h-[42px] border border-[#ccc]' 
                            placeholder={selectHeight !== 'cm' ? '5' : '75'}
                            onChange={(e) => setHeightFt(e.target.value)} 
                            value={heightFt}
                        />
                    </div>
                    {
                        selectHeight !== 'cm' && 
                        <div className='w-[100%] md:my-0 my-5'>
                            <div>
                                <label className='text-sm font-[600]' htmlFor="">Height (in)</label>
                            </div>
                            <input type="number" className=' indent-2 outline-none placeholder:text-[14px] w-[100%] h-[42px] border border-[#ccc]' 
                                onChange={(e) => setHeightIn(e.target.value)} 
                                value={heightIn}
                            />
                        </div>
                    }
                    <div className='w-[100%] md:my-0 my-5'>
                        <div>
                            <label className='text-sm font-[600]' htmlFor=""></label>
                        </div>
                        <select className='border border-[#ccc] outline-none text-[14px] md:w-[200px] w-full h-[42px]'
                            onChange={(e) => setSelectHeight(e.target.value)}
                            value={selectHeight}
                        >
                            <option value="ft/in">ft/in</option>
                            <option value="cm">cm</option>
                        </select>
                    </div>
                </div>
                <div className='sm:flex w-[100%] block items-end my-[20px] gap-[20px]'>
                    <div className='w-[100%]'>
                        <div>
                            <label className='text-sm font-[600]' htmlFor="">Weight (in)</label>
                        </div>
                        <input type="number" placeholder='143' className='w-[100%] indent-2 outline-none placeholder:text-[14px] h-[42px] border border-[#ccc]' 
                            onChange={(e) => setWeightIn(e.target.value)} 
                            value={weightIn}
                        />
                    </div>
                    <div className='w-[100%] md:my-0 my-5'>
                        <select className='border border-[#ccc] outline-none text-[14px] md:w-[200px] w-full h-[42px]'
                            onChange={(e) => setSelectWeight(e.target.value)} 
                            value={selectWeight}
                        >
                            <option value="lbs">lbs</option>
                            <option value="kg">kg</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className=' w-full lg:w-[900px] mt-[15px] m-auto'>
                <div className='flex justify-center gap-3'>
                    <button className='btnlogin text-white py-[10px] px-[10px] sm:px-[40px] my-[20px]' onClick={handleBmi}>Calculate BMI</button>
                    <button className='btnlogin text-white py-[10px] px-[10px] sm:px-[40px] my-[20px]' onClick={handleReset}>Reset</button>
                </div>
            </div>
            <div className='flex bg-[#80808014]  max-w-[700px] m-auto items-center my-[20px] min-h-[250px]'></div>
            {open && (
                <>
                    <div>
                        <h2 className='py-[10px] text-[#420075] text-[20px] text-center font-[600]'>Result</h2>
                    </div>
                    <div className='bg-[#fff] border w-full md:px-[48px] px-[24px] py-[24px] text-center lg:w-[900px] mt-[15px] m-auto border-[#ccc]'>
                        <div className='my-4 bg-[#F6F8FA] w-max py-4 px-[40px] m-auto d-flex flex-column bg_f6f8fa align-items-center clr_fff  ltvRes border1'>
                            <p className='pt-3 px-5 font-bold text-[18px]'>Your BMI</p>
                            {
                                (selectWeight === 'kg' && selectHeight === 'cm' ? <p className='pt-3 px-5 font-bold text-[50px]'>{kgBmi}</p> : 
                                (selectWeight === 'kg' && selectHeight === 'ft/in') ? <p className='pt-3 px-5 font-bold text-[50px]'>{result}</p> : 
                                (selectWeight === 'lbs' && selectHeight === 'cm') ? <p className='pt-3 px-5 font-bold text-[50px]'>{result2}</p> 
                                : <p className='pt-3 px-5 font-bold text-[50px]'>{bmi}</p>)
                            }
                        </div>
                        <div className=''>
                            <div className='md:flex block relative gap-[12px] mt-[100px] border border-[#ccc] md:p-[10px] p-[25px] rounded-[50px]'>
                                <div className='w-[100%] md:my-[0px] my-[10px] md:rounded-l-[50px] rounded-none h-[42px] bg-[#53B9CE]'>
                                    <p className='text-center items-center justify-center flex pt-[10px] text-[16px] text-white'>{'< 18.5'}</p>
                                </div>
                                <div className='w-[100%] md:my-[0px] my-[10px] h-[42px] bg-[#7EBE51]'>
                                    <p className='text-center items-center justify-center flex pt-[10px] text-[16px] text-white'>18.5 - 24.9</p>
                                </div>
                                <div className='w-[100%] md:my-[0px] my-[10px] h-[42px] bg-[#F9BB40]'>
                                    <p className='text-center items-center justify-center flex pt-[10px] text-[16px] text-white'>25 - 29.9</p>
                                </div>
                                <div className='w-[100%] md:my-[0px] my-[10px] md:rounded-r-[50px] rounded-none h-[42px] bg-[#F94E58]'>
                                    <p className='text-center items-center justify-center flex pt-[10px] text-[16px] text-white'> {'> 30.0'}</p>
                                </div>
                                {
                                    (result2 || bmi || kgBmi || result) < 18.5 ? 
                                    <div className='text-center md:my-[0px] my-[10px] justify-center absolute top-[-50px] left-[45px]'>
                                        <p className='text-[18px] font-[600]'>Underweight</p>
                                        <Image src={error} className='text-center m-auto' alt="" />
                                    </div> : ((result2 || bmi || kgBmi || result) <= 18.5 || (result2 || bmi || kgBmi || result) < 25) ? (
                                        <div className='text-center md:my-[0px] my-[10px] justify-center absolute top-[-50px] left-[276px]'>
                                            <p className='text-[18px] font-[600]'>Healthy</p>
                                            <Image src={error} className='text-center m-auto' alt="" />
                                        </div>
                                    ) : ((result2|| bmi || kgBmi || result) <= 25 || (result2|| bmi || kgBmi || result) < 30) ? (
                                        <div className='text-center md:my-[0px] my-[10px] justify-center absolute top-[-50px] left-[276px]'>
                                            <p className='text-[18px] font-[600]'>Overweight</p>
                                            <Image src={error} className='text-center m-auto' alt="" />
                                        </div>
                                    ) : (result2|| bmi || kgBmi || result) >= 30 && (
                                        <div className='text-center md:my-[0px] my-[10px] justify-center absolute top-[-50px] left-[276px]'>
                                            <p className='text-[18px] font-[600]'>Obese</p>
                                            <Image src={error} className='text-center m-auto' alt="" />
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        <div className='flex gap-[10px] flex-wrap m-[20px] justify-center'>
                            <div className='flex text-[14px] text-[#212529] font-[600] items-center gap-[10px]'><span className='w-[12px] h-[12px] bg-[#53B9CE] block rounded-md'></span>Underweight</div>
                            <div className='flex text-[14px] text-[#212529] font-[600] items-center gap-[10px]'><span className='w-[12px] h-[12px] bg-[#7EBE51] block rounded-md'></span>Underweight</div>
                            <div className='flex text-[14px] text-[#212529] font-[600] items-center gap-[10px]'><span className='w-[12px] h-[12px] bg-[#F9BB40] block rounded-md'></span>Underweight</div>
                            <div className='flex text-[14px] text-[#212529] font-[600] items-center gap-[10px]'><span className='w-[12px] h-[12px] bg-[#F94E58] block rounded-md'></span>Underweight</div>
                        </div>
                        { 
                        (!isNaN(bmi)) &&
                        <div className='mt-[30px] bg-[#EEEEEE] px-[100px] py-[10px] w-[100%] justify-center flex m-auto'>
                            <p>The healthy range for BMI is between 18.5 and 24.9.</p>
                        </div>
                        }
                        <div className='py-[20px] text-center'>
                            <p className='font-bold text-[16px] text-[#212529]'>A healthy weight for someone your height would be</p>
                            <h4 className='py-[20px] text-[30px] font-[500]'>43 - 57 lbs</h4>
                        </div>
                        <div className='text-center'>
                            <h5 className='text-[16px] font-[600] text-[#420075]'>Why it matters?</h5>
                            <p className='text-[14px] py-[20px]'>A healthy weight is part of living well. It can help you avoid heart problems, diabetes, arthritis, sleep apnea, and even some cancers.</p>
                            <p className='text-[14px] py-[20px]'>You'll also need to take into account other things such as body fat and your family's health history. Check in with your doctor regularly to make sure you're staying on track.</p>
                        </div>
                        <div className='my-[20px]'>
                            <Image src={graph} alt="" />
                        </div>
                    </div>
                </>
            )}
            <div className='w-full lg:w-[900px] mt-[15px] m-auto'>
                <div className='card p-[15px] mb-[15px] bg-white border rounded-lg'>
                    <div>
                        <h3 className='text-[#420075] font-[600]'>Introduction of BMI and BMI Calculator</h3>
                        <p className='text-sm py-[10px]'>BMI, or Body Mass Index, is the value derived from an individual’s height and weight. It is a widely used metric for categorizing a person as obese, overweight, average, or underweight. BMI is calculated in the units of kilogram per meter square, as it is measured by dividing the square of a body's height by a body mass. To avoid the hassle of manual calculation and quickly figure out the BMI, SmallSEOTools has introduced the BMI Calculator that provides you with accurate results in a matter of instances. Now you can calculate BMI with the help of our online service without following intricate methods.</p>
                    </div>
                    <div>
                        <h3 className='text-[#420075] font-[600]'>How to Calculate BMI for Adults</h3>
                        <p className='text-sm py-[10px]'>By following the steps below, you can calculate your Body mass index using our BMI calculator.</p>
                        <div className=''>
                            <ul className='ml-[50px] list-disc'>
                                <li className='text-sm py-[5px]'>Step1: Select Gender</li>
                                <li className='text-sm py-[5px]'>Step2: Enter your height in ft/in or Cm</li>
                                <li className='text-sm py-[5px]'>Step3: Enter Weight in Lbs or KGs </li>
                                <li className='text-sm py-[5px]'>Step4: Now hit the “Calculate BMI” button</li>
                            </ul>
                        </div>
                    </div>
                    <div className='py-[10px]'>
                        <h3 className='text-[#420075] font-[600]'>How to Calculate BMI for Adults</h3>
                        <div className=''>
                            <ul className='ml-[50px] list-disc'>
                                <li className='text-sm py-[5px]'>Step1: Select the gender</li>
                                <li className='text-sm py-[5px]'>Step2: Select the age</li>
                                <li className='text-sm py-[5px]'>Step3: Enter your height in ft/in or cm </li>
                                <li className='text-sm py-[5px]'>Step4: Enter weight in lbs or kgs </li>
                                <li className='text-sm py-[5px]'>Step5: Now hit the “Calculate BMI” button</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h3 className='text-[#420075] font-[600]'>What Does Your BMI Mean?</h3>
                        <p className='text-sm py-[10px]'>As mentioned before, the value of your BMI describes whether you are underweight, normal weight, overweight, or obese. Generally, you can consider yourself one of them if your BMI falls between the given ranges:</p>
                        <div className=''>
                            <ul className='ml-[50px] list-disc'>
                                <li className='text-sm py-[5px]'><span className='text-[#212529] font-[600]'>Obese  = </span> BMI is equal to or greater than 30</li>
                                <li className='text-sm py-[5px]'><span className='text-[#212529] font-[600]'>Overweight  = </span>  BMI is equal to or between 25 - 29.9</li>
                                <li className='text-sm py-[5px]'><span className='text-[#212529] font-[600]'>Normal Weight = </span> BMI is equal to or between 18.5 - 24.9 </li>
                                <li className='text-sm py-[5px]'><span className='text-[#212529] font-[600]'>Underweight  = </span> BMI less than 18.5 </li>
                            </ul>
                        </div>
                    </div>
                    <div className='py-[10px]'>
                        <h3 className=' text-[#420075] font-[600]'>BMI Table for Adults</h3>
                    </div>
                    <div className='py-[20px]'>
                        <table className='table-auto w-[100%] border-[1px] text-sm Conversion_table border-[#ccc]'>
                            <thead>
                                <tr>
                                    <th className='text-start'>Category</th>
                                    <th className='text-start'>BMI Range</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Severe Thinness</td>
                                    <td>16</td>
                                </tr>
                                <tr>
                                    <td>Moderate Thinness</td>
                                    <td>16-17</td>
                                </tr>
                                <tr>
                                    <td>Mild Thinness</td>
                                    <td>17 – 18.5</td>
                                </tr>
                                <tr>
                                    <td>Normal</td>
                                    <td>18.5 – 25</td>
                                </tr>
                                <tr>
                                    <td>Overweight</td>
                                    <td>25 – 30</td>
                                </tr>
                                <tr>
                                    <td>Obese Class 1</td>
                                    <td>30 – 35</td>
                                </tr>
                                <tr>
                                    <td>Obese Class 2</td>
                                    <td>35 – 40</td>
                                </tr>
                                <tr>
                                    <td>Obese Class 3</td>
                                    <td>40</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <h3 className='text-[#420075] font-[600]'>Risks Associated with Being Overweight</h3>
                        <p className='text-sm py-[5px]'>Being overweight leads a person to several health issues. You can face the following risks with being overweight:</p>
                        <div className='py-[10px]'>
                            <ul className='ml-[50px] list-disc'>
                                <li>High blood pressure</li>
                                <li>High LDL cholesterol</li>
                                <li>Heart disease</li>
                                <li>Type 2 diabetes</li>
                                <li>Breathing issues</li>
                                <li>Mental disorders</li>
                                <li>Anxiety</li>
                                <li>Depression</li>
                                <li>Body pain</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h3 className='text-[#420075] font-[600]'>Risks Associated with Being Underweight</h3>
                        <p className='text-sm py-[5px]'>Being underweight can also lead to medical problems, just like obesity. The significant risks you can face being underweight are:</p>
                        <div className='py-[10px]'>
                            <ul className='ml-[50px] list-disc'>
                                <li>Sickness</li>
                                <li>Anemia</li>
                                <li>Feeling tired</li>
                                <li>Slow growth</li>
                                <li>Premature birth</li>
                                <li>Irregular periods</li>
                                <li>Skin and hair problems</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h3 className='text-[#420075] font-[600]'>How Do I Calculate BMI Manually?</h3>
                        <p className='text-sm py-[5px]'>There are two main formulas to calculate BMI, which are English BMI and Metric BMI. Let’s take a look at each of them and understand how they work with the help of an example. </p>
                        <p className='py-[10px] text-sm font-[600]'>English BMI Formula:</p>
                        <p className='py-[10px] text-sm font-[600]'>703 x weight (lbs.)/ height2 (inches)</p>
                        <p className='py-[5px] text-sm'>With this formula, you need to multiply the weight in lbs. by 703 and divide it by the height squared in inches. For instance, if a person’s weight is 160 lbs. and height is 70 inches, then his BMI would be calculated as:</p>
                        <p className='py-[5px] text-sm'>703 x 160/ 702</p>
                        <p className='py-[5px] text-sm'>BMI = 22.9</p>
                        <p className='py-[5px] text-sm'>Metric BMI Formula:</p>
                        <p className='py-[5px] text-sm'>Weight (Kgs)/ height2 (meters)</p>
                        <p className='py-[5px] text-sm'>The metric BMI formula is similar to the English BMI formula, but the only difference between them is the measurement units. If a person’s height is 1.8 meters and weight is 100 kg, then with the metric BMI formula, his BMI would be calculated as:</p>
                        <p className='py-[5px] text-sm'>100/1.82</p>
                        <p className='py-[5px] text-sm'>BMI = 30.9</p>
                    </div>
                    <div className=''>
                        <h3 className='text-[#420075] font-[600]'>BMI Calculator for Adults and Children</h3>
                        <p className='text-sm py-[5px]'>The genetics and body measures vary from person to person due to the difference in age ranges. Therefore, the Body Mass Index is interpreted differently for both adults and children. The BMI Calculator by SmallSEOTools has been designed to allow users to find their BMI per their age range. If you choose a BMI calculator for adults to calculate the BMI of a teenager, then obviously, you can't get accurate results. However, if you choose the right tool and calculate it as per the age range of your child, you can get your hands on accurate results without any hassle. The BMI calculator for children and adults is based on smart algorithms that depict your selected mode and age and calculates BMI precisely.</p>
                    </div>
                    <div className=''>
                        <h3 className='text-[#420075] font-[600]'>BMI Calculator for Adult Men and Women</h3>
                        <p className='text-sm py-[5px]'>Just like adults and children, the BMI between men and women also varies as they don’t have identical body measures and genetics. On average, women are short-heightened; therefore, their BMI cannot be treated similarly to men. Our online service allows you to calculate BMI for women and BMI for men distinctly to find specific results. You don’t need to go through the hassle of the registration process for using our BMI calculator. You can entirely rely on the results generated by our online BMI calculation tool, as it lets you adjust your age and gender to find the exact Body Mass Index.</p>
                    </div>
                    <div className=''>
                        <h3 className='text-[#420075] font-[600]'>Limitations of BMI</h3>
                        <p className='text-sm py-[5px]'>Experts have raised their fingers over the reliability of the Body Mass Index due to several reasons. There are certain limitations of BMI due to which they have termed it an inaccurate measure for analyzing body fat. Some of its limitations are:</p>
                        <div>
                            <ul className='list-disc ml-[50px]'>
                                <li className='text-sm py-[10px]'>BMI charts don't distinguish between the gender of the individuals. Males are prone to gaining more muscle mass, whereas females have more fat mass, which makes BMI an unrealistic measure.</li>
                                <li className='text-sm py-[10px]'>BMI doesn’t take body fat percentage or muscle mass into account.</li>
                                <li className='text-sm py-[10px]'>BMI doesn’t specify water weight and bone mass while calculating the relation between height and weight.</li>
                            </ul>
                        </div>
                    </div>
                    <div className=''>
                        <h3 className='text-[#420075] font-[600]'>Who Shouldn’t Use a BMI Calculator?</h3>
                        <p className='text-sm py-[5px]'>BMI wouldn’t be an accurate representation for many people, such as pregnant women, athletes, young children, and bodybuilders. This is because a BMI calculator considers weight just as a number; however, for some people, the weight could be heavy due to muscles rather than fats.</p>
                        <p className='text-sm py-[5px]'>For instance, athletes and bodybuilders have a high muscle mass that results in a much higher BMI. But this doesn’t mean they are open to facing health issues like obese people. Similarly, during pregnancy, the mass and body of a woman change, which makes the BMI calculator ineffective for them. Moreover, BMI calculation will show low BMI for children as they are likely to lose mass. But they shouldn’t be considered underweight by BMI calculation as they are still at a growth stage.</p>
                    </div>
                    <div className=''>
                        <div>
                            <h3 className='text-[#420075] my-[10px] font-[600]'>FAQs</h3>
                            <ul className='list-disc ml-[50px]'>
                                <li className='text-sm py-[5px] text-[#420075] font-[600]'>When Should I Be Concerned with My Child's Weight?</li>
                                <p>If your child is losing weight, getting weak, staying ill for ample time, or has a lasting illness, you should be concerned and talk to your doctor.</p>
                                <li className='text-sm py-[5px] text-[#420075] font-[600]'>When Should I Start Checking my BMI? How Often Should I Check?</li>
                                <p>You can start checking your BMI whenever you want. For children, it must be checked for the ones who are 2 years old. You can check your BMI once every four weeks.</p> 
                                <li className='text-sm py-[5px] text-[#420075] font-[600]'>What is My Ideal Weight?</li>
                                <p>Your ideal body weight depends upon your sex, age, and height. There’s no specific figure of ideal weight for all individuals.</p> 
                                <li className='text-sm py-[5px] text-[#420075] font-[600]'>What is My Child’s Ideal Weight?</li>
                                <p>Your child’s ideal weight is also dependent upon similar factors, which are sex, age, and height.</p> 
                                <li className='text-sm py-[5px] text-[#420075] font-[600]'>Is Muscle Counted in BMI?</li>
                                <p>No! The muscle mass is not taken into account for calculating BMI,</p> 
                                <li className='text-sm py-[5px] text-[#420075] font-[600]'>How Can I Reduce My BMI?</li>
                                <p>You can take several actions to reduce your BMI. You should ditch highly processed foods, increase fiber intake, make use of protein, etc., to reduce your BMI.</p> 
                                <li className='text-sm py-[5px] text-[#420075] font-[600]'>How Can I Help My Child Reduce his/her BMI?</li>
                                <p>You can help your child in reducing BMI by encouraging him/her to participate in physical activities daily. You can make them follow strict diets and take healthy meals.</p> 
                                <li className='text-sm py-[5px] text-[#420075] font-[600]'>BMI Reduction: How Long Will It Take?</li>
                                <p>You can reduce between 1-3% of your body fat per month. BMI reduction depends upon how seriously you take it and how much effort you are investing. You can start seeing a reduction in BMI by paying proper attention and taking necessary actions. </p> 
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Bicalc