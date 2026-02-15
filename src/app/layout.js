import { AuthProvider } from '../contexts/AuthContext';
import './globals.css';

export const metadata = {
  title: 'Axion Test',
  description: 'Frontend Technical Test',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}