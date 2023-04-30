import React from 'react'
import cases1Jpg from '../../images/cases/cases1.jpg'
import cases1Jpg2x from '../../images/cases/cases1@2x.jpg'
import cases1Webp from '../../images/cases/cases1.webp'
import cases1Webp2x from '../../images/cases/cases1@2x.webp'

import cases2Jpg from '../../images/cases/cases2.jpg'
import cases2Jpg2x from '../../images/cases/cases2@2x.jpg'
import cases2Webp from '../../images/cases/cases2.webp'
import cases2Webp2x from '../../images/cases/cases2@2x.webp'

import cases3Jpg from '../../images/cases/cases3.jpg'
import cases3Jpg2x from '../../images/cases/cases3@2x.jpg'
import cases3Webp from '../../images/cases/cases3.webp'
import cases3Webp2x from '../../images/cases/cases3@2x.webp'

import cases4Jpg from '../../images/cases/cases4.jpg'
import cases4Jpg2x from '../../images/cases/cases4@2x.jpg'
import cases4Webp from '../../images/cases/cases4.webp'
import cases4Webp2x from '../../images/cases/cases4@2x.webp'

import cases5Jpg from '../../images/cases/cases5.jpg'
import cases5Jpg2x from '../../images/cases/cases5@2x.jpg'
import cases5Webp from '../../images/cases/cases5.webp'
import cases5Webp2x from '../../images/cases/cases5@2x.webp'

import cases6Jpg from '../../images/cases/cases6.jpg'
import cases6Jpg2x from '../../images/cases/cases6@2x.jpg'
import cases6Webp from '../../images/cases/cases6.webp'
import cases6Webp2x from '../../images/cases/cases6@2x.webp'

import css from './Cases.module.css'

const Cases = () => {
    return (
        <div id="Cases" className={css.wrapper}>
            <p className={css.upperTitle}>This is what we do</p>
            <h2 className={css.title}>Business Cases</h2>
            <p className={css.info}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sapiente!</p>
            <ul className={css.gridImages}>
                <li>
                    <a href={cases1Jpg} data-lightbox="cases">
                        <picture>
                            <source
                                srcSet={`${cases1Webp} 1x, ${cases1Webp2x} 2x`}
                                type="image/webp"
                            />
                            <source
                                srcSet={`${cases1Jpg} 1x, ${cases1Jpg2x} 2x`}
                                type="image/jpeg"
                            />
                            <img className={css.img} src={cases1Jpg} alt="cases1" />
                        </picture>
                    </a>
                </li>
                <li>
                    <a href={cases2Jpg} data-lightbox="cases">
                        <picture>
                            <source
                                srcSet={`${cases2Webp} 1x, ${cases2Webp2x} 2x`}
                                type="image/webp"
                            />
                            <source
                                srcSet={`${cases2Jpg} 1x, ${cases2Jpg2x} 2x`}
                                type="image/jpeg"
                            />
                            <img className={css.img} src={cases2Jpg} alt="cases2" />
                        </picture>
                    </a>
                </li>
                <li>
                    <a href={cases3Jpg} data-lightbox="cases">
                        <picture>
                            <source
                                srcSet={`${cases3Webp} 1x, ${cases3Webp2x} 2x`}
                                type="image/webp"
                            />
                            <source
                                srcSet={`${cases3Jpg} 1x, ${cases3Jpg2x} 2x`}
                                type="image/jpeg"
                            />
                            <img className={css.img} src={cases3Jpg} alt="cases3" />
                        </picture>
                    </a>
                </li>
                <li>
                    <a href={cases4Jpg} data-lightbox="cases">
                        <picture>
                            <source
                                srcSet={`${cases4Webp} 1x, ${cases4Webp2x} 2x`}
                                type="image/webp"
                            />
                            <source
                                srcSet={`${cases4Jpg} 1x, ${cases4Jpg2x} 2x`}
                                type="image/jpeg"
                            />
                            <img className={css.img} src={cases4Jpg} alt="cases4" />
                        </picture>
                    </a>
                </li>
                <li>
                    <a href={cases5Jpg} data-lightbox="cases">
                        <picture>
                            <source
                                srcSet={`${cases5Webp} 1x, ${cases5Webp2x} 2x`}
                                type="image/webp"
                            />
                            <source
                                srcSet={`${cases5Jpg} 1x, ${cases5Jpg2x} 2x`}
                                type="image/jpeg"
                            />
                            <img className={css.img} src={cases5Jpg} alt="cases5" />
                        </picture>
                    </a>
                </li>
                <li>
                    <a href={cases6Jpg} data-lightbox="cases">
                        <picture>
                            <source
                                srcSet={`${cases6Webp} 1x, ${cases6Webp2x} 2x`}
                                type="image/webp"
                            />
                            <source
                                srcSet={`${cases6Jpg} 1x, ${cases6Jpg2x} 2x`}
                                type="image/jpeg"
                            />
                            <img className={css.img} src={cases6Jpg} alt="cases6" />
                        </picture>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Cases