import { useState } from 'react'
import Header from './widgets/Header'
import Home from './page/Home'
import About from './page/About'
import Price from './page/Price'
import Footer from './widgets/Footer'

function App() {

  return (
    <>
      <Header/>
      <Home/>
      <About/>
      <Price/>
      <Footer/>
    </>
  )
}

export default App
