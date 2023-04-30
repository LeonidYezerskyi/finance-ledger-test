import React from 'react'
import css from './About.module.css'
import peopleJpg from '../../images/about/people.jpg'
import peopleJpg2x from '../../images/about/people@2x.jpg'
import peopleWebp from '../../images/about/people.webp'
import peopleWebp2x from '../../images/about/people@2x.webp'

const About = () => {

    return (
        <div id="About" className={css.wrapper}>
            <picture>
                <source
                    srcSet={`${peopleWebp} 1x, ${peopleWebp2x} 2x`}
                    type="image/webp"
                />
                <source
                    srcSet={`${peopleJpg} 1x, ${peopleJpg2x} 2x`}
                    type="image/jpeg" />
                <img src={peopleJpg} className={css.img} alt="people" />
            </picture>
            <div className={css.infoWrapper}>
                <p className={css.subtitle}>What you are looking for</p>
                <h2 className={css.title}>We provide bespoke solutions</h2>
                <p className={css.mainInfo}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum illum dolore explicabo ab dolores itaque rerum temporibus doloribus iste maiores deleniti?
                </p>
                <button className={css.button} type='button'>Read More</button>
            </div>
        </div>
    )
}

export default About