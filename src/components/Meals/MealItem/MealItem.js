import { useState } from 'react';
import MealItemModal from './MealItemModal';
import classes from './MealItem.module.css';
import StarDisplay from './StarDisplay';

const MealItem = props => {
    const price = `$${props.price.toFixed(2)}`;
    const [show, toggleShow] = useState(false);

    return (
        <li className={classes.meal}>
            <div>
                <img src={props.image} alt="Meal item"></img>
                <h3>{props.name}</h3>
                <StarDisplay {...props}></StarDisplay>
                <div className={classes.price}>{price}</div>
                <button onClick={() => toggleShow (!show)}>See Item</button>
                {show && <MealItemModal {...props} toggleShow={toggleShow} /> }
            </div>
        </li>
    );
};

export default MealItem;