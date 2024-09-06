import GitHub_mark from '../assets/github-mark.png'
import Menu from './menu.tsx'

function header() {
    return (
        <>
            <div className="flex m-10"> {/* start container*/}
                <a className="mt-auto mb-auto" href="https://github.com/alfkristian02/nettside"><img className="h-6" src={GitHub_mark} alt="GitHub logo" /></a>
                <h1 className="text-6xl flex-1 text-center">Velkommen!</h1>
                <div className="mt-auto mb-auto"><Menu /></div>
            </div>
            <hr className="m-4 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
        </>
    )
}

export default header