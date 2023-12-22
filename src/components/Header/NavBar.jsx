import { faChevronDown} from '@fortawesome/free-solid-svg-icons';
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function NavBar() {
    return (
        <div id="navbar">
            <ul>
                <li className='navbar-item'>
                    TOPS <FontAwesomeIcon icon= {faChevronDown}/>
                    <div className='dropdown'>
                        <ul>
                            <li className='dropdown-item'>TEES</li>
                            <li className='dropdown-item'>SHIRTS</li>
                            <li className='dropdown-item'>LONGSLEEVES</li>
                            <li className='dropdown-item'>JUMPERS</li>
                            <li className='dropdown-item'>CROP TOPS</li>
                            <li className='dropdown-item'>OUTERWEAR</li>
                        </ul>
                    </div>
                </li>
                <li className='navbar-item'>BOTTOMS</li>
                <li className='navbar-item'>ACCESSORIES <FontAwesomeIcon icon= {faChevronDown}/></li>
                <li className='navbar-item'>DECOR <FontAwesomeIcon icon= {faChevronDown}/></li>
                <li className='navbar-item'>NEW IN</li>
            </ul>
        </div>
    )
}

export default NavBar