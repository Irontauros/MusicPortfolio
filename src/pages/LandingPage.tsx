import { useEffect, useState } from 'react';

export default function LandingPage() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      style={{
        minHeight: '100vh', // cobre a página inteira
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#213547',
        fontSize: '3rem',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'all 0.6s ease-out',
        textAlign: 'center',
      }}
    >
      Bem-Vindo/a
    </div>
  );
}
