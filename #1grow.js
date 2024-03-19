//#1
//https://www.codewars.com/kata/57f780909f7e8e3183000078/solutions/javascript


// CARA PERTAMA

// function grow(x) {
//     let result = x[0];
//     for (let i = 1; i < x.length; i++) {           
//         result = result * x[i];
//     }
//     return result;
// }

// CARA KE DUA

function grow(x) {
    const result = x.reduce((acc, curr) => acc * curr, 1);
    return result
}
console.log(grow([1, 2, 3, 4]));

