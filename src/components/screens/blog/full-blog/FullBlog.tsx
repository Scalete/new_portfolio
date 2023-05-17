import { FC } from 'react'
import styles from './FullBlog.module.scss';
import wysiwyg from '@/components/wysiwyg/Wysiwyg.module.scss';

const FullBlog: FC = () => {
    return (
        <section className={`${styles.fullBlog} ${wysiwyg.wysiwyg}`}>
            <h1>Heading 1</h1>
            <div className={wysiwyg.options}>
                <span>12 Feb 2019</span>
                <span>Express, Handlebars</span>
            </div>
            <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eum consequuntur, est recusandae eligendi optio? Architecto iste sequi corrupti ipsa, exercitationem error impedit dolore. Dolorum explicabo quasi pariatur beatae unde?</p>
            <ul className={styles.textWrapper}>
                <li>
                    <h2>Second Header</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores sequi eos dolorum dolor earum doloremque nesciunt at facilis aperiam voluptatem, iusto nostrum! Et molestiae quae totam esse enim corrupti fugiat.</p>
                </li>
                <li>
                    <h2>Second Header</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores sequi eos dolorum dolor earum doloremque nesciunt at facilis aperiam voluptatem, iusto nostrum! Et molestiae quae totam esse enim corrupti fugiat.</p>
                </li>
                <li>
                    <h2>Second Header</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores sequi eos dolorum dolor earum doloremque nesciunt at facilis aperiam voluptatem, iusto nostrum! Et molestiae quae totam esse enim corrupti fugiat.</p>
                </li>
            </ul>
        </section>
    )
}

export default FullBlog;