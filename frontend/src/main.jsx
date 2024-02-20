import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './screens/Home.jsx';
import Login from './screens/Login.jsx';
import Register from './screens/Register.jsx';
import UserAction from './screens/UserAction.jsx';





const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<Home />} />
      <Route  path='/login' element={<Login />} />
      <Route  path='/register' element={<Register />} />
      <Route  path='/upload' element={<UserAction/>} />
      




    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
 

 <React.StrictMode>
<RouterProvider router={router}  />
  </React.StrictMode>

);
