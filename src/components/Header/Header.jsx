import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faShoppingBag} from '@fortawesome/free-solid-svg-icons';
import {faUser, faHeart } from '@fortawesome/free-regular-svg-icons';
// Function propdrilled from NavBar to toggle the currency menu
function Header({onToggleCurrency, onToggleSearch, selectedCurrency, onToggleLogin}) {
    function handleToggleCurrency(e) {
        e.preventDefault()
        onToggleCurrency()
    }
    function handleToggleLogin(e) {
        e.preventDefault()
        onToggleLogin()
    }
    function handleToggleSearch(e) {
        e.preventDefault()
        onToggleSearch()
    }
    return (
        // Overall Header Container 
        <div className="header-container">
            {/* Left Section of the header set to a . for spacing */}
            <div className='left-header'>
                .
            </div>
            {/* Middle of the ehader includes only the logo */}
                <div id="middle-header">
                    <img id='logo' src="public/img/logo.png" alt="" />
                </div>
                {/* Right section of the header to hold all icons */}
                <div id='right-header'>
                    <div id='icons-container'>
                        <a className='icon' href="" onClick={handleToggleSearch}>
                        <FontAwesomeIcon icon={faMagnifyingGlass}/>   
                        </a>
                        <a className='icon' href="" onClick={handleToggleCurrency}>{selectedCurrency}</a>
                        <a className='icon' href="" onClick={handleToggleLogin}>
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