import React from 'react';
import useInputField from '../../hooks/useInputField';

const HookForm = () => {

    const [name, nameOnChange] = useInputField('');
    const [email, emailOnChange] = useInputField('')

    const handleSubmit = (e) => { 
        e.preventDefault();
        console.log(name, email);
        
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" defaultValue={name} onChange={nameOnChange} name="name" id="" placeholder='Name' />
                <br />
                <input type="email" defaultValue={email} onChange={emailOnChange} name="email" id=""  placeholder='Email'/>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;