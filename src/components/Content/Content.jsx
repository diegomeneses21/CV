import styles from "./Content.module.css";

export default function Content() {
    return (
        <>
            <div className={styles.content}>
                <div className={styles.profile}>
                    Full Stack Developer con formación como Diseñador Web.
                    Experiencia trabajando en NodeJS, React, Redux, SQL entre otras tecnologías del sector.
                    Lideré la creación de una Plataforma de delivery,
                    donde los clientes pueden realizar su pedido desde la comodidad de su laptop o smartphone
                    y realizar el pago online o en efectivo, brindando también la oportunidad de
                    registrar su negocio o emprendimiento y potenciar sus ventas.
                </div>
                <div className={styles.skills} >
                    <h1 className={styles.titles}>TECNOLOGÍAS</h1>
                    <div>HTML, CSS, JavaScript, React, Redux, Node.js, Express, Sequelize, Scrum</div>
                </div>
            </div>
            <div className={styles.content2}>
                <div className={styles.projects}>
                    <h1 className={styles.titles}>PROYECTOS</h1>
                    <h2>Full Stack Web Developer - PEDIVERY</h2>
                    <p>Henry Bootcamp</p>
                    <ul>
                        <li>Diseñar y desarrollar una plaforma delivery que incluía: Login, registro, carrito de productos y ludificación.</li>
                        <li>Desarrollar con React Native con estilos en CSS. Back desarrollado en Node con Express. Base de datos en PostgreSQL y Sequelize.</li>
                        <a href="https://pf-henry-two.vercel.app/">PEDIVERY</a>
                    </ul>
                </div>
                <div className={styles.ep}>
                    <h1 className={styles.titles}>EDUCACION PROFESIONAL</h1>
                    <ul>
                        <li>Full Stack Web Developer. Henry Bootcamp. 700 horas de cursado teórico-práctico. 2022-2023</li>
                        <li>Bachiller tecnico. Institución Educativa Corazón Inmaculado de María. 2017</li>
                        <li>Técnico en contabilizacion de operaciones contables y financieras. Servicio Nacional de Aprendizaje. 2017</li>
                        <li>Seis semestres de Ingenieria de Sistemas. Universidad de la Amazonia. 2022</li>
                    </ul>
                </div>
            </div>
            <div className={styles.content2}>
                <div className={styles.languages}>
                    <h1 className={styles.titles}>IDIOMAS</h1>
                    <ul>
                        <li>Ingles: A2</li>
                    </ul>
                </div>
                <div className={styles.competencias}>
                    <h1 className={styles.titles}>COMPETENCIAS</h1>
                    <ul>
                        <li>Creatividad</li>
                        <li>Trabajo en equipo</li>
                        <li>Resolutivo</li>
                        <li>Comunicacion</li>
                        <li>Actitud positiva</li>
                    </ul>
                </div>
            </div>
        </>
    )
};