import { useState, useEffect } from 'react';
import '../styles/sidebar.css';

interface SidebarProps {
  items: { id: string; label: string }[];
}

export default function Sidebar({ items }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      setIsOpen(!mobile); // aberta no desktop, fechada no mobile
    };

    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  return (
    <>
      <nav className="navbar">
        {/* Botão toggle só no mobile */}
        {isMobile && (
          <button className="sidebar-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? '✕' : '☰'}
          </button>
        )}
      </nav>

      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <nav>
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
