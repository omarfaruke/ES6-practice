const student = [
    {id:21, name:"omar sanny"},
    {id:20, name:"akbar ali "},
    {id:10, name:"falusha "},
    {id:50, name:"lobo"}
];
const names = student.map ( s => s.id);
const id = student.map ( s => s.name);
const bigger = student.filter(s => s.id >10)
const biggerOne = student.find(s => s.id >40)
console.log(biggerOne )
// const sid = [];
//  for (let i = 0; i < student.length; i ++){
//      const sName = student[i];
//      const names = sName.id;
//      sid.push(names);
//  }
//  console.log (sid);