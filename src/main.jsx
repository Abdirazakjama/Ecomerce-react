import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Cart from './pages/Cart.jsx'
import Products from './pages/Products.jsx'
import Product from './pages/Product.jsx'


const routerProvider = createBrowserRouter([
  
  {
    path:"/",
    element:<App />,
    children:[
      {
        path: "/About",
        element: <About />
      },
      {
        path:"/Contact",
        element: <Contact />
      },
      {
        path:"/Cart",
        element: <Cart />
      },
      {
        path:"/Products",
        element: <Products />
      },
      {
        path:"/Product-details/:id",
        element: <Product />
      }
    ]
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routerProvider}/>
  </React.StrictMode>,
)
