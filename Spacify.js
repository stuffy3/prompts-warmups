//Modify the spacify function so that it returns the given string with spaces inserted between each character.
//spacify("hello world") // returns "h e l l o   w o r l d"


function spacify(str) {
    return str.replace(/([a-z, 0-9, ""])/g, ' $1').trim()
    }