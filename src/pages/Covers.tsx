import { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import '../styles/covers.css';

type CoverItem = {
  id: string;
  label: string;
  artist: string;
  version: string;
  description: string;
  videoId: string;
  reversed?: boolean;
};

const coversList: CoverItem[] = [
  {
    id: 'volta',
    label: 'Volta',
    artist: 'Diogo Piçarra',
    version: 'Versão acapella',
    description: `Há canções que dizem tudo por nós, e esta é uma delas.
Quando a canto, é como se a tivesse mesmo à minha frente.

Não há metáforas aqui, não há complicações. Só uma vontade crua de voltar atrás, de agarrar o que deixei fugir.
Cada palavra desta música podia ter saído da minha boca, naquele silêncio em que nos perdemos.
`,
    videoId: 'mLp800Y-W7Q',
  },
  {
    id: 'contigo',
    label: 'Contigo',
    artist: 'Fernando Daniel',
    version: 'Versão acústica',
    description: `Se eu pudesse escolher uma única canção para lhe mostrar o que sinto… seria esta.
Porque tudo faz sentido, se for contigo.

Mesmo nos dias em que tudo corre mal, em que o mundo parece desabar, se ela estivesse ali, ao meu lado, bastava.
Canto isto como quem confessa algo que guardou por demasiado tempo.`,
    videoId: 'VIDEO_ID_CONTIGO',
  },
  {
    id: 'ihate',
    label: 'I Hate That It\'s True',
    artist: 'Dean Lewis',
    version: 'Versão acústica',
    description: `Há dias em que eu gostava que não fosse verdade.
Gostava que ela não significasse tudo isto, que não fosse a razão por trás de cada palavra que escrevo ou canto.
Mas odeio que é verdade: ela ainda é.

Odeio que é verdade que o tempo passou e nada mudou por dentro.

Mas não consigo. Esta canção é isso. Uma verdade que dói.
Uma confissão que eu não queria fazer.
Uma parte de mim que ainda não consegui deixar.`,
    videoId: 'ucYFz6MrSC8?si=8jD2RbQnifDMGod_',
    reversed: true,
  },
  {
    id: 'wish',
    label: 'Wish You the Best',
    artist: 'Lewis Capaldi',
    version: 'Versão acústica',
    description: `Esta foi uma das músicas mais difíceis de cantar. Porque é uma despedida sem raiva.
Só um desejo genuíno de que ela esteja bem. Mesmo longe. Mesmo sem mim.

Há algo de cruel em amar tanto alguém ao ponto de lhe desejar o melhor, mesmo que esse “melhor” não me inclua.
E esta música carrega isso. Uma dor que não grita, mas que aperta devagar.`,
    videoId: 'VIDEO_ID_LEWIS',
  },
];

function CoverBlock({ id, label, artist, version, description, videoId, reversed }: CoverItem) {
  return (
    <section id={id} className={`cover-block ${reversed ? 'reversed' : ''}`}>
      <div className="video-wrapper">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={`${label} Cover`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="text-container">
        <h2>{label}</h2>
        <p className="artist">{artist}</p>
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

export default function Covers() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Sidebar items={coversList.map(({ id, label }) => ({ id, label }))} />
      <main className={`covers-page ${visible ? 'visible' : ''}`}>
        {coversList.map((item) => (
          <CoverBlock key={item.id} {...item} />
        ))}
      </main>
    </>
  );
}
