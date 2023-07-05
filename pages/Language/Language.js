import React from 'react'
import Link from 'next/link'
import { User } from "../../Components/Json/User"

const Language = () => {
    return (
        <>
            <div className='pb-[20px]'>
                <div>
                </div>
                <div className='w-full lg:w-[900px] mt-[15px] m-auto'>
                    <div>
                        {User.map((data) => {
                            return (
                                <div className='card p-[15px] mb-[15px] bg-white border rounded-lg'>
                                    <h3 className='text-[15px] text-[#420075] font-bold mb-[10px]'>{data.title}</h3>
                                    <Link href="" className='text-[#420075] underline font-bold'>{data.link}</Link>
                                    <p className='text-sm font-medium'>{data.subtitle}</p>
                                    <p className='text-sm font-medium mt-[15px] mb-[10px]'>{data.sentence}</p>
                                    <p className='text-sm font-medium mt-[15px] mb-[10px]'>{data.convert}</p>
                                    <p className='text-sm font-medium mt-[15px] mb-[10px]'>{data.note}</p>
                                    <p className='text-sm font-medium mt-[15px]'>{data.example}</p>
                                    <p className='text-sm  mt-[15px] font-bold'>{data.bold}</p>
                                    <p className='text-[10px] font-medium'>{data.small}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Language