

/*const button =document.querySelector('button')!;
button.addEventListener('click', () =>{
    console.log("clicked");
});
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
/*
// const and let 
const diff = "hasan";
diff = "bekir";
let change ="hasan";
change = "bekir";
//  var is global value
var bekir = "agasf"

console.log(hesapmakinesi(50,20,'bolme'));     
 */
/*
//2 ya da daha az variable var ise bu fonksiyon çalışır
const add = (a:number , b : number)  => {
    return a+b;
}

console.log(add(2,5));
*/
/*
//üslü sayılar fonksiyonu
function uslusayilar(numbr1:number,numbr2:number){
    let result = 1;
    for(let i=1; i<=numbr2; i++){  
       
        result = numbr1 *result;  
        console.log(result)
        if(i>=numbr2){
            break;
        }
    }
       
    }
    uslusayilar(2,6)
    //push method 
    //spread operator 
    const hobbi=["spor", "basketbol"];
    const aktifhobbi=["yürüme"];
    aktifhobbi.push(...hobbi);
    console.log(aktifhobbi);

    const person ={
        ad:"hasan",
        age :21
    };
    const coppiedperson ={...person};
    console.log(coppiedperson);
    
    //rest paramaters

    const add = (...numbers : number[]) =>{
        let results = 0;
        return numbers.reduce((curResult, curValue) =>{
            return curResult + curValue;
        },0);
    };
        
    
    //object destructing
    const addednumbers = add(5,10,2,3.7);   
    console.log(addednumbers);

    
    const [hobby1, hobby2, ...remaininghobbi] = hobbi;
    console.log(hobbi,hobby1,hobby2);

    const {ad :username , age} = person;
    console.log(username,age);
*/
/*
//classes
//private - public 
class Departmen {
    name : string;
    private employees :string[]=[];
    constructor(n: string) {
        this.name = n;

    }
    describe(this: Departmen){
        console.log('departman: '+ this.name);
    }
    addemployee(employee:string){
        this.employees.push(employee);
    }
    printemployeeinfo(){
        console.log(this.employees.length);
        console.log(this.employees);
    }
}



const accounting = new Departmen('accounting');
accounting.addemployee('max');
accounting.addemployee('hasan');
accounting.printemployeeinfo();
accounting.describe();
*/
//const accountingCopy ={ name : 's' ,describe: accounting.describe};
//accountingCopy.describe();

//import { errors } from "undici-types";

//shortcut to class
class Department {
    //private -- protected 
    protected employees :string[]=[];
    constructor(private readonly id: string, public name: string) {
        

    }
    describe(this: Department){
        console.log('departman: '+ this.name);
    }
    addemployee(employee:string){
        this.employees.push(employee);
    }
    printemployeeinfo(){
        //this.id ='d2';  --read only so you cant change it
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
//inheritance
class ITDepartman extends Department
{
    admins:string[];
    constructor(id :string, admins : string[]){
        super(id,'IT');
        this.admins = admins;
    }
}
//get and set 
const accounting = new ITDepartman('d1',['hasan']);
accounting.addemployee('maxs');
accounting.addemployee('hasan');
accounting.printemployeeinfo();
console.log(ITDepartman);

class accountingdepartment extends Department{
private lastreport:string;
get mostrecentreport (){
    if (this.lastreport){
        return this.lastreport;
    }
    throw new Error('no report found.');

    
}
set mostrecentreport(value: string){
    if(!value){
        throw Error('no value setted')
    }
    this.addreport(value)

}
constructor(id:string, private reports : string[]){
    super(id , 'IT');
    this.lastreport =reports[0];
}
addreport(text:string){
    this.reports.push(text);
}
printreports(){
    console.log(this.reports);
}

}
const accountingg = new accountingdepartment('d2',[]);

accountingg.addreport('something worng');

accountingg.mostrecentreport ='year reports:';
accountingg.printreports();
 

