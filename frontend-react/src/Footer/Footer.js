// import styles
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <>
        <footer className={styles.footer__container}>
            <h4 className={styles.copy}>
                &copy; 2022 - LMFront-end
            </h4>
            <div className={styles.sociales}>
                <a href="https://www.spotify.com/bo/"> <i class="fab fa-spotify fa-2x"></i></a>
                <a href="https://www.instagram.com/?hl=es"><i class="fab fa-instagram-square fa-2x"></i></a>
                <a href="https://twitter.com/?lang=es"><i class="fab fa-twitter fa-2x"></i></a>
                <a href="https://www.facebook.com/"><i class="fab fa-facebook fa-2x"></i></a>
                <a href="https://web.telegram.org/"><i class="fab fa-telegram fa-2x"></i></a>
            </div>
        </footer>
    </>
    )
}

export {Footer}