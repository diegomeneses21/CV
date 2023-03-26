import styles from "./Header.module.css";

export default function Header() {
    return (
        <>
            <header >
                <div className={styles.header}>
                    <div>
                        <h1>Diego Andres Meneses</h1>
                        <h3>Full Stack Web Developer</h3>
                    </div>
                    <div className={styles.info}>
                        <h4>Puerto Rico - Caquetá, Colombia</h4>
                        <h4>andresd3456@gmail.com</h4>
                        <h4>(+57) 3203911336</h4>
                        <a href='https://www.linkedin.com/in/diego-andres-meneses/'>LinkedIn </a>
                        <a href='https://github.com/diegomeneses21'>GitHub </a>
                    </div>
                </div>
            </header>
        </>
    )
};