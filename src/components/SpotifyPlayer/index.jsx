import * as S from "./styles";

function SpotifyPlayer() {
  return (
    <S.PlayerContainer>
      <S.Iframe
        src="https://open.spotify.com/embed/track/39uLYYZytVUwcjgeYLI409?utm_source=generator&theme=0"
        width="100%"
        height="152"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></S.Iframe>
    </S.PlayerContainer>
  );
}

export default SpotifyPlayer;

