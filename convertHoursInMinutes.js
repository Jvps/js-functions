function convertHoursInMinutes(timeString) {
    let arrayTime = timeString.split(':');
    if (arrayTime.length != 2) arrayTime = timeString.split('h');
    if (arrayTime.length != 2 || arrayTime[0] < 0 || arrayTime[1] > 59 || arrayTime[1] < 0) return console.error('Use the pattern "xx:xx" or "xxhxx" where xx equals numbers.');
    arrayTime.forEach((element, index) => {
        arrayTime[index] = parseInt(element);
    });
    let timeInMinutes = arrayTime[0] * 60 + arrayTime[1];
    return timeInMinutes;
}