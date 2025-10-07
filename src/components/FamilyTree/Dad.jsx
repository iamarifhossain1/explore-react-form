import React from 'react';
import MySelf from './MySelf';
import Brother from './Brother';
import Sister from './Sister';

const Dad = () => {
    return (
        <div>
            <h2>Dad</h2>
            <section className='flex'>
                <MySelf></MySelf>
                <Brother></Brother>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Dad;