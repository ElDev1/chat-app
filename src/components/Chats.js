import React, { useRef, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { ChatEngine } from 'react-chat-engine'
import { auth } from '../firebase'
import { useAuth } from '../context/AuthContext'
import axios from 'axios'

const Chats = () => {
    
    const history = useHistory()
    const { user } = useAuth()
    const [loading, setLoading] = useState(true)

    const handleLogout = async () => {
        await auth.signOut()

        history.push('/')
    }

    const getFile = async (url) => {
        const response = await fetch(url)
        const data = await response.blob()

        return new File([data, 'userPhoto.jpg', {type: 'image/jpg'}])
    }

    useEffect(() => {
        if(!user) {
            history.push('/')
            return
        }

        axios.get('https://api.chaengine.io/users/me', {
            headers: {
                'project-id':'fbc5aa17-809d-4c7f-bad0-80fb0d19c508',
                'user-name': user.email,
                'user-secret': user.uid
            }
        })
        .then(() => {
            setLoading(false)
        })
        .catch(() => {
            let formdata = new FormData()
            formdata.append('email', user.email)
            formdata.append('username', user.displayName)
            formdata.append('secret', user.uid)

            getFile(user.photoUrl)
                .then((avatar) => {
                   formdata.append('avatar', avatar, avatar.name) 
                })
        })
    }, [user, history])

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