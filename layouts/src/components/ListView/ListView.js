import '../../App.css';
import ShopItem from '../ShopItem/ShopItem';


export default function ListView({items}) {
    return (
        <div className="list-view">
            {items.map((item, i) => {
                return <ShopItem key = {item.name+i} el = {item}/>
            })}
        </div>
    )
}