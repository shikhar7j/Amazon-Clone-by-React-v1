import styles from './productCard.module.css';

const ProductCard = ({title,products}) => {
    return (
                <div className={styles.productCard}>
                    <h3>{title}</h3>
                
                <div className={styles.productGrid}>
                {products.map((p, index) => (
                <div key={index} className={styles.productItem}>
                    <img src={p.img} alt={p.name} />
                    <p>{p.name}</p>
                </div>
                ))}
                </div>

                <a href="/" className={styles.seeMore}>See more</a>
                </div>
    );
}

export default ProductCard;