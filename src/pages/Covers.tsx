import { useEffect, useState } from 'react';
import '../styles/covers.css';

type CoverItem = {
  id: string;
  label: string;
  artist: string;
  version: string;
  description: string;
  videoId: string;
};

const coversList: CoverItem[] = [
    {
    id: 'vouteamar',
    label: 'Vou-te Amar',
    artist: 'Tony Carreira',
    version: 'Versão Karaoke\nOriginal: https://youtu.be/dsoL8uWqRVI?si=GcDKPUni4mmP5PtI',
    description: `Peço desculpa, o final foi mais sentido e nota-se na voz...\n\nNão tenho mais nada a acrescentar, está tudo na letra desta canção.`,
    videoId: '2b1jeKsC-8w',
  },
  {
    id: 'volta',
    label: 'Volta',
    artist: 'Diogo Piçarra',
    version: 'Versão acapella',
    description: `Há canções que dizem tudo por nós, e esta é uma delas. Quando a canto, é como se a tivesse mesmo à minha frente.\n\nNão há metáforas aqui, não há complicações. Só uma vontade crua de voltar atrás, de agarrar o que deixei fugir.\n\nCada palavra desta música podia ter saído da minha boca, naquele silêncio em que nos perdemos.`,
    videoId: 'GZN_XVLZ9k4',
  },
  {
    id: 'contigo',
    label: 'Contigo',
    artist: 'Fernando Daniel',
    version: 'Versão acústica',
    description: `Se eu pudesse escolher uma única canção para lhe mostrar o que sinto… seria esta.\n\n-"Porque tudo faz sentido, se for contigo."\n\nMesmo nos dias em que tudo corre mal, em que o mundo parece desabar, se ela estivesse ali, ao meu lado, bastava. Canto isto como quem confessa algo que guardou por demasiado tempo.`,
    videoId: 'Hu_KINCMjkg',
  },
  {
    id: 'ihate',
    label: "I Hate That It's True",
    artist: 'Dean Lewis',
    version: 'Versão acústica',
    description: `Há dias em que eu gostava que não fosse verdade. Gostava que ela não significasse tudo isto, que não fosse a razão por trás de cada palavra que escrevo ou canto.\n\nMas odeio que é verdade: ela ainda é. Odeio que é verdade que o tempo passou e nada mudou por dentro.\n\nMas não consigo. Esta canção é isso. Uma confissão que eu não queria fazer. Uma parte de mim que ainda não consegui deixar.`,
    videoId: 'ucYFz6MrSC8',
  },
  {
    id: 'wish',
    label: 'Wish You the Best',
    artist: 'Lewis Capaldi',
    version: 'Versão acústica',
    description: `Esta foi uma das músicas mais difíceis de cantar. Porque é uma despedida sem raiva.\n\nSó um desejo genuíno de que ela esteja bem. Mesmo longe. Mesmo sem mim.\n\nHá algo de cruel em querer tanto alguém ao ponto de lhe desejar o melhor, mesmo que esse “melhor” não me inclua. E esta música carrega isso. Uma dor que não grita, mas que aperta devagar.`,
    videoId: 'hsFHSdU6c8o',
  },
];

function CoverBlock({
  id,
  label,
  artist,
  version,
  description,
  videoId,
  reversed,
}: CoverItem & { reversed: boolean }) {
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
    <main className={`covers-page ${visible ? 'visible' : ''}`}>
<h1 className="page-title">Covers</h1>

      {coversList.map((item, index) => (
        <CoverBlock key={item.id} {...item} reversed={index % 2 !== 0} />
      ))}
    </main>
  );
}
