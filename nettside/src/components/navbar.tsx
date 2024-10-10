import { NavLink } from 'react-router-dom'

function navbar() {
    
    // const navInfo = [
    //     {
    //         name: "Home",
    //         url: "/"
    //     },
    //     {
    //         name: "Projects",
    //         url: "/projects"
    //     },
    //     {
    //         name: "Random",
    //         url: "/random"
    //     }
    // ]

    // const navItems = navInfo.map(navItem => <NavLink
    //     to={navItem.url}
    //     key={navItem.name}
    //     className= {({ isActive }) => isActive ? "underline" : "px-2 text-2xl"}
    //     >
    //     {navItem.name}
    //     </NavLink>
    // )
    
    return (
        <>
            <div className="flex mt-16">
                <div className="flex mx-auto border-2 border-black rounded-full text-center">

                    <NavLink 
                    to="/" 
                    className={({ isActive }) => isActive ? "text-white bg-site_red rounded-l-full border-r-2 border-black p-2 w-36" : "rounded-l-full border-r-2 border-site_background p-2 w-36"}>
                        <span className="text-2xl p-6">Home</span>
                    </NavLink>

                    <NavLink 
                    to="/projects" 
                    className={({ isActive }) => isActive ? "text-white bg-site_red border-l-2 border-r-2 border-black p-2 w-36" : "border-l-2 border-r-2 border-site_backround p-2 w-36"}>
                        <span className="text-2xl p-6 w-12">Projects</span>
                    </NavLink>   

                    <NavLink 
                    to="/random" 
                    className={({ isActive }) => isActive ? "text-white bg-site_red rounded-r-full border-l-2 border-black p-2 w-36" : "rounded-r-full border-l-2 border-site_background p-2 w-36"}>
                        <span className="text-2xl p-6 w-12">Random</span>
                    </NavLink>
                </div>
            </div>
        </>
    )
}

export default navbar