import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import Stats from './Components/Stats/Stats'
import ToggleTabs from './Components/ToggleTabs/ToggleTabs'

const fetchData = async () => {
  const res = await fetch('/public/dummy-data.json')
  return res.json()
}

const dataPromise = fetchData()


function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (cards) => {
    console.log('clicked btn', cards);
    const newCartState = [...cart, cards]
    setCart(newCartState)
  }

  return (
    <>
      <header className='container mx-auto'>
        <Navbar cart={cart} handleAddToCart={handleAddToCart} setCart={setCart}></Navbar>
        <Banner></Banner>
      </header>
      <main>
        <Stats></Stats>
        <ToggleTabs handleAddToCart={handleAddToCart} cart={cart} setCart={setCart} dataPromise={dataPromise}></ToggleTabs>
      </main>


    </>
  )
}

export default App
