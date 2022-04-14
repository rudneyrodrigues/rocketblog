import { useState } from 'react';
import toast from 'react-hot-toast';
import styles from './styles.module.scss';

export function Search() {
  const [search, setSearch] = useState('');

  return (
    <div className={styles.container}>
      <input type="text" placeholder="Buscar" value={search} onChange={(event) => {
        setSearch(event.target.value);
      }} />
      <button type='submit' onClick={() => {
        search && toast.success(`Você buscou por: ${search}`);
      }}>
        <img src="/search.svg" alt="Pesquisar" />
      </button>
    </div>
  )
}