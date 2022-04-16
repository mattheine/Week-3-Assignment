var sizes=[33,45,45,46,47];
var distance=[33,45,45,46,47,48];

function whosBigger(array1, array2){
    let total1= 0;
    let length1 = array1.length;
   
    for(i=0;i<length1;i++){
        total1+=array1[i];
    };
    let total2= 0;
    let length2= array2.length;
    for(i=0;i<length2;i++){
        total2+=total2[i];
    };
    if(total1>total2){
        return true;
};
    return false;
};



console.log(whosBigger(sizes, distance));



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



var questioNin =[9,6,3,5];
var computer = [ 4,5,6,7,8,34]

function hundoPlus(array){
   //vs.
   function huundoPlus(questioNin)

   is the second function likned only to the variable questioNin or can another array be passed into the function as well?

   