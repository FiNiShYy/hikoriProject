import styled from "styled-components";

export const CarouselContainer = styled.div`
  width: 100%; /* Deixa o container responsivo */
  max-width: 800px; /* pode ajustar conforme desejar */
  height: auto; /* vai se ajustar conforme a imagem */
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.3);
`;

export const Slide = styled.div`
  display: flex;
  transition: transform 0.5s ease;
  transform: translateX(${props => -props.index * 100}%);
  height: 100%;
`;

export const Image = styled.img`
  width: 100%;  /* ocupa toda a largura do container */
  height: auto; /* altura proporcional */
  object-fit: contain; /* mantém proporção da imagem */
  user-select: none;
  flex-shrink: 0; /* impede encolhimento */
`;

export const Button = styled.button`
  position: absolute;
  top: 50%;
  ${props => props.right ? "right: 10px" : "left: 10px"};
  transform: translateY(-50%);
  background: rgba(255,255,255,0.7);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  padding: 8px 12px;
  font-size: 20px;
  user-select: none;
  transition: background 0.3s;
  
  &:hover {
    background: rgba(255,255,255,1);
  }
`;
