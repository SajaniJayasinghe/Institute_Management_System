// import React from 'react';

// import ReactDOM from 'react-dom/client';




// import App from './App';



// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(

//   <App />

//   );

import React from 'react';

import {render} from 'react-dom';

import App from './App'



render(
   <React.StrictMode>
  
   <App/>
 
  </React.StrictMode>,
  document.getElementById('app'));
