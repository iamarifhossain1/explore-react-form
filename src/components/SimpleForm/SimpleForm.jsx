import React from 'react';

const SimpleForm = () => {

    const handleSubmit = () => {
    console.log('Form Submitted');
    
  } 

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" />
                <br/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;