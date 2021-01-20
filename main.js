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


const strLength = str => {
  let current = '';
  str.split(' ').forEach(item => current.length > item.length ? current : current = item);
  return current
}


console.log(strLength('меня зовууут Егорf fsdkfsdkljfsdkfsjdkfsdjfsldkfjksdl wq'));