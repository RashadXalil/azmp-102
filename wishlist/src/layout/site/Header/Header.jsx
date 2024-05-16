import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import MainContext from '../../../context/context'
const Header = () => {
    const { wishlistItems } = useContext(MainContext)
    return (
        <div className='custom__header'>
            <div className="custom__header__left">
                <h2>Seymur Store</h2>
            </div>
            <div className="custom__header__middle">
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/shop'>Shop</Link>
                    </li>
                </ul>
            </div>
            <div className="custom__header__right">
                <Link to='/wishlist'>Wishlist({wishlistItems.length})</Link>
            </div>
        </div>
    )
}

export default Header