function rendimento(valorInicial = 0, valorMensal, meses, taxaJuros) {
    let valorTotal = valorInicial;
    let porcentagemImpostoRenda = 22.5;
    let rendimentoMensal = 1 + ((1 - (porcentagemImpostoRenda / 100)) * ((taxaJuros / 12) / 100));
    const dataInicial = new Date();
    const mesInicial = dataInicial.getMonth() + 1;
    const anoInicial = dataInicial.getFullYear();
    let mesAtual = mesInicial;
    let anoAtual = anoInicial;

    for (let i = 0; i <= meses; i++) {
        
        if (i == 0) { 
            console.log('=== ANO: ' + anoInicial + ' ===');
            if (mesAtual < 10) {
                console.log('0' + mesInicial + '/' + anoInicial + ': R$' + valorInicial.toFixed(2));
            } else {
                console.log(mesInicial + '/' + anoInicial + ': R$' + valorInicial.toFixed(2));
            }
        } else {
            if (mesAtual % 12 == 1) {
                mesAtual = 1;
                anoAtual++;
                console.log('=== ANO: ' + anoAtual + ' ===');
            }
            let diferenca = valorTotal;
            valorTotal = ((valorTotal + valorMensal) * rendimentoMensal);
            diferenca = valorTotal - (diferenca + valorMensal);
            if (mesAtual < 10) {
                console.log('0' + mesAtual + '/' + anoAtual + ': R$' + valorTotal.toFixed(2) + ' | Ganhos com juros: R$' + diferenca.toFixed(2));
            } else {
                console.log(mesAtual + '/' + anoAtual + ': R$' + valorTotal.toFixed(2) + ' | Ganhos com juros: R$' + diferenca.toFixed(2));
            }
        }

        switch (i) {
            case 6:
                porcentagemImpostoRenda = 20;
                break;
            case 12:
                porcentagemImpostoRenda = 17.5;
                break;
            case 18:
                porcentagemImpostoRenda = 15;
                break;
        }

        rendimentoMensal = 1 + ((1 - (porcentagemImpostoRenda / 100)) * ((taxaJuros / 12) / 100));

        mesAtual++;
    }

    return parseFloat(valorTotal.toFixed(2));
}