/* var word = "entertainer";
letterNine = word[word.length - 3];
console.log(letterNine)*/

/*function madlib(celebrity, verb, food, place){
    result = ""
    result += celebrity + " enjoys" + " " + verb + " " + food + " " + "in" + " " + place;
    return result
}

console.log(madlib("James Harden", "eating", "cookies", "school"))*/

/* A nested array has two or more arrays in one
var myArray = [["Nifemi", 19], ["Ayo", 21]];
*/

/*var scores = [70, 50, 90, 97];
nifemi = scores[3];
console.log(nifemi)*/

/* arrays can be modified
var scores = [70, 50, 90, 97];
scores[3] = 89;
console.log(scores)*/

/*multi-dimentional arrays : an array in an array in an array
var ourArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], [13, 14, 15]]];
ourData = ourArray[3][1][1];
console.log(ourData)*/

/*to append i.e add to the end of the array
var scores = [70, 50, 90, 97];
scores.push(20);
console.log(scores)*/

/*taking the last element in the array with the pop function
var scores = [70, 50, 90, 97];
removedFromScores = scores.pop();
console.log(removedFromScores)
*/

/*var scores = [70, 50, 90, 97]; removes the first element in the array
removedFromOurArray = scores.shift();
console.log(scores)*/

/*adds an element to the beginning of the array unlike the push function that adds one to the end
var scores = [70, 50, 90, 97];
scores.unshift(10);
console.log(scores)*/

/*function reusableFunction(){
    console.log('HEY LOL');
}

reusableFunction();*/

/*parameters act as placeholders for the values that are input into a function when it is called
function num(a, b){
    console.log(a / b);
}
num(10, 2);*/

/*function timesThree(a){
    return a * 5
}
console.log(timesThree(5))*/

/*var sum = 0;
function addFour(s){
    sum += 4;
}
console.log(addFour(4))*/

/*var processed = 0;
function process(num) {
    return num + 5;
}

console.log(process(8))*/

/*function tORF(num){
    if (num === 12){
        return "True";
    }
    return "Nahhh";
}

console.log(tORF(12))*/

/*function test(val){
    if (val > 12 && val === 15 ){
        return "True lol";
    }
    return "no lol";
}
console.log(test(12))*/

/*function test(num){
    if (num > 20 || num < 15){
        return "true";
    }else{
        return "lol";
    }
}
console.log(test(17))*/

/*function test(word){
    if (word == "car" || word == "Car"){
        return "Correct!";
    }else if (word == "CAR"){
        return "Correct!";
    }else{
        return "Wrong! Move out the way, Nigga!";
    }
}
console.log(test("CAR"))*/

/*math
function math(a, b){
    if (a + b == 8){
        return "yes"
    }
    return "nah"
}
console.log(math(4, 4))*/

/*function alphabets (letter) {
0    var answer = " ";
    switch(letter){
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "ball";
            break;
        case "c":
            answer = "cat";
            break;
        default:
            answer = "not valid, OG"
            break;
    }
    return answer

}
console.log(alphabets("a"));*/

/*switch statement with multiple options

function type(text){
    var result = "";
    switch(text){
        case "a":
        case "b":
        case "c":
            result = "alphabet";
            break;
        case 1:
        case 2:
        case 3:
            result = "number";
            break;
        default:
            result = "idk, man";
            break;
    }
    return result 
}
console.log(type("o"))*/


/* objects in javascipt
var myPhone = {
    "name" : "iPhone x",
    "sim" : "Airtel",
    "the color" : "white",
    16 : "5-inches"
};*/
/*accessing object properties with dot notations
var phoneValue = myPhone.name;
var simValue = myPhone.sim;
console.log(phoneValue)*/

/*accessing object properties with bracket notations - required if the object has a space in it
var colorValue = myPhone["the color"]
console.log(colorValue)*/

/*accessing object properties with variables
var sizeValue = 16;
var sv = myPhone[sizeValue];
console.log(sv)*/

/*updating object properties
myPhone.name = "iPhone 10";
var nameValue = myPhone.name
console.log(nameValue)

var nameValue = myPhone["name"];
console.log(colorValue);*/

/*adding new properties to an object through dot notation
myPhone.imei = 2366166136
var imeiValue = myPhone["imei"];
console.log(imeiValue)*/

/*myPhone["imei"] = 56789098678;
var imeiValue = myPhone.imei;
console.log(imeiValue)*/

/*deleting object properties
delete myPhone.sim
console.log(myPhone)*/

/*using objects for lookups instead of switch statements
function finance(firstname){
    lastName = "";
    switch(firstname){
        case "Oluwanifemi":
            lastName = "Akinborode";
            break
        case "Ayooluwa":
            lastName = "Faith";
            break;
        default:
            lastName = "not valid";
            break;      

    }
    return lastName
}
console.log(finance("cnjnc"));*/

/*function words(alphabets){
    result = "";
    var lookups = {
        "a" : "apple",
        "b" : "ball",
        "c" : "cat",
        "d" : "door",
        "e" : "egg",
        "f" : "fan"
    }
    result = lookups[alphabets];
    return result

}
console.log(words("a"))*/

/*JS objects help to store flexible  data*/
/*var alphabets = { 
    "a" : "apple",
    "b" : "ball",
    "c" : "cat",
    "d" : "dog",
    "e" : "egg"
}
alphabets.f = "fan"

console.log(alphabets)

function checkAlphabets(checkproperty){
    if (alphabets.hasOwnProperty(checkproperty)){
        return alphabets[checkproperty];
    }else{
        return "Not included!"
    }
}
console.log(checkAlphabets("g"));*/

/*var mySongs = [
    {
        "artiste" : "Jeremii",
        "title" : "stress me",
        "release_year" : 2022,
        "formats" : [
            "144P",
            "240P",
            "360P",
            "480P"
        ],
        "gold" : true
    },

    {
        "artiste" : "Nifemi",
        "title" : "stress me refix",
        "release_year" : 2023,
        "formats" : [
            "144P",
            "240P",
            "360P",
            "480P"
        ],
        "gold" : false
    }

]
var artisteValue = mySongs[1].artiste;
console.log(artisteValue)*/

/*var collection = {
    "2000": {
        "album" : "MIL",
        "artiste" : "Niff",
        "tracks": [
            "Essence",
            "Blessed"
        ]
    },

    "2001": {
        "album" : "AGT",
        "artiste" : "Jer",
        "tracks": [
            "Stress Me",
            "Out Of My Head"
            /*extra string
        ]
    },

 /*   "2002": {
        "album" : "AGT",
        "tracks": [] /*to delete
    },

    "2003":{
        "album" : "African Giant"
    }
};*/

/*var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, value, prop){
    if (value === ""){
        return delete collection[id][prop]
    }else if(prop === "tracks")
}*/

/*var myArrays = [];
var i = 0;
while (i < 5){
    myArrays.push(i);
    i ++;
}
console.log(myArrays)*/

var myArray = [];
for (x = 1; x < 100; x += 2){
    myArray.push(x);
}
console.log(myArray)













