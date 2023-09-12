import classes from './StarDisplay.module.css';
import yellowstar from '../../../assets/star-yellow.svg';

const StarDisplay = (props) => {
    
    let starList = [];

    for (let i = 0; i < props.stars; i++) {
        starList.push(<img key={i} src={yellowstar} alt="star"></img>)
    }

    return (
        <div className={classes.starSec}>    
            {starList}
        </div>
    );
};

export default StarDisplay;