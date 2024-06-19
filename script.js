function playGame(choice) {
    // Generate a random result (tai or xiu)
    const options = ['1', '2', '3','4','5','6'];
    const randomIndex = [];
    let computerChoice = 0;

    for (let index = 0; index < 3; index++) {
        const value = Math.floor(Math.random() * options.length)
        randomIndex.push(options[value])
        computerChoice=computerChoice+value
    }

    // Display computer's choice
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `Bạn tính chọn: ${choice}`;
    resultElement.innerHTML += `<br>Kết quả:  ${randomIndex.join(', ')} = ${computerChoice}. ` ;
    resultElement.innerHTML += `Là  ${computerChoice<=10?'Xỉu':'Tài'}` ;
}
