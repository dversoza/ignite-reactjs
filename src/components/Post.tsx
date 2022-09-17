import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useState } from 'react';

import { Avatar } from './Avatar'
import { Comment } from './Comment'

import styles from './Post.module.css'

export function Post({ author, publishedAt, content }) {
    const [comments, setComments] = useState([
        {
            id: 1,
            content: [
                { type: 'paragraph', text: "lorem ipsum dolor sit amet" },
            ]
        },
        {
            id: 2,
            content: [
                { type: 'paragraph', text: "lorem ipsum dolor sit amet" },
            ]
        },
        {
            id: 3,
            content: [
                { type: 'paragraph', text: "lorem ipsum dolor sit amet" },
            ]
        },
    ])

    const [newCommentText, setNewComment] = useState('')

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    function handleNewCommentChange(event) {
        event.target.setCustomValidity('')
        setNewComment(event.target.value)
    }

    function handleNewCommentInvalid(event) {
        event.target.setCustomValidity('Digite um comentário')
    }

    function handleCreateComment(event) {
        event.preventDefault()

        setComments([...comments, {
            id: comments.length + 1,
            content: [{ type: 'paragraph', text: newCommentText }]
        }])

        setNewComment('')
    }

    function deleteComment(id) {
        setComments(comments.filter((c) => c.id !== id))
    }

    const isNewCommentEmpty = newCommentText.length === 0

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()} className={styles.date}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map((line, index) => {
                    if (line.type === 'paragraph') {
                        return <p key={index}>{line.text}</p>
                    }

                    if (line.type === 'tag') {
                        return <a key={index} href='#'>{line.text}{' '}</a>
                    }
                })}
            </div>

            <form onSubmit={handleCreateComment} className={styles.commentForm}>
                <strong>Deixe seu comentário</strong>

                <textarea
                    placeholder='Deixe seu comentário'
                    name='comment'
                    onChange={handleNewCommentChange}
                    value={newCommentText}
                    onInvalid={handleNewCommentInvalid}
                    required
                />

                <div className={styles.buttonDiv}>
                    <button type='submit' disabled={isNewCommentEmpty}>
                        Publicar
                    </button>
                </div>
            </form>

            <div className={styles.commentList}>
                {comments.map((comment, index) => {
                    return <Comment key={index} onDeleteComment={deleteComment} {...comment} />
                })}
            </div>
        </article>
    )
}
