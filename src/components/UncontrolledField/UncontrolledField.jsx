import React, { useRef } from 'react';

const UncontrolledField = () => {

    const emailRef = useRef('');
    const passRef = useRef('')
    const handleSubmit = (e) => { 
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passRef.current.value;
        console.log(email, password);
        
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" ref={emailRef} name='email' placeholder='Email' />
                <br />
                <input type="password" ref={passRef} name="password" placeholder='Password' />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default UncontrolledField;