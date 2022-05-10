import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { FC, useState } from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { setUserAction } from '../../store/users/ActionCreator';
import PageLayout from '../PageLayout/PageLayout';
import styles from './Form.module.scss'

const FormLogin: FC = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
        dispatch(setUserAction({
          email: user.email,
          id: user.uid,
          token: user.refreshToken,
        }))
        navigate('/')
      })
      .catch(() => alert('Invalid User'));
  }

  return (
    <PageLayout>
      <div className={styles.wrapper}>
        <div className={styles.formWrapper}>
          <h1>Sign in</h1>
          <form noValidate >
            <div className={styles.email}>
              <label htmlFor="email">Email</label>
              <input type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className={styles.password}>
              <label htmlFor="password">Password</label>
              <input type='password' name='password' value={pass} onChange={(e) => setPass(e.target.value)}/>
            </div>
            <div className={styles.submit} onClick={() => handleLogin(email, pass)}>
              Login
            </div>
            <div>
              <h6>
                If you have an account, please <Link to="/register">Sign Up</Link>
              </h6>
            </div>
          </form>
        </div>
      </div>
    </PageLayout>
  )
};

export default FormLogin;