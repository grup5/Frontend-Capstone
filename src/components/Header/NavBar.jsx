import { faChevronDown} from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import Header from './Header';
import NavBar2 from './NavBar2';
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function NavBar() {
    // Array holding all currency values
    const currencies = [
        'AED د.إ',
        'AFN ؋',
        'ALL L',
        'AMD դր.',
        'ANG ƒ',
        'AUD $',
        'AWG ƒ',
        'AZN ₼',
        'BAM КМ',
        'BBD $',
        'BDT ৳',
        'BGN лв.',
        'BIF Fr',
        'BND $',
        'BOB Bs.',
        'BSD $',
        'BWP P',
        'BZD $',
        'CAD $',
        'CDF Fr',
        'CHF CHF',
        'CNY ¥',
        'CRC ₡',
        'CVE $',
        'CZK Kč',
        'DJF Fdj',
        'DKK kr.',
        'DOP $',
        'DZD د.ج',
        'EGP ج.م',
        'ETB Br',
        'EUR €',
        'FJD $',
        'FKP £',
        'GBP £',
        'GMD D',
        'GNF Fr',
        'GTQ Q',
        'GYD $',
        'HKD $',
        'HNL L',
        'HUF Ft',
        'IDR Rp',
        'ILS ₪',
        'INR ₹',
        'ISK kr',
        'JMD $',
        'JPY ¥',
        'KES KSh',
        'KGS som',
        'KHR ៛',
        'KMF Fr',
        'KRW ₩',
        'KYD $',
        'KZT 〒',
        'LAK ₭',
        'LBP ل.ل',
        'LKR ₨',
        'MAD د.م.',
        'MDL L',
        'MKD ден',
        'MMK K',
        'MNT ₮',
        'MOP P',
        'MUR ₨',
        'MVR MVR',
        'MWK MK',
        'MYR RM',
        'NGN ₦',
        'NIO C$',
        'NPR ₨',
        'NZD $',
        'PEN S/.',
        'PGK K',
        'PHP ₱',
        'PKR ₨',
        'PLN zł',
        'PYG ₲',
        'QAR ر.ق',
        'RON Lei',
        'RSD РСД',
        'RWF FRw'
]
// UseState for the currency and stickyHeader visibility
    const [isCurrencyVisible, setCurrencyVisible] = useState(false);
    const [showNavBar2, setShowNavBar2] = useState(false)
// function for the currency dropdown
    const toggleCurrencyDropdown = () => {
        setCurrencyVisible(!isCurrencyVisible);
        console.log('working')
    };
// useEffect to handle when user scrolls past the header show the NavBar2 component
    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;

            setShowNavBar2(offset > 150);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        };
    }, []);

    return (
        <>
        {/* conditional checks if useEffect set NavBar2 if it did show the stickyHeader if not display the regular header */}
        {showNavBar2 ? (
            <NavBar2 />
        ) : (
            // Full Header container
            <div id='fullheader-container'>
                {/* Header component */}
        <Header onToggleCurrency={toggleCurrencyDropdown}/>
        {/* NavBar section */}
        <div id="navbar">
            {/* unordered lists to show the categories on navbar */}
            {/* list items with down arrow in clude a dropdown menu */}
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
                <li className='navbar-item'>
                    ACCESSORIES <FontAwesomeIcon icon= {faChevronDown}/>
                    <div className='dropdown accessory-dropdown'>
                        <ul>
                            <li className='dropdown-item'>HATS</li>
                            <li className='dropdown-item'>SOCKS</li>
                            <li className='dropdown-item'>BAGS</li>
                            <li className='dropdown-item'>JEWELLERY</li>
                            <li className='dropdown-item'>AIRPOD CASES</li>
                            <li className='dropdown-item'>WATER BOTTLES</li>
                            <li className='dropdown-item'>MASKS</li>
                            <li className='dropdown-item'>PINS</li>
                        </ul>
                    </div>
                </li>
                <li className='navbar-item'>
                    DECOR <FontAwesomeIcon icon= {faChevronDown}/>
                    <div className='dropdown decor-dropdown'>
                        <ul>
                            <li className='dropdown-item'>PRINTS</li>
                            <li className='dropdown-item'>NEONS</li>
                            <li className='dropdown-item'>DESK MATS</li>
                            <li className='dropdown-item'>WATER BOTTLES</li>
                            <li className='dropdown-item'>KEYCAPS</li>
                            <li className='dropdown-item'>PUZZLES</li>
                            <li className='dropdown-item'>ART TOYS</li>
                            <li className='dropdown-item'>PLUSHIES</li>
                        </ul>
                    </div></li>
                <li className='navbar-item'>NEW IN</li>
            </ul>
            {/* currency menu includes a map that generates the currency dropdown menu when currency icon in Header is clicked.*/}
            <div className={`currency-dropdown ${isCurrencyVisible ? 'visible' : 'hidden'}`}>
                <p>Select a Language</p>
                <div className='currency-container'>
                    {currencies.map((currency, index) => (
                        <button className='currency-item'>{currency}</button>
                        ))}
                </div>
            </div>
        </div>
</div>
)}
</>
)
}

export default NavBar