let email=document.getElementById('E')
let pass=document.getElementById('P')
let btn=document.getElementById('btn')
//
let email2=document.getElementById('E2')
let pass2=document.getElementById('P2')
let btn2=document.getElementById('btn2') 
// 

let form1=document.querySelector('.contact1')
let form2=document.querySelector('.contact2')
let h1=document.querySelector('h1')



btn.onclick=function(){

    localStorage.setItem("email",email.value)
    localStorage.setItem("pass",pass.value)
    form2.style .zIndex="2";
   
}  
btn2.onclick=function(){
    if(localStorage.getItem("email")==email2.value &&localStorage.getItem("pass")==pass2.value){
       h1.innerHTML="your information are true please wait until loading page"

    }else {
        h1.innerHTML="your information are false please try again"
    }
}
