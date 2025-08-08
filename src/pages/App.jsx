import React, { useState } from "react";
import * as S from "../styles/home";
import AudioPlayer from "../components/SpotifyPlayer";
import ContaTempo from "../components/contaTempo";
import EmojiBackground from "../components/emoji";
import Carousel from "../components/carrossel";
import foto1 from "../assets/Foto1.jpg";
import foto2 from "../assets/Foto2.jpg";
import foto4 from "../assets/Foto4.jpg";
import foto5 from "../assets/Foto5.jpg";
import foto6 from "../assets/Foto6.jpg";
import foto7 from "../assets/Foto7.jpg";
import foto8 from "../assets/Foto8.jpg";
import foto9 from "../assets/Foto9.jpg";
import foto10 from "../assets/Foto10.jpg";
import howlAudio from "../assets/Howl.mp3";
import howlImg from "../assets/image.png";

function HomeApp() {
  const [isPlaying, setIsPlaying] = useState(false); // controla se áudio começou

  const fotos = [
    foto1, foto2, foto4, foto5, foto6, foto7, foto8, foto9, foto10,
  ];

  const track = {
    title: "Howl's Moving Castle - Theme",
    artist: "Joe Hisaishi",
    color: "#00aeb0",
    image: howlImg,
    audioSrc: howlAudio,
  };

  // Função para passar pro player e mudar estado quando música começar a tocar
  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <>
      <EmojiBackground />
      <S.Container>
        <S.Title>
          <h1>Para Hikori</h1>
        </S.Title>

        <S.SpotArea>
          {/* Passa o onPlay para disparar no play */}
          <AudioPlayer track={track} onPlay={handlePlay} />
        </S.SpotArea>

        {/* Mostrar o resto somente se estiver tocando */}
        {isPlaying && (
          <>
            <S.CarrosselArea>
              <Carousel images={fotos} />
            </S.CarrosselArea>

            <S.Timer>
              <h1>Já fazem</h1>
              <ContaTempo />
              <h1>que tenho a melhor namorada do mundo</h1>
            </S.Timer>

            <S.DeclarationText>
              <h1>
                Você é o amor da minha vida, e por mais que as vezes eu não seja
                o namorado perfeito, você é quem me incentiva continuar tentando
                ser uma pessoa melhor, quero ter a oportunidade de casar com você
                e seguir uma vida muito feliz ao seu lado, por mais que você
                prefira motor de lado que ignora a gravidade, eu ainda vou te
                avisar do VTEC.
              </h1>
              <h1>
                Te amo mais do que imaginei que um dia fosse possível amar alguem,
                você é o amor da minha vida, obrigado por ser essa pessoa incrível
                que segue me fazendo o mais feliz que posso ser e me incentivando
                a seguir meus sonhos.
              </h1>
            </S.DeclarationText>
          </>
        )}
      </S.Container>
    </>
  );
}

export default HomeApp;
