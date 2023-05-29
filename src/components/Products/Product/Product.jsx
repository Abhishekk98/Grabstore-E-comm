import "./Product.scss";

import prod from "../../../assets/products/prod1.webp";

const Product = () => {
    return <div className="product-card">
        <div className="thumbnail">
            <img src={prod} alt="" />
        </div>
        <div className="product-details">
            <span className="name">Product Name</span><br />
            <span className="price">&#8377; 1499</span>
            

        </div>
    </div>;
};

export default Product;
