import { Fragment } from 'react';
import classes from './Hero.module.css'

const Hero = (props) => {
    return (
        <Fragment>
            <div className={classes.hero}>
                <h1>Healthy food is <span>goooood</span></h1>
                <h2>More than 10,000 recipes for every day and taste</h2>
                <button>Let's get started</button>
            </div>
        </Fragment>
    );
};

export default Hero;