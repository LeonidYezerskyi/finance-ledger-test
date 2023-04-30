import React from 'react'
import css from './Footer.module.css'
import socialSprite from '../../images/footer/socialSprite.svg'


const FooterSocialNetworks = () => {
    return (
        <ul className={css.list}>
            <li>
                <a href="https://www.facebook.com/" aria-label="link to facebook">
                    <svg className={css.svg} width="35" height="35">
                        <use href={`${socialSprite}#icon-facebook`}></use>
                    </svg>
                </a>
            </li>
            <li>
                <a href="https://www.twitter.com/" aria-label="link to twitter">
                    <svg className={css.svg} width="35" height="35">
                        <use href={`${socialSprite}#icon-twitter`}></use>
                    </svg>
                </a>
            </li>
            <li>
                <a href="https://www.youtube.com/" aria-label="link to youtube">
                    <svg className={css.svg} width="40" height="35">
                        <use href={`${socialSprite}#icon-youtube`}></use>
                    </svg>
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/" aria-label="link to linkedin">
                    <svg className={css.svg} width="31" height="35">
                        <use href={`${socialSprite}#icon-linkedin`}></use>
                    </svg>
                </a>
            </li>
        </ul>
    )
}

export default FooterSocialNetworks