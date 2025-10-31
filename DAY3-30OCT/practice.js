// const [f,s,...rest]=[1,2,3,4,5];
// console.log(f);
// console.log(s);
// console.log(rest);

var age=234;

function Person(){
    //this.age=24;
    setTimeout(()=>{
        console.log(this.age);
    })
}
var p=new Person();