import styles from "./Card.module.css";

const Card = ({ className, ...rest }) => {
    return <div className={`${className} ${styles.card}`} {...rest} />;
};

const CardTop = ({ className, ...rest }) => {
    return <div className={`${className} ${styles.cardTop}`} {...rest} />;
};

const CardFooter = ({ className, ...rest }) => {
    return <div className={`${className} ${styles.cardFooter}`} {...rest} />;
};

Card.Top = CardTop;
Card.Footer = CardFooter;

export default Card;
