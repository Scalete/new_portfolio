import { FC } from 'react'
import styles from './FullBlog.module.scss';
import wysiwyg from '@/components/wysiwyg/Wysiwyg.module.scss';
import { BlogFullPageProps } from '@/pages/blog/[id]';
import Image from 'next/image';

const FullBlog: FC<BlogFullPageProps> = ({blog}) => {

    const renderFullPageItem = () => {
        return blog.headers.map((item, i) => (
            <li key={i}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
            </li>
        ));
    }

    return (
        <section className={`${styles.fullBlog} ${wysiwyg.wysiwyg}`}>
            <h1>{blog.title}</h1>
            <div className={wysiwyg.options}>
                <span>{blog.date.split('T')[0]}</span>
                <span>{blog.categories.join(', ')}</span>
            </div>
            <p className={styles.description}>{blog.fullDescription}</p>
            <Image src={blog.descriptionImg} width={1000} height={400} alt="Blog Item"/>
            <ul className={styles.textWrapper}>
                {renderFullPageItem()}
            </ul>
        </section>
    )
}

export default FullBlog;