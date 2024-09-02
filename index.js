// // while loop
// let i = 0;
// while(i<=10){
//     console.log(i);
//     i++
// }

// for loop
// let i = 0;
// for(i=0; i<=10;i++){
//     console.log(i);
// }

// for each
// let i = 2;
// for(i;i<=20;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }
// let i = 0;
// let donkey = ["amit", "shah", "niles"];
// for(i;i<=donkey.length;i++){
//     console.log(donkey[i]);
// }
// // function without argument and without return type
// function add(){
//     let a = 23;
//     let b = 34;
//     let return = a + b;
//     console.log(return);
// }
// // function with argument and without return type
// function add (x,y){
//     let result = x + y;
//     console.log(result);
// }
// add(10,20);
// // function without argument and with return type
// function add(){
//     let a = 1; 
//     let b = 2; 
//     let c = 3;
//      let result = a + b + c;
//      return result
// }
// console.log(add());
//find odd even by using function
//date display
// let date = new Date();
// console.log(date.getTime());
// //form validation

function validationForm(){
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let confirmPassword = document.getElementById("confirmPassword").value
    if(name.length<3){
        alert("name should be more than 3")
    }
    else{
        alert("try again");
    }

    //for email
    if(email.indexOf('@') == -1){
        alert("invalid email")
    }
    else{
        alert("valid email")
    }
    //for password
    if(address.length<8){
        alert("password should be more than 8")
        }
        else{
            alert("password is valid")
        }
}
