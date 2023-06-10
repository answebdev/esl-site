import styles from '../styles/Footer.module.css';

const Footer = () => (
    <div className='footer'>
        <div className={styles.footer}>
            <span className={styles.footerText}>
                &copy; Copyright {new Date().getFullYear()} ESL Site
            </span>
        </div>
    </div>
);

export default Footer;
