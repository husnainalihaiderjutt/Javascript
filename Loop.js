const obj = {
    FirstName:"Ali",
    SecondName:"Ali",
    THirdName:"Ali",
    FourthName:"Ali",
    FifthName:"Ali",
}

for(let a in obj){
    console.log("List of " + a +" student " + obj[a])
}
const arr = ["a","b",'c',"d"]
for(let a of arr){
    console.log(a)
}

let name = "Husnain"
for(let a in name)
{
    console.log(name[a]);
}
name = name[0];

const ali = [1,2,3,4,5,6,{
    name:"Husnain",
    class:"Graduated",
    Visa:"Granted"
}];
ali[4]="6"
ali.push(10);
ali.shift();
console.log(ali)
let c = ali.join("_")
ali.unshift("100")
console.log(ali)

let compare = (a,b)=>{
    return b-a;
} 
let array1 = [22,69,11,3,59,7];
array1.sort(compare);
array1.splice(4,2,100,200,300)
array1.slice(1)
console.log(array1);






