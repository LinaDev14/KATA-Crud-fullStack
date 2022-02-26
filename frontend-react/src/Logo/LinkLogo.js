import styles from './LinkLogo.module.css';


const LinkLogo= ({src="gifs", href= "/", alt=""}) => {
    return (
        // eslint-disable-next-line react/jsx-no-target-blank
        <a href={href} target="_self">
            <img  className={styles.header__img}src={src} alt={alt} />
        </a>
    );
}

export {LinkLogo}