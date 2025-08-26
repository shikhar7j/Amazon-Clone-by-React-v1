import image1 from './oP6rupAWbCDEQXqGKmnP33.webp';
import image2 from './premium_photo-1678099940967-73fe30680949.webp';
import image3 from './smartwatch-8300238_640.webp';
import image4 from './SaAsX9sXgHUW6dr2eUgvbA.webp';
import image5 from './0a2b0f12f77e9fdc6162f4b00eb5f42f1fa302c7.webp';
import image6 from './360_F_866752645_mw20mwzLPaZ0wKHsfh7lRwkQIhBlGpm8.webp';
import image7 from './624f0dc1dff9bdccab032f93c33e79de78481770e79e21d3b0469daf51f02797.webp';
import image8 from './photo-1623998021661-dc7555b2213d.webp';
import image9 from './PC_QuadCard_boAt_0.5x._SY116_CB553870684_.jpg';
import image10 from './PC_QuadCard_Boult_0.5x._SY116_CB553870684_.jpg';
import image11 from './PC_QuadCard_Noise_0.5x._SY116_CB553870684_.jpg';
import image12 from './PC_QuadCard_Zeb_0.5x_1._SY116_CB570220221_.jpg';
import image13 from './Wipes_low_res_V1._SY116_CB549138744_.jpg';
import image14 from './Shower_heads_low_res_V1._SY116_CB549138744_.jpg';
import image15 from './Tools_low_res_V1._SY116_CB549138744_.jpg';
import image16 from './Wallpapers_low_res_V1._SY116_CB549138744_.jpg';
import ProductCard from './ProductCard';
import styles from './ProductCard.module.css';

const ProductDetail = () => {
    return(
                <div className={styles.productDetailContainer}>
                    <ProductCard 
                    title="Electronics" className={styles.electronics}
                    products={[
                        { name: "Laptop", img: image1 },
                        { name: "Headphones", img: image2 },
                        { name: "Smartwatch", img: image3 },
                        { name: "Camera", img: image4 }
                    ]}/>

                    <ProductCard 
                    title="Fashion" className={styles.fashion}
                    products={[
                        { name: "Shirt", img: image5 },
                        { name: "Shoes", img: image7 },
                        { name: "Watch", img: image8 },
                        { name: "Bag", img: image6 }
                    ]}/>

                    <ProductCard 
                    title="Starting 149$|Headphones" className={styles.Headphones}
                    products={[
                        { name: "Starting 249$ Boat", img: image9 },
                        { name: "Starting 349$ boult", img: image10 },
                        { name: "Starting 649$ noise", img: image11},
                        { name: "Starting 149$ Zebronics", img: image12 }
                    ]}/>

                    <ProductCard 
                    title="Under 499$| Deals on home improvement essentials" className={styles.fashion}
                    products={[
                        { name: "Under 199$| Cleaning mops", img: image13 },
                        { name: "Under 399$| Bathroom accessories", img: image14 },
                        { name: "Under 499$| Home Tools", img: image15 },
                        { name: "Under 299$| Wallpapers", img: image16 }
                    ]}/>

                </div>
    );
}
export default ProductDetail;