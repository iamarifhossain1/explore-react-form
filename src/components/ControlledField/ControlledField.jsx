import React, { useState } from 'react';

const ControlledField = () => {
    const handleForm = (e) => {
        e.preventDefault();
        console.log(name,email,password);
        if (password.length < 6) {
            setPasswordError('Password must be 6 characters or longer')
        }

        else {
            setPasswordError('')
        }
    }

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('')
    const [name, setName] = useState('')

    const handleNameChange = (e) => { 
        setName(e.target.value)
        
    }

    const handleEmailOnChange = (e) => { 
        console.log(e.target.value);
        setEmail(e.target.value)
        
    }

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
                <input type="text" onChange={handleNameChange} defaultValue={name} name='name' placeholder='Name' />
                <br />
                <input type="email" name="email" onChange={handleEmailOnChange} defaultValue={email}  placeholder='Email' required/>
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