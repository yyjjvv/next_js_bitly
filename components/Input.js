// packages
import { forwardRef } from "react";
// style
import styles from "./Input.module.css";

const Input = ({ className = "", variant, ...rest }, ref) => {
    const classNames = `${styles.input} ${className}`;
    return <input className={classNames} {...rest} ref={ref} />;
};

export default forwardRef(Input);
