import React from "react";
import axios from "axios";
import styles from '../styles/Home.module.css'

function Users ({users}){
    return (
        <div className={styles.main}>
            {users.map((user) => (
                <div>{user.name}</div>
            ))}
        </div>
    )
}

export async function getServerSideProps(context){
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');

        const data = await response.data;

        return{
            props: {users:data},
        }
}

export default Users;