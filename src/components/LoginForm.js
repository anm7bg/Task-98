import styles from "./LoginForm.module.css"

export default function LoginForm() {

    return(
        <div>
            <form className={styles.form}>
                <label for="name" className={styles.label}>Name</label>
                <input type="text" id="name" className={styles.input}></input>
                <button className={styles.submit}>Submit</button>
            </form>
        </div>
    );
}