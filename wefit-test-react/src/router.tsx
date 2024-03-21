import Home from './pages/home'
import { Navigate, createBrowserRouter } from 'react-router-dom'
import PurchaseMade from './pages/purchase-made'
import ShoppingCart from './pages/shopping-cart'
import Baseline from './layouts/Baseline/Baseline'

export const router = createBrowserRouter([
    {
      path: '/',
      element: <Baseline />,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/purchase-made',
          element: <PurchaseMade/>
        },
        {
          path: '/shopping-cart',
          element: <ShoppingCart/>
        }
      ]
    },
    {
      path: '*',
      element: <Navigate to='/' replace/>
    }
  ])