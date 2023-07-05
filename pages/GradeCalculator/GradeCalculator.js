import React, { useState } from 'react'
import { CiSquareRemove } from 'react-icons/ci'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Footer from '@/Components/Footer/Footer'
import Header from '@/Components/Header/Header'

function GradeCalculator() {
    const [open, setOpen] = useState(false)
    const [selectCal, setSelectCalc] = useState('percentage')
    const [values, setValues] = useState([
        { assignment: 'book1', grade: '', weight: '20', gradeLetters: '4.33' }
    ])
    const [gradesLetters, setGradesLetters] = useState([
        {grade: "A+", scale:'4.33', percentage: '95'},
        {grade: "A", scale:'4', percentage: '93'},
        {grade: "A-", scale:'3.67', percentage: '90'},
        {grade: "B+", scale:'3.33', percentage: '87'},
        {grade: "B", scale:'3', percentage: '83'},
        {grade: "B-", scale:'2.67', percentage: '80'},
        {grade: "C+", scale:'2.33', percentage: '77'},
        {grade: "C", scale:'2', percentage: '73'},
        {grade: "C-", scale:'1.67', percentage: '70'},
        {grade: "D+", scale:'1.33', percentage: '67'},
        {grade: "D", scale:'1', percentage: '63'},
        {grade: "D-", scale:'0.67', percentage: '60'},
        {grade: "F", scale:'0', percentage: '0'}
    ])
    const [countPer, setCountPer] = useState()
    
    function getStateForPercentage(percentage) {
        if (percentage >= 95 || percentage > 93) {
          return "A+";
        } else if (percentage >= 93 || percentage > 90) {
          return "A";
        } else if (percentage >= 90 || percentage > 87) {
          return "A-";
        } else if (percentage >= 87 || percentage > 83) {
          return "B+";
        } else if (percentage >= 83 || percentage > 80) {
            return "B";
        } else if (percentage >= 80 || percentage > 77) {
            return "B-";
        } else if (percentage >= 77 || percentage > 76) {
            return "C+";
        } else if (percentage >= 76 || percentage > 70) {
            return "C";
        } else if (percentage >= 70 || percentage > 67) {
            return "C-";
        } else if (percentage >= 67 || percentage > 63) {
            return "D+";
        }else if (percentage >= 63 || percentage > 60) {
            return "D";
        } else if (percentage >= 60) {
            return "D-";
        } else {
          return "F";
        }
    }
    function getScaleForPercentage(percentage) {
        if (percentage >= 4.33 ) {
          return "A+";
        } else if (percentage >= 4) {
          return "A";
        } else if (percentage >= 3.67) {
          return "A-";
        } else if (percentage >= 3.33 ) {
          return "B+";
        } else if (percentage >= 3) {
            return "B";
        } else if (percentage >= 2.67) {
            return "B-";
        } else if (percentage >= 2.33 ) {
            return "C+";
        } else if (percentage >= 2) {
            return "C";
        } else if (percentage >= 1.67) {
            return "C-";
        } else if (percentage >= 1.33 ) {
            return "D+";
        }else if (percentage >= 1) {
            return "D";
        } else if (percentage >= 0.67) {
            return "D-";
        } else {
          return "F";
        }
    }
    const handleChange = (e, index) => {
        const { name, value } = e.target
        const updatedValues = [...values]
        updatedValues[index][name] = value
        setValues(updatedValues)
    }
    const handleAddFields = () => {
        setValues([...values, { assignment: 'book1', grade: '', weight: '20', gradeLetters: '4.33' }]);
    }
    const handleRemoveFields = (index) => {
        const value  = [...values];
        value.splice(index, 1);
        setValues(value);
    }
    const handleCalcGrade = () => {
        let gradeTotals = 0
        let weightTotal = 0
        let weightTotal1 = 0

        let gradeLtrTotal = 0
        let hasError = false
        for (let i = 0; i < values.length; i++) {
            const { assignment, grade, weight, gradeLetters } = values[i]
            if (assignment === '') {
              toast.error('Assignment field is required.')
              hasError = true
              break
            }else if (selectCal === 'percentage') {
                if(grade === '' || (grade <= 0 || grade > 100)){
                    toast.error('Percentage shuold be greater then 0 and less then 100.')
                    hasError = true
                    break
                }
            }else if (selectCal === 'points') {
                if(grade === '' || (grade < 1 || grade > 4.3)){
                    toast.error('Points shuold be greater then 1 and less then 4.3')
                    hasError = true
                    break
                }
            }
            if(weight === ''){
                toast.error('Weight field is required.')
                hasError = true
                break
            }
            if (selectCal === 'percentage' && !isNaN(grade) && !isNaN(weight)) {
                gradeTotals += parseFloat(grade || 0) * parseFloat(weight || 0)
                weightTotal += parseFloat(weight || 0)
                if (!hasError) {
                    const percentage = gradeTotals/weightTotal
                    setOpen(true)
                    const gradeLetter = getStateForPercentage(percentage);
                    setCountPer(`${gradeLetter} ( ${percentage} )`)
                }
            }
            if(selectCal === 'letters' && !isNaN(gradeLetters) && !isNaN(weight)){
                gradeLtrTotal += parseFloat(gradeLetters || 0) * parseFloat(weight || 0)
                weightTotal1 += parseFloat(weight || 0)
                if (!hasError) {
                    const percentage = gradeLtrTotal/weightTotal1
                    setOpen(true)
                    const gradeLetter = getScaleForPercentage(percentage);
                    setCountPer(`${gradeLetter} ( ${percentage} )`)
                }
            }
            if (selectCal === 'points' && !isNaN(grade) && !isNaN(weight)) {
                gradeTotals += parseFloat(grade || 0) * parseFloat(weight || 0)
                weightTotal += parseFloat(weight || 0)
                if (!hasError) {
                    const percentage = gradeTotals/weightTotal
                    setOpen(true)
                    const gradeLetter = getScaleForPercentage(percentage);
                    setCountPer(`${gradeLetter} ( ${percentage} )`)
                }
            }
        }
    }
    const handleReset = () => {
        const newValues = Array.from({ length: values.length }, () => (
            { assignment: 'book1', grade: '', weight: '20', gradeLetters: '4.33' }));
        setValues(newValues);
    }
    return (
        <>
            <Header />
            <ToastContainer theme="colored"/>
            <div className='h-[98px] my-[20px] bg-[#80808014] max-w-[900px] m-auto'></div>
            <div className='mainbg max-w-[1260px] m-auto px-[15px] py-[10px]'>
                <div>
                    <div className='text-center'>
                        <h1 className='text-[16px] sm:text-[22px] text-[#420075] md:text-2xl font-bold mb-[10px]'>Grade Calculator</h1>
                        <p className='text-sm md:w-[70%] w-[100%] mx-auto font-normal'>Grade calculator allows you to calculate the grade of assignments or semesters, in points, percentages or letters in seconds.</p>
                    </div>
                    <div className='flex bg-[#80808014] max-w-[700px] m-auto items-center my-[20px] min-h-[250px]'>
                        <div></div>
                        <div></div>
                    </div>
                    <div className='bg-[#fff] md:px-[48px]  md:py-[28px] py-[20px] md:w-[900px] mx-auto'>
                        <div>
                            <div>
                                <label htmlFor="" className='text-sm font-[600]'>Choose a Calculation</label>
                            </div>
                            <select className='p-[10px] border border-[#ccc] md:w-[30%] w-[100%]'
                                value={selectCal}
                                onChange={e => setSelectCalc(e.target.value)}
                            >
                                <option value="percentage">Percentage</option>
                                <option value="letters">Letters</option>
                                <option value="points">Points</option>
                            </select>
                        </div>
                        <div className='flex'>
                            <div className='w-[33.33%]'>
                                <label className='font-[600] text-sm' htmlFor="">Assignment</label>
                            </div>
                            {selectCal === 'percentage' ? (
                                <div className='w-[33.33%]'>
                                    <label className='font-[600] text-sm' htmlFor="">Grade ( Percentage )</label>
                                </div>
                            ): selectCal === 'letters' ? (
                                <div className='w-[33.33%]'>
                                    <label className='font-[600] text-sm' htmlFor="">Grade ( Letters(A.B,C..) )</label>
                                </div>
                            ): (
                                <div className='w-[33.33%]'>
                                    <label className='font-[600] text-sm' htmlFor="">Grade ( Points(1,2,3,4) )</label>
                                </div>
                            )}
                            <div className='w-[33.33%]'>
                                <label className='font-[600] text-sm' htmlFor="">Weight</label>
                            </div>
                        </div>
                        {values.map((value, index) => (
                            <div className='md:flex block gap-[20px] my-[20px]' key={index}>
                                <div className='w-[100%] md:my-[0px] my-[20px]'>
                                    <input type="text" name='assignment' className='w-[100%] p-[10px] border border-[#ccc] outline-none' 
                                        value={value.assignment}
                                        onChange={(e) => handleChange(e, index)}
                                    />
                                </div>
                                {selectCal === 'percentage' || selectCal === 'points' ? (
                                    <div className='w-[100%] md:my-[0px] my-[20px]'>
                                        <input type="number" name='grade' className='w-[100%] p-[10px] border border-[#ccc] outline-none' 
                                            value={value.grade}
                                            onChange={(e) => handleChange(e, index)}
                                        />
                                    </div>
                                ) : (
                                    <div className='w-[100%] md:my-[0px] my-[20px]'>
                                        <select name='gradeLetters' className='w-[100%] p-[10px] my-[10px] border border-[#ccc] outline-none'
                                            defaultValue='4'
                                            value={value.gradeLetters} 
                                            onChange={(e) => handleChange(e, index)}
                                        >
                                            {gradesLetters.map(({grade, scale}) =>(
                                                <option key={scale} value={scale}>{grade}</option>
                                            ))}
                                        </select>
                                    </div>
                                )}
                                <div className='w-[100%] md:my-[0px] my-[20px]'>
                                    <input type="number" name='weight' className='w-[100%] p-[10px] border border-[#ccc] outline-none' 
                                        value={value.weight}
                                        onChange={(e) => handleChange(e, index)}
                                    />
                                </div>
                                {index >= 1 && (
                                    <button className='flex items-center bg-[#e3342f] text-white rounded-md h-[24px] w-[24px] justify-center' 
                                        onClick={() => handleRemoveFields(index)}
                                    ><CiSquareRemove className='mr-2 text-white h-[24px] w-[24px]' /></button>
                                )}
                            </div>
                        ))}
                        <div>
                            <button className='h-[42px] flex justify-center items-center gap-[10px] w-[100%] bg-[#F6F8FA] font-[600]' onClick={handleAddFields}> 
                                <span className='h-[20px] w-[20px] block bg-black text-[#fff]'>+</span> Add More Rows
                            </button>
                        </div>
                        <div className="h-[98px] my-[20px] bg-[#80808014] max-w-[700px] m-auto"></div>
                        <div className='flex justify-center gap-3'>
                            <button className='btnlogin text-white py-[10px] px-[10px] sm:px-[40px] my-[20px]' onClick={handleCalcGrade}>Calculate Grade</button>
                            <button className='btnlogin text-white py-[10px] px-[10px] sm:px-[40px] my-[20px]' onClick={handleReset}>Reset</button>
                        </div>
                        <div className='flex bg-[#80808014] max-w-[700px] m-auto items-center my-[20px] min-h-[250px]'>
                            <div></div>
                            <div></div>
                        </div>
                        {open && (
                            <div className='w-[100%]'>
                                <h6 className='text-[18px] text-[#420075] font-[600] text-center'>Result</h6>
                                <div className='flex w-[100%] text-start my-[20px]'>
                                    <h6 className='md:w-[200px] w-[100%] border border-[#E3E7ED] text-sm bg-[#F6F8FA] px-[16px] py-[8px]'>Average Grade</h6>
                                    <h6 className=' w-[100%] border border-[#E3E7ED] px-[16px] py-[8px] text-sm'>{countPer}</h6>
                                </div>
                            </div>
                        )}
                        <div className='w-full lg:w-[900px] mt-[15px] m-auto'>
                            <div className='card p-[15px] mb-[15px] bg-white border rounded-lg'>
                                <div>
                                    <h3 className='text-[18px] font-bold mb-[0px] text-[#420075]'>About Grade Calculator</h3>
                                    <p className='text-sm py-[10px]'>The grade calculator on smallSEOtools allows individuals to make grade calculations with a few clicks only. Whether you are a college student, instructor, or student, this facility certainly supports you in finding the grade of a course based on a weighted average. Guessing what your grade will be at the end of the semester is a common thing among students. Instead of making wild guesses, try this free online grade calculator and find your grade without making any manual calculations. Also, the facility is compatible with all devices and operating systems, allowing you to calculate your grades with ease. </p>
                                </div>
                                <div>
                                    <h3 className='text-[18px] font-bold mb-[0px] text-[#420075]'>How to Use Grades Calculator? </h3>
                                    <p className='text-sm py-[10px]'>Finding grades using our grades calculator is straightforward. The following methods will allow you to calculate grades with our tool effortlessly.</p>
                                    <div>
                                        <h4 className='text-[14px] py-[5px] font-[600] text-[#420075]'>Grade Calculation Using Letter Grade Calculator </h4>
                                        <p>Follow the simple steps to make a grade calculation: </p>
                                        <div>
                                            <ul className='list-disc ml-[40px]'>
                                                <li className='text-sm py-[2.5px]'>Access our free grade calculator using your web browser</li>
                                                <li className='text-sm py-[2.5px]'>Choose “Letters” Grade Type from the given options</li>
                                                <li className='text-sm py-[2.5px]'>Insert the Assessment types (quiz, test, midterm, homework, etc.)</li>
                                                <li className='text-sm py-[2.5px]'>Add your grades in the Grade columns. </li>
                                                <li className='text-sm py-[2.5px]'>Now, add the percentage weight for each assignment</li>
                                                <li className='text-sm py-[2.5px]'>Hit the Calculate button to find the Grades based on Letters.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className='text-[14px] py-[5px] font-[600] text-[#420075]'>Calculate Grades Using Formula </h4>
                                        <p className='text-sm py-[5px]'>The formula for calculating grades based on letters manually is: </p>
                                        <p className='text-sm py-[5px]'>Grade = (g1×w1+ g2×w2+ g3×w3+...+ gn×wn) ÷ (w1+w2+w3+...+wn) </p>
                                        <p className='text-sm py-[5px]'>Where.</p>
                                        <p className='text-sm py-[5px]'>gn: grade of the nth assessment</p>
                                        <p className='text-sm py-[5px]'>wn: weight of the nth assessment</p>
                                    </div>
                                    <div>
                                        <h4 className='text-[14px] py-[5px] font-[600] text-[#420075]'>Example of Letter Grade Calculation</h4>
                                        <div>
                                            <p className='text-sm py-[5px]'>Add your grades in letters like the following table,</p>
                                            <table className='table-auto my-[20px] w-[100%] border-[1px] text-sm Conversion_table border-[#ccc]'>
                                                <thead>
                                                    <tr>
                                                        <th className='text-start font-normal text-[14px]'>Assessment</th>
                                                        <th className='text-start font-normal text-[14px]'>Grades</th>
                                                        <th className='text-start font-normal text-[14px]'>Weighted Percentage</th>

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Quiz</td>
                                                        <td>A</td>
                                                        <td>20%</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Midterm</td>
                                                        <td>B</td>
                                                        <td>30%</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Homework</td>
                                                        <td>A+</td>
                                                        <td>20%</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Final</td>
                                                        <td>A</td>
                                                        <td>30%</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className='text-[14px] py-[5px] font-[600]'>The class grade would be:</h4>
                                        <p className='text-sm py-[5px]'>Grade = (4*20+3.33*30+4.33*20+4*30) ÷ (20+30+20+30)</p>
                                        <p className='text-sm py-[5px]'>Grade = 3.87</p>
                                        <p className='text-sm py-[5px]'>So.</p>
                                        <p className='text-sm py-[5px]'>Your Current Grade: A- (3.87)</p>
                                        <p className='text-sm py-[5px]'>Grading Scale Used in Calculator</p>
                                    </div>
                                    <div>
                                        <table className='table-auto my-[20px] w-[100%] border-[1px] text-sm Conversion_table border-[#ccc]'>
                                            <thead>
                                                <tr>
                                                    <th className='text-start font-normal text-[14px]'>Letter</th>
                                                    <th className='text-start font-normal text-[14px]'>Percentage</th>
                                                    <th className='text-start font-normal text-[14px]'>Scale</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>A+</td>
                                                    <td>95</td>
                                                    <td>4.33</td>
                                                </tr>
                                                <tr>
                                                    <td>A</td>
                                                    <td>93</td>
                                                    <td>4</td>
                                                </tr>
                                                <tr>
                                                    <td>A+</td>
                                                    <td>90</td>
                                                    <td>3.67</td>
                                                </tr>
                                                <tr>
                                                    <td>B+</td>
                                                    <td>87</td>
                                                    <td>3.33</td>
                                                </tr>
                                                <tr>
                                                    <td>B</td>
                                                    <td>83</td>
                                                    <td>3</td>
                                                </tr>
                                                <tr>
                                                    <td>B-</td>
                                                    <td>80</td>
                                                    <td>2.67</td>
                                                </tr>
                                                <tr>
                                                    <td>C+</td>
                                                    <td>77</td>
                                                    <td>2.33</td>
                                                </tr>
                                                <tr>
                                                    <td>C</td>
                                                    <td>73</td>
                                                    <td>2</td>
                                                </tr>
                                                <tr>
                                                    <td>C-</td>
                                                    <td>70</td>
                                                    <td>1.67</td>
                                                </tr>
                                                <tr>
                                                    <td>D+</td>
                                                    <td>67</td>
                                                    <td>1.33</td>
                                                </tr>
                                                <tr>
                                                    <td>D</td>
                                                    <td>63</td>
                                                    <td>1</td>
                                                </tr>
                                                <tr>
                                                    <td>D-</td>
                                                    <td>60</td>
                                                    <td>0.67</td>
                                                </tr>
                                                <tr>
                                                    <td>F</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div>
                                        <h4>Grade Calculation Using Point Grade Calculator </h4>
                                        <p>To calculate grade based on points with grade points average calculator, simply: </p>
                                        <div>
                                            <ul className='list-disc ml-[40px]'>
                                                <li className='text-sm py-[2.5px]'>Choose “Points” Grade Type from the given options</li>
                                                <li className='text-sm py-[2.5px]'>Enter Your Assessment types </li>
                                                <li className='text-sm py-[2.5px]'>Insert your Points in the Grade columns. </li>
                                                <li className='text-sm py-[2.5px]'>Type the percentage weight for each assignment</li>
                                                <li className='text-sm py-[2.5px]'>Press the Calculate button to find the Grades based on Points.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div>
                                        <h4>Calculate Grades (Points) Using Formula </h4>
                                        <p>The formula for calculating grades on the basis of Points is: </p>
                                        <p>Grade = (g1+g2+g3+...+gn) ÷ (m1+m2+m3+...+mn) </p>
                                        <p>Where,</p>
                                        <p>gn: grade of the nth assessment</p>
                                        <p>mn: max points of the nth assessment</p>
                                    </div>
                                    <div>
                                        <h4>Example of Point Grade Calculation</h4>
                                        <p>Add your grades in letters like the following table,</p>
                                        <div>
                                            <table className='table-auto my-[20px] w-[100%] border-[1px] text-sm Conversion_table border-[#ccc]'>
                                                <thead>
                                                    <tr>
                                                        <th className='text-start font-normal text-[14px]'>Assessment</th>
                                                        <th className='text-start font-normal text-[14px]'>Grades</th>
                                                        <th className='text-start font-normal text-[14px]'>Max Points</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Quiz</td>
                                                        <td>60</td>
                                                        <td>60</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Midterm</td>
                                                        <td>80</td>
                                                        <td>100</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Homework</td>
                                                        <td>90</td>
                                                        <td>100</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Final</td>
                                                        <td>96</td>
                                                        <td>100</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <div>
                                                <p>The class weighted grade would be: </p>
                                                <p>Grade = (60+80+90+96) ÷ (60+100+100+100)</p>
                                                <p>Grade = 90.56 (360)</p>
                                                <p>So, Current Grade is = 90.56 </p>
                                            </div>
                                            <div>
                                                <h3>Grade Calculation Using Grade Percentage </h3>
                                                <p>Use our grade calculation tool to find your grades by following the mentioned-below steps: </p>
                                                <div>
                                                    <ul className='list-disc ml-[40px]'>
                                                        <li className='text-sm py-[2.5px]'>Choose “Percentage” Grade Type </li>
                                                        <li className='text-sm py-[2.5px]'>Insert Your Assessment types  </li>
                                                        <li className='text-sm py-[2.5px]'>Add your Percentage in the Grade columns.  </li>
                                                        <li className='text-sm py-[2.5px]'>Enter the percentage weight in given fields </li>
                                                        <li className='text-sm py-[2.5px]'>Tap on the Calculate button to find the Grades based on Percentage.</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h3>Calculate Grades (%) Using Formula</h3>
                                                    <p>The formula for calculating grades on the basis of Percentage is: </p>
                                                    <p>Grade = (g1×w1+ g2×w2+ g3×w3+...+ gn × wn) ÷ (w1+w2+w3+...+wn)</p>
                                                    <p>gn: grade of the nth assessment</p>
                                                    <p>wn: weight of the nth assessment</p>
                                                </div>
                                                <div>
                                                    <h3>Example of Percentage Grade Calculation </h3>
                                                    <table className='table-auto my-[20px] w-[100%] border-[1px] text-sm Conversion_table border-[#ccc]'>
                                                        <thead>
                                                            <tr>
                                                                <th className='text-start font-normal text-[14px]'>Assessment</th>
                                                                <th className='text-start font-normal text-[14px]'>Grades</th>
                                                                <th className='text-start font-normal text-[14px]'>Weight</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>Quiz</td>
                                                                <td>80%</td>
                                                                <td>20%</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Midterm</td>
                                                                <td>81%</td>
                                                                <td>30%</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Homework</td>
                                                                <td>82%</td>
                                                                <td>20%</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Final</td>
                                                                <td>78%</td>
                                                                <td>30%</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <div>
                                                        <p>The class weighted grade would be: </p>
                                                        <p>Grade = (80x20+81x30+82x20+78x30) ÷ (20+30+20+30)</p>
                                                        <p>Grade = 80.1%</p>
                                                        <p>So. </p>
                                                        <p>Current Grade is = 80.1% </p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h3>Features of Grade Average Calculator</h3>
                                                    <p>The internet is flooded with tons of grade finding utilities. Still, most of them fail to satisfy their users due to complex interfaces or limitations on the usage of all features. However, this grade percentage calculator is free of all such intricacies and offers 100% accurate results instantly. The major features of this grade average calculator are shared below.</p>
                                                    <div>
                                                        <h4>Grading Scale </h4>
                                                        <p>This exclusive feature of SmallSEOTools’ grade calculator allows users to calculate their performance by the grading scale. No manual calculation is required to make for calculating grades using this tool at all. </p>
                                                    </div>
                                                    <div>
                                                        <h4>Quick Grade Calculator </h4>
                                                        <p>This online utility offers the quickest output. simply enter the values in the given fields, press the Calculate button, and get grade calculation results instantly.  </p>
                                                    </div>
                                                    <div>
                                                        <h4>Access from Anywhere  </h4>
                                                        <p>This grading calculator can be used from any corner of the planet at any time. Users only require an internet connection to access this facility to calculate grades. </p>
                                                    </div>
                                                    <div>
                                                        <h4>Easy to Use</h4>
                                                        <p>Don’t you have any experience using online grading calculators? No worries. The simple-to-understand layout of this facility saves you from facing any ambiguity and enables you to calculate percentage grades effortlessly. </p>
                                                        <p>Don’t you have any experience using online grading calculators? No worries. The simple-to-understand layout of the grades calculator saves you from facing any ambiguity and enables you to calculate grades percentage. </p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h3>Calculate What-If Grades with a Grading Calculator </h3>
                                                    <p>What-if grades enable students to find their total grade by inserting hypothetical grades for assignments. This study helps student analyze their current performance and find out the areas and subject that requires more attention. </p>
                                                    <p className='py-[10px]'>Below is an example to learn how to make a what-if grade calculation. </p>
                                                    <p className='font-[600]'>Example:</p>
                                                    <p>Grades for Alex White</p>
                                                    <table className='table-auto my-[20px] w-[100%] border-[1px] text-sm Conversion_table border-[#ccc]'>
                                                        <thead>
                                                            <tr>
                                                                <th className='text-start font-normal text-[14px]'>Assessment</th>
                                                                <th className='text-start font-normal text-[14px]'>Due Date</th>
                                                                <th className='text-start font-normal text-[14px]'>Score/Total</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>Fundamentals of Geography</td>
                                                                <td>19 June 2023</td>
                                                                <td>23/30</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Course Introduction</td>
                                                                <td>21 June 2023</td>
                                                                <td>18/20</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Position Paper</td>
                                                                <td>22 June 2023</td>
                                                                <td>16/20</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Video Assignment</td>
                                                                <td>23 June 2023</td>
                                                                <td>18/20</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <p>Here, the score entered in video assignment is hypothetical score. This will help Alex find out the overall grade for the term. </p>
                                                    <p>Note: You can also calculate your assignment grades with the help of our assignment grade calculator.</p>
                                                </div>
                                                <div>
                                                    <h3>How Does this Weighted Grade Calculator Work?</h3>
                                                    <p>Our course grade calculator is the perfect utility that makes grade calculation a no-uphill task for its users. The advanced algorithms this tool is based on are capable of handling lengthy and ambiguous calculations and give users flawless and reliable output within a fraction of a second. Entering the marks on this utility is all they need to do themselves. The utility itself will perform all remaining processes. Moreover, the grade percentage calculator accepts percentage, letter, and point grades as input. The output generated from this grade calculator can be examined manually or through any other calculator.</p>
                                                    <div>
                                                        <h4>Beneficiaries of Exam Grade Calculator</h4>
                                                        <p>The major beneficiaries of the grade calculator are discussed below. </p>
                                                    </div>
                                                    <div>
                                                        <h4>Students</h4>
                                                        <p>Evaluation of current performance and striving to improve it is the desire of almost every student. A grade calculator supports students in this regard and allows them to find grades based on their current performance. An advanced grade percentage calculator enables them to compare their grades with their expected results. The study leads them to make efforts on their deficiencies and uplift their academic grades in the future.  </p>
                                                        <p>Many students often discuss the upcoming terms’ grades or estimate their grades based on wild guesses. SmallSEOtools’ grading calculator saves them from such frustrations and allows them to find accurate grades without stepping into any intricate process. </p>
                                                    </div>
                                                    <div>
                                                        <h4>Teachers</h4>
                                                        <p>Grading students for their overall performance in the term isn’t an easy chore for teachers. This becomes more hectic and challenging if they don’t have appropriate utilities on their side that support them in making lengthy calculations. </p>
                                                        <p>Teachers often give lectures to different classes, which means they need to evaluate students' performance from multiple classes. Making complete grade reports of multiple classes will require extensive time and effort from teachers, which might be challenging for them to invent because of other crucial pending tasks. But, the assistance of this class grade calculator can save them from making any manual efforts and allow them to grade themselves based on their overall performance adequately. </p>
                                                        <p>The simple and easy-to-learn interface of this utility allows teachers to calculate their students' grades without observing any difficulty. Also, this practice will speed up their performance and allow them to find their students' grades within a few minutes.  </p>
                                                    </div>
                                                    <div>
                                                        <h4>Parents</h4>
                                                       <p>The availability of this online Grade Percentage Calculator offers a helping hand to parents looking for a reliable way to examine their children’s academic performance. This immensely easy-to-use utility enables them to check for their children’s grades swiftly without requiring anyone’s help. Furthermore, using this web-based utility, they can also estimate the expected grades, which leads them to take the required steps to improve their children’s grades in the future. </p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h3 className='my-[10px]'>FAQs</h3>
                                                    <div>
                                                        <h4>What Are Grade Points?</h4>
                                                        <p>Grade points are the points assigned to each course credit concerning the letter grade earned. Besides points, grades can be assigned as letters, ranges, percentages, or as a number out of a possible total.  </p>
                                                    </div>
                                                    <div>
                                                        <h4>How do I calculate Grade?</h4>
                                                        <p>Simply you just need to access our grade average calculator and calculate your grades in a few clicks.</p>
                                                    </div>
                                                    <div>
                                                        <h4>Can I Use a Grading Calculator to Predict My Future GPA? </h4>
                                                        <p>Yes! The free grades calculator lets you find the expected GPA for next semester. Simply add quizzes, tests, midterms, homework, and grades to the grading calculator. The utility will predict future GPA instantly. </p>
                                                    </div>
                                                    <div>
                                                        <h4>Can I Use a Grade Calculator for Any Grading System? </h4>
                                                        <p>Yes! This grade calculator is a perfect tool for all grading systems. In addition, it can provide flawless results, making it the best option for calculating grades.  </p>
                                                    </div>
                                                    <div>
                                                        <h4> Are There Any Limitations to Using a Grade Calculator? </h4>
                                                        <p>Not at all! There is no limit on the usage of this grade point calculator. Users can make countless calculations to find the grade of the current or future semester based on their performance with this tool.  </p>
                                                    </div>
                                                    <div>
                                                        <h4>Can A Grade Calculator Be Used for Non-Academic Purposes? </h4>
                                                        <p>Yes! Companies can use this advanced grade calculator to evaluate their employees’ performance and grade them according to their productivity.  </p>
                                                    </div>
                                                    <div>
                                                        <h4>Are Grade Calculators Free to Use? </h4>
                                                        <p>Yes! The online grade calculator is entirely free to use. Also, you don’t require to go through any account creation or download any software to access this free grades calculator. </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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

export default GradeCalculator