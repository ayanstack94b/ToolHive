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
  return (
    <>
      <header className='container mx-auto'>
        <Navbar></Navbar>
        <Banner></Banner>
      </header>
      <main>
        <Stats></Stats>
        <ToggleTabs dataPromise={dataPromise}></ToggleTabs>
      </main>


    </>
  )
}

export default App
