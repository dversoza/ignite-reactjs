import styles from './Header.module.css'

import androidLogo from '../assets/android.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={androidLogo} alt="Android Logo" />
        </header>
    )
}
