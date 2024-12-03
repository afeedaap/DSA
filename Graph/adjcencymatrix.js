// const matrix=[
// [0,1,0],
// [1,0,1],
// [0,1,0]
// ]
// console.log(matrix[0][1])
function creategraph(verices){
    return Array.from({length:verices},()=>Array(verices).fill(0))
    
}
function addEdge(matrix,u,v){
    matrix[u][v]=1
    matrix[v][u]=1
}
function displayGraph(matrix){
    for(const row of matrix){
        console.log(row.join(" "))
    }
}
const verices=3
const adjacencymatrix=creategraph(verices)
addEdge(adjacencymatrix,0,0)
addEdge(adjacencymatrix,0,2)
addEdge(adjacencymatrix,1,0)
addEdge(adjacencymatrix,1,1)
addEdge(adjacencymatrix,2,1)
addEdge(adjacencymatrix,2,2)
console.log(adjacencymatrix)
displayGraph(adjacencymatrix)
