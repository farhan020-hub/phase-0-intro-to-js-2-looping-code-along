// Code your solutions in this file


const names = ["Guadalupe", "Ollie", "Aki"];

function writeCards(names) {
    const thanksMessages = [];
    
    for (let i = 0; i < names.length; i++) {
        const message = `Thank you, ${names[i]}, for the wonderful surprise gift!`;
        thanksMessages.push(message);
        
    }

    return thanksMessages;
}




function countDown(number) {
    let i = number;

    while (i >= 0) {
        console.log(i);
        i--;
    }
}

countDown(10);