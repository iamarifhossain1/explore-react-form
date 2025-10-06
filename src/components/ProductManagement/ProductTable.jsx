import React from 'react';

const ProductTable = ({products}) => {
    return (
        <div>
            <h4>Product: {products.length}</h4>

            <table>
                <thead >
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, index) => <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.quantity}</td>
                        <td style={{cursor: 'pointer'}}>x</td>
                    </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;