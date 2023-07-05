import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Footer from '@/Components/Footer/Footer'
import Header from '@/Components/Header/Header'

const Probabilitycalc = () => {
    const [buttons, setButtons] = useState('single')
    const [open, setOpen] = useState(false)
    const [numPossible, setNumPossible] = useState('')
    const [numPossible2, setNumPossible2] = useState('')
    const [numEvent, setNumEvent] = useState('')
    const [numEventA, setNumEventA] = useState('')
    const [numEventB, setNumEventB] = useState('')
    const [event, setEvent] = useState('')
    const [eventB, setEventB] = useState('')
    const [noEvent, setNoEvent] = useState()
    const [conPro, setConPro] = useState()
    const [uniPro, setUniPro] = useState()
    const [probabilityA, setProbabilityA] = useState()
    const [probabilityB, setProbabilityB] = useState()

    const handleSinglePro = () => {
        if(numPossible === ''){
            toast.error('The outcomes field is required when type is single.')
        }else if(numEvent === ''){
            toast.error('The events occur field is required when type is single.')
        }else if(numPossible <= numEvent){
            toast.error('No. of Occurrence should be less than Event')
        }else{
            setOpen(true)
            setEvent((numEvent/numPossible).toFixed(2))
            setNoEvent((1 - (numEvent/numPossible)).toFixed(2))
        }
    }
    const handleMultiPro = () => {
        if(numPossible2 === ''){
            toast.error('The possible outcomes field is required when type is multiple.')
        }else if(numEventA === ''){
            toast.error('The event a field is required when type is multiple.')
        }else if(numEventB === ''){
            toast.error('The event b field is required when type is multiple.')
        }else if(numPossible2 <= numEventA || numPossible2 <= numEventB){
            toast.error('Possible outcomes should be greater then no of events')
        }else {
            setOpen(true)
            const eve = numEventA/numPossible2
            const eveB = numEventB/numPossible2
            const conpro = (eve *eveB) /eveB
            setEvent(eve.toFixed(2))
            setEventB(eveB.toFixed(2))
            setConPro(conpro.toFixed(2))
            setUniPro(((eve +eveB) - (eve *eveB)).toFixed(2) )
            setProbabilityA((1-eve).toFixed(2))
            setProbabilityB((1-eveB).toFixed(2))
        }
    }
    const handleReset = () => {
        setNumPossible('')
        setNumEvent('')
    }
    const handleReset2 = () => {
        setNumPossible2('')
        setNumEventA('')
        setNumEventB('')
    }
    return (
        <div>
            <Header />
            <ToastContainer theme="colored"/>
            <div className="h-[98px] my-[20px] bg-[#80808014] max-w-[700px] m-auto"></div>
            <div className='mainbg max-w-[1260px] m-auto px-[15px] py-[10px]'>
                <div>
                    <div className='text-center'>
                        <h1 className='text-[24px]  text-[#420075]  font-bold mb-[10px]'>Probability Calculator</h1>
                    </div>
                    <div className='flex bg-[#80808014] max-w-[700px] m-auto items-center my-[20px] min-h-[250px]'>
                        <div></div>
                        <div></div>
                    </div>
                    <div className='flex flex-wrap justify-center gap-3'>
                        <button onClick={() => setButtons('single')} className={buttons === 'single' ? ' bg-[#420075] text-white text-sm h-[40px] rounded-md w-[240px]' : "border text-sm border-[#ccc]  text-black  font-[500] h-[40px] rounded-md w-[240px]"}>Single margin Calculate</button>
                        <button onClick={() => setButtons('multiple')} className={buttons === 'multiple' ? 'bg-[#420075] text-white text-sm  h-[40px] rounded-md w-[240px]' : "border border-[#ccc]  text-black text-sm  font-[500] h-[40px] rounded-md w-[240px]"}>Multiple margin calculator</button>
                    </div>
                    {buttons === 'single' && (
                        <>
                            <div className='mt-[20px] w-full lg:w-[440px] p-[20px] border border-[#ccc]  m-auto'>
                                <div className='bg-[#e3e7ed] p-[16px] w-full'>
                                    <h4 className='text-center font-[500]'>Single Probability Calculator</h4>
                                </div>
                                <div className='bg-[#fff] w-[400px]  m-auto'>
                                    <div className='my-[16px]'>
                                        <div>
                                            <label htmlFor="" className='text-sm'>Number of possible outcomes</label>
                                        </div>
                                        <input className='w-[100%] outline-none indent-2 m-auto border border-[#ccc] h-[40px]' type="number" 
                                            value={numPossible}
                                            onChange={(e) => setNumPossible(e.target.value)}
                                        />
                                    </div>
                                    <div className='my-[16px]'>
                                        <div>
                                            <label htmlFor="" className='text-sm'>Number of events occurred</label>
                                        </div>
                                        <input className='w-[100%] outline-none indent-2 m-auto border border-[#ccc] h-[40px]' type="number" 
                                            value={numEvent}
                                            onChange={(e) => setNumEvent(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="h-[98px] my-[20px] bg-[#80808014] max-w-[700px] m-auto"></div>
                            <div className='text-center gap-[20px] flex justify-center mt-[20px] mx-auto'>
                                <button className='btnlogin text-white py-[10px] px-[10px] sm:px-[40px] my-[20px]' onClick={handleSinglePro}>Calculate</button>
                                <button className='btnlogin text-white py-[10px] px-[10px] sm:px-[40px] my-[20px]' onClick={handleReset}>Reset</button>
                            </div>
                        </>
                    )}
                    {buttons === 'multiple' && (
                        <>
                            <div className='mt-[20px] w-full lg:w-[440px] p-[20px] border border-[#ccc] m-auto'>
                                <div className='bg-[#e3e7ed] p-[16px] w-full'>
                                    <h4 className='text-center font-[500]'>Multiple Event Probability Calculator</h4>
                                </div>
                                <div className='bg-[#fff]  w-[100%] m-auto'>
                                    <div className='my-[16px]'>
                                        <div>
                                            <label htmlFor="" className='text-sm'>Number of possible outcomes</label>
                                        </div>
                                        <input className='w-[100%] outline-none indent-2 m-auto border border-[#ccc] h-[40px]' type="number" 
                                            value={numPossible2}
                                            onChange={(e) => setNumPossible2(e.target.value)}
                                        />
                                    </div>
                                    <div className='my-[16px]'>
                                        <div>
                                            <label htmlFor="" className='text-sm'>Number of event occurs in A</label>
                                        </div>
                                        <input className='w-[100%] outline-none indent-2 m-auto border border-[#ccc] h-[40px]' type="number" 
                                             value={numEventA}
                                             onChange={(e) => setNumEventA(e.target.value)}
                                        />
                                    </div>
                                    <div className='my-[16px]'>
                                        <div>
                                            <label htmlFor="" className='text-sm'>Number of event occurs in B</label>
                                        </div>
                                        <input className='w-[100%] outline-none indent-2 m-auto border border-[#ccc] h-[40px]' type="number" 
                                            value={numEventB}
                                            onChange={(e) => setNumEventB(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="h-[98px] my-[20px] bg-[#80808014] max-w-[700px] m-auto"></div>
                            <div className='text-center gap-[20px] flex justify-center mt-[20px] mx-auto'>
                                <button className='btnlogin text-white py-[10px] px-[10px] sm:px-[40px] my-[20px]' onClick={handleMultiPro}>Calculate</button>
                                <button className='btnlogin text-white py-[10px] px-[10px] sm:px-[40px] my-[20px]' onClick={handleReset2}>Reset</button>
                            </div>
                        </>
                    )}
                </div>
            </div>
            <div className='flex bg-[#80808014] max-w-[700px] m-auto items-center my-[20px] min-h-[250px]'></div>
            <div className='w-full logic-table lg:w-[900px] mt-[15px] m-auto'>
                {(buttons === 'single' && open) && (
                    <div className='py-[20px] flex w-[100%]'>
                        <div className='w-[100%]'>
                        <div className='flex border border-[#ccc]'>
                            <p className='w-[100%] text-sm bg-[#F6F8FA] border-r border-[#ccc] p-[10px]'>Probability of event that occurs:</p>
                            <p className='md:w-[223px] p-[10px]  text-sm'>{event}</p>
                        </div>
                        <div className='flex border border-[#ccc]'>
                            <p className='w-[100%] p-[10px] border-r border-[#ccc] bg-[#F6F8FA] text-sm'>Probability of event that does not occurs:
                            </p>
                            <p className='md:w-[223px] p-[10px] text-sm'>{noEvent}</p>
                        </div>
                    </div>
                </div>
                )}
                {(buttons === 'multiple' && open) && (
                    <div className='py-[20px] flex w-[100%]'>
                        <div className='w-[100%]'>
                            <div className='flex border border-[#ccc]'>
                                <p className='w-[100%] text-sm bg-[#F6F8FA] border-r border-[#ccc] p-[10px]'>P(A)</p>
                                <p className='md:w-[223px] p-[10px]  text-sm'>{event}</p>
                            </div>
                            <div className='flex border border-[#ccc]'>
                                <p className='w-[100%] p-[10px] border-r border-[#ccc] bg-[#F6F8FA] text-sm'>P(B)</p>
                                <p className='md:w-[223px] p-[10px] text-sm'>{eventB}</p>
                            </div>
                            <div className='flex border border-[#ccc]'>
                                <p className='w-[100%] p-[10px] bg-[#F6F8FA] text-sm border-r border-[#ccc]'>P(A | B)</p>
                                <p className='md:w-[223px] p-[10px] text-sm'>{conPro}</p>
                            </div>
                        </div>
                        <div className='w-[100%]'>
                            <div className='flex border border-[#ccc]'>
                                <p className='w-[100%] text-sm bg-[#F6F8FA] border-r border-[#ccc] p-[10px]'>P(A')</p>
                                <p className='md:w-[223px] p-[10px]  text-sm'>{probabilityA}</p>
                            </div>
                            <div className='flex border border-[#ccc]'>
                                <p className='w-[100%] p-[10px] border-r border-[#ccc] bg-[#F6F8FA] text-sm'>P(B')</p>
                                <p className='md:w-[223px] p-[10px] text-sm'> {probabilityB}</p>
                            </div>
                            <div className='flex border border-[#ccc]'>
                                <p className='w-[100%] p-[10px] bg-[#F6F8FA] text-sm border-r border-[#ccc]'>P(A U B)</p>
                                <p className='md:w-[223px] p-[10px] text-sm'>{uniPro}</p>
                            </div>
                        </div>
                    </div>
                )}
                <div>
                    <div className='card p-[15px] mb-[15px] bg-white border rounded-lg'>
                        <div className=''>
                            <h3 className='font-[600] text-[16px] text-[#420075]'>About Online Probability Calculator</h3>
                            <p className='text-sm py-[10px]'>An online probability calculator provides you the opportunity to find the probability of an event based on probabilities of other events. You can use our free online tool from any part of the world without paying anything.</p>
                            <p className='text-sm py-[10px]'>With an online tool, you can examine the associations between two discrete events within no time. You don’t need to make any calculations by yourself anymore, as an online tool will provide you with accurate results in a few seconds. Moreover, there is no need to waste your energy and time on calculating complex values to find the probability. Our calculator allows you to get rid of the conventional methods of calculating probability and enables you to find precise results quickly.</p>
                        </div>
                        <div className=''>
                            <h3 className='font-[600] text-[16px] text-[#420075]'>How to Use Online Probability Calculator?</h3>
                            <p className='text-sm py-[10px]'>The method of using our Calculator is easy and straightforward. There are no hard and fast rules to follow for finding the probability with this online Conditional Probability Calculator.</p>
                            <p className='text-sm py-[10px]'>You can use this tool in two ways. Whether you want to find the probability for a single event or multiple events, this online Experimental Probability Calculator is the most suitable option for you.</p>
                        </div>
                        <div className=''>
                            <h3 className='text-[16px] font-[600] text-[#420075]'>Probability Calculator Single Event</h3>
                            <ul className='list-disc ml-[50px] py-[10px]'>
                                <li className='text-sm py-[5px]'>Get access to our probability calculator tool on SmallSEOTools.</li>
                                <li className='text-sm py-[5px]'>Click on the “Single” button for finding a single event probability.</li>
                                <li className='text-sm py-[5px]'>Enter the number of possible outcomes in our single event probability calculator.</li>
                                <li className='text-sm py-[5px]'>Once you entered the possible outcomes, enter the number of events that occurred.</li>
                                <li className='text-sm py-[5px]'>That’s all! You will get the probability of an event that occurs and an event that doesn’t occur within a few seconds.</li>
                            </ul>
                        </div>
                        <div className=''>
                            <h3 className='text-[16px] font-[600] text-[#420075]'>Probability Calculator Multiple Events</h3>
                            <p className='text-sm py-[10px]'>If you want to find the probability of multiple events, then our tool is the best option that you could find over the web. For finding the probability of multiple events, you have to:</p>
                            <ul className='list-disc ml-[50px] py-[10px]'>
                                <li className='text-sm py-[5px]'>Enter the number of possible outcomes directly in the given box.</li>
                                <li className='text-sm py-[5px]'>Insert the number of events occurs in set A, and set B in the designated boxes.</li>
                                <li className='text-sm py-[5px]'>As a result, you will get a comprehensive report including P(A), P(B), P (A∩B), P(A∪B), P(A’), P(B’), and P(A|B).</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className='text-[16px] text-[#420075] font-[600]'>What Is Probability?</h3>
                            <p className='text-sm py-[10px]'>Probability measures the chances of an event to occur, that either it will happen or not. You may have an idea that probability is the branch of mathematics that is based on the study of random events. It is already understood that the outcome of a random occurrence may not be predicted until it occurs, but probability enables us to find the chances of this occurrence. Probability works on the basis of logical factors and allows us to find if an event will have a high or low chance of occurring. You may also get to know that the event will be dependent or independent from the previous occurred events through probability.</p>
                        </div>
                        <div>
                            <h3 className='text-[16px] text-[#420075] font-[600]'>How to Calculate Probability?</h3>
                            <p className='text-sm py-[10px]'>To calculate probability, you need to separate a problem into individual probabilities and then multiply the chances of an event’s occurrence with one another. You can find the probability by following the discussed simple steps.</p>
                            <ul className='list-disc ml-[50px]'>
                                <li className="text-sm py-[10px]">Analyze the probability of an event that has at least one possible outcome. For example, conclude the possible outcomes of tossing a coin is that either you will get head or you won’t get heads.</li>
                                <li className="text-sm py-[10px]">Now, identify the total number of outcomes for the event measured in the last step. In the example of tossing a coin, the total number of results is 2, i.e., head and tail.</li>
                                <li className="text-sm py-[10px]">Lastly, divide the chances of an event’s occurrence with the total number of results. Continuing with the ongoing example, the possible number of getting heads after flipping a coin is 1, and the total number of results is 2. So, the probability of getting heads can be calculated as 1/2, =0.5</li>
                            </ul>
                        </div>
                        <div className=''>
                            <h3 className='text-[#420075] font-[600]'> className="text-sm py-[10px]"</h3>
                            <p className='text-sm py-[10px]'>In simple words, the union of set A and set B is the collection of two all the values in both the sets. The union of A and B can be denoted by A∪B. To understand the working of the union, let’s take an example.</p>
                            <p className='text-sm py-[10px]'>A = 2, 3, 5, 6, 7</p>
                            <p className='text-sm py-[10px]'>B = 2, 3, 9</p>
                            <p className='text-sm py-[10px]'>The A∪B for this example would be A∪B = 2, 3, 5, 6, 7, 9</p>
                            <p className='text-sm py-[10px]'>However, the easiest way to avoid any manual calculation is the use of our Statistics Probability Calculator.</p>
                        </div>
                        <div className=''>
                            <h3 className='text-[#420075] font-[600]'>Find The Probability of A Intersection B (A∩B)?</h3>
                            <p className='text-sm py-[10px]'>In the intersection of A and B, we will find out all the similar values that are existed in both the sets, set A, and set B. The intersection of set A, and B, will be denoted by (A∩B).</p>
                            <p className='text-sm py-[10px]'>To understand the intersection, the example could be:</p>
                            <p className='text-sm py-[10px]'>A = 4, 6, 3, 8, 9</p>
                            <p className='text-sm py-[10px]'>B = 5, 6, 3</p>
                            <p className='text-sm py-[10px]'>The values that exist in both sets are 6 and 3. So, A∩B = 6,3</p>
                        </div>
                        <div className=''>
                            <h3 className='text-[#420075] font-[600]'>Find the Conditional Probability of A and B: P (A | B)</h3>
                            <p className='text-sm py-[10px]'>The conditional probability can be measured as the computation of the event A probability, given that event B has occurred. The following probability formula will help you to calculate the conditional probability of A and B.</p>
                            <p className='text-sm py-[10px]'>P(A|B) = P(A∩B) P(B).</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
        
    )
}

export default Probabilitycalc