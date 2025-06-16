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
    description: `Há canções que dizem tudo por nós — e esta é uma delas.
Quando a canto, é como se a tivesse mesmo à minha frente. Como se, por instantes, o tempo recuasse e eu ainda pudesse tentar fazê-la voltar.

Não há metáforas aqui, não há complicações. Só uma vontade crua de voltar atrás, de agarrar o que deixei fugir.
Cada palavra desta música podia ter saído da minha boca, naquele silêncio em que nos perdemos.

E por mais versões que existam, esta é a minha forma de gritar em voz baixa. De pedir, mesmo que não ouça, que volte.
Nem que seja só para me despedir direito.`,
    videoId: 'mLp800Y-W7Q',
  },
  {
    id: 'contigo',
    label: 'Contigo',
    artist: 'Fernando Daniel',
    version: 'Versão acústica',
    description: `Se eu pudesse escolher uma única canção para lhe mostrar o que sinto… seria esta.
Porque tudo faz sentido, se for contigo.

Mesmo nos dias em que tudo corre mal, em que o mundo parece desabar — se ela estivesse ali, ao meu lado, bastava.
E esta música é isso: uma declaração em forma de canção, uma certeza que resistiu ao tempo.

Canto isto como quem confessa algo que guardou por demasiado tempo.
Porque mesmo que ela já não oiça, eu precisava de dizer — que contigo, tudo valia a pena. E ainda vale.`,
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
Que mesmo quando tento seguir, há sempre algo que me puxa de volta.
Há dias em que preferia esquecê-la, não por ódio, mas por sobrevivência.

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

Há algo de cruel em amar tanto alguém ao ponto de lhe desejar o melhor — mesmo que esse “melhor” não me inclua.
E esta música carrega isso. Uma dor que não grita, mas que aperta devagar.

Cada vez que a canto, sinto que lhe escrevo uma carta que nunca enviei.
Só queria que ela soubesse… que, apesar de tudo, continuo a querer que seja feliz.`,
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
