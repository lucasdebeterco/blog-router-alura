import {useParams} from "react-router-dom"
import posts from "../../json/posts.json"
import PostModelo from "../PostModelo";
import ReactMarkdown from "react-markdown";
import './Post.css'

export function Post() {
    const params = useParams()
    const post = posts.find((post) => {
        return post.id === Number(params.id)
    })

    if (!post) {
        return <h1>Post não encontrado..</h1>
    }

    return (
        <PostModelo
            fotoCapa={`../../public/posts/${post?.id}/capa.png`}
            titulo={post?.titulo}
        >
            <div className='post-markdown-containet'>
                <ReactMarkdown>
                    {post ? post.texto : ""}
                </ReactMarkdown>
            </div>
        </PostModelo>
    )
}