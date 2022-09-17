import styles from './Comment.module.css'

import { Avatar } from './Avatar'

import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'

export function Comment({ id, content, publishedAt, author, onDeleteComment }) {
    const [likeCount, setLikeCount] = useState(0)

    function handleLike() {
        setLikeCount(likeCount + 1)
    }

    function handleDeleteComment() {
        onDeleteComment(id)
    }

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

                        <button onClick={handleDeleteComment} className={styles.deleteButton} title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    {content.map((paragraph, index) => (
                        <p key={index}>{paragraph.text}</p>
                    ))}
                </div>

                <footer>
                    <button onClick={handleLike}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}
