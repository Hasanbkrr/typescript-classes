
//abstract class
abstract class Department {
    static yil=2020;
    //private -- protected 
    protected employees :string[]=[];
    constructor(protected readonly id: string, public name: string) {
        console.log(Department.yil);

    }
    //abstract 
    abstract describe(this: Department):void;
    
    addemployee(employee:string){
        this.employees.push(employee);
    }
    printemployeeinfo(){
        //this.id ='d2';  --read only so you cant change it
        console.log(this.employees.length);
        console.log(this.employees);
    }
    static createemployee(name: string){
        return {name: name};
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
    describe(){
        console.log('It department ID:'+ this.id)
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
private static instance :accountingdepartment;
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
//private constructors
private constructor(id:string, private reports : string[]){
    super(id , 'IT');
    this.lastreport =reports[0];
}
static getinstance(){
    if (this.instance){
        return this.instance;
    }
    this.instance =new accountingdepartment('d2',[]);
    return this.instance;
}
addreport(text:string){
    this.reports.push(text);
}
printreports(){
    console.log(this.reports);
}
describe(){
console.log('accounting departmen- ID:' + this.id);    
}

}
const accounting1 = accountingdepartment.getinstance();
const accounting2 = accountingdepartment.getinstance();
console.log(accounting1, accounting2);
accounting1.addreport('something worng');

accounting1.mostrecentreport ='year reports:';
accounting1.printreports();
 //static values 
const employee1 = Department.createemployee('shasn');

accounting1.describe();
//interfaces 
interface named {
    readonly name?: string;
    outputname?: string;
}
interface Addfn{
    (a:number , b:number) : number;
}
interface greettings extends named{
    
    
    greet(phrase : string) :void;
}
class person implements greettings {
    name?: string;
    constructor(n?:string){
        if(n){
        this.name = n;
        }
    }
    greet(phrase:string ){
        if (this.name){
        console.log(phrase + ' ' + this.name);
        }
        else{
            console.log('hi');
        }
    }
    }


let user1:greettings;
user1 = {
    
    name :'hasan',
    
    greet(phrase:string ){
        console.log(phrase +'' +this.name);
    }
};
user1.greet('hello there im  '); 
user1 = new person('hasan');
console.log(user1);
// ? at the end is means optional

//advanced types 

type admin = {
    name:string ;
    privaleges:string[];
};
type employee ={
    name:string;
    startdate:Date;
};
type elevatedemployee = admin & employee;
const e1:elevatedemployee ={
    name : 'hasan',
    privaleges : ['create-server'],
    startdate:new Date()
}
type combinable = string | number;
type numeric = number | boolean;

type universal = combinable & numeric;
//function overload
function add(a:number, b:number):number;
function add(a:string, b:string):string;
function add(a:number, b:string):number;
function add(a:string, b:number):string;
function add(a: combinable,b :combinable){
    if (typeof a === 'string'|| typeof b === 'string'){
        return a.toString() + b.toString();

    }
    return a +b;
}
const result =add('hasan','bekir');
console.log(result);
result.split(' ');



const fetcheduserdata ={
    id: 'u1',
    name:'hasan',
    job:{title :'stajer',description:'octopus'}
};
//optional chaining
console.log(fetcheduserdata?.job?.title);
//nullish coalescing
const userinput = undefined;

const storedData=userinput ?? "DEFAULT";
console.log(storedData);
type unknownemployee = employee | admin;
function printemployeeinform(emp:unknownemployee){
    console.log('name:'+emp.name);
    if('priveleges'in emp){
    console.log('priveleges '+emp.priveleges)
    }
    if('startdate'in emp){
        console.log('priveleges '+emp.startdate)
        }
}
printemployeeinform({name: 'hasan',startdate :new Date()});

class car{
    drive() {
        console.log('driving..');
    } 
}

class truck{
    drive() {
        console.log('driving ...');
    } 
    loadcargo(amount: number){
        console.log('loading cargo .. '+amount);
    }
}

type vehicle = car | truck;

const v1 = new car();
const v2= new truck();

function usevehicle (vehicle:vehicle){
    vehicle.drive();
    if(vehicle instanceof truck){
        vehicle.loadcargo(10000);
    }
}
usevehicle(v1);
usevehicle(v2);
//discremanted unions
interface bird{
    type:'bird';
    fylingspeed : number;

}
interface horse{
    type:'horse';
    runningspeed: number;

}
type Animal = bird | horse;

function moveanimal(animal: Animal){
let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.fylingspeed;
            break;
        case'horse':
        speed = animal.runningspeed;
        break;
    }
    console.log('moving at speed: ' +speed);
}
moveanimal({type:'bird',fylingspeed: 10});
//type casting 
//const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
const userInputElement = document.getElementById('user-input')! as HTMLInputElement;
userInputElement.value = 'hi there ';
//propery indexes
interface errorcontainer {
    id: string;
    [prop: string]: string;
}
const errorbag : errorcontainer = {
    id:'1',
    email:'not a valid email',
    username:'must contain capital character'

};
 
//GENERİCS types
//array type
const names: Array<string> =["hasan","colak"]
names[0].split('');
//promisetype
const promise :Promise<number>= new Promise((resolve, reject) => {
setTimeout(() => {
    resolve(10);

},2000);
});
promise.then(data => {

})
console.log(names);
console.log(promise);

//creating a generic function

/* function merge<T, U>(obja: T, objb: U): T & U {
    return Object.assign({},obja, objb);
}
const mergeobj = merge({ad: "hasan"},{age:21});
console.log(mergeobj);
*/
//working with constrains 
function merge<T extends object, U extends object>(obja: T, objb: U): T & U {
    return Object.assign(obja, objb);
}
const mergeobj = merge({ad:"hasan",hobbies :["sports"]},{age :30});
console.log(mergeobj);
// another generic function
interface lenhty {
    length: number;
}

function countanddescribe<t extends lenhty>(element:t):[t,string] {
    let descriptionText= "no value .";
    if(element.length===1){
        descriptionText = "got 1 element."
    }
    else if (element.length>1){
        descriptionText = "got " + element.length + "elements." ;
      }
    return [element, descriptionText];
    
}
console.log(countanddescribe(["sports ","football"]));

//keyof constrains

function extractandconvert<y extends object,p extends keyof y>(obj:y,key:p){
    return "value:" + obj[key];

}
extractandconvert({name:'hasann'},"name");
//generic classes

class storage<H extends string | number | boolean> {
    private data: H[] =[];


additem(item :H){
    this.data.push(item);
}
removeitem(item:H){
    if(this.data.indexOf(item) === -1){
        return;
    }
    this.data.splice(this.data.indexOf(item), 1);// -1
}
getitems(){
    return[...this.data];
}
}
const textstorage = new storage<string>();
textstorage.additem("hasan");
textstorage.additem("bekir");
textstorage.additem("colak");
console.log(textstorage.getitems());
/*
it doesnt remove the right item when its an object
const objstorage = new storage<object>();
objstorage.additem({name:"haso"});
objstorage.additem({name:"hason"});
objstorage.removeitem({name:"haso"});
console.log(objstorage.getitems());
*/
//generic utility types

interface coursegoal {
    title : string;
    description : string;
    completeuntil:Date;
}
//generic partial types
function createcoursegoal(
    title:string,description:string,date:Date): coursegoal{
       let coursegoal:Partial<coursegoal> ={};
       coursegoal.title = title;
       coursegoal.description = description;
       coursegoal.completeuntil = date;
       return coursegoal as coursegoal;

}
//readonly utility type 

const adlar: Readonly<string[]> =["hasan ","colakkk"];
//adlar.push("bekir");
//adlar.pop();

//DECORATORS decorators at the end its just a function

/* function logger(constructor: Function){
    console.log('logging...');
    console.log(constructor);
}
@logger
class persons{
    name = "hasann";
    constructor(){
        console.log('creating person object..');
    } 
}
const pers = new persons();
console.log(pers);
//decarator factory 
*/
function logger(logstring: string){
    console.log("logger factory")
    return function(constructor: Function){
    console.log(logstring);
    console.log(constructor);
    };
}
//returning and changing a class in a class decorator 
function withtemplate(template: string,hookid:string){
    console.log("template factory")
    return function<f extends {new(...args: any[]): {name:string}} >(originalconstructor: f){
        /*const hookel = document.getElementById(hookid);
        const p = new originalconstructor();
        if(hookel){
            hookel.innerHTML = template;
            hookel.querySelector('h1')!.textContent = p.name;
        }
            */
        return class extends originalconstructor { 
            constructor(...args: any[]) {
                super();
                const hookel = document.getElementById(hookid);
                //const p = new originalconstructor();
        if(hookel){
            hookel.innerHTML = template;
            hookel.querySelector('h1')!.textContent = this.name;
        }
                
            }

        }
    }
}

//adding multiple decorations 
@logger("LOGGING- PERSON")
@withtemplate("<h1>My Person Object </h1>","app")
class persons{
    name = "hasann";
    constructor(){
        console.log('creating person object..');
    } 
}
const pers = new persons();
console.log(pers);
//property decorators 

function log(target: any,propertyname:string | Symbol){
    console.log('property decorator!');
    console.log(target,propertyname);

}
function log2(target: any ,name:string , description:PropertyDescriptor){
    console.log('accesor decorator ');
    console.log(target);
    console.log(name);
    console.log(description);
}
function log3(target: any ,name:string |symbol, description:PropertyDescriptor){
    console.log('method decorator ');
    console.log(target);
    console.log(name);
    console.log(description);
}
function log4(target:any,name:string | symbol,position: number){
    console.log('paramater decorator ');
    console.log(target);
    console.log(name);
    console.log(position);
}
//decarators execute when the class is defined !!!
class product {
    @log


    title :string;
    private _price:number;

    @log2

    @log3
    set price(val:number){
        if(val>0){
            this._price=val;
        }
        else{
            throw new Error('invalid price should be positive');
        }
            
        
    }
    constructor(t:string, p:number){
        this.title = t;
        this._price = p;
    }
    getpricewithtax(@log4 tax : number){
        
        return this._price
    }
}

const p1 = new product('book',20);
const p2 = new product('book2 ', 28);

function autobind(_: any,_2:string ,descriptor:PropertyDescriptor){
    const originalmethod = descriptor.value;
    const adjdescriptor:PropertyDescriptor = {
        configurable:true,
        enumerable:false,
        get(){
            const boundfn = originalmethod.bind(this);
            return boundfn;
        }
    };
    return adjdescriptor;
}
class printer{
    message = 'this works'
    @autobind
    showMessage(){
        
        console.log(this.message);
    }
}
const p= new printer();
const button = document.querySelector("button")!;
button.addEventListener('click',p.showMessage);





