//Javascript objects --> hash tables that map keys to values
//Keys can only be strings, values can be anything
let e = {};
let f = {"a" : 1, "b" : 2, "c" : "c", "e" : e};
e.b = 2;
e["a"] = 1;
e["some string"] = 3;
e["a/b"] = 3;

let p = {a:1,b:2,c:"c", e:e}

let v  ="a";
let g = {v : v};
// For non object types:
// == uses aggressive coercion
// === alternative wtithout aggressive coercian
// for objects, both operators compare object identity
//ie let a = {a:1}, let b ={a:1} a==b -> false, a===b -> false


/*
Functions
*/
//No Hoisting, cannot be used before definition
let fun1 = function(x) { return x+1 ; }; 

//Hoisting --> function is defined for entire code block and can be referenced before definition
function fun2 (x) {
    return x+2;
}
/*
Functions can be used as parameters to other functions
*/
function passFive(f){
    return f(5);
}
passFive(fun1);
passFive(fun2);

//Functions can be properties of objects
obj = {};
obj.a = function(){return "a";}
obj.b = function(x){return(x+1)};
obj.b(5)
/* Functions referencing this for an object can not be referenced outside of the object,
see below for clarification*/
obj.d = "this is d";
function fun(){
    return this.d;
}
obj.c = fun;
obj.c(); //returns 'this is d'
fun(); //undefined

//Functions can create functions
function makeFunction(){
    return function(x){
        return x+1;
    }
}
makeFunction(); //return a function that can be assigned to a variable
makeFunction()(5); //returns a function which then has 5 passed into it, returns 6

//functions within functions
//a function can access variables outside scope of the function
function outer()
{
    let a ="outer";
    let b = "outer";
    function inner(){
        let a = "inner";
        b = "inner";
        console.log(a,b);
    }
    console.log(a,b); //outer outer
    inner(); //inner inner
    console.log(a,b); //outer inner
}
//Closure - functions accessing variables outside scope of function
function makeFunction(){let a2 = "makeFunction's A"
let x2 = function() {
    return a2;
}
}
let g2 = makeFunction(); 
console.log(g2());//makeFunction's A

/*
Closure captures all variables
*/
function adder(num)
{
    return function(x)
    {
        return x + num; // can access num even tho not passed in
    }
}
let add5= adder(5); //5 attached to inner function
let add3 = adder(3); //3 attached to inner function
add3(10); //13
add5(10); //15

//Closure of variables, not values
function fun(){
    let a = "outer"
    function getA() {console.log(a)}
    getA()
    a = "later"
    return getA;
}
let f = fun();
f() //prints outer later

//each execution has own context
/*
ie 
*/
function createCounter(){
    let y = 0;
    return function(){
        y = y+1;
        return y;
    }
}
let ct = createCounter();
ct(); //1
ct(); //2
let c2 = createCounter()
c2() //1
ct() //3

/*Functional vs imperative style
JS Encourages functions ie 
array.forEach(say) applies the say function to 
every element in the array */