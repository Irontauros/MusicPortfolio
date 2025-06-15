interface SidebarProps {
  items: { id: string; label: string }[];
}

export default function Sidebar({ items }: SidebarProps) {
  return (
    <div style={{
      position: 'fixed',
      top: '70px', // ajusta conforme a altura exata da tua navbar
      left: 0,
      width: '200px',
      height: '100%',
      backgroundColor: '#FFFDF2', // igual à navbar
      borderRight: '1px solid #000000',
      padding: '2rem 1rem',
      boxSizing: 'border-box',
      zIndex: 10,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center', // centraliza os links horizontalmente
    }}>
      <nav>
        <ul style={{
          listStyle: 'none',
          padding: 0,
          margin: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          alignItems: 'center', // centraliza os itens na lista
        }}>
          {items.map(item => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                style={{
                  textDecoration: 'none',
                  color: '#000000',
                  fontWeight: 500,
                  fontSize: '1rem',
                  transition: 'color 0.3s',
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
