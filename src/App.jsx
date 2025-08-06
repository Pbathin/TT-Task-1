import UserProfile from './components/UserProfile'
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

const App = () => {
  const user={
    name: 'Athin P B',
    email:'athin.pb@tecnotree.com',
    role: 'Intern',
    avatar: 'https://cdn.iconscout.com/icon/free/png-256/free-avatar-380-456332.png'
  }
  return (
    <ThemeProvider theme={theme}>
      <UserProfile data={user}/>
    </ThemeProvider>
  )
}

export default App
