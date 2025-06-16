import { useEffect, useState } from 'react';

export default function AboutMe() {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300);
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    }
    return () => clearTimeout(timer);
  }, []);

  const imageStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: '800px',
    height: '500px',
    objectFit: 'cover',
    borderRadius: '15px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
    flexShrink: 0,
  };

  const textStyle: React.CSSProperties = {
    fontSize: '1.2rem',
    lineHeight: 1.8,
    flex: 1,
    minWidth: '300px',
    maxWidth: '800px',
  };

  const sectionStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2rem',
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100%',
        padding: isMobile ? '6rem 1.5rem 4rem' : '4rem 1.5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'all 0.6s ease-out',
        color: '#000',
        boxSizing: 'border-box',
      }}
    >
      <h1 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '2rem' }}>
        Sobre mim
      </h1>

      <div style={{ width: '100%', maxWidth: '1400px', display: 'flex', flexDirection: 'column', gap: '5rem' }}>
        {/* 1. Quem sou eu */}
        <div style={sectionStyle}>
          <img src="/guitar.jpeg" alt="Loop pedal e guitarra" style={imageStyle} />
          <p style={textStyle}>
            Sou cantor e compositor. As minhas canções nascem em silêncio. Com uma guitarra nas mãos e uma memória a repetir-se.
            Crio a sós, como quem escreve cartas que nunca envia.
            As minhas letras não seguem regras. Nascem como têm de nascer. São sentimentos que talvez não saibamos dizer ou explicar,
            mas que precisamos de ouvir.
          </p>
        </div>

        {/* 2. Sobre ela */}
        <div style={{ ...sectionStyle, flexDirection: 'row-reverse' }}>
          <img src="/B.png" alt="Memória" style={imageStyle} />
          <p style={textStyle}>
            Tudo começou com uma rapariga. Conhecemo-nos no quinto ano e no sétimo ano tivemos algo, não foi um namoro, muito menos um relacionamento sério,
            mas foi o mais perto que alguma vez estivemos um do outro.
            Nunca mais voltámos a estar juntos desde então. Só como amigos e mesmo assim, em segredo, ela foi sempre tudo para mim.
            A razão por trás de cada escolha. Mesmo nos momentos em que eu não percebia, ela era o centro de tudo.
          </p>
        </div>

        {/* 3. Primeiras composições e o Tony */}
        <div style={sectionStyle}>
          <img src="/tony.png" alt="Com Tony Carreira" style={imageStyle} />
          <p style={textStyle}>
            Escrevi a minha primeira canção aos 12 anos e ainda guardo algumas dessas letras. Uma delas nasceu no meu oitavo ano,
            sobreviveu até hoje e tornou-se uma música oficial.
            Um dos meus maiores objetivos é que, um dia, alguém se identifique e dedique as minhas canções, como eu dediquei tantas de outros artistas.
            Que estas músicas encontrem quem precisa delas.
          </p>
        </div>

        {/* 4. Arte e propósito */}
        <div style={{ ...sectionStyle, flexDirection: 'row-reverse' }}>
          <img src="/playing.png" alt="Esperança" style={imageStyle} />
          <p style={textStyle}>
            Não tenho palco, nem contrato, nem ninguém a fazer isto comigo. Só tenho canções. E vontade.
            Acredito que cada canção que gravo pode chegar até ela. Talvez a faça lembrar, talvez a faça pensar. Talvez não.
            Mas é com as canções que digo o que nunca tive coragem de lhe dizer.
            <br /><br />
            <em>"A arte não é um espelho para refletir o mundo, mas um martelo para moldá-lo."</em><br />
            — Bertolt Brecht
          </p>
        </div>

        {/* 5. Determinação e legado */}
        <div style={sectionStyle}>
          <img src="/singing.png" alt="Estúdio caseiro" style={imageStyle} />
          <p style={textStyle}>
            Aprendi tudo sozinho. Componho, gravo, edito, misturo, tudo feito em casa, tudo feito por mim.
            Não tenho uma carreira construída, mas tenho motivação como ninguém.
            Faço isto porque preciso. Porque é a única forma que encontrei de viver com o que sinto.
            <br /><br />
            <em>"A música expressa o que não pode ser dito em palavras, mas não pode permanecer em silêncio."</em><br />
            — Victor Hugo
          </p>
        </div>
      </div>
    </div>
  );
}
