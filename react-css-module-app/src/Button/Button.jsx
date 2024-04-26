import styles from './Button.module.css'

function Button() {

    return(
        /* Hash className for button because of module css */
        <button className={styles.button}>Click me</button>
    );
}

export default Button