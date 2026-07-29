let array = [1,2,3,4,56,7];
array.push(8);      // add last item 
array.pop();     // remove last item 
array.shift();    // remove first item 
array.unshift(10);  // add first item 
console.log(array)
let b= array.toString(); //it gives the string
let c = array.join("_"); //it join the array and give string
console.log(typeof c)
console.log(typeof b)
console.log(b)
console.log(c)

delete array[0];   //delete the array element but the length stay the same
console.log(array)
console.log(array.length)
array.shift()
let array2 = [6,7,8,9,10]
array = array.concat(array2)
let result = array2.concat(array); // merge two arrays and return one new array but doesnot change original array
console.log(result,array)

console.log("Sorted array",array.sort()) //it doesnot sort by ascending and descending it only sort numerically 
console.log(array) // sort also change the original array

let compare = (a,b)=>{ // for ascending order sorting
    return a-b;
}

array.sort(compare);
console.log("sorted array ascending order",array) 

let compared  = (a,b)=>{ // for Descending order sorting
    return b-a;
}
array2.sort(compared);
console.log("Sorted array in Descending order",array2);

const numbers = [1,2,3,4,5,6];
numbers.splice(2,1,9,10); //first parameter is position and second what want to delete and all other adding element it change the same array
console.log("Using Splice",numbers);

let numbers2 = numbers.slice(3); // it create a new array
console.log("Slice",numbers2)

