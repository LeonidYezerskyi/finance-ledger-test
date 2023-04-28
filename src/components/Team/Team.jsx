import React from 'react'
import css from './Team.module.css'
import person1 from '../../images/team/person1.jpg'
import person2 from '../../images/team/person2.jpg'
import person3 from '../../images/team/person3.jpg'


const Team = () => {
    return (
        <div className={css.wrapper}>
            <p className={css.upperTitle}>Who we are</p>
            <h2 className={css.title}>Our Professional Team</h2>
            <p className={css.info}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sapiente!</p>
            <ul className={css.list}>
                <li>
                    <img src={person1} alt="person1" />
                    <p className={css.name}>John Doe</p>
                    <p className={css.position}>President</p>
                </li>
                <li>
                    <img src={person2} alt="person2" />
                    <p className={css.name}>Jane Doe</p>
                    <p className={css.position}>Vice President</p>
                </li>
                <li>
                    <img src={person3} alt="person3" />
                    <p className={css.name}>Steve Smith</p>
                    <p className={css.position3}>Marketing Head</p>
                </li>
            </ul>
        </div>
    )
}

export default Team