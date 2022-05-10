import React, { FC, useState } from 'react'
import { Box, AppBar, Toolbar, Button, Typography, Paper, MenuList, MenuItem } from '@mui/material';
import styles from './PageLayout.module.scss';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import profile from '../../images/user-square.svg';
import clsx from 'clsx';
import SettingsIcon from '@mui/icons-material/Settings';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch } from 'react-redux';
import { removeUserAction } from '../../store/users/ActionCreator';

interface IPageLayoutProps {
  children: React.ReactNode
}
const PageLayout: FC<IPageLayoutProps> = ({children}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {isAuth} = useAuth();
  const [pressProfile, setPressProfile] = useState(false)

  const handleClickProfile = () => {
    if(!pressProfile) {
      setPressProfile(true);
    }else {
      setPressProfile(false);
    }
  }


  return (
    <div className={styles.container}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, cursor: 'pointer' }} onClick={() => navigate('/')}>
              Dogs
            </Typography>
            {!isAuth && (
              <Box>
                <Button color="inherit" onClick={() => navigate('/login')}>Login</Button>
                <Button color="inherit" onClick={() => navigate('/register')}>SignUp</Button>
              </Box>
            )}
            {isAuth && (
              <div className={styles.profile} onClick={() => handleClickProfile()}>
                <img src={profile} alt="Profile" />
                <Paper className={clsx(styles.none, pressProfile && styles.visibility)} sx={{zIndex: 'modal'}}>
                  <MenuList>
                    <MenuItem>
                      <PermIdentityIcon />
                      Profile
                    </MenuItem>
                    <MenuItem>
                      <SettingsIcon />
                      Settings
                    </MenuItem>
                    <MenuItem onClick={() => dispatch(removeUserAction())}>
                      <LogoutIcon />
                      Log out
                    </MenuItem>
                  </MenuList>
                </Paper>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </Box>
      {children}
    </div>
  )
}

export default PageLayout
