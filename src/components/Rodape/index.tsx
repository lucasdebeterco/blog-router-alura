import styles from './Rodape.module.css';

export function Rodape() {
    return (
        <footer className={styles.rodape}>
            <img src='../../assets/marca_registrada.svg' alt='marca_registrada' />

            Desenvolvido por Alura.
        </footer>
    )
}