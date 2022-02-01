//alert("Hello to JS")

var table = "Normal table";
let chair = "One chair";

console.log(table);
console.log(chair);

let testBoolean = true;
console.log(testBoolean);

let testNumber = 10;
console.log(testNumber);

let testString = "text";
console.log(testString);

let testBooleanObject = new Boolean(true);
console.log(testBooleanObject);

let testNumberObject= new Number(10);
console.log(testNumberObject);

let testStringObject = new String('test');
console.log(testStringObject);

//Concatenate variables
let nameOk = 'John';
let surname='Doe';
let question = "How are you "+nameOk+" "+surname+"?";
console.log(question);

//To ES6 we can use backtick to create interpolated string
let nameOk1 = 'John';
let surname1='Doe';
let age = 23;
let question1 = `How old is ${nameOk1} ${surname1}?`;
let answer = "He is "+age+" years old";
console.log(question1);
console.log(answer);

//Concatenate using method string.concat(string)
let nameOk2 = 'John';
let surname2='Doe';
let question2 = "How are you ".concat(nameOk2)+" ".concat(surname2)+"?";
console.log(question2);

//Arithmetic operations
//Sum, rest, multiplication or division
let operator_a = 12;
let operator_b = 6;
let sum = operator_a + operator_b;
let rest = operator_a - operator_b;
let mult = operator_a * operator_b;
let division = operator_a/operator_b;
console.log(sum);
console.log(rest);
console.log(mult);
console.log(division);

//Arithmetic operations II
//Exponentiation / Increment / Decrement
let operator_c = 12;
let operator_d = 6;
let expo = operator_c ** operator_d;
let incr = operator_c++;
let decr = operator_c--;
console.log(expo);
console.log(incr);
console.log(decr);

//Assignment Operators
let x = 5;
let y = 6;
console.log(x+=5);
console.log(x-=5);
console.log(x*=3);
console.log(y/=2);

//Typeof
console.log(testBoolean);
console.log(testNumber);
console.log(testString);
console.log(testBooleanObject);

//null
let testNull=null;
console.log(typeof(testNull));

//undefined
let testUndefined;
console.log(testUndefined);

//Array
var first_array = [];
var second_array = new Array(3);
var third_array = new Array(3,5);
var fourth_array = new Array(3,5,"Seville",true,third_array);
console.log(first_array);
console.log(second_array);
console.log(third_array);
console.log(fourth_array);

//Array access
console.log(third_array[1]);
console.log(fourth_array[4][0]);

//Array length
console.log(fourth_array.length);

//Array push
console.log(fourth_array.push("Spain"));
console.log(fourth_array);

//Array unshift
fourth_array.unshift(1);
console.log(fourth_array);

//For / For Each
/*for(var i=0; i<fourth_array.length;i++){
    console.log("Entramos en la iteracion de "+fourth_array[i]);
}*/

/*for(var i = fourth_array.length; i>=0;i--){
    console.log("Second iteration "+fourth_array[i]);
}*/

/*var i =fourth_array.length;
for(;i>=0;i--){
    console.log("Third iteration "+fourth_array[i]);
}*/

fourth_array.forEach(function(element){
    console.log("Fourth iteration "+element);
});

//Date object
let today = new Date();
let first_october = new Date(2019,10,1);
console.log(today);
console.log(first_october);
console.log(today.getMonth());

