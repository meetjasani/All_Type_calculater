import Footer from '@/Components/Footer/Footer'
import Header from '@/Components/Header/Header'
import Diffrenttext from '../Diffrenttext/Diffrenttext'
import Language from '../Language/Language'

const Converttext = () => {


    return (
        <>
            <Header />
            <div className="h-[98px] my-[20px] bg-[#80808014] max-w-[700px] m-auto"></div>
            <div className='mainbg px-[15px] max-w-[1260px] m-auto'>
                <Diffrenttext />
                <Language />
            </div>
            <Footer />

        </>
    )
}

export default Converttext