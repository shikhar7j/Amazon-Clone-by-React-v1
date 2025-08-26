import styles from './Language.module.css';

const Language = () => {
    return (
        <div className={styles.languageSelector}>
            <select className={styles.select} aria-label="Select Language">
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
                <option value="zh">Chinese</option>
            </select>
        </div>
    );
}

export default Language;