import {Link} from "react-router-dom";
import styles from './IconTextButton.module.css'

function IconTextButton({to, icon, label}) {

    return (
        <Link to={to} className={styles.linkButton + " p-3 gap-3 body-fonts"}>
            <img src={`/${icon}.svg`} alt={label} className={styles.buttonIcon}/>
            {label}
        </Link>
    );

}

export default IconTextButton