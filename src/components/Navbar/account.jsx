import styles from './navbar.module.css' 
const Account = () =>{
    return (<div className={styles.account}>
                <span className={styles.greeting}>Hello, Sign in </span>
                <span className={styles.accountList}>Account & Lists</span>
            </div>);
}
export default Account;