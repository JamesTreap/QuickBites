import { useContext, useState } from 'react';
import MealItemForm from './MealItemForm';
import MealItemModal from './MealItemModal';
import classes from './MealItem.module.css';
import CartContext from '../../../store/cart-context';

const MealItem = props => {
    const cartCtx = useContext(CartContext);
    const price = `$${props.price.toFixed(2)}`;
    
    const [show, toggleShow] = useState(false);
  
    const addToCartHandler = (amount) => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        });
    };

    return (
        <li className={classes.meal}>
            <div>
                <img src={props.image} alt="Meal item"></img>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
                <button onClick={() => toggleShow (!show)}>See Item</button>
                {show && <MealItemModal {...props} toggleShow={toggleShow} /> }
            </div>
            <div>
                <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
            </div>
        </li>
    );
};

export default MealItem;