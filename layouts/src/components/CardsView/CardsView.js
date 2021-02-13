import '../../App.css';
import ShopCard from '../ShopCard/ShopCard';

export default function CardsView({cards}) {
    return (
        <div className="cards-view">
            {cards.map((card, i) => {
                return <ShopCard key = {card.name+i} el = {card} />
            })}
        </div>
    )
}