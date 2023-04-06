import { FC } from 'react'
import styles from './Contact.module.scss';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const Contact: FC = () => {

    interface IContactData {
        name: string;
        email: string;
        message: string;
    }

    const onSubmit = (data: IContactData ) => {
        console.log(data);

    };

    const validationSchema = yup.object().shape({
        name: yup
            .string()
            .min(1, 'Name must contain at least 1 character')
            .max(20, 'The name must contain no more than 20 characters')
            .required('Enter your name'),
        email: yup
            .string()
            .email('Incorrect E-Mail Address')
            .required('Enter your email'),
        message: yup
            .string()
            .max(1000, 'The message must contain no more than 1000 characters')
    });

    const { register, handleSubmit, formState: { errors } } = useForm<IContactData >({
        resolver: yupResolver(validationSchema),
    });

    return (
        <section className={styles.contact}>
            <div className="container">
                <h1>Contact me</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.inputs}>
                        <div className={styles.inputBlock}>
                            <input type="text" 
                                placeholder="Your Name" 
                                {...register('name')} />
                            {errors.name && <p>{errors.name.message?.toString()}</p>}
                        </div>
                        <div className={styles.inputBlock}>
                            <input type="email"
                                placeholder="Your Email" 
                                {...register('email')}/>
                            {errors.email && <p>{errors.email.message?.toString()}</p>}
                        </div>
                    </div>
                    <textarea placeholder="Hi, you are a good developer" {...register('message')}></textarea>
                    {errors.message && <p>{errors.message.message?.toString()}</p>}
                    <button className='action main' type="submit">Send message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact;