'use strict';
//use strict is a directive from ECMAScript version 5
//it checks the code for additional error
//Declared at the beginning of a script, it has global scope
//(all code in the script will execute in strict mode)

//Create an object and assign it to a variable
var avenger = {name: 'Iron man', power: 'engineer'}
//Notice that we did not have to create a class to create an object
//In dynamically languages like JavaScript you don't have to do it

//Display whole object
display(avenger)

//Display one of the object's attributes
display(avenger.power)

//Even crazier is adding a new attribute to an object which was already created
avenger.car = 'Audi'
display(avenger.car)

//Adding functions to an object is also possible

avenger.suitUp = function() {
    display('Iron Man armor activated!')
}

avenger.suitUp()

