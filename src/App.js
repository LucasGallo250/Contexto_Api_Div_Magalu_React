import React from 'react'

import Login from './components/login';
import Profile from './components/profile';
import Footer from './components/footer';
import { useAuth } from './providers/auth'

function App() {
  const { user } = useAuth()
  console.log(user)

  return (
    <>
      <h1>Olá GamaAcademy</h1>
      <Profile />
      <Login />
      <Footer />
    </>
  );
}

export default App;