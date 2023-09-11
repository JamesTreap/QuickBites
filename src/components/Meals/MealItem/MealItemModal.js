import { useContext, Fragment } from 'react';
import ReactDOM from 'react-dom';
import classes from './MealItemModal.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-context';

const portalElement = document.getElementById('overlays');

const Backdrop = (props) => {
    return <div className={'backdrop'} onClick={() => props.toggleShow()}></div>
};

const ModalOverlay = (props) => {
    const cartCtx = useContext(CartContext);  
    const addToCartHandler = (amount) => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        });
    };

    return <div className={[classes.modal, 'modal'].join(' ')}>
        <div className={classes.imgOverlay} />
        <img src={props.image} alt={props.name}></img>
        <span className={classes.close} onClick={() => props.toggleShow()}>〈</span>
        <div className={classes.mealDesc}>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <div className={classes.nutrition}>
                <h5>Proteins</h5>
                <span className={classes.mealdots}></span>
                <h6>{props.proteins + ' g'}</h6>
            </div>
            <div className={classes.nutrition}>
                <h5>Fats</h5>
                <span className={classes.mealdots}></span>
                <h6>{props.fats + ' g'}</h6>
            </div>
            <div className={classes.nutrition}>
                <h5>Carbohydrates</h5>
                <span className={classes.mealdots}></span>
                <h6> {props.carbs + ' g'}</h6>
            </div>
            <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
        </div>
    </div>
};

const MealItemModal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop {...props}/>, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay {...props}></ModalOverlay>, portalElement)}
        </Fragment>
    );
};

export default MealItemModal;