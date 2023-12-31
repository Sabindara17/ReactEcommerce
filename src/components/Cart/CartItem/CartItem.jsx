import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/earbuds-prod-1.webp";
import "./CartItem.scss";
const CartItem = () => {
    return <div className="cart-products">
            <div className="cart-product">
                <div className="img-container">
                    <img src={prod} alt="" />
                </div>
                <div className="prod-details">
                    <span className="name">Product Name</span>
                    <MdClose className="close-btn"/>
                    <div className="quantity-buttons">
                        
                        <button decrease>-</button>
                        <span number>2</span>
                        <button increase>+</button>
                    </div>                   
                    <div className="text">
                        <span>2</span>
                        <span>x</span>
                        <span className="highlight">&#x20A8;123</span>
                    </div>
                </div>

            </div>
        </div>;
};


export default CartItem;
