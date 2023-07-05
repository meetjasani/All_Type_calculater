import React from 'react'

const Moretools = () => {
    return (
        <div>
            <div className='flex bg-[#80808014]  max-w-[850px] m-auto items-center my-[20px] min-h-[250px]'>
                <div></div>
                <div></div>
            </div>
            <div className='bg-white card p-5'>
                <h3 className='xl:text-xl lg:text-lg text-base font-medium mb-4'>Most Using Tools</h3>
                <div>
                    <button className='flex items-center pl-4 border-b border-[#420075] py-[10px] w-full xl:text-base text-sm'><span className='h-[10px] w-[10px] rounded-full mr-[10px] bg-[#420075] border flex'></span>Word Counter</button>
                    <button className='flex items-center pl-4 border-b border-[#420075] py-[10px] w-full xl:text-base text-sm'><span className='h-[10px] w-[10px] rounded-full mr-[10px] bg-[#420075] border flex'></span>Spell Checker</button>
                    <button className='flex items-center pl-4 border-b border-[#420075] py-[10px] w-full xl:text-base text-sm'><span className='h-[10px] w-[10px] rounded-full mr-[10px] bg-[#420075] border flex'></span>Text to Image</button>
                </div>
            </div>
            <div className='bg-white card p-5 mt-5'>
                <h3 className='xl:text-xl lg:text-lg text-base font-medium mb-4'>Popular Tools</h3>
                <div>
                    <button className='flex items-center pl-4 border-b border-[#420075] py-[10px] w-full xl:text-base text-sm'><span className='h-[10px] w-[10px] rounded-full mr-[10px] bg-[#420075] border flex'></span>Title case Translator</button>
                    <button className='flex items-center pl-4 border-b border-[#420075] py-[10px] w-full xl:text-base text-sm'><span className='h-[10px] w-[10px] rounded-full mr-[10px] bg-[#420075] border flex'></span>Bold Case Translator</button>
                    <button className='flex items-center pl-4 border-b border-[#420075] py-[10px] w-full xl:text-base text-sm'><span className='h-[10px] w-[10px] rounded-full mr-[10px] bg-[#420075] border flex'></span>Italic Code Translator</button>
                </div>
            </div>
            <div className='sticky top-0'>
                <div className='flex bg-[#80808014]  max-w-[850px] m-auto items-center my-[20px] lg:min-h-[700px] md:min-h-[500px] min-h-[250px]'>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Moretools