import { FC } from 'react'
import style from './Blog.module.scss';

const Blog: FC = () => {
    return (
        <section className={`${style.blog} theme-change`}>
            <div className={`container ${style.container}`}>
                <h1>Blog</h1>
                <ul className={style.blogWrapper}>
                    <li>
                        <h2>UI Interactions of the week</h2>
                        <div className={style.blogOptions}>
                            <span>12 Feb 2019</span>
                            <span>Express, Handlebars</span>
                        </div>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </li>
                    <li>
                        <h2>UI Interactions of the week</h2>
                        <div className={style.blogOptions}>
                            <span>12 Feb 2019</span>
                            <span>Express, Handlebars</span>
                        </div>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </li>
                    <li>
                        <h2>UI Interactions of the week</h2>
                        <div className={style.blogOptions}>
                            <span>12 Feb 2019</span>
                            <span>Express, Handlebars</span>
                        </div>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </li>
                    <li>
                        <h2>UI Interactions of the week</h2>
                        <div className={style.blogOptions}>
                            <span>12 Feb 2019</span>
                            <span>Express, Handlebars</span>
                        </div>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Blog;