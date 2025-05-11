// import React from 'react';
// import { useSelector } from 'react-redux';

// const Navbar = () => {
//   const cartItems = useSelector((state) => state.cart.items);
//   const itemCount = cartItems.reduce((count, item) => count + item.quantity, 0);

//   return (
//     <nav>
//       <h1>My Store</h1>
//       <div>Cart Items: {itemCount}</div>
//     </nav>
//   );
// };

// export default Navbar;





// src/components/Navbar.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setView } from '../redux/viewSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const current = useSelector(s => s.view.current);

  const tabs = [
    { key: 'theme', label: 'Theme' },
    { key: 'auth',  label: 'Auth'  },
    { key: 'cart',  label: 'Cart'  },
  ];

  return (
    <nav className="navbar">
      <h2>Context API Demos</h2>
      <div className="nav-buttons">
        {tabs.map(t => (
          <button
            key={t.key}
            className={current === t.key ? 'active' : ''}
            onClick={() => dispatch(setView(t.key))}
          >
            {t.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
