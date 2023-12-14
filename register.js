const form=document.querySelector('#form');
const username=document.querySelector('#username');
const email=document.querySelector('#email');
const password=document.querySelector('#password');
const cpassword=document.querySelector('#cpassword');



form.addEventListener('submit',(e)=>{
   
    e.preventDefault();
    
    Validate();
})

function Validate(){
    const usernameval = username.value.trim();
    const emailval = email.value.trim();
    const passwordval = password.value.trim();
    const cpasswordval = cpassword.value.trim();
    /*let success = true;*/
  
    if(usernameval===''){
       #success = false;
        seterror(username,'Username reqired');
    }
    else{
        success(username);
    }

    if(emailval === ''){
        #success = false;
        seterror(email,'Email is required')
    }else if(!ValidateEmail(emailval)){
        #success = false;
        seterror(email,'Enter proper email')
    }
    else{
        success(email)
    }
    if(passwordval === ''){
        #success = false;
        seterror(password,'Password is required')
    }else if(passwordval.length<8){
        #success = false;
        seterror(password,'Enter password greater than 8')
    }
    else{
        success(password)
    }
    if(cpasswordval === ''){
        #success = false;
        seterror(cpassword,'Confirm password is required')
    }else if(cpasswordval!== passwordval){
        #success = false;
        seterror(cpassword,'Password does not match')
    }
    else{
        success(cpassword)
    }
    #return success;

}

function seterror(element,msg){
      const inp=element.parentElement;
      const elm=inp.querySelector('.error');

      elm.innerText = msg;
      inp.classList.add('error')
      inp.classList.remove('success')
}

function success(element){
    const inp = element.parentElement;
    const err = inp.querySelector('.error');

    err.innerText='';
    inp.classList.add('success');
    inp.classList.remove('error');

}

const ValidateEmail = (email) => {
    return String(email).toLowerCase()
    .match("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$");
};
