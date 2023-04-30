import React from 'react'
import css from './Blog.module.css'
import blogJpg from '../../images/blog/blog.jpg'
import blogJpg2x from '../../images/blog/blog@2x.jpg'
import blogWebp from '../../images/blog/blog.webp'
import blogWebp2x from '../../images/blog/blog@2x.webp'


const Blog = () => {

    return (
        <div id="Blog" className={css.wrapper}>
            <picture>
                <source
                    srcSet={`${blogWebp} 1x, ${blogWebp2x} 2x`}
                    type="image/webp"
                />
                <source
                    srcSet={`${blogJpg} 1x, ${blogJpg2x} 2x`}
                    type="image/jpeg" />
                <img src={blogJpg} className={css.img} alt="blog" />
            </picture>
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