import React from 'react';
import Cousin from './Cousin';

const Aunt = () => {
    return (
        <div>
            <h2>Aunt</h2>
            <section className='flex'>
                <Cousin name='Rahul'></Cousin>
                <Cousin name='Lamia'></Cousin>
            </section>
        </div>
    );
};

export default Aunt;