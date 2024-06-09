var nameInput= document.getElementById('name');
var emailInput=document.getElementById('email');
var passInput=document.getElementById('pass');
var regiBtn=document.querySelector('.input-submit');
console.log(nameInput,passInput,emailInput,regiBtn);

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

regiBtn.addEventListener('click',function(){
    if(validateForm(nameInput)&& validateForm(emailInput)&&validateForm(passInput))
   {
    var user={
        name:nameInput.value,
        email:emailInput.value,
        passInput:passInput.value
    }

    var flag=true;
    var i=0;
    while(flag && i<users.length){
        if(emailInput.value==users[i].email  ){
            
            document.querySelector('.exists').classList.remove('d-none');
            flag=false;
        }
        i++
    }

    if(flag){
        
        users.push(user);
        console.log(users);
        localStorage.setItem('users',JSON.stringify(users));
        clear();
    }









   
   }
    
})

function clear(){
    nameInput.value=null;
    emailInput.value=null;
    passInput.value=null;
}

nameInput.addEventListener('input',function(){
    validateForm(nameInput);
})
emailInput.addEventListener('input',function(){
    validateForm(emailInput);
})
passInput.addEventListener('input',function(){
    validateForm(passInput);
})

function validateForm(inp){
    var regex={
        name:/[a-zA-Z]{2,}/,
        email:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
        pass:/^(?=.*\d)(?=.*[\W_]).{5,}$/g
    }
    console.log(regex[inp.id])
    if(regex[inp.id].test(inp.value)){
        inp.nextElementSibling.classList.add('d-none');
       // console.log('true')
        return true;
    }else{
        console.log('false');
        inp.nextElementSibling.classList.remove('d-none');
        return false;
    }
}