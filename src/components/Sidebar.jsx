import { Avatar } from './Avatar'

import styles from './Sidebar.module.css'

import { PencilLine } from 'phosphor-react'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1660866838212-df428c885827?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&dpr=2&auto=format%2Ccompress&q=50&w=500&fit=crop&auto=format" alt="User Cover" />

            <div className={styles.profile}>
                <Avatar hasBorder src="https://github.com/dversoza.png" />

                <strong>Daniel Versoza</strong>
                <span>Backend Software Engineer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar perfil
                </a>
            </footer>
        </aside>
    )
}
