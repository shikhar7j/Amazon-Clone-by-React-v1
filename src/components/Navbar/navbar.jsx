import React, { useState } from "react";
import styles from "./navbar.module.css";
import amazonLogo from "./amazon-logo-amazon-icon-free-free-vector.jpg";
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import LocationDropdown from "./Location";
import SearchBar from "./searchBar"; 
import Language from "./Language";
import Cart from "./cart";
import Orders from "./Orders";
import Account from "./account";

const Navbar = () => {
  const [location, setLocation] = useState("Select Location");
  const [cartCount, setCartCount] = useState(0);

  const handleLocationChange = (value) => {
    setLocation(value);
  };
  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

    return (
    <div className={styles.navbar}>
      <div className={styles.logoContainer}>
        <img src={amazonLogo} alt="amazonLogo" className={styles.amazonLogo} />
      </div>
      <div className={styles.centerSection}>
        <div className={styles.LocationContainer}>
          <FontAwesomeIcon icon={faLocationDot} className={styles.locationIcon} />
          <LocationDropdown onLocationChange={handleLocationChange} />
        </div>
      </div>
      <div className={styles.searchLanguageGroup}>
        <div className={styles.searchContainer}>
          <SearchBar />
        </div>
        <div className={styles.LanguageContainer}>
          <Language />
        </div>
      </div>
      <div className={styles.userSection}>
          <div className={styles.account}>
            <Account></Account>
          </div> 
          <div className={styles.orders}>
            <Orders></Orders>
          </div>
          <div className={styles.cart}>
            <Cart itemCount={cartCount}  />
          </div>
          <div>
            <button onClick={handleAddToCart} style={{marginLeft: '10px', padding: '0px 10px', cursor: 'pointer', display: "flex", flexWrap:'wrap',width:'75px',height:'52px',backgroundColor:'#000000',color:'#ffffff' }}>Add to Cart</button>
          </div>
      </div>
    </div>
  );
}
export default Navbar;