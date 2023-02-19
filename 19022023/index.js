//arrow function
import getcomplete from "./indexss.js";
const addition = (b) => b.num1 + b.num2;
const num = {
    num1: 10,
    num2: 20
}
const num2 = {
    num1: 30,
    num2: 40
}


//let num3 = addition(num);
console.log(addition(num2))
const sub = (num1, num2) => num1 - num2;
console.log(sub(10, 5))



const todo = {
    "user": "s",
    "id": '1234566'

}
let user = todo.user //object destructuring
console.log(user)

//array 
const arr = ['strin', 10]
    // let str_varlue=arr[0];
    // let str_number=arr[1];

let [str_varlue, str_number] = arr;
console.log({ str_varlue, str_number })
console.log(str_varlue, str_number)
console.log(getcomplete())
    //