import styles from './Banner.module.css';

export function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>

                <p className={styles.paragrafo}>
                    Boas vindas ao meu espaço pessoal! Eu sou Antônio Evaldo, instrutor de Front-end da Alura. Aqui compartilho vários conhecimentos, espero que aprenda algo novo :)
                </p>
            </div>

            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src='assets/circulo_colorido.png'
                    aria-hidden={true}
                />

                <img
                    className={styles.minhaFoto}
                    src='assets/minha_foto.png'
                    alt="Foto do Antônio Evaldo sorrindo"
                />
            </div>
        </div>
    )
}