import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import { Button } from "react-bootstrap"
import { useHistory } from "react-router-dom"
import { useAuth } from '../../contexts/authContext';

function Header({ sectionList, memoLink, ...props }) {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    async function handleLogout() {
        setError("")

        try {
            await logout()
            history.push("/login")
        } catch {
            setError("Failed to log out")
        }
    }

    let SectionItem = (props) => {
        return (<div className={s.item} >
            <NavLink to={props.state.sectionLink} activeClassName={s.active} onClick={() => { memoLink(props.state.sectionLink) }}>{props.state.sectionName}</NavLink>
        </div>)
    }

    let navigation = sectionList.map(elem => <SectionItem key={elem.id} state={elem} />)

    return (
        <div className={s.header}>
            {navigation}

            {!currentUser && <NavLink to='/login' >Log in</NavLink>}
            {!currentUser && <NavLink to='/signUp' >Sign Up</NavLink>}

            {
                currentUser && <Button variant="link" onClick={handleLogout}>
                    Log Out
                </Button>
            }
            <br />
            {currentUser && <p>hello {currentUser.email}</p>}
            <NavLink to='/test'>test page</NavLink>
        </div >
    )



}

export default Header;