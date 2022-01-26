class Parent {
    constructor(){
        this.fatherName = "jozz"
    }
}




class Child extends Parent {
    constructor(name){
        super ();
        this.name = name 
    }
//      getFullName(){
//           return this.name + " " + this.fatherName;
//   }
}
const baby = new Child ("arnold")
const baby1 = new Child ("jabal")

console.log (baby);
console.log (baby1);