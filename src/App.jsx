import { Suspense, useState } from 'react'
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
    const newCartState = [...cart, cards]
    // console.log('clicked btn from app jsx', newCartState); 
    alert('added')
    setCart(newCartState)
  }
  
  const handleRemoveFromCart = (id) => {
    console.log('deleted', id, cart);
    const newCart = cart.filter((item) => item.id != id)
    alert('Removed')
    setCart(newCart)
    return
  }

  return (
    <>
      <header className='container mx-auto'>
        <Navbar cart={cart} handleAddToCart={handleAddToCart} setCart={setCart}></Navbar>
        <Banner></Banner>
      </header>
      <main>
        <Stats></Stats>
        <Suspense fallback={
          <div className="flex items-center justify-center min-h-screen">
            <span className="loading loading-ring loading-xl scale-2000"></span>
          </div>
        }>
          <ToggleTabs handleAddToCart={handleAddToCart} handleRemoveFromCart={handleRemoveFromCart} cart={cart} setCart={setCart} dataPromise={dataPromise}></ToggleTabs>
        </Suspense>
      </main>


    </>
  )
}

export default App
