import styles from "./navbar.module.css";
const cart = ({itemCount}) => {
    return (<div className={styles.cart}>
                <i className={`fas fa-shopping-cart ${styles.cartIcon}`}></i>
                <span className={styles.cartText}>Cart</span>
                {itemCount > 0 && (<span className={styles.cartCount}>{itemCount}</span>)}
            </div>);
    }
export default cart;