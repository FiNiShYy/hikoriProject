/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import styled from "styled-components"
import HomeApp from "../src/pages/App"
import Nova from "./pages/Nova"
import GlobalStyle from "./styles/globalStyle"

// Versão artesanal (pages/App.jsx) fica intacta; #artesanal abre ela
const ehArtesanal = () => window.location.hash === "#artesanal"

const Alternar = styled.a`
  position: fixed;
  right: 16px;
  bottom: 16px;
  z-index: 10;
  padding: 8px 14px;
  border: 1px solid #5a2a35;
  border-radius: 999px;
  background: rgba(20, 10, 14, 0.8);
  backdrop-filter: blur(6px);
  color: #f2c6d3;
  font: 13px system-ui, sans-serif;
  text-decoration: none;

  &:hover {
    border-color: #f2c6d3;
  }
`

function App() {
  const [artesanal, setArtesanal] = useState(ehArtesanal)

  useEffect(() => {
    const aoMudar = () => {
      setArtesanal(ehArtesanal())
      window.scrollTo(0, 0)
    }
    window.addEventListener("hashchange", aoMudar)
    return () => window.removeEventListener("hashchange", aoMudar)
  }, [])

  return (
    <>
      <GlobalStyle />
      {artesanal ? <HomeApp /> : <Nova />}
      <Alternar href={artesanal ? "#" : "#artesanal"}>
        {artesanal ? "Ver versão nova" : "Voltar à versão artesanal"}
      </Alternar>
    </>
  )
}

export default App
