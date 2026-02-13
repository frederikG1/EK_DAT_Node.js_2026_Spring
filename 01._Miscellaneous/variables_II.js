//"use strict";


//Missing declaration type
//Never EVER do this
//totalGlobalVariable = "";

// Don't ever do this, man skal ikke bruge VAR
var globalVariable = "This is defined in the global scope";

//public is a reserved word, so error comes when 'use strict' is on
const public = "this variable is named public";

{//block scope
    var someVariable = true;
    {
        var someVariable = false;
    }
    //console.log(someVariable)
}

{
    let someVariable = true;
    {
        let someVariable = false;
    }
    console.log(someVariable)
}

//var 'bløder' igennem scopes
for (var i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i)
    }, 1000)       
}

//let er bundet til scopet
for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i)
    }, 1000)       
}