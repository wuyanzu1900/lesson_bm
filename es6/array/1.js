const ages = [32,15,19,12];
// // 所有大于18的数字
// const nums = [];//空间开销
// for(let age of ages){
//     if(age >= 18){
//         nums.push(age);
//     }
// }


// console.log(nums);
//命名
//ages数组，filter 语义化的过滤
// 1.计数 for 机器化
// 2.表述性好一些 forEach 函数式编程 提升了代码的可读性
// forEach
// const adultPresent = ages.filter(age => age >=18);
//     console.log(adultPresent);
// const adultPresent = ages.filter(function(age){
    const adultArr = ages.filter(age=>age >=18);
    // 出席
    const adultPresent = ages.some(age => age>=18)
    // console.log(age,index,o);
console.log(adultPresent);
// 所有人满足需求
const allOldEnough = ages.every(age => age>=18)
console.log(allOldEnough)