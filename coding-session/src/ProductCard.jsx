function Card({image, productName, productDes, productPrice}){

    return(
        <div className="card-body">
            <div className="img"><img src={image} alt="" className="img"/></div>

            <div className="text-body">
                <h1>{productName}</h1>
                <p>{productDes}</p>
                <h3>{productPrice}</h3>
            </div>
        </div>
    )
}

export default Card