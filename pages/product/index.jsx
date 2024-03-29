import LatestItems from "../../component/layouts/LatestItems";

const Product = () => {
    return (
        <>  
            <div className="product-container mt--100">
                <h1 className="fs--35 font--center color--error">Our Products</h1>
                <LatestItems/>
            </div>
        </>
    )
}
export default Product;