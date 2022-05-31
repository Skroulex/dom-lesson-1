// DOM - Document Object Model
// селекторы get...
// let btn = document.getElementById('btn');
// console.log(btn);
//
// let blocks = document.getElementsByClassName('blocks');
// console.log(blocks)
//
// let blocks = document.getElementsByTagName('div')
// console.log(blocks)
//
// let inp = document.getElementsByName('phone');
// console.log(inp)

//селекторы querySelectors
// let btn = document.querySelector('#btn');
// let blocks = document.querySelectorAll('.blocks');
// console.log(blocks[2])
// let blocks2 = document.querySelectorAll('div');
// let inp = document.querySelector('[name = "phone"]')
// console.log(btn,blocks,blocks2,inp)

// let container = document.getElementById('container');
// console.log(container);
// container.innerText = '<h1>Hello DOM!</h1>'
// container.innerHTML = '<h1>Hello DOM! </h1>'
// container.style.fontSize = '15px'
// container.style.color = 'red'
// console.log(document.body)
// document.body.style.backgroundColor = 'black'
//
// let container = document.getElementById('container');
// container.style.display = 'flex'
// container.style.flexWrap = 'wrap'
// for (let i = 1; i <= 10; i++){
//     let block = document.createElement('div');
//     block.style.width = '100px'
//     block.style.height = '100px'
//     block.style.backgroundColor = 'green'
//     block.style.margin = '30px'
//     container.append(block)
// }
// console.log(container.lastChild.previousSibling);
// console.log(container.firstChild.nextSibling)
// console.log(getComputedStyle(container).background)

let blocks1 = document.querySelectorAll('.blocks');
// NodeList - static - один раз обращается к элементам и больше не следит за ними
let blocks2 = document.getElementsByClassName('blocks');
// HTMLCollection - dynamic - постоянно следит за элементами и видит изменения
blocks1[0].remove()
// console.log(blocks1);
// console.log(blocks2);
let inp = document.getElementById('inp')
inp.setAttribute('placeholder','search...')
inp.classList.add('new__class')
inp.classList.add('new__class-2')
inp.classList.remove('new__class')
inp.classList.toggle('new__class-2')
console.log(inp)
