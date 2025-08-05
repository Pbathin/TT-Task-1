import React from 'react'
import UserProfile from './components/UserProfile'

const App = () => {
  const user={
    name: 'Athin P B',
    email:'athin.pb@tecnotree.com',
    role: 'Intern',
    avatar: 'https://cdn.iconscout.com/icon/free/png-256/free-avatar-380-456332.png'
  }
  return (
    <div>
      <UserProfile data={user}/>
    </div>
  )
}

export default App

//name, email, role, and avatar