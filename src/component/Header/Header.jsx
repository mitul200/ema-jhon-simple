
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <nav className='Header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">shop</Link>
                <Link to="/orders">orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">login</Link>
            </div>
        </nav>
    );
};

export default Header;