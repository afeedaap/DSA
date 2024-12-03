// const matrix = [
//     [0, 1, 0, 1],
//     [1, 0, 1, 0],
//     [0, 1, 0, 1],
//     [1, 0, 1, 0]
// ];
// function countZero(matrix){
//     let count=0
//     for(let i=0;i<matrix.length;i++){
//         for(let j=0;j<matrix[i].length;j++){
//             if(matrix[i][j]==0){
//                 count++
//             }
//         }
//     }
//     return count
// }
// console.log(countZero(matrix))


const matrix=
[[1, 0, 1],
[0, 1, 0],
[1, 1, 1],
]
function countOne(matrix){
    let count=0
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
            if(matrix[i][j]===0){
                count++
            }
        }
    }
    return count
}
console.log(countOne(matrix))


















