import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'hooks/use-auth';
import { useDispatch } from 'react-redux';
import { removeUser } from 'store/slices/userSlice'

const HomePage = () => {
  const navigate = useNavigate();
  const {isAuth, email} = useAuth();
  const dispatch = useDispatch();

  return (
    <div>
      {isAuth && (
        <div>
          <h1>Welcome</h1>

          <button
           onClick={()=> dispatch(removeUser())}
          >
            Log out from {email}
          </button>
        </div>
      )}
      {!isAuth && (
        <button style={{border: "2px", padding: 20}} onClick={() => navigate('/login')}> Press on me </button>
      )}
    </div>
  )
}

export default HomePage;
