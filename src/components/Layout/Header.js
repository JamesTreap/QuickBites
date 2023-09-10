import { Fragment } from 'react';
import classes from './Header.module.css'
import logo from '../../assets/logo.png';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <div className={classes.logo_section}>
                    <img src={logo} alt="logo"></img>
                    <h1>QuickBites</h1>
                </div>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
        </Fragment>
    );
};

export default Header;