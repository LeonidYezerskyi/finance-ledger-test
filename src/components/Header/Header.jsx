import React from 'react';
import logo from '../../images/logo/logo.svg';
import css from './Header.module.css'

const Header = () => {
    return (
        <div>
            <div className={css.logo}>
                <a href="/">
                    <img src={logo} alt="logo" width="246.31" />
                </a>
            </div>
            <ul className={css.headerNav}>
                <li className={css.headerNavLink}><a href="/">Home</a></li>
                <li className={css.headerNavLink}><a href="/">About</a></li>
                <li className={css.headerNavLink}><a href="/">Cases</a></li>
                <li className={css.headerNavLink}><a href="/">Blog</a></li>
                <li className={css.headerNavLink}><a href="/">Contact</a></li>
            </ul>
        </div>
    )
}

export default Header