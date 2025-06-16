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
    description: `A última vez que falámos foi em outubro de 2024. Antes disso, fui eu que quebrei o silêncio, depois de dois anos sem contacto.\n\nPrometi a mim mesmo que desta vez não ia voltar a fazê-lo, por mais que me custe, por mais que todos os dias escreva mensagens que nunca envio. Esta canção nasceu desse esforço. É a minha maneira de dizer tudo… sem dizer nada.`,
    videoId: 'VIDEO_ID_EXEMPLO',
  },
  {
    id: 'naofazsentido',
    label: 'Não Faz Sentido',
    version: 'Original acústico',
    description: `Quando falo sobre ela, ninguém acredita que nunca fomos um casal. Acham sempre que vivemos anos juntos, que partilhámos tudo. Mas não. Nunca foi “nós”.\n\nE, mesmo assim, cá estou eu, com tudo isto cá dentro. Esta música é um retrato fiel do que nunca existiu, mas que me marcou como se tivesse existido. Porque não faz sentido... mas é real.`,
    videoId: 'VIDEO_ID_EXEMPLO',
  },
  {
    id: 'naosoucomoele',
    label: 'Não Sou Como Ele',
    version: 'Original acústico',
    description: `Escrevi esta canção quando tinha 13 anos. Via-a a tentar com alguém que não a fazia feliz, e mesmo sem entender muito da vida, já sentia que ela merecia mais. Ou, pelo menos, alguém diferente. Alguém como eu.\n\nEra para ele, na altura. Mas o tempo passou, e talvez ainda faça sentido hoje.`,
    videoId: 'VIDEO_ID_EXEMPLO',
  },
  {
    id: 'sequiseres',
    label: 'Se Quiseres',
    version: 'Original acústico',
    description: `É um monólogo, talvez. Só para lhe lembrar que, se ela quiser, ainda tem aqui alguém.\n - "Se quiseres falar, estou pronto. Se quiseres que eu vá, eu vou".\n\n-"Tu sabes o que eu queria: falar contigo, visitar-te, estar contigo no teu aniversário, ter-te no meu. Mas já nem penso nisso. Porque nunca tive o que queria. Por isso… se quiseres..."`,
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
