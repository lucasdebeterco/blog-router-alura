import PostModelo from "../../components/PostModelo";
import fotoCapa from "../../../public/assets/sobre_mim_capa.png"
import styles from "About.module.css"

export function About() {
    return (
        <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">
            <h3 className={styles.subtitulo}>
                teste
            </h3>
        </PostModelo>
    )
}