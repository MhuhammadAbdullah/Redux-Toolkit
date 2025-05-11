// import React from 'react';
// import Header from './components/Header';
// import MainContent from './components/MainContent';
// import Footer from './components/Footer';
// import Navbar from './components/Navbar';
// import ProductList from './components/ProductList';
// import CartPage from './components/CartPage';

// function App() {
//   return (
//     <div className="app">
//       <Header />
//       <MainContent />
//       <Footer />
//       <Navbar />
//       <ProductList />
//       <CartPage />
//     </div>
//   );
// }

// export default App;






// // src/App.js
// import React from 'react';
// import { useSelector } from 'react-redux';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import MainContent from './components/MainContent';
// import ProductList from './components/ProductList';
// import Cart from './components/Cart';

// const App = () => {
//   const theme = useSelector(state => state.theme.theme);
//   return (
//     <div className={theme === 'light' ? 'light-theme' : 'dark-theme'}>
//       <Header />
//       <MainContent />
//       <ProductList />
//       <Cart />
//       <Footer />
//     </div>
//   );
// };

// export default App;














// src/App.js
import React from 'react';
import { useSelector } from 'react-redux';
import CombinedHeader from './components/CombinedHeader';
import ThemeDemo from './components/ThemeDemo';
import AuthDemo  from './components/AuthDemo';
import CartDemo  from './components/CartDemo';

function App() {
  const current = useSelector(s => s.view.current);

  return (
    <div className="app-container">
      <CombinedHeader />
      <main>
        {current === 'theme' && <ThemeDemo />}
        {current === 'auth'  && <AuthDemo />}
        {current === 'cart'  && <CartDemo />}
      </main>
    </div>
  );
}

export default App;
