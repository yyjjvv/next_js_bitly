import styles from "./Button.module.css";

const VARIANTS = {
    primary: styles.primary,
    secondary: styles.secondary,
    minimal: styles.minimal,
    outline: styles.outline,
};

const Button = ({ className = "", variant, as: AsComponent, ...rest }) => {
    const classNames = `${styles.button} ${
        VARIANTS[variant] ?? styles.primary
    } ${className}`;

    if (AsComponent) {
        return <AsComponent className={classNames} {...rest} />;
    }

    return <button className={classNames} {...rest} />;
};

export default Button;
