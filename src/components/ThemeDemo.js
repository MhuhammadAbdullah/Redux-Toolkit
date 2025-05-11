// // src/components/ThemeDemo.js
// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { toggleTheme } from '../redux/themeSlice';
// import Card from './Card';

// const ThemeDemo = () => {
//   const theme = useSelector(s => s.theme.theme);
//   const dispatch = useDispatch();

//   return (
//     <section>
//       <h2>Theme Toggle Demo</h2>
//       <Card
//         title="Theme Context Example"
//         subtitle={`The current theme is ${theme}.`}
//       >
//         <p>
//           All components consume the global theme and update styles accordingly.
//         </p>
//         <div className="inner-box">
//           This box also changes based on the theme!
//         </div>
//         <button onClick={() => dispatch(toggleTheme())}>
//           Toggle Theme
//         </button>
//       </Card>
//     </section>
//   );
// };

// export default ThemeDemo;








// src/components/ThemeDemo.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/themeSlice';
import Card from './Card';

const ThemeDemo = () => {
  const theme = useSelector(s => s.theme.theme);
  const dispatch = useDispatch();

  // Conditionally apply a CSS class
  const sectionClass = theme === 'light' ? 'theme-section light' : 'theme-section dark';

  return (
    <section className={sectionClass}>
      <h2>Theme Toggle Demo</h2>
      <Card
        title="Theme Context Example"
        subtitle={`The current theme is ${theme}.`}
      >
        <p>
          All components consume the global theme and update styles accordingly.
        </p>
        <div className="inner-box">
          This box also changes based on the theme!
        </div>
        <button onClick={() => dispatch(toggleTheme())}>
          Toggle Theme
        </button>
      </Card>
    </section>
  );
};

export default ThemeDemo;
