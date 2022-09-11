import styles from './Comment.module.css'

import { Avatar } from './Avatar'

import { ThumbsUp, Trash } from 'phosphor-react'

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar src="https://github.com/dversoza.png" hasBorder={false} />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Daniel Versoza</strong>
                            <time title="15 de maio de 2022 às 20:30" dateTime='2022-05-15 20:30' className={styles.date}>Publicado há 3 dias</time>
                        </div>

                        <button className={styles.deleteButton} title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>lorem ipsum dolor sit amet</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}
