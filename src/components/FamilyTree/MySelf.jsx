import React from 'react';
import Special from './Special';

const MySelf = ({asset}) => {
    return (
        <div>
            <h2>Myself</h2>
            <Special name="Addrita" asset={asset}></Special>
        </div>
    );
};

export default MySelf;