import '../../App.css';
import { useState } from 'react';
import products from '../../productsData';
import IconSwitch from '../IconSwitch/IconSwitch';
import CardsView from '../CardsView/CardsView';
import ListView from '../ListView/ListView';

export default function Store() {

    const [state, setState] = useState(true);

    function toggleSwitched() {
        setState(state => {
            state ? state = false : state = true
            return state;
        })
    }
  
    return (
        <div className="store">
                <IconSwitch onSwitch={() => {
                    toggleSwitched()}} icon = {state}
                />
                {state ?
                    <CardsView cards = {products}/> : 
                    <ListView items = {products}/>
                }
        </div>
    )
}