//The newer features of js push the language toward a more declarative
//approach, making code more readable. One of those features being 
//template literals aka interpolated strings. They are a more declarative
//approach to string concatenation. 

var name = 'Kyle Simpson'
var email = 'getify@gmail.com'
var title = 'teacher'

//old school concatenation approach
var msg = "Welcome to the class! Your " + title + " is " + name + 
"contact: " + email + "."

//new template literal approach. As you can see it reads much more like
//an actual sentence you dont have to execute as much in your head. 
var msg = `Welcome to the class! Your ${title} is ${name} contact: ${email}.`

//Tip: you can break a string to another line with template literals just by putting it on 
//the next line in your code. 



//Template literals have an additional feature called tagged templates.
//They allow you to run an intermediate function on the string that allows you to have more control over what is actually printed out
//such as conditionally formatting the expressions that are embedded in based on what value they are.  You dont generally need to write 
//your own though, there are a ton already created out there for most of anything youd ever need. 

var name = 'Enki'
var title = 'Frontend dev'

function tag(strings, ...values){
  return values
}

var msg = tag`Hi, my name is ${name} and I am a ${title}.` 

console.log(msg)



//If you need to pad a string with whitespace or a character use padStart/padEnd
//It has one required argument, a number representing the amount of padding youd like.
//Keep in mind though, the number doesnt represent how much padding youll get from the start of the string if using padStart or end
//if youre using padEnd, the number includes the entire string itself, so if you pass in 5, but the string is already 5 characters long
//you wont get additional padding. 
//It also takes a second optional argument that determines a string youd like the padding to be, default is whitespace.

var str = 'Hello'

str.padStart(5) // 'Hello'
str.padStart(8) // '   Hello'
str.padStart(8,'*') // '***Hello'



//There are methods for trimming whitespace, they are trim() trimStart() and trimEnd()

