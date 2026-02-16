import styles from './Card.module.css';

export default function Card({ title, image }) {
  // Tratamento caso a imagem venha nula do banco
  const bgImage = image ? `url(${image})` : 'none';

  return (
    <div className={styles.card}>
      <div 
        className={styles.imageBackground} 
        style={{ backgroundImage: bgImage }}
      />
      <div className={styles.overlay}>
        <h3 className={styles.title}>{title}</h3>
      </div>
    </div>
  );
}