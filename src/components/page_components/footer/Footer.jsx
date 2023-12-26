import './footer.scss'
import Logo from '../../../assets/Logo.svg'

const Footer = () => {
  return (
    <div id="footer">
        <div className="top">
            <div className="log-and-intro">
                <img src={Logo} alt="AT Digital Logo" className='logo' />
                <p className='description'>
                    AT Digital is a full-service digital agency that helps businesses grow and thrive in the digital world.
                </p>
            </div>

            <div className="tech-and-service">
                <div className="tech">
                    <ul>
                        <li>Our Technologies</li>
                        <li>ReactJS</li>
                        <li>Gatsby</li>
                        <li>NextJS</li>
                        <li>NodeJS</li>
                        <li>GraphQL</li>
                        <li>Laravel</li>
                    </ul>
                </div>
                <div className="service">
                    <ul>
                        <li>Our Services</li>
                        <li>Social media Marketing</li>
                        <li>Web & Mobile App Development</li>
                        <li>Data & Analytics</li>
                        <li>Google Marketing solutions</li>
                        <li>Search Engine Optimization</li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="bottom">
            <p>Privacy Policy | Terms & Conditions</p>
        </div>
    </div>
  )
}

export default Footer