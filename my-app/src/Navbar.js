import React from 'react'

function Navbar(){
    return (
        <div>
            <nav>
                <div className="logo">Zelle</div>
                <ul className='nav-links'>
                    <li><a>Home</a></li>
                    <li><a>Getting Started</a></li>
                    <li><a>Why Zelle</a></li>
                    <li><a>Survey</a></li>
                    <li><a>Contact</a></li>

                </ul>
            </nav>
        </div>
    )
}
export default Navbar;