import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Landing_Screen} from "./Screen/Screen.js";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import {Login , SignUp, Home, BidForm,CurrentContracts} from'./Screen/Contractor/Contractor.js';
import {Login as FarmerLogin, SignUp as FarmerSignUp} from'./Screen/Farmer/Farmer.js';
import { Provider } from "react-redux";
import store from "./Store/Store.js";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} >
      <Route path="" element={<Landing_Screen/>} />
      <Route path="contractor/login" element={<Login />} />
      <Route path="contractor/signup" element={<SignUp />} />
      <Route path='contractor/home' element={<Home />} />
      <Route path="farmer/login" element={<FarmerLogin />} />
      <Route path="farmer/signup" element={<FarmerSignUp />} />
      <Route  path='contractor/create-new-bid' element={<BidForm />} />
      <Route  path='contractor/current-contracts' element={<CurrentContracts />} />
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <RouterProvider router={router} />
  </Provider>
)
