import { NavLink } from 'react-router-dom'

function navbar() {
    const baseStyles = "p-2 text-center text-[20px] sm:text-2xl text-bold border-black w-28 sm:w-36";
    const activeStyles = "text-white bg-site_red";
    const inactiveStyles = "border-site_background";

    return (
        <>
            <div className="flex mt-16">
                <div className="flex mx-auto border-2 border-black rounded-full text-center">

                    <NavLink 
                    to="/" 
                    className={({ isActive }) => 
                        `${baseStyles} ${isActive ? `${activeStyles} rounded-l-full border-r-2` : `rounded-l-full border-r-2 ${inactiveStyles}`}`
                    }>
                        <p>Hjem</p>
                    </NavLink>

                    <NavLink 
                    to="/projects" 
                    className={({ isActive }) => 
                        `${baseStyles} ${isActive ? `${activeStyles} border-l-2 border-r-2` : `border-l-2 border-r-2 ${inactiveStyles}`}`
                    }>
                        <p>Prosjekter</p>
                    </NavLink>   

                    <NavLink 
                    to="/random" 
                    className={({ isActive }) => 
                        `${baseStyles} ${isActive ? `${activeStyles} rounded-r-full border-l-2` : `rounded-r-full border-l-2 ${inactiveStyles}`}`
                    }>
                        <p>Tilfeldig</p>
                    </NavLink>

                </div>
            </div>
        </>
    )
}

export default navbar