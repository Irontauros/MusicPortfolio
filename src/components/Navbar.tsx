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

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navStyle: CSSProperties = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    justifyContent: isMobile ? 'center' : 'space-between',
    alignItems: 'center',
    padding: isMobile ? '0.8rem 1.2rem' : '1rem 2rem',
    backgroundColor: '#FFFDF2',
    color: '#000000',
    position: 'fixed',
    top: 0,
    width: '100%',
    height: isMobile ? '90px' : '60px',
    zIndex: 100,
    boxSizing: 'border-box',
    borderBottom: '1px solid #000000',
  };

  const logoStyle: CSSProperties = {
    fontSize: isMobile ? '1.4rem' : '1.5rem',
    fontWeight: 700,
    color: '#000000',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    marginBottom: isMobile ? '0.5rem' : '0',
  };

  const navLinksContainer: CSSProperties = {
    display: 'flex',
    justifyContent: isMobile ? 'center' : 'flex-end',
    flexWrap: 'wrap',
    gap: isMobile ? '1rem' : '2rem',
    width: isMobile ? '100%' : 'auto',
    overflowX: 'auto',
    paddingLeft: isMobile ? '2.5rem' : '0',
  };

  const linkStyle = (isActive: boolean): CSSProperties => ({
    textDecoration: 'none',
    paddingBottom: '2px',
    color: isActive ? '#000000' : '#333333',
    fontWeight: isActive ? 'bold' : 500,
    fontSize: isMobile ? '1.1rem' : '1rem',
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
