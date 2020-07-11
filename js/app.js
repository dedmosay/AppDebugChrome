// document.addEventListener('DOMContentLoaded', () => {
const num1 = document.querySelector('#num1')
const num2 = document.querySelector('#num2')
const addBtn = document.querySelector('#add')
const subBtn = document.querySelector('#sub')
const output = document.querySelector('#output')


const data = [
    { name: 'JS', year: '2000' },
    { name: 'Ruby', year: '2010' },
    { name: 'C++', year: '1970' }
]
console.table(data)

// В консоли Chrome 
/**
 $0
 $0.style.color="red"
*/

// просмотр последовательность вызываемых функций
/**
 console.trace()  
*/

// замер времени выполнения
console.time('timer')
const items = [] 
for (let i = 0; i < 100; i++) {
    items.push({el: i + 1})
}
console.log(items)
console.timeEnd('timer')


setTimeout(()=> {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
}, 3000)

function getInputValues() {
    const value1 = Number(num1.value) // +num1.value или parseInt(num1.value)
    const value2 = Number(num2.value)
    return [value1, value2]
}

function addHandler() {
    const values = getInputValues()
    displayResult(values[0] + values[1])
}

function subHandler() {
    const values = getInputValues()
    displayResult(values[0] - values[1])
    console.trace()
}

function displayResult(result) {
    output.innerHTML = `Результат = ${result}`
}

addBtn.addEventListener('click', addHandler)
subBtn.addEventListener('click', subHandler)
// })

