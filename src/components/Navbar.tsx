import { Link, useLocation } from 'react-router-dom';
import type { CSSProperties } from 'react';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // verificar ao montar
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: isMobile ? '0.5rem 1rem' : '1rem 2rem',
    backgroundColor: '#FFFDF2',
    color: '#000000',
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 100,
    boxSizing: 'border-box',
    borderBottom: '1px solid #000000',
  };

  const logoStyle: CSSProperties = {
    fontSize: isMobile ? '1.2rem' : '1.5rem',
    fontWeight: 700,
    color: '#000000',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    marginBottom: '0.3rem',
  };

const navLinksContainer: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: isMobile ? '0.8rem' : '2rem',
  width: '100%',
  overflowX: 'auto',
  paddingLeft: isMobile ? '2.5rem' : '0', // <- ESTA LINHA
};


  const linkStyle = (isActive: boolean): CSSProperties => ({
    textDecoration: 'none',
    paddingBottom: '2px',
    color: isActive ? '#000000' : '#333333',
    fontWeight: isActive ? 'bold' : 500,
    fontSize: isMobile ? '0.85rem' : '1rem',
    borderBottom: isActive ? '2px solid #000000' : 'none',
    whiteSpace: 'nowrap',
    transition: 'all 0.3s ease-in-out',
  });

  const links = [
    { to: '/about', label: 'Sobre Mim' },
    { to: '/originals', label: 'Originais' },
    { to: '/covers', label: 'Covers' },
    { to: '/contact', label: 'Contactos' },
  ];

  return (
    <nav style={navStyle}>
      <Link to="/" style={logoStyle}>Francisco Duarte</Link>
      <div style={navLinksContainer}>
        {links.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            style={linkStyle(location.pathname === to)}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
