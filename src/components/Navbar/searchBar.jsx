import styles from './searchBar.module.css';
const SearchBar = () => {
    return (
        <div className={styles.searchBar}>
            <input
                type="text"
                className={styles.input}
                placeholder="Search products..."
                aria-label="Search products"
            />
            <button
                className={styles.button}
                type="button"
                id="button-addon1"
            >
                Search
            </button>
        </div>
    );
}
export default SearchBar;