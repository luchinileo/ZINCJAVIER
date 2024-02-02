
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Inicio } from './pages/Inicio'
import { Productos } from './pages/Productos'
import { QuienesSomos } from './pages/QuienesSomos'
import { Contacto } from './pages/Contacto'
import { Error } from './pages/Error'

function App() {
   

  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Inicio/>}/>
      <Route path='/producto' element={<Productos/>}/>
      <Route path='/quienessomos' element={<QuienesSomos/>}/>
      <Route path='/contacto' element={<Contacto/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App


      

