import React from "react";
import {Link} from "react-router-dom";
import './HeaderMenu.css';

const HeaderMenu = (props) => {
    return (
        <div className='header-menu-container'>
            <nav className='header-menu-container__nav-menu'>
                <Link to='/main' className='nav-menu__nav-item'>Главная станица</Link>
                <Link to='/tasks' className='nav-menu__nav-item'>Список задач</Link>

            </nav>
        </div>
    )
}

export default HeaderMenu;
