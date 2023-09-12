import { Fragment } from 'react';
import classes from './Hero.module.css'

const Hero = () => {
    return (
        <Fragment>
            <div className={classes.hero}>
                <h1>Healthy food is <span>goooood</span></h1>
                <h2>Tasty dishes in your hands with only a few clicks</h2>
                <a href="#order"><button>Let's get started</button></a>
            </div>
        </Fragment>
    );
};

export default Hero;