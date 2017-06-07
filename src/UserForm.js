import React from 'react';
import styles from './style.css';



const UserForm = () => {
    return (
        <div>
            <div className='userFormDetails'>
                <label>Search Repositories by Username</label>
                <input className='inputUserName' type="text" placeholder="username" />
                <button disabled = 'xyz'>Search</button>
            </div>
        </div>
    )
}
export default UserForm;


