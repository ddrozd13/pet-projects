import React from 'react'
import Form from './Form/Form';
import { useForm } from "react-hook-form";


const RegisterPage = () => {
  const handleSubmitRegister = () => {
    console.log(...register)
  }
  const { register } =  useForm({

  })
  return (
    <Form
      title="Sign Up"
      onSubmit={handleSubmitRegister}
    />
  );
};

export default RegisterPage;
