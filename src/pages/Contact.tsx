export default function Contact() {
  return (
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        padding: '4rem 1.5rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'var(--bg-beige)', // usa o fundo definido no App
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '800px',
          textAlign: 'center',
          color: 'var(--text-dark)',
        }}
      >
        <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Contactos</h1>

        <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
          Email:{' '}
          <a
            href="mailto:teu@email.com"
            style={{
              color: 'var(--text-dark)',
              textDecoration: 'underline',
              fontWeight: '500',
            }}
          >
            thetaurus.2121@gmail.com
          </a>
        </p>

        <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
          WhatsApp / Telefone:{' '}
          <a
            href="tel:+351 930 484 396"
            style={{
              color: 'var(--text-dark)',
              textDecoration: 'underline',
              fontWeight: '500',
            }}
          >
            +351 930 484 396
          </a>
        </p>

        <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
          Instagram:{' '}
          <a
            href="https://instagram.com/fd_franciscoduarte"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'var(--text-dark)',
              textDecoration: 'underline',
              fontWeight: '500',
            }}
          >
            @fd_franciscoduarte
          </a>
        </p>

        <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
          TikTok:{' '}
          <a
            href="https://tiktok.com/@fd_franciscoduarte"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'var(--text-dark)',
              textDecoration: 'underline',
              fontWeight: '500',
            }}
          >
            @fd_franciscoduarte
          </a>
        </p>
      </div>
    </div>
  );
}
