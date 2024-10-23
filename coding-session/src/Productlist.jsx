import Card from "./ProductCard.jsx"
const arrayOfProducts = [
    {
        productName : "Smartphone",
        productImg : "../phone.jpeg",
        productPrice: "$500.00",
        productDes : "A portable device with a touchscreen display, used for communication, entertainment, and productivity"
    },

    {
        productName : "Laptop",
        productImg : "../laptop.jpeg",
        productPrice: "$1000.00", 
        productDes : "A portable computer with a keyboard and display, suitable for work, education, and entertainment"
    },

    {
        productName : "Headphones",
        productImg : "../headset.jpeg",
        productPrice: "$50.00",
        productDes : "Audio devices worn over or on the ears, used for listening to music, watching videos, or making phone calls."
    },

    {
        productName : "Smartwatch",
        productImg : "../smartwatch.jpeg",
        productPrice: "$50.00",
        productDes : "A wearable device that combines the functionality of a watch with features like fitness tracking, notifications, and payments."
    },

    {
        productName : "Coffee Maker",
        productImg : "../cofeemaker.jpeg",
        productPrice: "$200.00",
        productDes : "A kitchen appliance used to brew coffee"
    },

    {
        productName : "Refrigerator",
        productImg : "../fridge.jpeg",
        productPrice: "$1500.00",
        productDes : " A household appliance used to store food and beverages at cold temperatures."
    },

    {
        productName : "Sofa",
        productImg : "../sofa.jpeg",
        productPrice: "$700.00",
        productDes : "A piece of furniture designed for seating multiple people."
    },

    {
        productName : "Television",
        productImg : "../tv.jpeg",
        productPrice: "$600.00",
        productDes : "An electronic device used for displaying images and videos."
    },

    {
        productName : "Clothing",
        productImg : "../t-shirt.jpeg",
        productPrice: "$55.00",
        productDes : "A casual garment with short sleeves and a round neckline"
    },

    {
        productName : "Jeans",
        productImg : "../jean.jpeg",
        productPrice: "$79.00",
        productDes : "A type of pants made from denim fabric."
    }

]

function Product(){
    return(
        <div>
            { arrayOfProducts.length > 0 ? (arrayOfProducts.map((product, index)=>(
                <div className={index}>
                    <Card
                    productName={product.productName}
                    image={product.productImg}
                    productPrice={product.productPrice}
                    productDes={product.productDes}
                    />
                </div>
            ))) : (<p>Product Not Available</p>)}
        </div>
    )
}

export default Product