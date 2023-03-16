//object destructuring works similarily to array destructuring, but you have to specify which property you are assigning to which
//variable. And because they are specified properties we can have them in whatever order we want. Whereas with arrays position matters.

function data(){
    return {a: 1, b: 2, c: 3}
}

//imperative

var tmp = data()
var first = tmp.a
var second = tmp.b
var third = tmp.c

//declarative

var {
    a: first,
    b: second,
    c: third
} = data()

//Just like with arrays, youu can also use rest in objects.

function data(){
    return {a: 1, b: 2, c: 3, d: 4}
}

var {
    a: first,
    b: second,
    ...third
} = data()

//Shorthand for object destructuring

//If there is a property called a and b, assign the value to a variable of the same name. You can also give a default value.
var {
    a = 42,
    b
} = data()



//nested object destructuring

function data(){
    return {a: 1, b: {c: 3, d: 4}}
}

var {
    a,
    b: {
        c,
        d
    } = {}
} = data() || {}

//Remember to use the defaults when you destructure. 

//Last tip: when destructuring objects you can reference the same property multiple times. This is especially useful with nested structures
//so you can save the entirety of say a nested object, but also destructure that object

var {
    a,
    b,
    b: {
        c,
        d
    } = {}
} = data() || {}
