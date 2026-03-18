import { HashRouter, Routes, Route } from 'react-router-dom' 
import './App.css'
import { useState } from 'react'
import Home from './components/Pages/Home/Home'
import CatalogSection from './components/Pages/Catalog/CatalogSection'
import HomePages from './components/Pages/Films Pages/HomePages'
import ScrollToTop from './components/Pages/ScrollToTop'
import ScrollToTopButton from './components/Pages/ScrollToTopButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <HashRouter>  {/* Заменили BrowserRouter на HashRouter */}
      <ScrollToTop/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/catalog' element={<CatalogSection/>}/>
        <Route path='/anime/:id' element={<HomePages/>}/>
      </Routes>

      <ScrollToTopButton/>
      
    </HashRouter>
  )
}

export default App