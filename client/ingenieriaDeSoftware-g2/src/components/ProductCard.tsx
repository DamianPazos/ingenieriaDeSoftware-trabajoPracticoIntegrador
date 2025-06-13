import {useState} from "react";
import './ProductCard.css'; // Import the CSS file for styling

function ProductCard(/*{ product }*/) {
    const [selectedQuantity, setSelectedQuantity] = useState(1);

    const increaseQuantity = () => setSelectedQuantity(selectedQuantity + 1);
    const decreaseQuantity = () => {
        if (selectedQuantity > 1) setSelectedQuantity(selectedQuantity - 1);
    };


    return (
        <>
            <div className="card">
                <img src={"./public/coffeeIcon.svg"   /*product.image*/} alt={"cafe"/*product.name*/} className="image" />
                <h2 className="title">{/*product.name*/}</h2>
                <p className="price">${/*product.price*/}</p>
                <div className="quantity">
                    <button className="button" onClick={decreaseQuantity}>-</button>
                    <p>{selectedQuantity}</p>
                    <button className="button" onClick={increaseQuantity}>+</button>
                </div>
            </div>

        </>
    )
}

export default ProductCard