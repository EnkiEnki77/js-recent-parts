//object destructuring allows for named arguments with your functions, sometimes you may forget what order your arguments go in or want
//to skip one. So rule of thumb if your function has 3 or params than use this pattern. To allow this as an option though wrap your 
//params in an object

function namedArgs({
    arg1,
    arg2,
    arg3,
}){
    return
}

namedArgs({arg2: 34})

//Downside to doing things this way is you now have to remember param names of functions, but that just means you should have a convention
//for the names you give things that are commonly passed to functions, such as cb for callback, arr for array, etc.

