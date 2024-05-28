import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <ul className='nav-menu'>
                <li className='nav-item'><Link to='/' >Home</Link></li>
                <li className='nav-item'><Link to='/events' >Events</Link></li>
                <li className='nav-item'><Link to='/speakers' >Speakers</Link></li>
                <li className='nav-item'><Link to='/testimonials' >testimonials</Link></li>
                <li className='nav-item'><Link to='/uniMemeMingles' >uniMemeMingles</Link></li>
                <li className='nav-item'><Link to='/blog' >blog</Link></li>
                <li className='nav-item'><Link to='/uniStyleEventShop' >uniStyleEventShop</Link></li>
            </ul>

            <div className="hamburger">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav>
    )
}
