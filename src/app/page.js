'use client';

import { useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Envelope, Lock } from 'phosphor-react'; // Ícones
import styles from './page.module.css';
import Button from '../components/Button';
import Input from '../components/Input';

export default function Login() {
  const { signIn } = useContext(AuthContext);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  // Atualiza o estado conforme o usuário digita
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  // Envia o formulário
  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    
    try {
      await signIn(formData);
    } catch (err) {
      setError('Email ou senha inválidos. Tente novamente.');
    }
  }

  return (
    <div className={styles.container}>
      {/* Lado Esquerdo: Formulário */}
      <div className={styles.formSection}>
        <div className={styles.card}>
          <h1 className={styles.logo}>ORANGE</h1>
          
          <form onSubmit={handleSubmit}>
            <Input 
              label="Email" 
              name="email"
              type="email" 
              placeholder="seunome@email.com"
              value={formData.email}
              onChange={handleChange}
              icon={<Envelope size={20} />}
              required
            />

            <Input 
              label="Password" 
              name="password"
              type="password" 
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              icon={<Lock size={20} />}
              required
            />

            {error && <p className={styles.error}>{error}</p>}

            <div className={styles.options}>
              <label className={styles.checkbox}>
                <input type="checkbox" /> Mostrar a senha
              </label>
            </div>

            <p className={styles.forgot}>Problemas para acessar sua conta?</p>

            <Button type="submit">Acessar</Button>

            <div className={styles.divider}>ou</div>

            <button type="button" className={styles.outlineButton}>
              Cadastrar
            </button>
          </form>
          
          <footer className={styles.footer}>
            Termos de uso • Política de privacidade
          </footer>
        </div>
      </div>

      {/* Lado Direito: Imagem (Background) */}
      <div className={styles.imageSection}>
        {/* Se tiver a imagem real, coloque em /public/assets/bg-login.jpg */}
        {/* <img src="/assets/bg-login.jpg" alt="Office" /> */}
      </div>
    </div>
  );
}