import styles from "./Card.module.css";

const Card = ({ className, ...rest }) => {
    return <div className={`${className} ${styles.card}`} {...rest} />;
};

const CardTop = ({ className, ...rest }) => {
    return <div className={`${className} ${styles.cardTop}`} {...rest} />;
};

const CardBottom = ({ className, ...rest }) => {
    return <div className={`${className} ${styles.cardBottom}`} {...rest} />;
};

Card.Top = CardTop;
Card.Bottom = CardBottom;

export default Card;
