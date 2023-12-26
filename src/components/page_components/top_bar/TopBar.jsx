import { Link, NavLink } from 'react-router-dom'
import Logo from '../../../assets/Logo.svg'
import './style.scss'
import { FaAlignJustify } from "react-icons/fa";


const top_bar_links = [
  {
    name: 'SERVICES',
    link: '/'
  },
  {
    name: 'ABOUT US',
    link: '/about'
  },
  {
    name: 'CONTACT US',
    link: '/contact'
  },
  {
    name: 'CAREERS',
    link: '/careers'
  },

]

const TopBar = () => {
  return (
    <div id="top-bar">
        <div className="logo">
            <img src={Logo} alt="logo" />
        </div>

        <div className="links-container">
            <FaAlignJustify className='icon' />
            <div className="link">
              {
                top_bar_links.map((link, index) => (
                  <NavLink to={link.link} key={index}>{link.name}</NavLink>
                ))
              }
            </div>

        </div>
    </div>
  )
}

export default TopBar