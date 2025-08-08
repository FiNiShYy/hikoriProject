function contarTempo(dataInicial) {
    const inicio = new Date(dataInicial);
    const agora = new Date();

    let anos = agora.getFullYear() - inicio.getFullYear();
    let meses = agora.getMonth() - inicio.getMonth();
    let dias = agora.getDate() - inicio.getDate();
    let horas = agora.getHours() - inicio.getHours();
    let minutos = agora.getMinutes() - inicio.getMinutes();
    let segundos = agora.getSeconds() - inicio.getSeconds();

    if (segundos < 0) {
        segundos += 60;
        minutos--;
    }
    if (minutos < 0) {
        minutos += 60;
        horas--;
    }
    if (horas < 0) {
        horas += 24;
        dias--;
    }
    if (dias < 0) {
        const mesAnterior = new Date(agora.getFullYear(), agora.getMonth(), 0).getDate();
        dias += mesAnterior;
        meses--;
    }
    if (meses < 0) {
        meses += 12;
        anos--;
    }

    return {
        anos,
        meses,
        dias,
        horas,
        minutos,
        segundos
    };
}

export default contarTempo;