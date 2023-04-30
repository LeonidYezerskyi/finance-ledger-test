import React from 'react'
import css from './Team.module.css'

import person1Jpg from '../../images/team/person1.jpg'
import person1Jpg2x from '../../images/team/person1@2x.jpg'
import person1Webp from '../../images/team/person1.webp'
import person1Webp2x from '../../images/team/person1@2x.webp'

import person2Jpg from '../../images/team/person2.jpg'
import person2Jpg2x from '../../images/team/person2@2x.jpg'
import person2Webp from '../../images/team/person2.webp'
import person2Webp2x from '../../images/team/person2@2x.webp'

import person3Jpg from '../../images/team/person3.jpg'
import person3Jpg2x from '../../images/team/person3@2x.jpg'
import person3Webp from '../../images/team/person3.webp'
import person3Webp2x from '../../images/team/person3@2x.webp'

import TeamSocialNetworks from './TeamSocialNetworks';

const Team = () => {

    return (
        <div className={css.wrapper}>
            <p className={css.upperTitle}>Who we are</p>
            <h2 className={css.title}>Our Professional Team</h2>
            <p className={css.info}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sapiente!</p>
            <ul className={css.gridImages}>
                <li>
                    <div className={css.photoWrapper}>
                        <TeamSocialNetworks />
                        <picture>
                            <source
                                srcSet={`${person1Webp} 1x, ${person1Webp2x} 2x`}
                                type="image/webp"
                            />
                            <source
                                srcSet={`${person1Jpg} 1x, ${person1Jpg2x} 2x`}
                                type="image/jpeg" />
                            <img className={css.img} src={person1Jpg} alt="person1" />
                        </picture>
                    </div>
                    <p className={css.name}>John Doe</p>
                    <p className={css.position}>President</p>
                </li>
                <li>
                    <div className={css.photoWrapper}>
                        <TeamSocialNetworks />
                        <picture>
                            <source
                                srcSet={`${person2Webp} 1x, ${person2Webp2x} 2x`}
                                type="image/webp"
                            />
                            <source
                                srcSet={`${person2Jpg} 1x, ${person2Jpg2x} 2x`}
                                type="image/jpeg" />
                            <img className={css.img} src={person2Jpg} alt="person2" />
                        </picture>
                    </div>
                    <p className={css.name}>Jane Doe</p>
                    <p className={css.position}>Vice President</p>
                </li>
                <li>
                    <div className={css.photoWrapper}>
                        <TeamSocialNetworks />
                        <picture>
                            <source
                                srcSet={`${person3Webp} 1x, ${person3Webp2x} 2x`}
                                type="image/webp"
                            />
                            <source
                                srcSet={`${person3Jpg} 1x, ${person3Jpg2x} 2x`}
                                type="image/jpeg" />
                            <img className={css.img} src={person3Jpg} alt="person3" />
                        </picture>
                    </div>
                    <p className={css.name}>Steve Smith</p>
                    <p className={css.position}>Marketing Head</p>
                </li>
            </ul>
        </div>
    )
}

export default Team