import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import About from './Pages/About'

import Contact from './Pages/Contact'

const router = createBrowserRouter([
  {
    path: "/",
    element: <><Navbar /><Home /></>
  },
  {
    path: "/shop",
    element: <><Navbar /><Shop /></>
  },
  {
    path: "/about",
    element: <><Navbar /><About /></>
  },
  {
    path: "/contact",
    element: <><Navbar /><Contact /></>
  },

])

const App = () => {
  return (
    <>
      <RouterProvider router={router}/>
      <Footer />
    </>
  )
}

export default App
