import PostModelo from '../../componentes/PostModelo.js';
import './Post.css';
import { useParams } from "react-router-dom"
import ReactMarkdown from "react-markdown";
import posts from "../../json/posts.json";

export default function Post() {
    const parametros = useParams();
    const post = posts.find((post) => {
        return post.id === Number(parametros.id)
    })
    if(!post){
        return <h1>Post não encontrado...</h1>
    }

    return(
        <PostModelo
            fotoCapa={require(`../../assets/posts/${post.id}/capa.png`)}
            titulo={post.titulo}
        >
            <div className="post-markdown-container">
                <ReactMarkdown>
                    {post.texto}
                </ReactMarkdown>
            </div>
        </PostModelo>
    )
}