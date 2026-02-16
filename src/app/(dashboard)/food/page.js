'use client';

import { useEffect, useState } from 'react';
import api from '../../../services/api'; 
import Card from '../../../components/Card';
import styles from './page.module.css';

export default function Food() {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFoods() {
      try {
        const response = await api.get('/foods');
        console.log("Foods API:", response.data);

        // Tenta pegar do padrão Strapi (.data) ou direto (.data) ou array vazio
        const lista = response.data.data || response.data || [];
        
        if (Array.isArray(lista)) {
          setFoods(lista);
        } else {
          setFoods([]);
        }

      } catch (error) {
        console.error("Erro ao buscar comidas:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchFoods();
  }, []);

  if (loading) return <div style={{ padding: 24 }}></div>;

  return (
    <div>
      <h2 className={styles.title}>List of Foods</h2>
      <div className={styles.separator}></div>
      
      <div className={styles.grid}>
        {foods?.map((item) => {
          // Aceita formato Strapi (attributes) ou Flat (direto)
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