import React from 'react'
import web from '../assets/web.png'

function NavBar () {

    return (
        <nav className="nav-flex">
            <img src={web} alt="logo" />
            <p className="nav-txt">my travel journal</p>
        </nav>
    )
}
export default NavBar