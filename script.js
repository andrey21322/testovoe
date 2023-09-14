/* task1 */

// function deepEqual(obj1, obj2) {
//   //преобразовуем обьект в строку и сравниваем строки на идентичность
//   return console.log(JSON.stringify(obj1) === JSON.stringify(obj2))
// }

// deepEqual({name: 'test'}, {name: 'test'})
// deepEqual({name: 'test'}, {name: 'test1'})

/* task2 */

// function chunkArray(arr, n) {
//   // позиция выводимых элементов
//   let idx = 0
//   return {
//     next: function() {
//       // если позиций больше чем длинна массива то выводить undefined
//       if (idx >= arr.length) {
//         return {value: undefined, done: true}
//       }
//       // создания нужного количества позиций массива
//       let valueObj = arr.slice(idx, idx + n)
//       idx += n
//       return {value: valueObj, done: false}
//     }
//   }
// }

// const iterator = chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3)
// console.log(iterator.next()) 
// console.log(iterator.next())
// console.log(iterator.next()) 
// console.log(iterator.next())

/* task3 */

// function bulkRun(arr) {
//   // массив промисов с функциями 
//   const functions = arr.map(([func, params]) => {
//     return new Promise((resolve, reject) => {
//       // вызываем функции 
//       func(...params, (result) => {
//         resolve(result)
//       })
//     })
//   })
//   return Promise.all(functions) // возвращаем результат всех функций 
// }

// const f1 = (cb) => { cb(1) }
// const f2 = (a, cb) => { cb(a) }
// const f3 = (a, b, cb) => { cb([a, b]) }

// bulkRun([
//   [f1, []],
//   [f2, [2]],
//   [f3, [3, 4]],
// ]).then((results) => {
//   console.log(results)
// })
  
/* task4 */

// function arrayToObject(arr) {
//   let obj = {}
//   //перебираем массив получая ключ и значение 
//   arr.forEach(([key, val]) => {
//     if(Array.isArray(val)) { //если значение массив - присваемваем ключ - значение превращая в обьект и записывать в обьект
//       obj[key] = arrayToObject(val)
//     } else {
//       obj[key] = val //присваемаем ключ-значение в обьект
//     }
//   })
//   return obj
// }

// var arr = [['name', 'developer'], ['age', 5], ['skills', [['html',4], ['css', 5], ['js',5]]]]

// console.log(arrayToObject(arr))

/* task 5 */

// function objectToArray(obj) {
//     let arr = []
//     for (const key in obj) { // перебираем обьект по ключам
//         if (typeof obj[key] === 'object') { // если тип ключ обьект - записывать в массив ключ-преобразованный обьект в массив
//           arr.push([key, objectToArray(obj[key])])
//         } else {
//           arr.push([key, obj[key]]) //запись в массив ключ-значения по ключу
//         }
//     }
//     return arr
// }

// let obj = {
// 	name: 'developer',
// 	age: 5,
// 	skills: {
// 		html: 4,
// 		css: 5,
// 		js: 5
// 	}
// }

// console.log(objectToArray(obj))

/* task 6 */

// function NotificationException() {}
// function ErrorException() {}

// function primitiveMultiply(a, b) {
//   const rand = Math.random();
//   if (rand < 0.5) {
//     return a * b;
//   } else if (rand > 0.85) {
//     throw new ErrorException();
//   } else {
//     throw new NotificationException();
//   }
// }

// function reliableMultiply(a, b) {
//   //вешаем обработчик трай кетч
//   try {
//     //если все прошло - возвращать результат функции primitiveMultiply
//     return primitiveMultiply(a, b)
//   } catch (e) {
//     //если обработка исключения NotificationException все равно выводиить результат функции primitiveMultiply
//     if(e instanceof NotificationException) {
//       return reliableMultiply(a, b)
//     }
//     else { //во всех остальных случиях выводить ошибку
//       throw error
//     }
//   }
// }

// console.log(reliableMultiply(8, 8));

/* task 7 */

// function mapObject(obj, parentKey = '') {
//   const result = {}

//   for (const key in obj) {
//     //создание нового ключа обьекта
//     const newKey = parentKey ? `${parentKey}/${key}` : key
//     if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
//       //обьединение обьектов
//       Object.assign(result, mapObject(obj[key], newKey))
//     } else {
//       //запись нового елемента
//       result[newKey] = obj[key]
//     }
//   }

//   return result
// }

// const obj = {
//   a: {
//     b: {
//       c: 12,
//       d: 'Hello World'
//     },
//     e: [1, 2, 3]
//   }
// };

// console.log(mapObject(obj))

/* task 8 */
// -

/* task 9 */

// function add(n) {
//   //результат
//   let currentSum = n
//   //вторая функция которая добавляет второе число и вызывает себя столько раз сколько переданно значений
//   function addN(b) {
//     currentSum += b
//     return addN
//   }
//   //перезапись результата
//   addN.toString = function() {
//     return currentSum;
//   }
//   //вывод функции с резуьтатом 
//   return addN
// }

// console.log(Number(add(1)(2)))
// console.log(Number(add(1)(2)(5)))
// console.log(Number(add(1)(2)(-3)(4)))
// console.log(Number(add(1)(2)(3)(4)(-5)))
