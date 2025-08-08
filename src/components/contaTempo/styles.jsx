import styled, { keyframes } from "styled-components";

const animarCores = keyframes`
    0% {
        background-position: 0% 50%;
    }
    100% {
        background-position: 360% 50%;
    }
`;

export const Container = styled.div`
    position: relative;
    padding: 20px;
    border-radius: 8px;
    width: 100%;
    margin: 20px auto;
    font-family: "Red Hat Display", sans-serif;
    color: #fbfbfb;
    text-align: center;
    background-color: transparent;
    z-index: 0;

  /* borda animada */
    border: 4px solid transparent;
    border-radius: 8px;
    background-image: linear-gradient(#121212, #121212),
        linear-gradient(270deg, #ff007f, #ff4d4d, #d6006b, #ff854d, #ff007f, #ff7f29);
    background-origin: border-box;
    background-clip: padding-box, border-box;
    animation: ${animarCores} 10s linear infinite;
    background-size: 400% 400%;
    box-shadow:
    0 0 8px #ff007f,
    0 0 8px #ff4d4d,
    0 0 8px #ff007f,
    0 0 8px #ff4d4d;
`;

export const Text = styled.p`
    font-size: 1.2em;
    margin: 10px 0;
`;
