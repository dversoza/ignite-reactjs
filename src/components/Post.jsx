import { Avatar } from './Avatar'
import { Comment } from './Comment'

import styles from './Post.module.css'

export function Post({ author, content, title }) {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/dversoza.png" />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title="15 de maio de 2022 às 20:30" dateTime='2022-05-15 20:30' className={styles.date}>Publicado há 3 dias</time>
            </header>

            <div className={styles.content}>
                <p>lorem ipsum dolor sit amet</p>

                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium ullam impedit ipsum minima voluptatibus soluta tempora quis, libero sequi.</p>

                <p>Natus similique veniam suscipit aperiam doloribus? Maxime laboriosam ex accusamus vitae.</p>

                <a href="#">#cool</a>{' '}
                <a href="#">#awesome</a>{' '}
                <a href="#">#react</a>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu comentário</strong>

                <textarea placeholder='Deixe seu comentário'></textarea>

                <div className={styles.buttonDiv}>
                    <button type='submit'>Enviar</button>
                </div>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}
