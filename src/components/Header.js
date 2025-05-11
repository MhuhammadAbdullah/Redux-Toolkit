// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { toggleTheme } from '../redux/theme/themeSlice';

// const Header = () => {
//   const currentTheme = useSelector((state) => state.theme.currentTheme);
//   const dispatch = useDispatch();

//   return (
//     <header className={`${currentTheme}-theme`}>
//       <h1>My App</h1>
//       <button onClick={() => dispatch(toggleTheme())}>
//         Toggle {currentTheme === 'light' ? 'Dark' : 'Light'} Theme
//       </button>
//     </header>
//   );
// };

// export default Header;






// src/components/Header.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../redux/themeSlice';
import { logout } from '../redux/authSlice';

const Header = () => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme.theme);
  const user = useSelector(state => state.auth.user);

  return (
    <header>
      <h1>Redux Toolkit App</h1>
      <button onClick={() => dispatch(toggleTheme())}>
        Toggle Theme ({theme})
      </button>
      {user && (
        <>
          <span>Welcome {user.username}</span>
          <button onClick={() => dispatch(logout())}>Logout</button>
        </>
      )}
    </header>
  );
};

export default Header;
