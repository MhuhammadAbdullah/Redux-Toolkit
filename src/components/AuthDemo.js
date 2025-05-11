// // src/components/AuthDemo.js
// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { login, logout } from '../redux/authSlice';
// import Card from './Card';

// const AuthDemo = () => {
//   const user = useSelector(s => s.auth.user);
//   const dispatch = useDispatch();
//   const [name, setName] = useState('');

//   return (
//     <section>
//       <h2>Auth Demo</h2>
//       <Card
//         title="Authentication Example"
//         subtitle={user ? `Logged in as ${user.username}` : 'You are not logged in.'}
//       >
//         {!user ? (
//           <>
//             <input
//               type="text"
//               placeholder="Username"
//               onChange={e => setName(e.target.value)}
//             />
//             <button onClick={() => dispatch(login({ username: name }))}>
//               Login
//             </button>
//           </>
//         ) : (
//           <button onClick={() => dispatch(logout())}>Logout</button>
//         )}
//       </Card>
//     </section>
//   );
// };

// export default AuthDemo;









// // src/components/AuthDemo.js
// import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { login, logout } from '../redux/authSlice';
// import Card from './Card';

// const AuthDemo = () => {
//   const user = useSelector(s => s.auth.user);
//   const dispatch = useDispatch();
//   const [username, setUsername] = useState('');

//   // اگر پہلے سے user موجود ہو (refresh کے بعد) تو input فیلڈ میں اس کا نام دکھائیں
//   useEffect(() => {
//     if (user) {
//       setUsername(user.username);
//     }
//   }, [user]);

//   return (
//     <section className="auth-section">
//       <h2>Auth Demo</h2>
//       <Card
//         title="Authentication Example"
//         subtitle={user 
//           ? `Logged in as ${user.username}` 
//           : 'You are not logged in.'
//         }
//       >
//         {!user ? (
//           <>
//             <input
//               type="text"
//               placeholder="Username"
//               value={username}
//               onChange={e => setUsername(e.target.value)}
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               // dummy field—آپ چاہیں تو اسے بھی state میں رکھ سکتے ہیں
//             />
//             <button
//               disabled={!username.trim()}
//               onClick={() => dispatch(login({ username }))}
//             >
//               Login
//             </button>
//           </>
//         ) : (
//           <button onClick={() => dispatch(logout())}>
//             Logout
//           </button>
//         )}
//       </Card>
//     </section>
//   );
// };

// export default AuthDemo;







import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../redux/authSlice';
import Card from './Card';

const AuthDemo = () => {
  const user = useSelector(s => s.auth.user);
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // پیج ریفریش پر پہلے سے لاگ ان یوزر کا نام دکھائیں
  useEffect(() => {
    if (user) {
      setUsername(user.username);
    }
  }, [user]);

  const handleLogin = () => {
    if (username.trim()) {
      dispatch(login({ username }));
      setPassword('');
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    setUsername('');
    setPassword('');
  };

  return (
    <section className="auth-section">
      <h2>Auth Demo</h2>
      <Card
        title="Authentication Example"
        subtitle={user 
          ? `Logged in as ${user.username}` 
          : 'Please login with your credentials.'}
      >
        {!user ? (
          <form
            className="auth-form"
            onSubmit={e => {
              e.preventDefault();
              handleLogin();
            }}
          >
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" disabled={!username.trim()}>
              Login
            </button>
          </form>
        ) : (
          <div className="logout-wrap">
            <button onClick={handleLogout}>
              Logout
            </button>
          </div>
        )}
      </Card>
    </section>
  );
};

export default AuthDemo;
