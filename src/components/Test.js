import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../contexts/authContext'
function Test() {
    const { currentUser } = useAuth()

    return (
        <div>asdfasdfasdfsadfas
            <h1>test works</h1>
            some weird shit is going on here
            {currentUser && currentUser.email}
        </div>
    )
}
export default Test