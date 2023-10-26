function somaHoras(stringHoras) {
    let total = 0;
    
    stringHoras.forEach(item => {
        total += parseInt(item.split('h')[0]) * 60 + parseInt(item.split('h')[1]);
    });

    return total / 60;
}
