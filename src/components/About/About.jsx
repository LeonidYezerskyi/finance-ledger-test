import React from 'react'
import css from './About.module.css'
import people from '../../images/about/people.jpg'
import peopleTablet from '../../images/about/peopleTablet.jpg'
import peopleDesk from '../../images/about/peopleDesk.jpg'


import { useMedia } from 'react-use';

const About = () => {
    const isWide = useMedia('(max-width: 767.9px)');
    const isWide2 = useMedia('(min-width: 1360px)');

    return (
        <div>
            <div className={css.wrapper}>
                {isWide ? (<img className={css.img} src={people} alt="people" />) :
                    (<img className={css.img} src={isWide2 ? (peopleDesk) : (peopleTablet)} alt="peopleTablet" />)}
                <div className={css.infoWrapper}>
                    <p className={css.subtitle}>What you are looking for</p>
                    <h2 className={css.title}>We provide bespoke solutions</h2>
                    <p className={css.mainInfo}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum illum dolore explicabo ab dolores itaque rerum temporibus doloribus iste maiores deleniti?
                    </p>
                    <button className={css.button} type='button'>Read More</button>
                </div>
            </div>
        </div>
    )
}

export default About