// // src/components/CartDemo.js
// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { addToCart, removeFromCart } from '../redux/cartSlice';
// import Card from './Card';

// const products = [
//   { id: 1, name: 'Watch', price: 100 },
//   { id: 2, name: 'Shoes', price: 150 },
// ];

// const CartDemo = () => {
//   const cartItems = useSelector(s => s.cart.cartItems);
//   const dispatch = useDispatch();

//   return (
//     <section>
//       <h2>Cart Demo</h2>
//       <Card
//         title="Shopping Cart Example"
//         subtitle={`You have ${cartItems.length} item(s) in cart.`}
//       >
//         <div className="product-list">
//           {products.map(p => (
//             <div key={p.id} className="product">
//               {p.name} — ${p.price}
//               <button onClick={() => dispatch(addToCart(p))}>
//                 Add
//               </button>
//             </div>
//           ))}
//         </div>
//         <div className="cart-list">
//           {cartItems.map(i => (
//             <div key={i.id} className="cart-item">
//               {i.name} — ${i.price}
//               <button onClick={() => dispatch(removeFromCart(i.id))}>
//                 Remove
//               </button>
//             </div>
//           ))}
//         </div>
//       </Card>
//     </section>
//   );
// };

// export default CartDemo;










// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { addToCart, removeFromCart } from '../redux/cartSlice';
// import Card from './Card';

// const products = [
//   { id: 1, name: 'Elegant Watch', price: 120 },
//   { id: 2, name: 'Running Shoes', price: 85 },
//   { id: 3, name: 'Leather Wallet', price: 45 },
//   { id: 4, name: 'Sun Glasses', price: 60 },
// ];

// const CartDemo = () => {
//   const cartItems = useSelector(s => s.cart.cartItems);
//   const dispatch = useDispatch();

//   // Group items by id, calculate quantity
//   const grouped = cartItems.reduce((acc, item) => {
//     if (!acc[item.id]) acc[item.id] = { ...item, qty: 0 };
//     acc[item.id].qty += 1;
//     return acc;
//   }, {});

//   const summary = Object.values(grouped);
//   const totalQty = summary.reduce((sum, i) => sum + i.qty, 0);
//   const totalPrice = summary.reduce((sum, i) => sum + i.qty * i.price, 0);

//   return (
//     <section className="cart-section">
//       <h2>Cart Demo</h2>
//       <Card
//         title="Shopping Cart"
//         subtitle={`You have ${totalQty} item(s) in your cart.`}
//       >
//         {/* Product List */}
//         <div className="product-grid">
//           {products.map(p => (
//             <div key={p.id} className="product-card">
//               <div className="product-info">
//                 <h4>{p.name}</h4>
//                 <p>${p.price.toFixed(2)}</p>
//               </div>
//               <button onClick={() => dispatch(addToCart(p))}>
//                 Add to Cart
//               </button>
//             </div>
//           ))}
//         </div>

//         {/* Cart Summary */}
//         <div className="cart-summary">
//           <table>
//             <thead>
//               <tr>
//                 <th>Product</th>
//                 <th>Price</th>
//                 <th>Qty</th>
//                 <th>Subtotal</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {summary.map(i => (
//                 <tr key={i.id}>
//                   <td>{i.name}</td>
//                   <td>${i.price.toFixed(2)}</td>
//                   <td>{i.qty}</td>
//                   <td>${(i.price * i.qty).toFixed(2)}</td>
//                   <td>
//                     <button onClick={() => dispatch(removeFromCart(i.id))}>
//                       Remove
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//             <tfoot>
//               <tr>
//                 <td colSpan="2"><strong>Total</strong></td>
//                 <td><strong>{totalQty}</strong></td>
//                 <td><strong>${totalPrice.toFixed(2)}</strong></td>
//                 <td>
//                   <button onClick={() => {
//                     // remove all items one by one
//                     summary.forEach(i => {
//                       for (let j = 0; j < i.qty; j++) {
//                         dispatch(removeFromCart(i.id));
//                       }
//                     });
//                   }}>
//                     Clear Cart
//                   </button>
//                 </td>
//               </tr>
//             </tfoot>
//           </table>
//         </div>
//       </Card>
//     </section>
//   );
// };

// export default CartDemo;





















import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addToCart,
  decreaseQty,
  removeFromCart,
  clearCart
} from '../redux/cartSlice';
import Card from './Card';

const products = [
  { id: 1, name: 'Elegant Watch', price: 120 },
  { id: 2, name: 'Running Shoes', price: 85 },
  { id: 3, name: 'Leather Wallet', price: 45 },
  { id: 4, name: 'Sun Glasses', price: 60 },
];

const CartDemo = () => {
  const cartItems = useSelector(s => s.cart.cartItems);
  const dispatch = useDispatch();

  const totalQty = cartItems.reduce((sum, i) => sum + i.qty, 0);
  const totalPrice = cartItems
    .reduce((sum, i) => sum + i.qty * i.price, 0)
    .toFixed(2);

  return (
    <section className="cart-section">
      <h2>Cart Demo</h2>
      <Card
        title="Shopping Cart"
        subtitle={`You have ${totalQty} item(s) in your cart.`}
      >
        {/* Product Grid */}
        <div className="product-grid">
          {products.map(p => (
            <div key={p.id} className="product-card">
              <div className="product-info">
                <h4>{p.name}</h4>
                <p>${p.price.toFixed(2)}</p>
              </div>
              <button onClick={() => dispatch(addToCart(p))}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        <div className="cart-summary">
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              <table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Subtotal</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map(i => (
                    <tr key={i.id}>
                      <td>{i.name}</td>
                      <td>${i.price.toFixed(2)}</td>
                      <td>
                        <div className="qty-control">
                          <button onClick={() => dispatch(decreaseQty(i.id))}>
                            –
                          </button>
                          <span>{i.qty}</span>
                          <button onClick={() => dispatch(addToCart(i))}>
                            +
                          </button>
                        </div>
                      </td>
                      <td>${(i.price * i.qty).toFixed(2)}</td>
                      <td>
                        <button
                          className="remove-btn"
                          onClick={() => dispatch(removeFromCart(i.id))}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan="2"><strong>Total</strong></td>
                    <td><strong>{totalQty}</strong></td>
                    <td><strong>${totalPrice}</strong></td>
                    <td>
                      <button
                        className="clear-btn"
                        onClick={() => dispatch(clearCart())}
                      >
                        Clear Cart
                      </button>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </>
          )}
        </div>
      </Card>
    </section>
  );
};

export default CartDemo;
