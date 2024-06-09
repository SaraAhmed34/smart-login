var emailInput=document.getElementById('email');
console.log(emailInput);
var passInput=document.getElementById('pass');


var btn=document.querySelector('.login');
console.log(btn)

var users=[

];



let storedUsers = localStorage.getItem('users');

if (storedUsers != null) {
    try {
        // Parse the JSON string and push the result into `container`
        users=JSON.parse(storedUsers);
    } catch (error) {
        console.error("Error parsing JSON from localStorage:", error);
    }
}

console.log(users)

btn.addEventListener('click',function(){
   if(Exist(emailInput,passInput)){
    console.log('true');
   window.location.href = 'home.html';

   }else{
    console.log('false')
    document.querySelector('.alert-danger').classList.remove('d-none');
   }
})


function Exist(email,pass){
    var flag=true;
    var i=0;
    while(flag && i<users.length){
        if(email.value==users[i].email && pass.value==users[i].passInput ){
            sessionStorage.setItem('user', users[i].name);
            flag=false;
            
        return true;
        }
        i++;
    }

    if(flag){
        return false;
    }
}
