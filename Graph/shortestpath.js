function shortestpath(graph,start,end){
    let queue=[start]
    let visited=new Set()
    let distance={[start]:0}
    while(queue.length>0){
        let current=queue.shift()
        if(current===end) return distance[current]
        visited.add(current)
        for(let neighbour of graph[current]){
            if(!visited.has(neighbour)&& !distance.hasOwnProperty(neighbour)){
                queue.push(neighbour)
                distance[neighbour]=distance[current]+1
            }
        }
    }
    return -1
}
const graph = {
    0: [1, 2],
    1: [0, 3, 4],
    2: [0, 4],
    3: [1, 5],
    4: [1, 2, 5],
    5: [3, 4]
};
console.log(shortestpath(graph, 0, 5)); // Output: 3
