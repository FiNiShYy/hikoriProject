import { useState, useEffect } from "react";
import * as S from "./styles";
import contaTempo from "../../functions/conta-tempo";

function ContaTempo() {
    const [tempo, setTempo] = useState(contaTempo("2022-03-29T22:10:00Z"));

    useEffect(() => {
        const timer = setInterval(() => {
            setTempo(contaTempo("2022-03-29T22:10:00Z"));
        }, 1000);

        return () => clearInterval(timer); // limpa quando o componente sai da tela
    }, []);

    return (
        <S.Container>
            <S.Text>
                {tempo.anos} anos, {tempo.meses} meses, {tempo.dias} dias,{" "}
                {tempo.horas} horas, {tempo.minutos} minutos e {tempo.segundos} segundos
            </S.Text>
        </S.Container>
    );
}

export default ContaTempo;
