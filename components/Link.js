// packages
import BaseLink from "next/link";
// style
import styles from "./Link.module.css";

const VARIANTS = {
    primary: styles.primary,
    secondary: styles.secondary,
};

const Link = ({ className = "", variant, as: AsComponent, ...rest }) => {
    const classNames = `${styles.link} ${VARIANTS[variant] ?? ""} ${className}`;

    if (AsComponent) {
        return <AsComponent className={classNames} {...rest} />;
    }

    return <BaseLink className={classNames} {...rest} />;
};

export default Link;
