// let adjacencylsit={
//     'A':['B'],
//     'B':['A','C'],
//     'C':['B']
// }
// console.log(adjacencylsit['C'])
// class Graph{
//     constructor(){
//         this.adjacencylist={}
//     }
//     addvertex(vertex){
//         if(!this.adjacencylist[vertex]){
//             this.adjacencylist[vertex]=new Set()
//         }
//     }
//     addEdge(vertex1,vertex2){
//         if(!this.adjacencylist[vertex1]){
//             this.addvertex(vertex1)
//         }
//         if(!this.adjacencylist[vertex2]){
//             this.addvertex(vertex2)
//         }
//         this.adjacencylist[vertex1].add(vertex2)
//         this.adjacencylist[vertex2].add(vertex1)
//     }
//     display(){
//         for( let vertex in this.adjacencylist){
//             console.log(vertex+" -> "+[...this.adjacencylist[vertex]])
//         }
//     }
//     hashEdge(vertex1,vertex2){
//         return(
//           this.adjacencylist[vertex1].has(vertex2)  &&
//           this.adjacencylist[vertex2].has(vertex1)
//         )
//     }
//     removeEdge(vertex1,vertex2){
//         this.adjacencylist[vertex1].delete(vertex2)
//         this.adjacencylist[vertex2].delete(vertex1)

//     }
//     removeVertex(vertex){
//        if(!this.adjacencylist[vertex]){
//         return
//        } 
//        for(let adjacencyvertex of this.adjacencylist[vertex]){
//         this.removeEdge(vertex,adjacencyvertex)
//        }
//        delete this.adjacencylist[vertex]
//     }
// }
// const graph =new Graph()
// graph.addvertex('A')
// graph.addvertex('B')
// graph.addvertex('C')
// graph.addEdge('A','B')
// graph.addEdge('B','C')
// graph.display()
// console.log(graph.hashEdge('A','C'))
// // graph.removeEdge('A','B')
// graph.removeVertex('B')
// graph.display()


class Graph{
    constructor(){
        this.adjacencylist={}
    }

addvertex(vertex){
    if(!this.adjacencylist[vertex]){
        this.adjacencylist[vertex]=new Set()
    }
}
addEdge(vertex1,vertex2){
    if(!this.adjacencylist[vertex1]){
        this.addvertex(vertex1)
    }
    if(!this.adjacencylist[vertex2]){
        this.addvertex(vertex2)
    }
    this.adjacencylist[vertex1].add(vertex2)
    this.adjacencylist[vertex2].add(vertex1)
}
removeEdge(vertex1,vertex2){
    this.adjacencylist[vertex1].delete(vertex2)
   
    this.adjacencylist[vertex2].delete(vertex1)
}
removevertex(vertex){
    if(!this.adjacencylist[vertex]){
        return 
    }
    for( let adjacencyvertex of this.adjacencylist[vertex]){
        this.removeEdge(vertex,adjacencyvertex)
    }
    delete this.adjacencylist[vertex]
}
display(){
    for(let vertex in this.adjacencylist){
        console.log(vertex+"->"+[...this.adjacencylist[vertex]])
    }
}
}
let graph=new Graph()
graph.addvertex('A')
graph.addvertex('B')
graph.addvertex('C')
graph.addEdge('A','C')
graph.addEdge('A','B')

graph.display()
graph.removeEdge('A','B')
console.log("after remove")
graph.display()



