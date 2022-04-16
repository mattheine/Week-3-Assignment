//1

var ages = [3,9,23,64,2,8,28,93];  // this establises the array

function subtracted (array){
    let first= array[0];//this identifies the first value in the array
    let last = array[array.length-1] //identitifies the last value in the array
    let x = last - first;  // returns value of last minus first
    return x;    
}

console.log(subtracted(ages)); // this calls the function to execute

ages.push(46);  //  adds the value of 46 to ages array
console.log(ages); // logs array ages

console.log(subtracted(ages));  //executes the subtracted function with the ages array.  it proves to be dynamic

ages.push(69);
console.log(subtracted(ages)); //just another test to double check it works

function average(array){ //creating a function to find the average of an array
    let sum =0;  //establishing the varable sum - a running total
    let length = array.length; //establishing the length of the array

    for (let i=0;i<array.length;i++){ //for loop to loop therough the given  array
    sum += array[i];}// takes the value of the sum variable and adds it to the current loop position value
    return sum/length; //returns the average calculation of the array
    }

console.log(average(ages));// calling the averag loop to be executed



//2


var names = [ 'Sam',  'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];// creating an array named names
var length= names.map (function(element){ //using the map method we will take every element within an array and run a function through it.
    return element.length; //this takes the length of each element 
});
console.log(length)//takes function and calls it for each function in array

let sum = length.reduce(function(accumulator, currentValue){ //using reduce method takes a function and the (parameter-accumulator, parameter2 current value in array)
    return accumulator + currentValue;//executes the addition of an array
});
console.log(sum);
console.log("On overage there are "+ sum/ names.length + "letters per name.");  //this prints the average to console

console.log(names.join(" ")); //.join method joins all elements into one string

//5

var nameLengths= names.map(function(element){
    return element.length;
});
console.log(nameLengths);
//6
var total = nameLengths.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
});

console.log(total);

//7
function replicate(word, n){
   for (i=0;i<n;i++){
        console.log(word)
    }
}
replicate("monkey",7);

//8
function fullName(firstName, lastName){
    console.log(firstName+ " " + lastName);
}

fullName("Matt","Heine");


//9
var questioNin =[9,6,3,5];

function hundoPlus(array){
    let hammy= array.reduce(function(accumulator, currentValue){
        return accumulator+currentValue;
        });
    if(hammy>100){
        return true;}
    else{return false}
    }


console.log(hundoPlus(questioNin));
questioNin.push(45,66,1);
console.log(questioNin);
console.log(hundoPlus(questioNin));

//10

function arrayAvg(array){
    let total= 0;
    let length = array.length;
    for(i=0;i<array.length;i++){
        total+=array[i]
    };
    return total/length;}

console.log(arrayAvg(questioNin));
console.log(questioNin.length);

questioNin.push(100,100,100);
console.log(arrayAvg(questioNin));

//11
var sizes=[33,45,45,46,47];
var distance=[33,45,45,46,47,48];

function bigPoppa(array1, array2){
    let total1= 0;
    for(let i = 0; i<array1.length;i++){
        total1+= array1[i]};
    let total2 = 0;
    for(let i =0; i< array2.length;i++){
        total2 += array2[i];
    };
    if((total1/array1.length)>(total2/array2.length)){
    return true};
    return false};


console.log(bigPoppa(distance, sizes));


//12
var isHotOutside= true;
var moneyInPocket= 30;

function willBuyDrink(boolean, number){
    if (boolean== true &&number > 10.50){
        return "true";
    }
    return "false"
}

console.log(willBuyDrink(isHotOutside, moneyInPocket));


//13
var hungry= true;  // this sets a boolean variable
var energy= [100,50,12,9,4];  // this sets an array variable

function willIEat(boolean, array){  //establishing a function that accepts a boolean and an arry
   let total = 0;  //established variable within parameters of function
   for(let i =0; i<array.length;i++){ //for loop to calculate total of array
       total += array[i]
   };
   let average = total/ array.length; //variable finding array average
    if(boolean == true && average<= 50){  //setting conditions for the return 
        return "yes eat";
    };
    return "keep going"} // if false return this

    console.log(willIEat(hungry, energy)); //logging to console return message 
    
energy.push(99,99,199,1000);  //adding new elements to the energy array
console.log(willIEat(hungry, energy));  //logging the willIEat function to console after new elements added to the array.


