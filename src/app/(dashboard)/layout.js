import Navbar from '../../components/Navbar';
import styles from './layout.module.css';

export default function DashboardLayout({ children }) {
  return (
    <div className={styles.dashboardContainer}>
      <Navbar />
      
      {/* (People, Food, Places) */}
      <main className={styles.content}>
        {children}
      </main>
    </div>
  );
}