import GitHub_mark from '../assets/github-mark.png'
import Navbar from './navbar'

function header() {
    return (
        <>
            <div className="flex"> {/* start container*/}
                <a className="mt-4 ml-4" href="https://github.com/alfkristian02/nettside"><img className="w-8 sm:w-10" src={GitHub_mark} alt="GitHub logo" /></a>
                <h1 className="flex-1 text-center mx-auto mt-14 text-4xl sm:mt-24 sm:text-7xl">Velkommen!</h1>
                <span className="mt-4 ml-4 w-8 sm:w-10"></span>
            </div>

            <Navbar></Navbar>
        </>
    )
}

export default header