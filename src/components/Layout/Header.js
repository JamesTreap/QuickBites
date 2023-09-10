import { Fragment } from 'react';
import classes from './Header.module.css'
import mealsImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>QuickBites</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
        </Fragment>
    );
};

export default Header;