import { useState } from 'react';
import useProductField from '../../ProductHook/useProductHook';

const ProductForm = ({handleAddProduct}) => {

    const [name, nameOnChange] = useProductField('')
    const [price, priceOnChange] = useProductField('')
    const [quantity, quantityOnChange] = useProductField('')
    const [error, setError] = useState('')

    const handleProductSubmit = (e) => { 
        e.preventDefault();
        const productData = {
            name,
            price,
            quantity,
        }

        if (name.length === 0) { 
            setError('Please provide a product name')
            return;
        }

        else if (price.length === 0) {
            setError('Please provide a price')
            return;
        }

        else if (price < 0) {
            setError('Price can not be negative')
            return;
        }

        else if (quantity.length === 0) { 
            setError('Minimum quantity is 1')
            return;
        }

        else if (quantity < 0) {
            setError('Quantity can not be negative')
            return;
        }

        else {
            setError('')
        }

        handleAddProduct(productData);
        
        
       
    }

    return (
        <div>
            <form onSubmit={handleProductSubmit}> 
                <input type="text" name='name' defaultValue={name} onChange={nameOnChange} placeholder='Product Name'  style={{marginTop: '100px'}}/>
                <br />
                <input type="text" name='price' onChange={priceOnChange} placeholder='Product Price'  style={{marginTop: '10px'}}/>
                <br />
                <input type="text" name='quantity' onChange={quantityOnChange} placeholder='Product Quantity'  style={{marginTop: '10px'}}/>
                <br />
                <input type="submit" value="Submit" style={{marginTop: '10px'}}/>
            </form>
            <p style={{color: 'red'}}>
                <small>{error}</small>
            </p>
        </div>
    );
};

export default ProductForm;