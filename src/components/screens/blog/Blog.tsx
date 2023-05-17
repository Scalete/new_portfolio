import { FC } from 'react'
import style from './Blog.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BlogsProps } from '@/pages/blog';

const Blog: FC<BlogsProps> = ({blogs}) => {

    const router = useRouter()

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault()
        router.push(`/blog/${id}`);
    }

    const renderBlogItem = () => {
        return blogs.map((item, i) => (
            <li key={i}>
                <h2>{item.title}</h2>
                <div className={style.blogOptions}>
                    <span>{item.date.split('T')[0]}</span>
                    <span>{item.categories.join(', ')}</span>
                </div>
                <p>{item.shortDescription}</p>
                <Link className='action main' href='' onClick={(e) => handleClick(e, item._id)}>More</Link>
            </li>
        ))
    }

    return (
        <section className={`${style.blog} theme-change`}>
            <div className={`container ${style.container}`}>
                <h1>Blog</h1>
                <ul className={style.blogWrapper}>
                    {renderBlogItem()}
                </ul>
            </div>
        </section>
    )
}

export default Blog;