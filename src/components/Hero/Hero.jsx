import React from 'react'
import css from './Hero.module.css'
import arrow from '../../images/button/arrow-button.svg'

const Hero = () => {
    return (
        <div className={css.heroContainer}>
            <div className={css.textWrapper}>
                <h1 className={css.title}>The Sky Is The Limit</h1>
                <h2 className={css.subtitle}>We provide world class financial assistance</h2>
                <button className={css.button} type='button'>
                    <img className={css.buttonImg} src={arrow} alt="arrow" width='9' />
                    <span>Read More</span>
                </button>
            </div>

        </div>
    )
}

export default Hero