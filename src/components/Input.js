import styles from './Input.module.css';

export default function Input({ label, icon, ...props }) {
  return (
    <div className={styles.container}>
      {label && <label className={styles.label}>{label}</label>}
      
      <div className={styles.inputWrapper}>
        <input className={styles.input} {...props} />
        {icon && <span className={styles.icon}>{icon}</span>}
      </div>
    </div>
  );
}