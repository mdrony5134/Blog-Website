import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blogs from "./pages/Blogs";
import Services from "./pages/Services";

 
function App() {
   

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/blogs' element={<Blogs/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
