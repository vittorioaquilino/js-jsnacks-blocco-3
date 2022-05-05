
const numbers = [];
for (let i = 0; i < 10; i++) {
    numbers.push(getRndInteger(1,100));
}
console.log(numbers);

const oddContainer = document.getElementById("odd");
const evenContainer = document.getElementById("even");
console.log(oddContainer, evenContainer);

numbers.forEach(number => {
    (number % 2 === 0) 
        ? evenContainer.innerHTML += ` ${number} `
        : oddContainer.innerHTML += ` ${number} `
});

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}