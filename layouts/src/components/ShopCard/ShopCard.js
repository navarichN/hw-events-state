import toCurrency from '../../funcToCurrency.js';
import '../../App.css';

export default function ShopCard({el}) {
    let price = toCurrency(el.price, "USD", "en-EN")
    return (
        <div className="shop-card">
            <h2>{el.name}</h2>
            <h3>{el.color}</h3>
            <img src = {el.img}></img>
            <button>ADD TO CART</button>
            <span>{price}</span>
        </div>
    )
}