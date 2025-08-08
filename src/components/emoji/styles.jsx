import styled, { keyframes } from "styled-components"

export const cair = keyframes`
    0% {
        transform: translateY(-10%);
        opacity: 1;
    }
    100% {
        transform: translateY(110vh);
        opacity: 0.7;
    }
`

export const Emoji = styled.div`
    position: fixed;
    user-select: none;
    pointer-events: none;
    font-size: ${({ size }) => size}rem;
    left: ${({ left }) => left}vw;
    animation-name: ${cair};
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-duration: ${({ duration }) => duration}s;
    animation-delay: ${({ delay }) => delay}s;
    z-index: 0;
    top: ${({ top }) => top}vh;
`;