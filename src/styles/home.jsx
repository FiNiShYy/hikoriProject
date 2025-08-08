/* eslint-disable no-unused-vars */
import styled from "styled-components"

export const Container = styled.div`
  padding: 80px 5vw;
  background-color: #1f1f1fef;
  min-height: 100vh;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media (max-width:480px) {
    padding: 40px 2vw;
  }
`

export const Title = styled.div`
  z-index: 1;
  width: 700px;
  padding: 20px;
  font-size: 36px;
  font-weight: 600;
  color: #fbfbfb;
  text-align: center;
  margin-bottom: 40px;

  h1 {
    font-family: "Playfair Display", serif;
    margin: 0;
    line-height: 1.2;
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 480px) {
    font-size: 28px;
    padding: 10px;
  }
`

export const CarrosselArea = styled.div`
  z-index: 1;
  width: 400px;
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 40px 0;

  @media (max-width: 480px) {
    width: 100%;
  }
`

export const SpotArea = styled.div`
  z-index: 1;
  width: 700px;

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`

export const Timer = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  width: 700px;
  padding: 40px 0;

  h1 {
    font-size: 24px;
    font-weight: 500;
    color: #fbfbfb;
    text-align: center;
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 480px) {
    font-size: 20px;
    padding: 20px 0;
  }

`

export const DeclarationText = styled.div`
  width: 700px;
  padding: 20px;
  font-size: 18px;
  background-color: transparent; /* totalmente transparente */
  backdrop-filter: blur(10px); /* desfoque no que estiver atrás */
  border-radius: 8px;
  border: 2px solid rgba(255, 255, 255, 0.1); /* borda sutil */
  
  h1 {
    font-weight: 400;
    font-family: "Playfair Display", serif;
    margin: 10px 0;
    font-size: 20px;
    line-height: 1.5;
    color: #fbfbfb;
    text-align: justify;
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    padding: 10px;
    h1 {
      font-size: 18px;
    }
  }
`