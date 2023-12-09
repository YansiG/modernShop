import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// import { configureStore } from '@reduxjs/toolkit' //REdux toolkit!
//Thunk
//useReducer в React

// interface State {
//   totalPage: number;
// }

// type Action = { type: "SET_TOTAL_PAGE"; payload: {} } | { type: string };

// const reducer = (state: State, action: Action): State => {
//   switch (action.type) {
//     case "SET_TOTAL_PAGE":
//       return { ...state, totalPage: state.totalPage + action.payload };
//     default:
//       return state;
//   }
// };


// const store = configureStore(reducer)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)