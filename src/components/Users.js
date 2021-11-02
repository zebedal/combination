
import styles from './Users.module.css'
import User from './User'
import BackdropLoader from './UI/BackdropLoader'
import { BsPlusCircle } from "react-icons/bs"
import { useState, useEffect } from 'react'
import { fetchUser } from '../lib/utils'


const Users = props => {

    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchUser().then(res => {
            setUser(res)
            setIsLoading(false)
        })
    }, [])


    const fetchNewUser = async () => {
        setIsLoading(true)
        const newUser = await fetchUser()
        setUser(prevUser => {
            for(const key in prevUser) {
                if(prevUser[key].text !== newUser[key].text) {
                    newUser[key].highlight = true
                } else newUser[key].highlight = false
            }
            return newUser
        })
        setIsLoading(false)
    }


    if (isLoading) return <BackdropLoader />


    return (
        <section className={styles.Section}>
            <div className="container">
                <h1><span className={styles.Mix}>User</span> List</h1>
                <br />
                <p>This is a users list concept for the Combination assignment. Whenever a new user is fetched, the changed fields should be briefly highlighted in order to indicate changes on the screen. In this case the text will turn pink for 4 seconds before going to white again </p>
            </div>
            <div className={`container ${styles.UsersWrapper}`}>
                <User {...user} />
            </div>
            <div className={`container ${styles.CreateUser}`} >
                <span>Get new user</span>
                <BsPlusCircle onClick={fetchNewUser} />
            </div>
        </section>
    )
}

export default Users