import React from 'react'
import css from './Footer.module.css'
import FooterSocialNetworks from './FooterSocialNetworks'

const Foter = () => {
    return (
        <div className={css.footerWrapper}>
            <FooterSocialNetworks />
            <p className={css.copyright}>Copyright © 2021 - FinanceLedger</p>
        </div>
    )
}

export default Foter