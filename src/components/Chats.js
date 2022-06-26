import React from 'react'
import { useHistory } from 'react-router-dom'
import { ChatEngine } from 'react-chat-engine'
import { auth } from '../firebase'
import { useAuth } from '../context/AuthContext'

const Chats = () => {
    
    const history = useHistory()
    const { user } = useAuth()

    console.log(user)

    const handleLogout = async () => {
        await auth.signOut()

        history.push('/')
    }

    return (
    <div className='chats-page'>
        <div className='nav-bar'>
            <div className='logo-tab'>
                ChatApp
            </div>
            <div onClick={handleLogout} className='logout-tab'>
                Logout
            </div>
        </div>

        <ChatEngine 
            height='calc(100vh - 66vh)'
            projectId='fbc5aa17-809d-4c7f-bad0-80fb0d19c508'
            userName='.'
            userSecret='.'
        />
    </div>
  )
}

export default Chats