import styles from './componentContainer.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const componentContainer = () => {

const Items = [
    "All", "Rufus", "Fresh", "Prime", "MX Player", "Sell", "Bestsellers",
    "Today's Deals", "Mobiles", "Customer Service", "Electronics", "Fashion",
    "New releases", "Home", "Amazon Pay", "Computers", "Books",
    "Beauty and Personal Care"
  ];

    return (
            <div className={styles.componentContainer}>
                <div className={'btn-group ${styles.buttonCustom}'} role="group" aria-label="Button group with nested dropdown">
                    {Items.map((item, index) => (
                                        <div key={index} className={styles.navItem}>
                                            {index === 0 && <FontAwesomeIcon icon={faBars} className={styles.menuIcon} />}
                                            {item}
                                            {index === 17 && <span className={styles.Beauty} />}
                                        </div>
                                    ))}
                </div>
            </div>
        );
}

export default componentContainer;