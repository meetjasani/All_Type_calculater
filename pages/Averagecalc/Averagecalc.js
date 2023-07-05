import React, { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Footer from '@/Components/Footer/Footer'
import Header from '@/Components/Header/Header'

const Averagecalc = () => {
    const maxInputFields = 50;
    const [values, setValues] = useState([
        { average: '' },
        { average: '' },
        { average: '' },
        { average: '' }
    ]);
    const [sum, setSum] = useState()
    const [count, setCount] = useState()
    const [median, setMedian] = useState()
    const [averageVal, setAverageVal] = useState()
    const [largest, setLargest] = useState()
    const [smallest, setSmallest] = useState()
    const [range, setRange] = useState()
    const [geoMean, setGeoMean] = useState()
    const [harmonic, setHarmonic] = useState()
    const[open, setOpen] = useState(false)

    const handleChange = (e, index) => {
        const value = [...values];
        value[index].average = e.target.value;
        setValues(value)
    }

    const handleAddFields = () => {
        if(values.length < maxInputFields){
            setValues([...values, { average: '' }]);
        }
    }

    const handleRemoveFields = (index) => {
        const value  = [...values];
        value.splice(index, 1);
        setValues(value);
    }

    const handleReset = () => {
        const newValues = Array.from({ length: values.length }, () => ({ average: '' }));
        setValues(newValues);
    }
    const handleAverage = () => {
        const value = [...values];
        const arrayVal = value.map((val) => Number(val.average))
        const sort = arrayVal.sort((a, b) => a - b)
        const middle = Math.floor(sort.length / 2);
        const total = arrayVal.reduce((a, v) => (a = a + v))
        const averages = (total/arrayVal.length).toFixed(1)
        let result = 1;
        for (let i = 0; i < arrayVal.length; i++){
            result *= arrayVal[i];
        }
        let summ = 0;
        for (let i = 0; i < arrayVal.length; i++){
            summ = summ + (1 / arrayVal[i]);
            let harMean = arrayVal.length/summ
            setHarmonic(harMean.toFixed(4))
        }
        for (let i = 0; i < values.length; i++) {
            const { average } = values[i]
            if (average === '') {
                toast.error('Please fill input fields!.')
                break;
            }else {
                setOpen(true)
                setSum(total)
                setCount(arrayVal.length)
                setMedian(sort[middle]);
                setAverageVal(parseFloat(averages).toFixed(2))
                setLargest(Math.max(...arrayVal))
                setSmallest(Math.min(...arrayVal))
                setRange((Math.max(...arrayVal)) - (Math.min(...arrayVal)))
                setGeoMean( Math.pow(result, 1/arrayVal.length).toFixed(4))
            }
        }
    }
    return (
        <>
            <Header />
            <ToastContainer theme="colored"/>
            <div className="h-[98px] my-[20px] bg-[#80808014] max-w-[700px] m-auto"></div>
            <div className='mainbg max-w-[1260px] m-auto px-[15px] py-[10px]'>
                <div className=''>
                    <div className='text-center'>
                        <h1 className='text-[16px] sm:text-[22px] text-[#420075] md:text-2xl font-bold mb-[10px]'>Average Calculator</h1>
                        <p className='text-sm md:w-[70%] w-[100%] mx-auto  font-normal'>The Average Calculator is the best option for you to find the average of numbers within no time. You can also get assistance from this Mean calculator in the calculation of the mean of a massive set of numbers without any hassle.</p>
                    </div>
                    <div className='flex bg-[#80808014] max-w-[700px] m-auto items-center my-[20px] min-h-[250px]'>
                        <div></div>
                        <div></div>
                    </div>
                    <div className='max-w-[700px] m-auto'>
                        <p className='text-[#420075] font-medium text-xl mb-5'>Values (you may enter up to 50 numbers)</p>
                            {
                                values?.map((value, index) => (
                                    <div className='flex gap-2'>
                                        <input type="number" placeholder='#:' className='placeholder:text-[12px] w-[50%] h-[40px] border border-[#ccc] focus:outline-0 px-4' 
                                            value={value.average} 
                                            onChange={(e) => handleChange(e, index)}
                                        />
                                        {index < 4 ? '' : (
                                            <button className='flex items-center bg-[#8229c7] text-white rounded-md h-[40px] w-[160px] justify-center' onClick={() => handleRemoveFields(index)}><AiOutlinePlus className='mr-2 text-white' />Remove Course</button>
                                        )}
                                    </div>
                                ))
                            }
                        <div className='mt-3'>
                        {
                            values.length < maxInputFields && (
                                <button className='flex items-center bg-[#8229c7] text-white rounded-md h-[40px] w-[160px] justify-center' onClick={handleAddFields}><AiOutlinePlus className='mr-2 text-white' />Add Course</button>
                            )
                        }
                        </div>
                    </div>
                    <div className="h-[98px] my-[20px] bg-[#80808014] max-w-[700px] m-auto"></div>
                    <div className='flex justify-center gap-3'>
                        <button className='btnlogin text-white py-[10px] px-[10px] sm:px-[40px] my-[20px]' onClick={handleAverage}>Calculate Age</button>
                        <button className='btnlogin text-white py-[10px] px-[10px] sm:px-[40px] my-[20px]' onClick={handleReset}>Reset</button>
                    </div>
                    <div className='flex bg-[#80808014] max-w-[700px] m-auto items-center my-[20px] min-h-[250px]'></div>
                    { open ?
                        <div className=''>
                            <h6 className='text-[18px] text-[#420075] font-[600] text-center'>Result</h6>
                            <div className='md:flex block max-w-[700px] m-auto gap-[20px] my-[20px] min-h-[250px]'>
                                <div className='w-[100%]'>
                                    <div className='px-[24px] py-[8px] border border-[#E3E7ED] text-center'>
                                        <p className='font-[600] text-[18px]'>Average Value</p>
                                        <h6 className='font-[600] text-[20px]'>{averageVal}</h6>
                                    </div>
                                    <div className='p-[8px] border border-[#E3E7ED] text-center bg-[#F6F8FA]'>
                                        <p>Arithmetic: {averageVal}</p>
                                    </div>
                                    <div className='p-[8px] border border-[#E3E7ED] text-center bg-[#F6F8FA]'>
                                        <p>Geometric: {geoMean}</p>
                                    </div>
                                    <div className='p-[8px] border border-[#E3E7ED] text-center bg-[#F6F8FA]'>
                                        <p>Harmonic: {harmonic}</p>
                                    </div>
                                </div>
                                <div className='w-[100%] md:mt-[0px] mt-[20px]'>
                                    <div className='flex w-[100%] text-start justify-between'>
                                        <h6 className='md:w-[200px] w-[100%] border border-[#E3E7ED] text-sm bg-[#F6F8FA] px-[16px] py-[8px]'>Sum</h6>
                                        <h6 className='md:w-[200px] w-[100%] border border-[#E3E7ED] px-[16px] py-[8px] text-sm'>{sum}</h6>
                                    </div>
                                    <div className='flex w-[100%] text-start justify-between'>
                                        <h6 className='md:w-[200px] w-[100%] border border-[#E3E7ED] text-sm bg-[#F6F8FA] px-[16px] py-[8px]'>Count</h6>
                                        <h6 className='md:w-[200px] w-[100%] border border-[#E3E7ED] px-[16px] py-[8px] text-sm'>{count}</h6>
                                    </div>
                                    <div className='flex w-[100%] text-start justify-between'>
                                        <h6 className='md:w-[200px] w-[100%] border border-[#E3E7ED] text-sm bg-[#F6F8FA] px-[16px] py-[8px]'>Median</h6>
                                        <h6 className='md:w-[200px] w-[100%] border border-[#E3E7ED] px-[16px] py-[8px] text-sm'>{median}</h6>
                                    </div>
                                    <div className='flex w-[100%] text-start justify-between'>
                                        <h6 className='md:w-[200px] w-[100%] border border-[#E3E7ED] text-sm bg-[#F6F8FA] px-[16px] py-[8px]'>Geometric Mean</h6>
                                        <h6 className='md:w-[200px] w-[100%] border border-[#E3E7ED] px-[16px] py-[8px] text-sm'>{geoMean}</h6>
                                    </div>
                                    <div className='flex w-[100%] text-start justify-between'>
                                        <h6 className='md:w-[200px] w-[100%] border border-[#E3E7ED] text-sm bg-[#F6F8FA] px-[16px] py-[8px]'>Largest</h6>
                                        <h6 className='md:w-[200px] w-[100%] border border-[#E3E7ED] px-[16px] py-[8px] text-sm'>{largest}</h6>
                                    </div>
                                    <div className='flex w-[100%] text-start justify-between'>
                                        <h6 className='md:w-[200px] w-[100%] border border-[#E3E7ED] text-sm bg-[#F6F8FA] px-[16px] py-[8px]'>Smallest</h6>
                                        <h6 className='md:w-[200px] w-[100%] border border-[#E3E7ED] px-[16px] py-[8px] text-sm'>{smallest}</h6>
                                    </div>
                                    <div className='flex w-[100%] text-start justify-between'>
                                        <h6 className='md:w-[200px] w-[100%] border border-[#E3E7ED] text-sm bg-[#F6F8FA] px-[16px] py-[8px]'>Range</h6>
                                        <h6 className='md:w-[200px] w-[100%] border border-[#E3E7ED] px-[16px] py-[8px] text-sm'>{range}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        : <></>
                    }
                </div>
                <div className='w-full lg:w-[900px] mt-[15px] m-auto'>
                    <div className='card p-[15px] mb-[15px] bg-white border rounded-lg'>
                        <div className=''>
                            <h3 className='text-[20px] font-bold mb-[10px] text-[#420075]'>What Is The Average?</h3>
                            <p className='text-sm py-[10px]'>The average is a broad term that is used in various fields of life. Whether you are a student, researcher, or architect, you may have to calculate the average of numerous data sets to solve some problems. But what exactly is 'Average'?</p>
                            <p className='text-sm py-[10px]'>Well, the term 'average' denotes the central calculated value. When we use average in mathematics, it refers to a number that is a representation of a group of numbers, derived by adding up all the values in the dataset and divided by the total number of values. There are different ways to calculate average like mean, median, and mode. Use our average value calculator to find average of numbers without any hassle.</p>
                            <p className='text-sm py-[10px]'>Here is the Average formula</p>
                            <p className='text-sm py-[10px]'>Average = Sum/count</p>
                        </div>
                        <div className=''>
                            <h3 className='text-[16px] font-bold mb-[10px] text-[#420075]'>Different Types Of Average In Statistics - Mean, Median, Mode</h3>
                            <div className='pt-[30px]'>
                                <h3 className='text-[#420075] font-[600]'>Mean:</h3>
                                <p className='text-sm pb-[50px]'>It is the type of average that is obtIn statistics, there are various types of averages that are being used in solving different problems. Some of the main types of averages in statistics are as follows.ained by summing up all the values of a dataset and dividing the resultant with the total number of values.</p>
                            </div>
                            <div>
                                <h3 className='text-[#420075] font-[600]'>Mode:</h3>
                                <p className='text-sm pb-[50px]'>The mode is the value that occurs most of the time in a dataset. For instance, in a dataset, 3,5,4,3,1,3,8, the mode will be 3.</p>
                            </div>
                            <div>
                                <h3 className='text-[#420075] font-[600]'>Median:</h3>
                                <p className='text-sm pb-[50px]'>The median of a dataset is the value in the middle when the values are in order, i.e., ascending or descending</p>
                            </div>
                            <div className=''>
                                <h3 className='text-[16px] font-bold mb-[10px] text-[#420075]'>Mean & its Types</h3>
                                <p className='text-sm py-[10px]'>The term "Mean" can be further divided into different parts, and a few of them are discussed below.</p>
                                <div>
                                    <h3 className='text-[#420075] text-[14px] font-[600]'>Arithmetic mean</h3>
                                    <p className='text-sm py-[10px]'>In this type of mean, you will add all the values of a dataset and then divide it with the total number of values; the resultant will be known as Arithmetic Mean.</p>
                                    <p className='text-sm py-[10px]'>Suppose, the dataset is 7,6,9,4,5,6,8</p>
                                    <p className='text-sm py-[10px]'>Arithmetic Mean = 7+6+9+4+5+6+8/7 = 45/7= 6.42</p>
                                    <p className='text-sm py-[10px]'>A.M = 6.42</p>
                                </div>
                                <div>
                                    <h3 className='text-[#420075] text-[14px] font-[600]'>Geometric Mean</h3>
                                    <p className='text-sm py-[10px]'>In Geometric Mean, the values will multiply instead of adding up, and then you have to take the 1/nth after multiplying the values in a data set. For instance, if the values are two, you will have to take square root and if the values are three, you will have to take cube root.</p>
                                    <p className='text-sm py-[10px]'>For instance, for the values 4,6,2,</p>
                                    <p className='text-sm py-[10px]'>Geometric Mean= 3√ 4*6*2= 3√48= 3.63</p>
                                    <p className='text-sm py-[10px]'>G.M = 3.63</p>
                                </div>
                                <div>
                                    <h3 className='text-[#420075] text-[16px] font-[600]'>When to use mean?</h3>
                                    <p className='text-sm py-[10px]'>The mean is the most useful and famous measure of central tendency. Mean is mostly used in both discrete and continuous data. However, it is often used in mathematics or accounts related work, in which persistent data is mainly used.</p>
                                </div>
                                <div>
                                    <h3 className='text-[#420075] text-[16px] font-[600]'>How Does the Mean Calculator Calculate the Average?</h3>
                                    <p className='text-sm py-[10px]'>To find the mean, Mean Calculator Sum the smallest value and the largest value divide it by 2</p>
                                </div>
                                <div>
                                    <h3 className='text-[#420075] text-[16px] font-[600]'>Median</h3>
                                    <p className='text-sm py-[10px]'>The median of a dataset is taken as the middle value, but the dataset should be arranged in ascending or descending order.</p>
                                    <p className='text-sm py-[10px]'>For instance, if you want to find the median for the dataset, 7,9,4,3,6,1,2, then you should first arrange the numbers sequence. It would become: 1,2,3,4,6,7,9</p>
                                    <p className='text-sm py-[10px]'>Now, find the total number of values in the list, which is 7. So, 7+1/2= 8/2= 4</p>
                                    <p className='text-sm py-[10px]'>Median= 4th Value in the sequence= 4.</p>
                                    <div>
                                        <h3 className='text-[14px] text-[#420075] font-[600]'>When To Use Mode</h3>
                                        <p className='text-sm py-[10px]'>The mode can be used in categorical, discrete, or ordinal data, but it becomes most useful when you are looking for a tendency from a large set of options. For instance, it can be used to find the most favorite food of customers.</p>
                                    </div>
                                </div>
                                <div >
                                    <h3 className='text-[16px] text-[#420075] font-[600]'>Use Average Calculator Instead Of Manual Calculations</h3>
                                    <p className='text-sm'>The conventional method of finding averages or mean is a complex and tedious task, which becomes more challenging if the data is ambiguous. In this hectic routine, it may become impossible for a person to waste time and energy on manual calculations. So, the best way to overcome this issue is the use of our Average Calculator. You can use our online Mean Calculator to find the average or any of its types without any hassle. There is no need to spend hours on making calculations by yourself, as you can use this free Average Calculator. If you are thinking that there are some charges for using this online tool, then you are wrong, as this Average Calculator is entirely free to use. You also don't have to go through the hassle of making an account on SmallSEOTools for using this calculator. Now, you don't have to think about how to find the average or what is the mean formula to solve a problem. Only a few clicks on your device will enable you to use this Average Calculator without any hesitation.</p>
                                    <p className='text-sm py-[20px]'>FAQ</p>
                                </div>
                                <div>
                                    <h3 className='text-[#420075] font-[600] text-[16px]'>How To Find The Average?</h3>
                                    <p className='text-sm py-[10px]'>To calculate the average manually, suppose you have the numbers like 10, 15, 30, 45. Simply add all numbers 10 + 15 + 30 + 45 = 100 and divide by 4 to get average 25.</p>
                                    <p className='text-sm py-[10px]'>To find the average with the average finder simply enter the values in the calculator.</p>
                                </div>
                                <div>
                                    <h3 className='text-[#420075] font-[600]'>How Do You Find Out The Average Of Two Numbers Without A Calculator?</h3>
                                    <p className='text-sm py-[10px]'>By simply adding the values and then dividing them by 2 will help you get the average easily. You can also use our Average Calculator to get the average of any complicated or large dataset within no time.</p>
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

export default Averagecalc