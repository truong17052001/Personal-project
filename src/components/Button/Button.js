import styles from "./Button.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);


function Button({children}) {
    return ( 
        <a href='/' className={cx("button-primary")}>{children}</a>
     );
}

export default Button;