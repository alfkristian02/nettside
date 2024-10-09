import { NavLink } from 'react-router-dom'

function navbar() {
    
    const navInfo = [
        {
            name: "Home",
            url: "/"
        },
        {
            name: "Projects",
            url: "/projects"
        },
        {
            name: "Random",
            url: "/random"
        }
    ]

    const navItems = navInfo.map(navItem => <NavLink to={navItem.url} key={navItem.name}>{navItem.name}</NavLink>)
    
    return (
        <>
            <div className="flex">
                <div className="flex-1 text-center">{navItems}
                </div>
            </div>
        </>
    )
}

export default navbar