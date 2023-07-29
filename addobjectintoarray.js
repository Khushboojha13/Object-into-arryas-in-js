//approach 1- push() method
const arrr=[1,"hello",3];
let newobj={
    name:"khelo"
}
arrr.push(newobj); //here we have to pass the object name
console.log("object into an array");
arrr.push("hello1","khelo");
console.log(arrr);


//approach 2 -  JavaScript Array splice() Method: The splice method is used to both remove and add elements from a specific index. It takes 3 parameters, the starting index, the number of elements to delete, and then the items to be added to the array. An object can only be added without deleting any other element by specifying the second parameter to 0. The object to be inserted is passed to the method and the index where it is to be inserted is specified. This inserts the object at the specified index. 

//arr.splice(index, 0, objectName)
let newobj1= arrr.splice(1,0,newobj);
console.log("splice method");
console.log(arrr);



//approach 3- unshift() method- The unshift() method is used to add one or multiple elements to the beginning of an array. It returns the length of the new array formed. An object can be inserted by passing the object as a parameter to this method. The object is hence added to the beginning of the array. 

//Syntax:
//arr.unshift(object);

let objooo={
    name:"peelooo"
}

let newobj2= arrr.unshift(objooo);
console.log(arrr);