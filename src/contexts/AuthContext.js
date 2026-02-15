'use client';

import { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import api from '../services/api';

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const router = useRouter();

  // Ao carregar a página, verifica se tem token
  useEffect(() => {
    const token = Cookies.get('axion_token');
    
    if (token) {
      // Se token for true, já está logado
      setUser({ name: 'Usuário Axion' }); 
    }
  }, []);

  async function signIn({ email, password }) {
    try {
      const response = await api.post('/auth/local', {
        identifier: email,
        password: password,
      });

      const { jwt, user } = response.data;

      // expira em 1 dia
      Cookies.set('axion_token', jwt, { expires: 1 });
      
      // Atualiza o estado
      setUser(user);
      router.push('/people'); 

    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  function signOut() {
    Cookies.remove('axion_token');
    setUser(null);
    router.push('/');
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated: !!user, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}