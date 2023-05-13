import MenuLink from '../MenuLink';
import styles from './Menu.module.css';

export function Menu() {
    return (
        <header>
            <nav className={styles.navegacao}>
                <MenuLink to="/">
                    Início
                </MenuLink>
                <MenuLink to="/about">
                    Sobre Mim
                </MenuLink>
            </nav>
        </header>
    )
}