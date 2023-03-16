//Destructuring is when you decompose a structure such as an array or object into its individual parts.

//The purpose of destructuring is to take the individual parts of a larger structure and assign them to variable/properties.

//The old school imperative way of 'destructuring' was done like this, lets take the example of trying to utilize data 
//from a json object returned from an api call. 

var tmp = getSomeRecords()

var first = tmp[0]
var second = tmp[1]

var firstName = first.name
var firstEmail = first.email != undefined ? first.email : 'layman212@gmail.com'

var secondName = second.name
var secondEmail = second.email != undefined ? second.email : 'layman212@gmail.com'

//While the above way works it can be hard for a reader to understand the code as is the case with most imperative code. 

//The more declarative version of this done with destructuring would look like this.

var [
    {   
        //This is saying make me a firstName variable and assign it the value of whatever is in the name property of this object.
        name: firstName,
        //This is the default value expression, and it says if there isnt an email property present default to the given value. 
        email: firstEmail = 'layman212@gmail.com'
    },
    {
        name: secondName,
        email: secondEmail = 'layman212@gmail.com'
    }
] = getSomeRecords()

//on the left hand side of the equals is a pattern which says what is expected to get back from the right hand side, so that we can assign 
//the individual values of that right hand side to different variables as we need them. 



//Try to think about what the equivalent would have been if you werent destructuring. 

//To keep things declarative you should use multiple lines when organizing code, so its more readable.

function data(){
    return [1, 2, 3]
}

//imperative

var tmp = data()
var first = data[0]
var second = data[1]
var third = data[2]

//declarative

var [
    first,
    second,
    third
] = data()

//If an element has the possibility of being undefined, you may want to set a default value.

//imperative

var tmp = data()
var first = data[0]
var second = data[1] !== undefined ? data[1] : 10
var third = data[2]

//declarative

//Be aware this default value only picks up in the case there is an undefined, and uses the isStrictlyEqual abstraction. So null is not
//equivocal
var [
    first,
    second = 10,
    third
] = data()

//What if you had an array of unknown length, so you wanted to take all elements after the ones you explicitly assigned and put them in an 
// array.

//imperative

var tmp = data()
var first = data[0]
var second = data[1] !== undefined ? data[1] : 10
var third = data[2]
//array.slice returns a shallow copy of the array, it takes two arguments, starting indice, and ending.
var fourth = data.slice(3)

//declarative

//Utilizes the rest operator to create an array for the rest of the values to be placed into, must be used as the last item of the destructure.
var [
    first,
    second = 10,
    third,
    ...fourth
] = data()

//If youd like a reference for the entire structure like youd have with the imperative way of doing things you could do this. 
//The structure will first be assigned to the tmp variable, and then destructuring happens from tmp.
var tmp;
var [
    first,
    second = 10,
    third,
    ...fourth
] = tmp = data()



//Declaration has nothing to do with assignment in js, its just added to it in most cases for convenience. The same case with destructuring
//its all about assignment, so if youve already declared the variables used you dont need a declaration keyword.

//imperative

var tmp = data()
var first, second, third, fourth
first = data[0]
second = data[1] !== undefined ? data[1] : 10
third = data[2]
fourth = data.slice(3)

//declarative

var tmp;
[
    first,
    second = 10,
    third,
    ...fourth
] = tmp = data()

//You can technically assign them to any place you could validly assign values to, such as an array or object

//Another way you might capture the entire structure into a variable is to have the variable on the left hand side, and have the destructuring
//on the right. This is called an assignment expression. 

var tmp;
//tmp will = the entire structure, not just the section defined in the pattern.
tmp = [
    first,
    second = 10,
    third,
    ...fourth
] = data()

//To ignore places in a structure just use a , with no identifier.

//To swap values between variables.

var x = 10;
var y = 20;

//imperative 

{
    let tmp = x;
    x = y;
    y = tmp;
}

//declarative

[x, y] = [y, x]



//You can destructure in a param position

//Format your destructures line by line.
function component({
    one,
    two,
    three
}){

}

//You can provide a fallback default for the structure itself if say it came back as null or undefined

var tmp;
tmp = [
    first,
    second = 10,
    third,
    ...fourth
] = data() || []

//you can also do this in the param position. 

//handling nested array destructuring.

function data(){
    return [1, [2, 3], 4]
}

//imperative

var tmp = data()
var first, second, third, fourth
first = data[0]
tmp2 = data[1] || []
second = tmp2[0]
third = tmp2[1]
fourth = data.slice(3)

//declarative

var tmp;
[
    first,
    [
        second,
        third,
    ] = [], 
    ...fourth
] = tmp = data()


