import { Link, useLocation } from 'react-router-dom';
import type { CSSProperties } from 'react';

export default function Navbar() {
  const location = useLocation();

  const navStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: '1rem 2rem',
    backgroundColor: '#FFFDF2', // cream background
    color: '#000000',           // preto texto padrão
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 100,
    boxSizing: 'border-box',
    borderBottom: '1px solid #000000', // linha preta sutil
  };

  const logoStyle: CSSProperties = {
    fontSize: '1.5rem',
    fontWeight: 700,
    color: '#000000',         // preto logo
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    flexShrink: 0,
  };

  const navLinksContainer: CSSProperties = {
    display: 'flex',
    gap: '2rem',
    justifyContent: 'flex-end',
    flexGrow: 1,
    flexWrap: 'wrap',
    overflowX: 'auto',
  };

  const linkStyle = (isActive: boolean): CSSProperties => ({
    textDecoration: 'none',
    paddingBottom: '2px',
    color: isActive ? '#000000' : '#333333', // preto para ativo, cinza escuro para inativo
    fontWeight: isActive ? 'bold' : 500,
    borderBottom: isActive ? '2px solid #000000' : 'none', // underline preto se ativo
    whiteSpace: 'nowrap',
    fontSize: '1rem',
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
