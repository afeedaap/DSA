function firstNonRepeating(arr) {
    const frequency = {};

    // Step 1: Build frequency map
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        if(frequency[num]){
            frequency[num]++
        }
        else{
            frequency[num]=1
        }
    }

    // Step 2: Find the first non-repeating element
    for (let i = 0; i < arr.length; i++) {
        if (frequency[arr[i]] === 1) {
            return arr[i]; 
        }
    }

   return 0 // If no non-repeating element found
}

// Example usage
const arr = [4, 5, 1, 2, 0, 4, 1, 2,5,1];
console.log(firstNonRepeating(arr)); // Output: 5
