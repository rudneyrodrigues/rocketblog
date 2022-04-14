import Link from 'next/link';
import { Search } from '../inputSearch';
import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <img src="/logo.svg" alt="RocketBlog" />

        <nav>
          <Link href="/">
            <a className={styles.active}>Home</a>
          </Link>
          <Link href="#">
            <a>Sobre</a>
          </Link>
          <Link href="#">
            <a>Categorias</a>
          </Link>
          <Link href="#">
            <a>Contato</a>
          </Link>
        </nav>

        <Search />
      </div>
    </header>
  )
}