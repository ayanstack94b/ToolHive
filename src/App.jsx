import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import Stats from './Components/Stats/Stats'
import ToggleTabs from './Components/ToggleTabs/ToggleTabs'
import { toast } from 'react-toastify';

const fetchData = async () => {
  const res = await fetch('/public/dummy-data.json')
  return res.json()
}

const dataPromise = fetchData()


function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (cards) => {
    const exists = cart.some(item => item.id === cards.id);
    
    if (exists) {
      toast.warning("Item already in cart");
      return;
    }
    const newCartState = [...cart, cards]
    toast.success('Product added to cart')

    setCart(newCartState)
  }
  
  const handleRemoveFromCart = (id) => {
    console.log('deleted', id, cart);
    const newCart = cart.filter((item) => item.id != id)
    toast.error('Product removed from cart')
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
