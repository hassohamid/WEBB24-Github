import { Route, Routes } from 'react-router-dom'
import './App.css'
import Kalkylator from './pages/kalkylator'
import Userlist from './pages/Userlist'
import Todo from './pages/Todo'
import Home from './pages/Home'
import Nav from './components/Nav'

function App() {
  

  return (
    <>
    <Nav /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Kalkylator" element={<Kalkylator />} />
        <Route path="/Todo" element={<Todo />} />
        <Route path="/Userlist" element={<Userlist />} />
      </Routes>
    </>
  )
}

export default App
