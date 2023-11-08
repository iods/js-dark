const loginBtn = document.querySelector('#signInBtn');
loginBtn.addEventListener('click', ()=>{
    document.getElementById('formValue').style.display='block';
});

const loginData = document.querySelector('#loginBtn');
loginData.addEventListener('click',()=>{
    const emailData = document.querySelector("#Email").value;
    const passData = document.querySelector("#pass").value;

    if(emailData===''){
        document.querySelector('#mailed').style.display="block";
    }else{
        document.querySelector('#mailed').style.display="none";
    }

    if(passData===''){
        document.querySelector('#passed').style.display="block";
    }else{
        document.querySelector('#passed').style.display="none";
    }

    if(emailData!='' && passData!=''){
        document.querySelector('#form').style.display="none";
        alert("You logged in Successfully")
    }
})