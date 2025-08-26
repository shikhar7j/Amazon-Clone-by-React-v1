import styles from './background.module.css';
import background1 from './BKB_RighRes._CB803678285_.jpg';
import background2 from './934044815._CB551384116_.jpg';
import background3 from './PC_Hero_2x-toys_1._CB582765723_.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ProductDetail from '../ProductCard/ProductDetail';

const Background =()=>{
    return (
        <div className={styles.background}>
            <div id="carouselExample" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="2000"      >
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src={background3} className="d-block w-100" alt="Mirzapur" />
                <div className={styles.gradientOverlay}></div>
                </div> 
                <div className="carousel-item">
                <img src={background2} className="d-block w-100" alt="Amazon" />
                <div className={styles.gradientOverlay}></div>
                </div>
                <div className="carousel-item">
                <img src={background1} className="d-block w-100" alt="Amazon" />
                <div className={styles.gradientOverlay}></div>
                </div>
            </div>
             <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
            <div className={styles.overlayContent}>
                <div className={styles.overlayContent}>
                    <ProductDetail />
                </div>    
            </div>
    </div>
    );
}

export default Background;