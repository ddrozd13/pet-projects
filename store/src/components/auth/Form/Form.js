import React from 'react'
import Pagelayout from '../../PageLayout/Pagelayout';
import { useForm } from "react-hook-form";
import styles from './Form.module.scss';
import {subtitleForm} from '../../../utils/subtitleForm'

const Form = ({ onSubmit, title }) => {
  const { register, handleSubmit, formState: {errors} } = useForm({
    defaultValues: {
      email: '',
      password: '',
    }
  });

  return (
    <Pagelayout>
      <div className={styles.container}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <h3 className={styles.form_title}>{title}</h3>
          <input {...register("email", {
            required: 'Поле обязательное для заполнения'
          })} placeholder="E-mail" />
          {errors?.email && <p className={styles.error}>{errors?.email.message}</p>}
          <input {...register("password", { required: 'Поле обязательное для заполнения' })} placeholder="Password" />
          {errors?.password && <p className={styles.error}>{errors?.password.message}</p>}
          <input type="submit" className={styles.container_button}/>
          {subtitleForm(title)}
        </form>
      </div>
    </Pagelayout>
  );
};

export default Form;
