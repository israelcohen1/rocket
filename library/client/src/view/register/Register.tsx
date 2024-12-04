import React, { useState } from 'react';
import './register.scss';

const Register: React.FC = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setuserName] = useState('');
    const [id, setId] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (


        <div>
            <form>
                <label htmlFor="firstName">first name</label>
                <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    required
                />


                <label htmlFor="lastName">last name</label>
                <input
                    type="text"
                    id="lastName"
                    value={lastName}
                    required
                />



                <label htmlFor="userName">user name</label>
                <input
                    type="text"
                    id="firstName"
                    value={userName}
                    required
                />

                <label htmlFor="email">email</label>
                <input
                    type="text"
                    id="email"
                    value={email}
                    required
                />

                <label htmlFor="password">password</label>
                <input
                    type="text"
                    id="password"
                    value={password}
                    required
                />
            </form>
        </div>


    )
}
export default Register