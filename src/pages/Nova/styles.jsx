import styled, { keyframes } from "styled-components";

// Paleta "gótica rosa antigo"
export const cor = {
  fundo: "#140a0e",
  vinho: "#2a0f17",
  borda: "#5a2a35",
  texto: "#efe3e7",
  rosa: "#f2c6d3",
  rosaEscuro: "#7a1f33",
};

const serifDeco = `"Cinzel Decorative", serif`;
const serif = `"Cormorant Garamond", serif`;
const sans = `system-ui, -apple-system, "Segoe UI", sans-serif`;

export const Page = styled.main`
  min-height: 100vh;
  padding: 72px 20px 96px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  color: ${cor.texto};
  font-family: ${sans};
  background: radial-gradient(120% 60% at 50% 0%, ${cor.vinho} 0%, ${cor.fundo} 55%, #0b0609 100%);

  /* globalStyle fixa fonte em todo elemento; aqui as fontes voltam a herdar */
  & * {
    font-family: inherit;
  }

  & > * {
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 560px;
  }
`;

export const Header = styled.header`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 14px;

  small {
    font-size: 12px;
    letter-spacing: 4px;
    text-transform: uppercase;
    opacity: 0.7;
  }

  h1 {
    font-family: ${serifDeco};
    font-weight: 400;
    font-size: clamp(40px, 9vw, 64px);
    letter-spacing: 1px;
    line-height: 1.1;
    color: ${cor.rosa};
  }
`;

export const Ornamento = styled.span`
  color: ${cor.rosa};
  letter-spacing: 8px;
  font-size: 15px;
  text-align: center;
`;

// Player
export const Player = styled.section`
  max-width: 420px;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  border: 1px solid ${cor.borda};
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.03);
`;

export const Capa = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
  box-shadow: 0 0 0 1px ${cor.rosa};
`;

export const Faixa = styled.div`
  flex: 1;
  min-width: 0;

  b {
    display: block;
    font-family: ${serif};
    font-size: 18px;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  span {
    font-size: 13px;
    opacity: 0.7;
  }
`;

export const Barra = styled.input`
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 3px;
  margin: 10px 0 4px;
  border-radius: 3px;
  cursor: pointer;
  background: linear-gradient(
    90deg,
    ${cor.rosa} ${({ $pct }) => $pct}%,
    ${cor.borda} ${({ $pct }) => $pct}%
  );

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${cor.rosa};
  }
  &::-moz-range-thumb {
    width: 12px;
    height: 12px;
    border: none;
    border-radius: 50%;
    background: ${cor.rosa};
  }
`;

export const Tempo = styled.div`
  font-size: 11px;
  opacity: 0.6;
  font-variant-numeric: tabular-nums;
`;

export const Play = styled.button`
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 16px;
  color: ${cor.vinho};
  background: ${cor.rosa};
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.06);
  }
`;

// Carrossel em moldura de arco
export const Galeria = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
`;

const surgir = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const Arco = styled.div`
  position: relative;
  width: min(340px, 82vw);
  aspect-ratio: 4 / 5;
  border-radius: 999px 999px 6px 6px;
  overflow: hidden;
  box-shadow: 0 0 0 1px ${cor.rosa}, 0 0 0 8px ${cor.fundo}, 0 0 0 9px ${cor.borda},
    0 30px 60px rgba(0, 0, 0, 0.5);
  touch-action: pan-y;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    user-select: none;
    animation: ${surgir} 0.5s ease;
  }
`;

export const Seta = styled.button`
  position: absolute;
  top: 55%;
  ${({ $direita }) => ($direita ? "right: 10px" : "left: 10px")};
  width: 36px;
  height: 36px;
  border: 1px solid ${cor.rosa};
  border-radius: 50%;
  cursor: pointer;
  font-size: 18px;
  color: ${cor.rosa};
  background: rgba(20, 10, 14, 0.55);
  transition: background 0.2s;

  &:hover {
    background: rgba(20, 10, 14, 0.85);
  }
`;

export const Pontos = styled.div`
  display: flex;
  gap: 8px;

  button {
    width: 7px;
    height: 7px;
    padding: 0;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    background: ${cor.borda};
  }

  button[aria-current="true"] {
    background: ${cor.rosa};
  }
`;

// Contador
export const Contador = styled.section`
  text-align: center;

  p {
    font-family: ${serif};
    font-size: 22px;
  }
`;

export const Blocos = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin: 20px 0;

  div {
    padding: 14px 0 12px;
    border: 1px solid ${cor.borda};
    border-radius: 10px;
    background: rgba(242, 198, 211, 0.05);
    font-size: 11px;
    letter-spacing: 2px;
    text-transform: uppercase;
    opacity: 0.9;
  }

  b {
    display: block;
    margin-bottom: 4px;
    font-family: ${serifDeco};
    font-size: clamp(24px, 6vw, 32px);
    font-weight: 400;
    letter-spacing: 0;
    color: ${cor.rosa};
    font-variant-numeric: tabular-nums;
  }
`;

// Declaração
export const Carta = styled.article`
  font-family: ${serif};
  font-size: 20px;
  line-height: 1.6;

  p + p {
    margin-top: 18px;
  }

  p:first-child::first-letter {
    float: left;
    margin: 6px 10px 0 0;
    font-family: ${serifDeco};
    font-size: 58px;
    line-height: 0.85;
    color: ${cor.rosa};
  }
`;

// Ornamentos caindo no fundo
const cair = keyframes`
  from { transform: translateY(-10vh) rotate(0deg); }
  to { transform: translateY(110vh) rotate(25deg); }
`;

export const Ceu = styled.div`
  position: fixed;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
`;

export const Simbolo = styled.span`
  position: absolute;
  top: 0;
  left: ${({ $left }) => $left}vw;
  z-index: 0;
  pointer-events: none;
  user-select: none;
  font-size: ${({ $size }) => $size}px;
  color: ${cor.rosa};
  opacity: 0.14;
  animation: ${cair} ${({ $dur }) => $dur}s linear ${({ $delay }) => $delay}s infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    top: ${({ $top }) => $top}vh;
  }
`;
