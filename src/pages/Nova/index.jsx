import { useEffect, useRef, useState } from "react";
import * as S from "./styles";
import contaTempo from "../../functions/conta-tempo";
import foto1 from "../../assets/Foto1.jpg";
import foto2 from "../../assets/Foto2.jpg";
import foto4 from "../../assets/Foto4.jpg";
import foto5 from "../../assets/Foto5.jpg";
import foto6 from "../../assets/Foto6.jpg";
import foto7 from "../../assets/Foto7.jpg";
import foto8 from "../../assets/Foto8.jpg";
import foto9 from "../../assets/Foto9.jpg";
import foto10 from "../../assets/Foto10.jpg";
import howlAudio from "../../assets/Howl.mp3";
import howlImg from "../../assets/image.png";

const fotos = [foto1, foto2, foto4, foto5, foto6, foto7, foto8, foto9, foto10];
const inicioNamoro = "2022-03-29T22:10:00Z";

function formatTime(seconds) {
  const m = Math.floor(seconds / 60).toString().padStart(2, "0");
  const s = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

function Player() {
  const audioRef = useRef(null);
  const [tocando, setTocando] = useState(false);
  const [tempo, setTempo] = useState(0);
  const [duracao, setDuracao] = useState(0);

  const alternar = () => {
    const audio = audioRef.current;
    audio.paused ? audio.play() : audio.pause();
  };

  return (
    <S.Player>
      <audio
        ref={audioRef}
        src={howlAudio}
        preload="metadata"
        onPlay={() => setTocando(true)}
        onPause={() => setTocando(false)}
        onTimeUpdate={(e) => setTempo(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => setDuracao(e.currentTarget.duration)}
      />
      <S.Capa src={howlImg} alt="Capa de Howl's Moving Castle" />
      <S.Faixa>
        <b>Howl's Moving Castle - Theme</b>
        <span>Joe Hisaishi</span>
        <S.Barra
          type="range"
          aria-label="Posição da música"
          min="0"
          max={duracao || 0}
          step="1"
          value={tempo}
          $pct={duracao ? (tempo / duracao) * 100 : 0}
          onChange={(e) => (audioRef.current.currentTime = e.target.value)}
        />
        <S.Tempo>
          {formatTime(tempo)} / {formatTime(duracao)}
        </S.Tempo>
      </S.Faixa>
      <S.Play onClick={alternar} aria-label={tocando ? "Pausar" : "Tocar"}>
        {tocando ? "❚❚" : "►"}
      </S.Play>
    </S.Player>
  );
}

function Galeria() {
  const [i, setI] = useState(0);
  const toqueX = useRef(0);
  const ir = (passo) => setI((atual) => (atual + passo + fotos.length) % fotos.length);

  return (
    <S.Galeria>
      <S.Arco
        onTouchStart={(e) => (toqueX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          const dx = e.changedTouches[0].clientX - toqueX.current;
          if (Math.abs(dx) > 40) ir(dx < 0 ? 1 : -1);
        }}
      >
        <img key={i} src={fotos[i]} alt={`Foto ${i + 1} de ${fotos.length}`} draggable={false} />
        <S.Seta onClick={() => ir(-1)} aria-label="Foto anterior">‹</S.Seta>
        <S.Seta $direita onClick={() => ir(1)} aria-label="Próxima foto">›</S.Seta>
      </S.Arco>
      <S.Pontos>
        {fotos.map((_, n) => (
          <button key={n} aria-label={`Ir para foto ${n + 1}`} aria-current={n === i} onClick={() => setI(n)} />
        ))}
      </S.Pontos>
    </S.Galeria>
  );
}

function Contador() {
  const [t, setT] = useState(contaTempo(inicioNamoro));

  useEffect(() => {
    const timer = setInterval(() => setT(contaTempo(inicioNamoro)), 1000);
    return () => clearInterval(timer);
  }, []);

  const blocos = [
    [t.anos, "anos"], [t.meses, "meses"], [t.dias, "dias"],
    [t.horas, "horas"], [t.minutos, "min"], [t.segundos, "seg"],
  ];

  return (
    <S.Contador>
      <p>Já fazem</p>
      <S.Blocos>
        {blocos.map(([valor, rotulo]) => (
          <div key={rotulo}>
            <b>{valor}</b>
            {rotulo}
          </div>
        ))}
      </S.Blocos>
      <p>que tenho a melhor namorada do mundo</p>
    </S.Contador>
  );
}

function Simbolos() {
  const [itens] = useState(() =>
    Array.from({ length: 18 }, (_, id) => ({
      id,
      simbolo: ["☾", "♡", "✧"][id % 3],
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: 14 + Math.random() * 14,
      dur: 18 + Math.random() * 14,
      delay: -Math.random() * 30,
    }))
  );

  return (
    <S.Ceu aria-hidden="true">
      {itens.map(({ id, simbolo, left, top, size, dur, delay }) => (
        <S.Simbolo key={id} $left={left} $top={top} $size={size} $dur={dur} $delay={delay}>
          {simbolo}
        </S.Simbolo>
      ))}
    </S.Ceu>
  );
}

export default function Nova() {
  return (
    <>
      <Simbolos />
      <S.Page>
        <S.Header>
          <small>desde 29 · 03 · 2022</small>
          <h1>Para Hikori</h1>
          <S.Ornamento>— ♡ —</S.Ornamento>
        </S.Header>

        <Player />
        <Galeria />
        <Contador />

        <S.Carta>
          <p>
            Você é o amor da minha vida, e por mais que as vezes eu não seja
            o namorado perfeito, você é quem me incentiva continuar tentando
            ser uma pessoa melhor, quero ter a oportunidade de casar com você
            e seguir uma vida muito feliz ao seu lado, por mais que você
            prefira motor de lado que ignora a gravidade, eu ainda vou te
            avisar do VTEC.
          </p>
          <p>
            Te amo mais do que imaginei que um dia fosse possível amar alguem,
            você é o amor da minha vida, obrigado por ser essa pessoa incrível
            que segue me fazendo o mais feliz que posso ser e me incentivando
            a seguir meus sonhos.
          </p>
        </S.Carta>

        <S.Ornamento>— ♡ —</S.Ornamento>
      </S.Page>
    </>
  );
}
