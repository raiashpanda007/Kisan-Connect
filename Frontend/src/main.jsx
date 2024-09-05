import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Store/Store.js";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} />,
  )
)
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <RouterProvider router={router} />
  </Provider>
)
