import './NavBar.css';
import { SocialIcon } from 'react-social-icons';
import { Link } from 'react-router-dom';
const NavBar = () => {
    return(
        <header>
            <ul className='navbar'>
                <li><Link to="/">Home</Link></li>
                <li className='dropdown'><Link to="/departments">Departments</Link></li>
                <li><Link to="#">Gallery</Link></li>
                <li><Link to="#">Facilities</Link></li>
                <li><Link to="#">Online Payment</Link></li>
                <li><Link to="#">Achievements</Link></li>
                <li><Link to="#">About</Link></li>

                
            </ul>
            <article className='social-icons'>
                <h3><SocialIcon className='social-icon' url="https://twitter.com/jaketrent"></SocialIcon></h3>
                <h3><SocialIcon className='social-icon' url="https://facebook.com/jaketrent"></SocialIcon></h3>
                <h3><SocialIcon className='social-icon' url="https://instagram.com/jaketrent"></SocialIcon></h3>
                <h3><SocialIcon className='social-icon' url="https://google.com/jaketrent"></SocialIcon></h3>
            </article>
            <div className='for-ham'><div className='menu-icon'><button className='ham'></button></div></div>
            <ul className='for-small-device'>
                
            <li><Link to="/">Home</Link></li>
                <li className='dropdown'><Link to="/departments">Departments</Link></li>
                <li><Link to="#">Gallery</Link></li>
                <li><Link to="#">Facilities</Link></li>
                <li><Link to="#">Online Payment</Link></li>
                <li><Link to="#">Achievements</Link></li>
                <li><Link to="#">About</Link></li>
            </ul>
            
        </header>
    );
}
export default NavBar