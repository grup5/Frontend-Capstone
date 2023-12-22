import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faShoppingBag} from '@fortawesome/free-solid-svg-icons';
import {faUser, faHeart } from '@fortawesome/free-regular-svg-icons';

function Header() {
    return (
        <div className="header-container">
            <div className='left-header'>
                .
            </div>
                <div id="middle-header">
                    <img id='logo' src="public/img/logo.png" alt="" />
                </div>
                <div id='right-header'>
                    <div id='icons-container'>
                        <a className='icon' href="">
                        <FontAwesomeIcon icon={faMagnifyingGlass}/>
                        </a>
                        <a className='icon' href="">USD</a>
                        <a className='icon' href="">
                        <FontAwesomeIcon icon={faUser}/>
                        </a>
                        <a className='icon' href="">
                        <FontAwesomeIcon icon={faHeart}/>
                        </a>
                        <a className='icon' href="">
                        <FontAwesomeIcon icon={faShoppingBag}/>
                        <span id='cart-count'>0</span>
                        </a>
                    </div>
                </div>
        </div>
    )
}

export default Header