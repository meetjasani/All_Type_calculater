import React, { useState } from 'react'
import { CiSquareRemove } from 'react-icons/ci'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Footer from '@/Components/Footer/Footer'
import Header from '@/Components/Header/Header'

function GPACalculator() {
    const [open, setOpen] = useState(false)
    const [grades, setGrades] = useState([
        {grade: "A+", val:'4.3'},
        {grade: "A", val:'4'},
        {grade: "A-", val:'3.7'},
        {grade: "B+", val:'3.3'},
        {grade: "B", val:'3'},
        {grade: "B-", val:'2.7'},
        {grade: "C+", val:'2.3'},
        {grade: "C", val:'2'},
        {grade: "C-", val:'1.7'},
        {grade: "D+", val:'1.3'},
        {grade: "D", val:'1'},
        {grade: "D-", val:'0.7'},
        {grade: "F", val:'0'}
    ])
    const [values, setValues] = useState([
        { course: 'English', credit: '4', grade: '4' },
        { course: 'Math', credit: '3', grade: '2.3' },
        { course: 'Subject Name', credit: '3', grade: '4.3' },
        { course: 'Subject Name', credit: '3', grade: '4.3' }
    ])
    const [gradePoints, setGradePoints] = useState({
        total: '',
        totalCredit: '',
        overallGpa: ''
    })
    const [data, setData] = useState([])
    
    const handleChange = (e, index) => {
        const { name, value } = e.target
        const updatedValues = [...values]
        updatedValues[index] = { ...updatedValues[index], [name]: value }
        setValues(updatedValues)
    }
    const handleAddFields = () => {
        setValues([
            ...values,
            { course: 'Subject Name', credit: '3', grade: '4.3' },
            { course: 'Subject Name', credit: '3', grade: '4.3' }
        ])
    }
    const handleRemoveFields = (index) => {
        const value  = [...values]
        value.splice(index, 1)
        setValues(value)
    }
    const handleResetFields = () => {
        if(values.length === 3){
            const updatedValues = [
                { course: 'English', credit: '4', grade: '4' },
                { course: 'Math', credit: '3', grade: '2.3' },
                { course: 'Subject Name', credit: '3', grade: '4.3' },
            ]
            setValues([...updatedValues])
        } else{
            const updatedValues = [
                { course: 'English', credit: '4', grade: '4' },
                { course: 'Math', credit: '3', grade: '2.3' },
                { course: 'Subject Name', credit: '3', grade: '4.3' },
                { course: 'Subject Name', credit: '3', grade: '4.3' },
                ...values.slice(4).map(field => ({
                  course: 'Subject Name',
                  credit: '3',
                  grade: '4.3'
                }))
            ]
            setValues([...updatedValues])
        }
    }
    
    const validCourses = [];
    const handleClick = () => {
        let creaditTotal = 0
        let totals = 0

        values.forEach((course) => {
            const { credit, grade } = course
            if (!isNaN(credit) && !isNaN(grade)) {
                totals += parseFloat(credit || 0) * parseFloat(grade || 0)
                creaditTotal += parseFloat(credit || 0)
            }
        })
        for (let i = 0; i < values.length; i++) {
            const { course, credit } = values[i]
            let isCourseValid = true;
            if (course === '') {
                setOpen(false)
                toast.error('Course field is required.')
                isCourseValid = false;
                break
            }else if(credit === ''){
                setOpen(false)
                toast.error('Credit field is required.')
                isCourseValid = false;
                break
            }else{
                validCourses.push(values[i]);
                setData(validCourses)
                setOpen(true)
                const gpa = (totals / creaditTotal).toFixed(2)
                setGradePoints({
                    total: totals.toFixed(2), 
                    totalCredit: creaditTotal, 
                    overallGpa: gpa
                })
            }
        }
    }
    return (
        <>
            <Header />
            <ToastContainer theme="colored"/>
            <div className='h-[98px] my-[20px] bg-[#80808014] max-w-[900px] m-auto'></div>
            <div className='mainbg max-w-[1260px] m-auto px-[15px] py-[10px]'>
                <div>
                    <div className='text-center'>
                        <h1 className='text-[16px] sm:text-[22px] text-[#420075] md:text-2xl font-bold mb-[10px]'>GPA Calculator</h1>
                        <p className='text-sm md:w-[70%] w-[100%] mx-auto font-normal'>GPA calculator will help you calculate GPA. Generate a GPA report by adding course, credit and grade.</p>
                    </div>
                    <div className='flex bg-[#80808014] max-w-[700px] m-auto items-center my-[20px] min-h-[250px]'>
                        <div></div>
                        <div></div>
                    </div>
                    <div className='bg-[#fff] md:px-[48px] md:py-[28px] py-[20px] lg:w-[900px] mx-auto'>
                        <div>
                            <div className=''>
                                <div className='flex'>
                                    <div className='w-[33.33%]'>
                                        <label className='font-[600] text-sm text-start' htmlFor="">Course</label>
                                    </div>
                                    <div className='w-[33.33%]'>
                                        <label className='font-[600] text-sm text-start' htmlFor="">Credit</label>
                                    </div>
                                    <div className='w-[33.33%]'>
                                        <label className='font-[600] text-sm text-start' htmlFor="">Grade</label>
                                    </div>
                                </div>
                                {values.map((value, index) => (
                                    <div className='justify-between flex gap-[10px]' key={index}>
                                        <input type="text" name='course' className='w-[100%] p-[10px] my-[10px] border border-[#ccc] outline-none' 
                                            value={value.course} 
                                            onChange={(e) => handleChange(e, index)}
                                        />
                                        <input type="number" name='credit' className='w-[100%] p-[10px] my-[10px] border border-[#ccc] outline-none' 
                                            value={value.credit} 
                                            onChange={(e) => handleChange(e, index)}
                                        />
                                        <select name='grade' className='w-[100%] p-[10px] my-[10px] border border-[#ccc] outline-none'
                                            defaultValue='4'
                                            value={value.grade} 
                                            onChange={(e) => handleChange(e, index)}
                                        >
                                            {grades.map(({grade, val}) =>(
                                                <option key={val} value={val}>{grade}</option>
                                            ))}
                                        </select>
                                        {index < 3 ? '' : (
                                            <button className='flex items-center bg-[#e3342f] text-white rounded-md h-[24px] w-[24px] justify-center' 
                                                onClick={() => handleRemoveFields(index)}
                                            ><CiSquareRemove className='mr-2 text-white h-[24px] w-[24px]' /></button>
                                        )}
                                    </div>
                                ))}
                                <div>
                                    <button className='w-[100%] p-[12px] bg-[#F6F8FA] font-[600] flex gap-[10px] justify-center items-center' onClick={handleAddFields}> 
                                        <span className='w-[20px] h-[20px] bg-black block text-white'>+</span> Add More Rows
                                    </button>
                                </div>
                                <div className="h-[98px] my-[20px] bg-[#80808014] max-w-[700px] m-auto"></div>
                                <div className='flex justify-center gap-3'>
                                    <button className='btnlogin text-white py-[10px] px-[10px] sm:px-[40px] my-[20px]' onClick={handleClick}>Calculate</button>
                                    <button className='btnlogin text-white py-[10px] px-[10px] sm:px-[40px] my-[20px]' onClick={handleResetFields}>Reset</button>
                                </div>
                                <div className='flex bg-[#80808014] max-w-[700px] m-auto items-center my-[20px] min-h-[250px]'>
                                    <div></div>
                                    <div></div>
                                </div>
                                <div>
                                    {open && (
                                        <div>
                                            <h3 className='text-center'>Result</h3>
                                            <table className='table-auto my-[20px] w-[100%] border-[1px] text-sm Conversion_table border-[#ccc]'>
                                                <thead className='bg-[#F6F8FA]'>
                                                    <tr>
                                                        <th className='text-start text-[14px] font-[600]'>Course</th>
                                                        <th className='text-start text-[14px] font-[600]'>Credit</th>
                                                        <th className='text-start text-[14px] font-[600]'>Grade</th>
                                                        <th className='text-start text-[14px] font-[600]'>Grade Point</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {data.map((course, index) => {
                                                        const { credit, grade } = course
                                                        const parsedCredit = parseFloat(credit)
                                                        const parsedGrade = parseFloat(grade).toFixed(1)
                                                        const result = isNaN(parsedCredit) || isNaN(parsedGrade) ? 0 : parsedCredit * parsedGrade
                                                        return (
                                                            <tr key={index}>
                                                                <td>{course.course}</td>
                                                                <td>{credit}</td>
                                                                <td>{grade}</td>
                                                                <td>{`${credit}*${grade}`} = {result.toFixed(2)}</td>
                                                            </tr>
                                                        )
                                                    })}
                                                </tbody>
                                            </table>
                                            <table className='table-auto my-[20px] w-[100%] border-[1px] text-sm Conversion_table border-[#ccc]'>
                                                <thead className='bg-[#F6F8FA]'>
                                                    <tr>
                                                        <th className='text-start text-[14px] font-[600]'>Total Credits</th>
                                                        <th className='text-start text-[14px] font-[600]'>Overall GPA</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>{gradePoints.totalCredit}</td>
                                                        <td>{`${gradePoints.total}*${gradePoints.totalCredit}`}={gradePoints.overallGpa}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    )}
                                    <div>
                                        <div className='w-full lg:w-[900px] mt-[15px] m-auto'>
                                            <div className='card p-[15px] mb-[15px] bg-white border rounded-lg'>
                                                <div>
                                                    <h3 className='text-[18px] font-bold mb-[0px] text-[#420075]'>About GPA Calculator</h3>
                                                    <p className='text-sm py-[10px]'>The GPA calculator on SmallSEOTools is an online utility for the assistance of students in calculating GPA. Whether you want to evaluate your GPA for a certain course or an entire semester, you can get your hands on this grade point average calculator and get accurate results instantaneously. Students frequently discuss their upcoming semester's GPA with their fellows or estimate their GPA using wild estimations. Instead of frustrating yourself, you can turn to the online GPA calculator and calculate your GPA without any hassle.</p>
                                                    <div className=''>
                                                        <h4>Calculate GPA without Restrictions</h4>
                                                        <p>The grade point average calculator helps you perform gpa calculation as many times as you want without imposing any restrictions. This tool is compatible with all kinds of devices; you can use it to calculate your GPA anytime, anywhere.</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h3>How to calculate gpa online?</h3>
                                                    <p>The process of GPA calculation is quite easy using our GPA calculator online. Just follow the simple steps given below:</p>
                                                    <div>
                                                        <p>1. Enter the Course Name you have taken in a semester in the first column.</p>
                                                        <p>2. Enter Grades for Each Course that you expect or have obtained.</p>
                                                        <p>3. Enter Credits for Each Course of the semester.</p>
                                                        <p>4. Click the Calculate Button to get the GPA calculations in a matter of seconds.</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h3>Basic GPA Calculation Formula</h3>
                                                    <p>Calculating GPA on your own can be an extremely tiring process. You have to invest time and effort in order to calculate your GPA accurately. </p>
                                                    <p>Here is the formula you can use to calculate GPA:</p>
                                                    <p>Semester GPA = Total Grade Points / Total Credit Hours</p>
                                                    <p>To calculate your GPA with this formula, you have to calculate your grade points first. The grade points are calculated by multiplying the course of individual grades with the number of credits hours. After that, the results are added to get a value for total grade points. Once it is done, you need to divide this figure by the total number of credit hours. Its result will be your GPA for the semester.</p>
                                                </div>
                                                <div>
                                                    <h3>Bookmark this Page and Get Your GPA Now!</h3>
                                                    <p>Instead of going through the hassle involved in calculating gpa, just bookmark this grade point average calculator and use it whenever you want! If you have any suggestions for the betterment of the GPA calculator, you can feel free to contact us. We will surely work on implementing them!</p>
                                                </div>
                                                <div>
                                                    <h3>Grades and Quality Points Used by this Calculator</h3>
                                                    <p>GPA is a common indicator used by universities all over the globe to assess and evaluate the academic achievement of students. The grades in the alphabet are converted to numeric values by this semester gpa calculator to help you count GPA. The table given below shows how our gpa counter shows your grades to numeric values:</p>
                                                    <div>
                                                        <table className='table-auto my-[20px] w-[100%] border-[1px] text-sm Conversion_table border-[#ccc]'>
                                                            <thead className='bg-[#F6F8FA]'>
                                                                <tr>
                                                                    <th className='text-start text-[14px] font-normal'>Grades</th>
                                                                    <th className='text-start text-[14px] font-normal'>Numeric Equivalents</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>A+</td>
                                                                    <td>4.3</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>A</td>
                                                                    <td>4</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>A-</td>
                                                                    <td>3.7</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>B+</td>
                                                                    <td>3.3</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>B</td>
                                                                    <td>3</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>B-</td>
                                                                    <td>2.7</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>C+</td>
                                                                    <td>2.3</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>C</td>
                                                                    <td>2</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>C-</td>
                                                                    <td>1.7</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>D-</td>
                                                                    <td>1.3</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>D</td>
                                                                    <td>1</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>D-</td>
                                                                    <td>0.7</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>F</td>
                                                                    <td>0</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h3>FAQs</h3>
                                                    <div>
                                                        <h4>How to calculate gpa of semester?</h4>
                                                        <p>You can calculate letter grade to gpa of any semester with the help of our semester GPA calculator available on SmallSEOTools. By simply submitting your course grades and credit hours, this tool allows you to assess your overall GPA instantly!</p>
                                                    </div>
                                                    <div>
                                                        <h4>What is a Good GPA for University?</h4>
                                                        <p>A good GPA for a university varies from institute to institute. A 3.0 or above GPA is generally considered good for universities, as it stands you at an average “B” grade and gives you eligibility to apply to a wide range of schools.</p>
                                                    </div>
                                                    <div>
                                                        <h4>Is a 3.7 GPA an Average?</h4>
                                                        <p>As per most institutes, a 3.7 GPA is considered an “A-” in grades for the academic performance of the students.</p>
                                                    </div>
                                                    <div>
                                                        <h4>Can I Get into Harvard with a 3.7 GPA?</h4>
                                                        <p>Normally, 3.7 is considered is a good GPA by many universities. Harvard doesn’t have a requirement for a minimum GPA, but due to its high competitiveness, the average GPA to get into Harvard is 3.9.</p>
                                                    </div>
                                                    <div>
                                                        <h4>Is 1.83 a Good GPA?</h4>
                                                        <p>No! a 1.83 GPA isn’t a good GPA at all, as it is below average. 3.0 is considered an average GPA, so anything below it isn’t good. That person must put a lot of efforts to improve their GPA.</p>
                                                    </div>
                                                    <div>
                                                        <h4>What Will Be My GPA After This Semester?</h4>
                                                        <p>Your GPA after this semester depends upon the grades you have scored in the selected courses and the number of credit hours in them. Take advantage of semester GPA calculator to know your estimated GPA.</p>
                                                    </div>
                                                    <div>
                                                        <h4>How to Calculate your overall GPA?</h4>
                                                        <p>Your overall GPA is calculated by dividing your cumulative course hours by your cumulative points. Use our overall GPA calculator and input the hours and points earned in prior courses. The hours, points, and GPA from your most recent semester will be immediately added.</p>
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

export default GPACalculator