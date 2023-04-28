import React from 'react'
import cases1 from '../../images/cases/cases1.jpg'
import cases2 from '../../images/cases/cases2.jpg'
import cases3 from '../../images/cases/cases3.jpg'
import cases4 from '../../images/cases/cases4.jpg'
import cases5 from '../../images/cases/cases5.jpg'
import cases6 from '../../images/cases/cases6.jpg'
import css from './Cases.module.css'


const Cases = () => {
    return (
        <div className={css.wrapper}>
            <p className={css.upperTitle}>This is what we do</p>
            <h2 className={css.title}>Business Cases</h2>
            <p className={css.info}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sapiente!</p>
            <ul className={css.list}>
                <li><img src={cases1} alt="cases1" /></li>
                <li><img src={cases2} alt="cases2" /></li>
                <li><img src={cases3} alt="cases3" /></li>
                <li><img src={cases4} alt="cases4" /></li>
                <li><img src={cases5} alt="cases5" /></li>
                <li><img src={cases6} alt="cases6" /></li>
            </ul>
        </div>
    )
}

export default Cases