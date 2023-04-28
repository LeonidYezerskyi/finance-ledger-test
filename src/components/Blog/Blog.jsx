import React from 'react'
import css from './Blog.module.css'
import blog from '../../images/blog/blog.jpg'

const Blog = () => {
    return (
        <div>
            <img src={blog} alt="blog" />
            <div className={css.textWrapper}>
                <p className={css.dateInfo}>April 16 2020</p>
                <h2 className={css.title}>Blog Post One</h2>
                <p className={css.textInfo}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum illum dolore explicabo ab dolores itaque rerum temporibus doloribus iste maiores deleniti?
                </p>
                <button className={css.button} type='button'>Read Our Blog</button>
            </div>
        </div>
    )
}

export default Blog