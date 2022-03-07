import { hi } from './m.js'
console.log(123);
console.log(hi)

let box1 = document.getElementById('box1')
// 可选链操作符
box1?.addEventListener('click', function () {
    alert('hello')
})