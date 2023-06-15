import "./Product.scss";
import prod from "../../../assets/products/earbuds-prod-1.webp";
const Product = () => {
    return <div className="product-card">
        <div className="thumbnail">
            <img src={prod} alt="" />
        </div>
        <div className="prod-details">
            <span className="name">Product Name</span>
            <spam className="price">&#x20A8;499</spam>
        </div>
    </div>;
};

export default Product;
