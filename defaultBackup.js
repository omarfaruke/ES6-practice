//num2 = ... hosse ES 6 er ......
function add (num1 , num2=20) {
    if (num2 == undefined){
        num2= 0; 
    }
    return num1 + num2 ; 

}
 const total = add (10, 10 )
 console.log ( total)  