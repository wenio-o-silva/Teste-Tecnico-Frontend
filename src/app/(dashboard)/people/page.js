'use client';

import { useEffect, useState } from 'react';
import api from '../../../services/api'; 
import Card from '../../../components/Card';
import styles from './page.module.css';

export default function People() {
  // Começa com array vazio para não quebrar no primeiro render
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPeople() {
      try {
        const response = await api.get('/people');

        const lista = response.data.data || response.data || [];
        
        // Garante que 'lista' é mesmo um Array antes de salvar
        if (Array.isArray(lista)) {
          setPeople(lista);
        } else {
          console.error("Formato inesperado recebido:", lista);
          setPeople([]);
        }

      } catch (error) {
        console.error("Erro ao buscar pessoas:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPeople();
  }, []);

  if (loading) return <div style={{ padding: 24 }}></div>;

  return (
    <div>
      <h2 className={styles.title}>List of People</h2>
      <div className={styles.separator}></div>
      
      <div className={styles.grid}>
        {/* O '?' (people?.map) impede o erro se people for nulo/undefined */}
        {people?.map((item) => {
          // Lógica híbrida: aceita formato Strapi ou Flat
          const data = item.attributes || item;
          const { name, link } = data;

          return (
            <Card 
              key={item.id || Math.random()} 
              title={name} 
              image={link} 
            />
          );
        })}
      </div>
    </div>
  );
}