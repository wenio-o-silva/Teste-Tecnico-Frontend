'use client';

import { useEffect, useState } from 'react';
import api from '../../../services/api'; 
import Card from '../../../components/Card';
import styles from './page.module.css';

export default function Places() {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPlaces() {
      try {
        const response = await api.get('/places');
        console.log("Places API:", response.data);

        const lista = response.data.data || response.data || [];
        
        if (Array.isArray(lista)) {
          setPlaces(lista);
        } else {
          setPlaces([]);
        }

      } catch (error) {
        console.error("Erro ao buscar lugares:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPlaces();
  }, []);

  if (loading) return <div style={{ padding: 24 }}></div>;

  return (
    <div>
      <h2 className={styles.title}>List of Places</h2>
      <div className={styles.separator}></div>
      
      <div className={styles.grid}>
        {places?.map((item) => {
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