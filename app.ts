/*console.log('Your code goes here...');
//toplama fonksiyonu
function add(n1:number,n2:number,showresult: boolean){

    if(showresult = true ){
        const result = n1+n2;
        const resultphrase ='result is:'
        console.log(resultphrase+result);

    }
    else{
        return console.log(n1+n2);
    }
    if(typeof n1 !== 'number' || typeof n2 !== 'number'){
        throw new Error("incorrect input ");
       // typescript te kodu yazarken hatayı gösterdiği için exception la hatanın nerede olduğuna gerek yok 
        
    }
    return n1+n2
}
let boole = true;
const number1=5;
const number2 = 10.2;
const printresult = true;
add(number1,number2,printresult);

*/

//objects 
/*
const person: {
    ad:string,
    yas:number} = {
    ad:'hasan',
    yas:21
};
console.log(person.ad);
*/

/*
//enums
enum role {admin,readonly,author};
//arrays 
//tuples 
const person: {
    ad:string;
    yas:number;
    hobbies:string[];
    role:[number, string];
    } = {
    ad:'hasan',
    yas:21,
    hobbies: ["yemek yapma","futbol"],
    role: [2,"hasan"]
};
//any type
let activities: any[];
activities =["basket",5];
console.log(person,activities)
for(const hobby of person.hobbies){
    console.log(hobby);
    person.role[0]= 15;
    person.role.push('admin');
    console.log(person.role);
}
*/
//union types
//literal types
//type aliasises
/* type toplanabilir = number | string;
type toplanabilir2 = 'as-number' | 'as-text';
function topla(input1: toplanabilir, input2: toplanabilir, resultconversion :toplanabilir2){

    let result;
    if(typeof input1 =='number' && typeof input2 == 'number' || resultconversion == 'as-number'){
        result = +input1 + +  input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

const combinedasumber = topla(14,12,'as-number');
const combinedstring =topla('yasim ','21','as-text');
console.log(combinedasumber + combinedstring);
*/
// function void and undefiened types

/*function add(n1:number , n2: number){
    return n1+n2;
}
function printresultt(num: number):void{
    console.log('result:' + num);
    return;
}
//function as types
printresultt(add(5,12));
let degerleribirlestir : (a: number, b : number) => number;
    

degerleribirlestir = add;
*/
//console.log(degerleribirlestir(8,16))
//callback funtions 

/*function eklevehallet(num1 : number, num2 : number, cb: (num: number) => void) {
    const result=num1 +num2;
    cb(result);
} 
eklevehallet(10,20,(result) =>{
    console.log(result);
})
*/
//unknown type
/*let kullaniciinput: unknown;
let kullaniciadi: string;
kullaniciinput =5;
kullaniciinput ='hasan';
if(typeof kullaniciinput == 'string'){
    kullaniciadi = kullaniciinput;
}
//never type
function generateError(message: string, code: number ){
    throw{message: message , errorCode: code}
}
*/
type toplanabilir = 'toplama' | 'cikarma' | 'carpma' | 'bolme';
//hesap makinesi 
function hesapmakinesi(number1 : number, number2: number,islemsecme :toplanabilir){

if(islemsecme == 'toplama'){
    return number1 + number2;
}
if(islemsecme == 'cikarma'){
    return number1 - number2;
}
if(islemsecme == 'carpma'){
    return number1 * number2;
}
if(islemsecme == 'bolme'){
    return number1 / number2;
}

}

console.log(hesapmakinesi(50,20,'bolme'));
