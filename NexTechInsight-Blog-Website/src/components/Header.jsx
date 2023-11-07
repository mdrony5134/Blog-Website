import { Link, NavLink } from "react-router-dom"
import {FaBars, FaDribbble, FaFacebook, FaTwitter} from "react-icons/fa"
import {AiOutlineClose} from 'react-icons/ai'
import { useState } from "react"
// import '../../src/App.css'

const Header = () => {
  const [isMenuOpen , setIsMenuOpen] = useState(false)
  const navItem = [
    {path: "/", link:"Home"},
    {path: "/services", link:"Services"},
    {path: "/blogs", link:"Blogs"},
    {path: "/about", link:"About"},
    {path: "/contact", link:"Contact"},
  ]

  const toggle = () =>{
    setIsMenuOpen(!isMenuOpen)
  }
  
  return (
     <header className="bg-black fixed top-0 left-0 right-0">
      <nav className="px-4 py-4 text-white max-w-7xl mx-auto flex justify-between items-center">
         <Link to={"/"} className="text-xl text-white font-bold">NexTech<span className="text-orange-600">Insight</span></Link> 

         {/* nav item */}
          <ul className="md:flex text-lg gap-12 hidden">
            {
              navItem.map(({path, link})=> 
                <li className="text-white" key={path}>
                  <NavLink 
                  to={path}
                  className={({ isActive }) =>
                  isActive? "active" : ""  
                }
                  >
                    {link}
                  </NavLink>
                </li>
              )
            }
          </ul>

          {/* menu icon */}
          <div className="text-white lg:flex gap-4 items-center hidden">
            <a href="#" className="hover:text-orange-500"><FaFacebook/></a>
            <a href="#" className="hover:text-orange-500"><FaTwitter/></a>
            <a href="#" className="hover:text-orange-500"><FaDribbble/></a>
            <button className="px-6 py-2 font-bold  bg-orange-500 text-white rounded hover:bg-white hover:text-orange-500 transition-all duration-300 ease-in">Log In</button>
          </div>

          {/* mobile screen icon */}
          <div className="md:hidden">
            <button onClick={toggle}>
              {
                isMenuOpen? <AiOutlineClose className="w-5 h-5"/> :  <FaBars className="w-5 h-5"/>
              }
            </button>
          </div>

          {/* mobile screen nav */}

          <ul className={`md:hidden block text-lg gap-12 mt-14 space-y-4 px-4 bg-white ${isMenuOpen?"fixed top-0 left-0 w-full transition-all ease-out duration-200":"hidden"}`}>
            {
              navItem.map(({path, link})=> 
                <li className="text-black" key={path}>
                  <NavLink onClick={toggle} to={path}>{link}</NavLink>
                </li>
              )
            }
          </ul>

      </nav>
     </header>
  )
}

export default Header