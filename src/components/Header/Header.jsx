import React, { useState, useEffect } from 'react';
import { useMedia } from 'react-use';
import { Link } from 'react-scroll';

import logo from '../../images/logo/logo.svg';
import logoTablet from '../../images/logo/logoTablet.svg';
import css from './Header.module.css'

const Header = () => {
    const isWide = useMedia('(max-width: 767.9px)');
    const [visible, setVisible] = useState(null)

    useEffect(() => {
        function handleScroll() {
            const screenWidth = window.screen.width;

            if (
                (window.scrollY > 120 && screenWidth < 767.9) ||
                (window.scrollY > 70 && screenWidth > 767.9)
            ) {
                setVisible({ opacity: '0.8', background: 'black' })
            } else {
                setVisible({ opacity: '1', background: 'transparent' })
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={css.header} style={visible}>
            <div className={css.logo}>
                <Link to="Home" spy={true} smooth={true} offset={0} duration={100} >
                    {isWide ? (<img src={logo} alt="logo" width="246.31" />) :
                        (<img src={logoTablet} alt="logoTablet" width="297" />)}
                </Link>
            </div>
            <ul className={css.headerNav}>
                <li className={css.headerNavLink}><Link activeClass={css.active} to="Home" spy={true} smooth={true} offset={-70} duration={100} >Home</Link></li>
                <li className={css.headerNavLink}><Link activeClass={css.active} to="About" spy={true} smooth={true} offset={-70} duration={100} >About</Link></li>
                <li className={css.headerNavLink}><Link activeClass={css.active} to="Cases" spy={true} smooth={true} offset={-70} duration={100} >Cases</Link></li>
                <li className={css.headerNavLink}><Link activeClass={css.active} to="Blog" spy={true} smooth={true} offset={-70} duration={100} >Blog</Link></li>
                <li className={css.headerNavLink}><Link activeClass={css.active} to="Contact" spy={true} smooth={true} offset={-100} duration={100} >Contact</Link></li>
            </ul>
        </div>
    )
}

export default Header