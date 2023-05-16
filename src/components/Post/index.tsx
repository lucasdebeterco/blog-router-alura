import {useParams} from "react-router-dom"
import posts from "../../json/posts.json"
import PostModelo from "../PostModelo";
import ReactMarkdown from "react-markdown";
import styles from './Post.module.css'
import {DefaultPage} from "../DefaultPage";
import {NotFound} from "../../Pages/NotFound";
import PostCard from "../PostCard";

export function Post() {
    const params = useParams()
    const post = posts.find((post) => {
        return post.id === Number(params.id)
    })

    if (!post) {
        return <NotFound />
    }

    const postsRecomendados = posts
        .filter((post) => post.id !== Number(params.id))
        .sort((a, b) => b.id - a.id)
        .slice(0, 4);

    return (
        <DefaultPage>
            <PostModelo
                fotoCapa={`../../public/posts/${post?.id}/capa.png`}
                titulo={post?.titulo}
            >
                <div className='post-markdown-containet'>
                    <ReactMarkdown>
                        {post ? post.texto : ""}
                    </ReactMarkdown>
                </div>

                <h2 className={styles.tituloOutrosPosts}>
                    Outros posts que você pode gostar:
                </h2>

                <ul className={styles.postsRecomendados}>
                    {postsRecomendados.map((post) => (
                        <li key={post.id}>
                            <PostCard post={post} />
                        </li>
                    ))}
                </ul>
            </PostModelo>
        </DefaultPage>
    )
}