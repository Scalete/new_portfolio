import { FC } from 'react'
import styles from './WorkFull.module.scss';
import Image from 'next/image';
import { WorkFullPageProps } from '@/pages/works/[id]';
import wysiwyg from '@/components/wysiwyg/Wysiwyg.module.scss';
import Link from 'next/link';

const WorkFull: FC<WorkFullPageProps> = ({work}) => {

    const renderLayout = () => {
        return work.headers.map((item, i) => (
            <li key={i} className={styles.mainHeading}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <ul className={styles.mainHeadingItem}>
                    {
                        item.subheaders.map((item, i) => (
                            <li key={i}>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                {
                                    item.images.map((item, i) => (
                                        <Image key={i} src={item} width={681} height={460} alt="Work Item"/>
                                    ))
                                }
                            </li>
                        ))
                    }
                    
                </ul>
            </li>
        ));
    }

    return (
        <section className={`${styles.fullPage} ${wysiwyg.wysiwyg}`}>
            <div className={styles.header}>
                <h1>{work.title}</h1>
                <div className={`${wysiwyg.options} ${styles.options}`}>
                    <span>{work.date.slice(0, 4)}</span>
                    <span>{work.categories.join(', ')}</span>
                </div>
                <p>{work.shortDescription}</p>
                <Image src={work.smallImg} width={681} height={460} alt="Work Item"/>
            </div>
            <ul className={styles.main}>
                {renderLayout()}
            </ul>
            <Link className='action main' href={work.link} target='__blank'>Link to web-site</Link>
        </section>
    )
}

export default WorkFull;