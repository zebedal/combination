import styles from './Header.module.css'

const Header = () => (
    <header className={styles.Header}>
        <div className={`container ${styles.FlexContainer}`}>
            <div className={styles.Logo}>
                <span>COMBINATION</span>
            </div>
        </div>
    </header>
)

export default Header