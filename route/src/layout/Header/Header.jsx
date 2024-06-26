import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>

                <li>
                    <Link to='/shop'>Shop</Link>
                </li>
                <li>
                    <Link to='/add'>Add</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header