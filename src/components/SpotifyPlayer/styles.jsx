import styled, { keyframes } from "styled-components";

const colorChange = keyframes`
  from {
    filter: hue-rotate(0deg);
  }
  to {
    filter: hue-rotate(360deg);
  }
`;

export const PlayerWrapper = styled.div`
  max-width: 350px;
  padding: 24px;
  border-radius: 20px;
  box-shadow: 0 28px 28px rgba(0, 0, 0, 0.2);
  margin: 40px auto;
  color: white;
  background-color: ${({ activeColor }) => activeColor || "#00aeb0"};
  position: relative;
  overflow: hidden;
  transition: background 0.4s ease;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(45deg, ${({ activeColor }) => activeColor || "#00aeb0"} 20%, transparent 100%);
    animation: ${({ isPlaying }) => (isPlaying ? colorChange : "none")} 20s alternate infinite;
    z-index: 0;
    pointer-events: none;
  }
`;

export const TrackInfo = styled.div`
  text-align: center;
  position: relative;
  z-index: 1;
`;

export const Artwork = styled.img`
  border-radius: 120px;
  display: block;
  margin: 0 auto 20px;
  height: 200px;
  width: 200px;
  object-fit: cover;
`;

export const Title = styled.h2`
  font-weight: 700;
  margin-bottom: 4px;
`;

export const Artist = styled.h3`
  font-weight: 300;
  margin-top: 0;
  margin-bottom: 16px;
`;

export const Controls = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
  position: relative;
  z-index: 1;
`;

export const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: white;
  font-size: 48px;
  padding: 0;
  user-select: none;
  transition: color 0.2s;

  &:hover {
    color: #1db954;
  }
`;

export const Progress = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 5px;
  border-radius: 8px;
  background: #3b7677;
  cursor: pointer;
  outline: none;
  position: relative;
  z-index: 1;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: white;
    cursor: pointer;
    margin-top: -5px;
    box-shadow: 0 0 2px rgba(0,0,0,0.5);
  }
  &::-moz-range-thumb {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: white;
    cursor: pointer;
  }
`;

export const Time = styled.div`
  text-align: right;
  margin-top: 4px;
  font-family: monospace;
  font-size: 14px;
  position: relative;
  z-index: 1;
`;
