// const arr = [1,2,3,4,5,6,7]


// const reverseArr = array => {
//   const arrReverse = []
//   array.forEach(item => {
//     arrReverse.unshift(item)
//   })
//   return arrReverse
// }



// const strLength = str => {
//   let strArr = str.split(' ').sort((a, b) => a.length - b.length)
//   return strArr[strArr.length - 1]
// }

// console.log(strLength('я ооооооооооочень большоfgfdgdfgdfgdfgfddеее слооооово'));


// const strLength1 = str => {
//   let current = '';
//   str.split(' ').forEach(item => current.length > item.length ? current : current = item);
//   return current
// }


// console.log(strLength1('меня зовууут Егорf fsdkfsdkljfsdkfsjdkfsdjfsldkfjksdl wq'));
























// const zeroZero = num => {
//   let cur = 0
//   const arr = num.toString(2).split('1').filter(item => item != '').forEach(item => cur < item.length ? cur = item.length : cur)

//   return cur
// }

// console.log(zeroZero(771));



const arr = [[1,2,3], [99,73,25], [0, 1993, 6]]


const maxNumArr = array =>  array.map(item => item.reduce((acc, item) => acc < item ? acc = item : acc ))


console.log(maxNumArr(arr));
