import styles from "./navbar.module.css";
const Orders = () => {
    return (<div className={styles.orders}>
                  <span className={styles.returns}>Returns</span> 
                  <span className={styles.ordersList}>& Orders</span>
            </div>);
}
export default Orders;