import classes from './Footer.module.css'

const Footer = (props) => {
    return (
        <footer className={classes.footer}>
            <a href='https://www.linkedin.com/in/james-treap' target='_blank' rel="noreferrer"><p>© by James Treap</p></a>
            <a href='https://github.com/JamesTreap/QuickBites' target='_blank' rel="noreferrer"><p>Github</p></a>
            <a href='https://github.com/JamesTreap' target='_blank' rel="noreferrer"><p>Contact</p></a>
        </footer>
    );
};

export default Footer;