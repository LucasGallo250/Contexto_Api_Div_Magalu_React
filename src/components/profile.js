import React from 'react'
import { useAuth } from '../providers/auth'

const Profile = () => {
  const { user } = useAuth()
  
  return(
    <div>
      <h1>{user ? user.name : 'Não logado'}</h1>
    </div>
  )
}

export default Profile