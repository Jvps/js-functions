function generateCards(numberOfCards) {
    const availableCardsArray = [];

    for (let j = 0; j < 3; j++) {
        const rarity = j == 0 ? 'Silver' : j == 1 ? 'Gold' : j == 2 ? 'Platinum' : null;
        
        for (let i = 1024; i > 0; i--) {
            availableCardsArray.push({
                make: 'Volkswagen',
                model: 'Gol 1.6',
                rarity: rarity
            });
    
            if (i <= 512) {
                availableCardsArray.push({
                    make: 'Honda',
                    model: 'Civic EXR 2.0',
                    rarity: rarity
                });
            }
            if (i <= 256) {
                availableCardsArray.push({
                    make: 'Volkswagen',
                    model: 'Jetta GLi 2.0',
                    rarity: rarity
                });
            }
            if (i <= 128) {
                availableCardsArray.push({
                    make: 'BMW',
                    model: '320i 2.0',
                    rarity: rarity
                });
            }
            if (i <= 64) {
                availableCardsArray.push({
                    make: 'Porsche',
                    model: 'Macan 2.0',
                    rarity: rarity
                });
            }
            if (i <= 32) {
                availableCardsArray.push({
                    make: 'Ford',
                    model: 'Mustang GT 5.0',
                    rarity: rarity
                });
            }
            if (i <= 16) {
                availableCardsArray.push({
                    make: 'Chevrolet',
                    model: 'Corvette 6.2',
                    rarity: rarity
                });
            }
            if (i <= 8) {
                availableCardsArray.push({
                    make: 'Ferrari',
                    model: '458 Italia 4.8',
                    rarity: rarity
                });
            }
            if (i <= 4) {
                availableCardsArray.push({
                    make: 'Porsche',
                    model: '911 3.6',
                    rarity: rarity
                });
            }
            if (i <= 2) {
                availableCardsArray.push({
                    make: 'Nissan',
                    model: 'GT-R 3.6',
                    rarity: rarity
                });
            }
        }
    }

    let returnArray = [];
    
    for (let k = 0; k < numberOfCards; k++) {
        returnArray.push(availableCardsArray[Math.floor(Math.random() * availableCardsArray.length) + 1]);
    }

    return returnArray.sort(compareByRarity);
}

function compareByRarity(a, b) {
    const order = { 'Silver': 1, 'Gold': 2, 'Platinum': 3 };
    return order[a.rarity] - order[b.rarity];
}
