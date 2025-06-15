import { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import '../styles/originals.css';

type OriginalItem = {
  id: string;
  label: string;
  version: string;
  description: string;
  videoId: string;
  reversed?: boolean;
};

const originalsList: OriginalItem[] = [
  {
    id: 'semcontacto',
    label: 'Sem Contacto',
    version: 'Original acústico',
    description: 'Quando se perde o contacto, o eco fica.\n\nEsta música fala da ausência e da dor de não poder dizer mais nada.',
    videoId: 'VIDEO_ID_EXEMPLO',
  },
  {
    id: 'seforesfeliz',
    label: 'Se Fores Feliz',
    version: 'Original acústico',
    description: 'Às vezes, amar é deixar ir.\n\n"Se Fores Feliz" é uma promessa de amor que sobrevive até ao adeus.',
    videoId: 'VIDEO_ID_EXEMPLO',
  },
  {
    id: 'sequiseres',
    label: 'Se Quiseres',
    version: 'Original acústico',
    description: 'Ainda te espero aqui, se quiseres voltar.\n\nUma melodia sobre portas que nunca se fecham por completo.',
    videoId: 'VIDEO_ID_EXEMPLO',
  },
  {
    id: 'dizlhe',
    label: 'Diz-Lhe',
    version: 'Original acústico',
    description: 'Nem tudo precisa ser dito... mas às vezes faz falta.\n\n"Diz-Lhe" é sobre palavras guardadas que nunca chegaram ao destino.',
    videoId: 'VIDEO_ID_EXEMPLO',
  },
  {
    id: 'naosoucomoele',
    label: 'Não Sou Como Ele',
    version: 'Original acústico',
    description: 'Comparações doem — especialmente quando são injustas.\n\nEsta é uma afirmação de identidade no meio de inseguranças.',
    videoId: 'VIDEO_ID_EXEMPLO',
  },
  {
    id: 'achamada',
    label: 'A Chamada',
    version: 'Original acústico',
    description: 'Aquela chamada que nunca chegou — ou que chegou tarde demais.\n\nEsta canção é sobre a última tentativa.',
    videoId: 'VIDEO_ID_EXEMPLO',
  },
];

function OriginalBlock({ id, label, version, description, videoId, reversed }: OriginalItem) {
  return (
    <section id={id} className={`cover-block ${reversed ? 'reversed' : ''}`}>
      <div className="video-wrapper">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={`${label} Original`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="text-container">
        <h2>{label}</h2>
        <p className="version">{version}</p>
        <p className="description">
          {description.split('\n').map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}

export default function Originals() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Sidebar items={originalsList.map(({ id, label }) => ({ id, label }))} />
      <main className={`covers-page ${visible ? 'visible' : ''}`}>
        {originalsList.map((item) => (
          <OriginalBlock key={item.id} {...item} />
        ))}
      </main>
    </>
  );
}
