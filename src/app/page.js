'use client';

import { useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Envelope, Lock } from 'phosphor-react';
import styles from './page.module.css';
import Button from '../components/Button';
import Input from '../components/Input';

export default function Login() {
  const { signIn } = useContext(AuthContext);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    
    try {
      await signIn(formData);
    } catch (err) {
      setError('Email ou senha inválidos.');
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.logo}>ORANGE</h1>
        
        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <Input 
              label="Email" 
              name="email"
              type="email" 
              placeholder="seunome@email.com"
              value={formData.email}
              onChange={handleChange}
              icon={<Envelope size={20} color="#9ca3af" />}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <Input 
              label="Password" 
              name="password"
              type={showPassword ? "text" : "password"} 
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              icon={<Lock size={20} color="#9ca3af" />}
              required
            />
          </div>

          <div className={styles.options}>
            <label className={styles.checkboxLabel}>
              <input 
                type="checkbox" 
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
                className={styles.checkbox}
              /> 
              Mostrar a senha.
            </label>
          </div>

          {error && <p className={styles.error}>{error}</p>}

          <div className={styles.actionButton}>
             <Button type="submit">Acessar</Button>
          </div>

          <div className={styles.divider}>ou</div>

          <p className={styles.forgot}>Problemas para acessar sua conta?</p>

          <button type="button" className={styles.outlineButton}>
            Cadastrar
          </button>
        </form>
        
        <footer className={styles.footer}>
          Termos de uso • Política de privacidade
        </footer>
      </div>
    </div>
  );
}