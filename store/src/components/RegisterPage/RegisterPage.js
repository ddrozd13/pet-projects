import React from 'react'
import Pagelayout from '../PageLayout/Pagelayout';
import { useForm } from "react-hook-form";
import { Input } from "@mui/material";
import styles from './RegisterPage.module.scss';

const RegisterPage = () => {
  const { register, handleSubmit, formState: {errors} } = useForm({
    defaultValues: {
      email: '',
      password: '',
    }
  });
  const onSubmit = data => console.log(data);

  return (
    <Pagelayout>
      <div className={styles.container}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <input {...register("email", {
            required: 'Поле обязательное для заполнения'
          })} placeholder="E-mail" />
          {errors?.email && <p className={styles.error}>{errors?.email.message}</p>}
          <input {...register("password", { required: 'Поле обязательное для заполнения' })} placeholder="Password" />
          <input type="submit" className={styles.container_button}/>
        </form>
      </div>
    </Pagelayout>
  )
}

export default RegisterPage
