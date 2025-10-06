import useProductField from '../../ProductHook/useProductHook';

const ProductForm = () => {

    const [name, nameOnChange] = useProductField('')
    const [price, priceOnChange] = useProductField('')
    const [quantity, quantityOnChange] = useProductField('')

    const handleProductSubmit = (e) => { 
        e.preventDefault();
        const productData = {
            name,
            price,
            quantity,
        }

        console.log(productData);
        
       
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
        </div>
    );
};

export default ProductForm;