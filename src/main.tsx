import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux';
import { store } from './/Redux/store.tsx';

//import {store} from "./Redux/store.tsx"
// import { configureStore } from '@reduxjs/toolkit' //REdux toolkit!
//Thunk
//useReducer в React


ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <App />
    </Provider>,
)