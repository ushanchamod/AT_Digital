import { Link } from 'react-router-dom'
import Logo from '../../../assets/Logo.svg'
import './style.scss'
import { FaAlignJustify } from "react-icons/fa";

const TopBar = () => {
  return (
    <div id="top-bar">
        <div className="logo">
            <img src={Logo} alt="logo" />
        </div>

        <div className="links-container">
            <FaAlignJustify className='icon' />
            <div className="link">
                {/* <Link to="/">SERVICES</Link>
                <Link to="/">ABOUT US</Link>
                <Link to="/">CONTACT US</Link>
                <Link to="/">CAREERS</Link> */}

                <a href="./">CAREERS</a>
                <a href="./">CAREERS</a>
                <a href="./">CAREERS</a>
                <a href="./">CAREERS</a>
            </div>

        </div>
    </div>
  )
}

export default TopBar