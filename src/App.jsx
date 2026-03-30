import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import Stats from './Components/Stats/Stats'





function App() {
  return (
    <>
      <header className='container mx-auto'>
        <Navbar></Navbar>
        <Banner></Banner>
      </header>
      <main>
        <Stats></Stats>
      </main>


    </>
  )
}

export default App
