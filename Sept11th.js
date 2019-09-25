function test(a,b) {
    a =a || "a";
    b = b || "b";
    console.log(a,b);
}

test(1,2);
test(1);
test();

let a="global";
function func()
{
    let a="local";
    if(true){
        let a ="inner";
        console.log(`in if a=${a}`);
    }
    console.log(`in func a=${a}`);
}
console.log(`global a=${a}`);

//inner - local - global

function test(){
    console.log(`b=${b}`); //b=undefined
    var b = "b";
    console.log(`b=${b}`);//b=b
}
var c="global";
function test(){
    c = "c";
    if(true)
    {
        var c = "c";
    }
    console.log(`c=${c}`) //c = c
}
test();
console.log(`c=${c}`) //c = global

//Objects are hash tables
let e = {}

//brackets or dots
e["a"] = 1;
e.b = 2;

//literal notation
let f = {"a":1, "b":2, "c":"c", "e":e};
//console.log(f.e.b) == 2, console.log(e.a) == 1, console.log(f.b) == 2

let key = "lock";
let value = 7;
let kv = {"key" : value}; 
kv;
//Object {key: 7}

kv[key] = value;
kv;
//Object {key: 7, lock: 7}

let arr = [1,2,3];
arr.length;
arr[2];
arr[6];
arr[5] = 4;
arr[9] // undefined
arr
//Array(6) [1, 2, 3, …, 4]
