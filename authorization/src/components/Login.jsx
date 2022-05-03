import React from 'react';
import { Form } from './Form';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { setUser } from 'store/slices/userSlice';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.accessToken
        }))
      navigate('/')
      })
      .catch(() => alert('Invalid user!'))
  }

  return (
    <Form
      title="sign in"
      handleClick={handleLogin}
    />
  )
}

export {Login}
