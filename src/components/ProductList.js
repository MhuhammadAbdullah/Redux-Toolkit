// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { addToCart } from '../redux/cart/cartSlice';

// const products = [
//   { id: 1, name: 'Product 1', price: 10 },
//   { id: 2, name: 'Product 2', price: 20 },
//   { id: 3, name: 'Product 3', price: 30 },
// ];

// const ProductList = () => {
//   const dispatch = useDispatch();

//   return (
//     <div>
//       <h2>Products</h2>
//       <ul>
//         {products.map(product => (
//           <li key={product.id}>
//             {product.name} - ${product.price}
//             <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ProductList;


// src/components/ProductList.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const products = [
  { id: 1, name: 'Watch', price: 100 },
  { id: 2, name: 'Shoes', price: 150 },
];

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <section>
      <h2>Products</h2>
      {products.map(p => (
        <div key={p.id}>
          <p>{p.name} - ${p.price}</p>
          <button onClick={() => dispatch(addToCart(p))}>Add to Cart</button>
        </div>
      ))}
    </section>
  );
};

export default ProductList;
