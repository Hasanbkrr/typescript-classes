
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