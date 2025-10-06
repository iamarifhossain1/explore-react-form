import React, { useState } from 'react';

const ControlledField = () => {
    const handleForm = (e) => {
        e.preventDefault();
        console.log('Submitted');
        if (password.length < 6) {
            setPasswordError('Password must be 6 characters or longer')
        }

        else {
            setPasswordError('')
        }
    }

    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('')
    const handlePasswordOnChange = (e) => {
        console.log(e.target.value);
        setPassword(e.target.value)
       
        if (password.length < 6) {
            setPasswordError('Password must be 6 characters or longer')
        }

        else { 
            setPasswordError('')
        }
        
    }

    return (
        <div>
            <form onSubmit={handleForm}>
                <input type="email" name="email"  placeholder='Email' required/>
                <br />
                <input type="password" name="password" onChange={handlePasswordOnChange} defaultValue={password} placeholder='Password' />
                <br />
                <input type="submit" value="Submit" />
               <p style={{color: 'red'}}>
                <small>{passwordError}</small>
               </p>
            </form>
        </div>
    );
};

export default ControlledField;