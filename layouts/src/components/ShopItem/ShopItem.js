import toCurrency from '../../funcToCurrency.js';
import '../../App.css';

export default function ShopItem({el}) {
    let price = toCurrency(el.price, "USD", "en-EN")
    return(
        <div className="shop-item">
            <img src = {el.img}></img>
            <h2>{el.name}</h2>
            <h3>{el.color}</h3>
            <span>{price}</span>
            <button>ADD TO CART</button>
        </div>
    )
}