// src/components/CombinedHeader.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../redux/themeSlice';
import { logout } from '../redux/authSlice';
import { setView } from '../redux/viewSlice';

const CombinedHeader = () => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme.theme);
  const user = useSelector(state => state.auth.user);
  const currentView = useSelector(state => state.view.current);

  const tabs = [
    { key: 'theme', label: 'Theme' },
    { key: 'auth',  label: 'Auth'  },
    { key: 'cart',  label: 'Cart'  },
  ];

  return (
    <header className="combined-header">
      {/* Left: App Title */}
      <div className="header-left">
        <h1>Redux Toolkit App</h1>
      </div>

      {/* Center: Navigation Tabs */}
      <nav className="header-nav">
        {tabs.map(t => (
          <button
            key={t.key}
            className={currentView === t.key ? 'nav-btn active' : 'nav-btn'}
            onClick={() => dispatch(setView(t.key))}
          >
            {t.label}
          </button>
        ))}
      </nav>

      {/* Right: Theme Toggle + Auth Controls */}
      <div className="header-right">
        <button
          className="theme-toggle-btn"
          onClick={() => dispatch(toggleTheme())}
        >
          {theme === 'light' ? '🌞' : '🌙'}
        </button>

        {user ? (
          <>
            <span className="welcome">Welcome, {user.username}</span>
            <button
              className="logout-btn"
              onClick={() => dispatch(logout())}
            >
              Logout
            </button>
          </>
        ) : null}
      </div>
    </header>
  );
};

export default CombinedHeader;
