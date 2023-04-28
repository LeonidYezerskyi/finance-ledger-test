import React from 'react';
import { useMedia } from 'react-use';
import logo from '../../images/logo/logo.svg';
import logoTablet from '../../images/logo/logoTablet.svg';
import css from './Header.module.css'

const Header = () => {
    const isWide = useMedia('(max-width: 767.9px)');

    return (
        <div className={css.header}>
            <div className={css.logo}>
                <a href="/">
                    {isWide ? (<img src={logo} alt="logo" width="246.31" />) :
                        (<img src={logoTablet} alt="logoTablet" width="297" />)}
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