import React, { useState } from 'react';

const ControlledField = () => {
    const handleForm = (e) => {
        e.preventDefault();
        console.log('Submitted');
    }

    const [password, setPassword] = useState('');
    const handlePasswordOnChange = (e) => {
        console.log(e.target.value);
        
    }

    return (
        <div>
            <form onSubmit={handleForm}>
                <input type="email" name="email" id=""  placeholder='Email' required/>
                <br />
                <input type="password" name="password" onChange={handlePasswordOnChange} id="" defaultValue={password} placeholder='Password' />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ControlledField;