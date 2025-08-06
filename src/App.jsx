import React from 'react'
import UserProfile from './components/UserProfile'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import './fonts/fonts.css';

const App = () => {
  const user={
    name: 'Athin P B',
    email:'athin.pb@tecnotree.com',
    role: 'Intern',
    avatar: 'https://cdn.iconscout.com/icon/free/png-256/free-avatar-380-456332.png'
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <UserProfile data={user}/>
    </ThemeProvider>
  )
}

export default App
