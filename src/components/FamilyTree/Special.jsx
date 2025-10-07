import React, { useContext } from 'react';
import { AssetContext } from './FamilyTree';

const Special = ({name, asset}) => {

    const newAsset = useContext(AssetContext)

    console.log('new asset', newAsset);
    

    return (
        <div>
            <h2>{name}</h2>
            <h2>Asset: {asset}</h2>
            <h2>New Asset: {newAsset}</h2>
        </div>
    );
};

export default Special;