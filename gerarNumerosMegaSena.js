function gerarNumerosMegaSena() {
    let numbers = [];

    while (numbers.length !== 6) {
        const randomNumber = Math.floor(Math.random() * 60) + 1;
        let hasThisNumberAlready = false;
        numbers.forEach(item => {
            if (randomNumber == item) hasThisNumberAlready = true;
        });
        if (!hasThisNumberAlready) numbers.push(randomNumber);
    }

    return numbers.sort(function (a, b) {
      return a - b;
    });
}
