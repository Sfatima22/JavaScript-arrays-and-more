const obj1=[
    ["name" ,"fatima"],
    ["age", 21]];
// console.log(Object.entries(obj)); //converts into an array
// const str="fine";
// console.log(Object.entries(str));


// Object.freeze(obj);
// obj.name="kash";
// console.log(obj) freezes an object it cannot be changed later

// console.log(Object.fromEntries(obj)); //converts obj to array

let student = {
    name: "Shagufta"
};
// 
// console.log(Object.getOwnPropertyDescriptor(student, "name"));  specifies the details  of the property 


// let arr = ["a", "b", "c"];
// console.log(Object.getOwnPropertyNames(arr)) gives hidden properties as well unlike Object.keys()

const obj2={}; 
// obj.property="name";
// console.log(Object.hasOwnProperty("name")); cgecks if the obj has a property or no 


// console.log(Object.is(obj1,obj2));

// console.log(Object.isExtensible(obj2)); checks if new properties can be added 


// Object.preventExtensions(obj1);
// console.log(Object.isExtensible(obj1)); prevents from adding properties 

// let empty = {};
// console.log(Object.isSealed(empty)); // checks if an obj is sealed or not



// console.log(Object.keys(student)); gives the keys of an obj 

// 
// console.log(obj1.propertyIsEnumerable("age")); checks if the property belongs to the obj 