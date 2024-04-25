function rendimentos (investimentoInicial = 0, investimentoMensal = 0, meses = 12, taxaRendimento = 12, mostrarArrayMensal = false) {
    let impostoRenda;
    let countMensal = 0;
    let investimentos = [];
    const dataAtual = new Date();

    do {
        switch (countMensal) {
            case 0:
                impostoRenda = 22.5;
                break;
            case 6:
                impostoRenda = 20;
                break;
            case 12:
                impostoRenda = 17.5;
                break;
            case 18:
                impostoRenda = 15;
                break;
        }

        if (countMensal === 0) {
            investimentos.push(investimentoInicial);
        } else {
            investimentos = investimentos.map((valorMensal) => {
                return valorMensal + (valorMensal * (taxaRendimento / 12 / 100) * (1 - (impostoRenda / 100)));
            });
            investimentos.push(investimentoMensal);
        }

        if (dataAtual.getMonth() === 0) console.log(`=== ${dataAtual.getFullYear()} ===`);
        const dataFormatada = `${(dataAtual.getMonth() + 1).toString().padStart(2, '0')}/${dataAtual.getFullYear().toString().padStart(2, '0')}`;
        console.log(`${dataFormatada}: R$${investimentos.reduce((total, atual) => total + atual, 0).toFixed(2)}`);
        dataAtual.setMonth(dataAtual.getMonth() + 1);

        countMensal++;
    }
    while (countMensal <= meses);

    if (mostrarArrayMensal) console.log(investimentos);
    console.log(`===== Resultados: =====`)
    console.log(`Valor investido: R$${(investimentoInicial + (meses * investimentoMensal)).toFixed(2)}`);
    console.log(`Valor final: R$${investimentos.reduce((total, atual) => total + atual, 0).toFixed(2)}`);
    console.log(`Ganhos com juros: R$${(investimentos.reduce((total, atual) => total + atual, 0) - (investimentoInicial + (meses * investimentoMensal))).toFixed(2)}`);
}
