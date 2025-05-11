// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { removeFromCart, incrementQuantity, decrementQuantity } from '../redux/cart/cartSlice';
// const CartPage = () => {
//   const cartItems = useSelector((state) => state.cart.items);
//   const dispatch = useDispatch();

//   const total = cartItems.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );

//   return (
//     <div>
//       <h2>Your Cart</h2>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty</p>
//       ) : (
//         <div>
//           <ul>
//             {cartItems.map(item => (
//               <li key={item.id}>
//                 {item.name} - ${item.price} x {item.quantity}
//                 <button onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
//                 <button onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
//                 <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
//               </li>
//             ))}
//           </ul>
//           <h3>Total: ${total.toFixed(2)}</h3>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CartPage;




// src/components/Cart.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../redux/cartSlice';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();

  return (
    <section>
      <h2>Cart ({cartItems.length})</h2>
      {cartItems.map(item => (
        <div key={item.id}>
          <p>{item.name} - ${item.price}</p>
          <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
        </div>
      ))}
    </section>
  );
};

export default Cart;
