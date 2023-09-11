import classes from './MealItemModal.module.css';

const MealItemModal = props => {
    return (
        <div className={classes.modal} onClick={() => props.toggleShow()}>
            <div className={classes.modalcontent}>
                <span class="close" onClick={() => props.toggleShow()}>&times;</span>
                <p>{props.id}</p>
                <p>{props.name}</p>
                <p>{props.description}</p>
            </div>
        </div>
    );
}

export default MealItemModal;