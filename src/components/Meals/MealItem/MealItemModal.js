import classes from './MealItemModal.module.css';
import { Fragment } from 'react';
import ReactDOM from 'react-dom';

// import Modal from '../../UI/Modal';
const portalElement = document.getElementById('overlays');

const Backdrop = (props) => {
    return <div className={'backdrop'} onClick={() => props.toggleShow()}></div>
};

const ModalOverlay = (props) => {
    return <div className={[classes.modal, 'modal'].join(' ')}>
        <h2>{props.name}</h2>
        <span className='close' onClick={() => props.toggleShow()}>&times;</span>
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