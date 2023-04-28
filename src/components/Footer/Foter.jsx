import React from 'react'
import css from './Footer.module.css'
import facebook from '../../images/footer/facebook.svg'
import twitter from '../../images/footer/twitter.svg'
import youtube from '../../images/footer/youtube.svg'
import linkedin from '../../images/footer/linkedin.svg'



const Foter = () => {
    return (
        <div className={css.footerWrapper}>
            <ul className={css.list}>
                <li>
                    <img src={facebook} alt="facebook" />
                </li>
                <li>
                    <img src={twitter} alt="twitter" />
                </li>
                <li>
                    <img src={youtube} alt="youtube" />
                </li>
                <li>
                    <img src={linkedin} alt="linkedin" />
                </li>
            </ul>
            <p className={css.copyright}>Copyright © 2021 - FinanceLedger</p>
        </div>
    )
}

export default Foter