'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useContext } from 'react';
import { SignOut } from 'phosphor-react';
import { AuthContext } from '../contexts/AuthContext';
import styles from './Navbar.module.css';

export default function Navbar() {
  const pathname = usePathname(); // Hook para saber a URL atual
  const { signOut } = useContext(AuthContext);

  // Função auxiliar para verificar se o link está ativo
  const isActive = (path) => {
    return pathname.startsWith(path) ? styles.activeLink : styles.link;
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        
        <div className={styles.logo}>
          ORANGE
        </div>

        <div className={styles.links}>
          <Link href="/food" className={isActive('/food')}>
            FOODS
          </Link>
          <Link href="/people" className={isActive('/people')}>
            PEOPLE
          </Link>
          <Link href="/places" className={isActive('/places')}>
            PLACES
          </Link>
        </div>

        <button onClick={signOut} className={styles.logoutButton}>
          <SignOut size={24} />
          <span className={styles.logoutText}>Sair</span>
        </button>
      </div>
    </nav>
  );
}