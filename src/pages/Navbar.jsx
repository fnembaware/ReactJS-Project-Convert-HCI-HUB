import React, {useState} from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {

    const [isActive, setIsActive] = useState(false);

    const handleToggleMenu = () => {
        setIsActive(!isActive);
    };

    const handleNavLinkClick = () => {
        setIsActive(false);
    };

    return (
        <nav className='navbar'>
            <ul className={`nav-menu ${isActive ? 'active' : ''}`}>
                <li className='nav-item'><Link to='/'   >Home</Link></li>
                <li className='nav-item'><Link to='/events' onClick={handleNavLinkClick} >Events</Link></li>
                <li className='nav-item'><Link to='/speakers' onClick={handleNavLinkClick} >Speakers</Link></li>
                <li className='nav-item'><Link to='/testimonials' onClick={handleNavLinkClick} >testimonials</Link></li>
                <li className='nav-item'><Link to='/uniMemeMingles' onClick={handleNavLinkClick} >uniMemeMingles</Link></li>
                <li className='nav-item'><Link to='/blog' onClick={handleNavLinkClick} >blog</Link></li>
                <li className='nav-item'><Link to='/uniStyleEventShop' onClick={handleNavLinkClick} >uniStyleEventShop</Link></li>
            </ul>

            <div className={`hamburger ${isActive ? 'active' : ''}`} onClick={handleToggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav>
    )
}

export default Navbar
