document.getElementById('login-btn').addEventListener('click',function(){
    const passwordFild = document.getElementById('password-fild');
    const password =passwordFild.value;
    const emailfild = document.getElementById('email-fild');
    const email = emailfild.value;

    passwordFild.value = '';
    emailfild.value = '';
    loginBtn(email,password)

    if(email.endsWith('@gmail.com') && password.length === 6){
        // window.location.href = 'bank.html';
    }else{
        alert('Hi user, Please Use a valid email and correct password')
    }
    
    // window.open('bank.html');
})
const signUp =()=>{
    const nameField =document.getElementById('name-field');
    const emailField =document.getElementById('email-field-create');
    const passwordField =document.getElementById('password-fild-create');
    const name =nameField.value
    const email = emailField.value;
    const password = passwordField.value;
    nameField.value =''
    emailField.value=''
    passwordField.value=''
    checkData(email,name,password)
    // console.log(name);
}

const loginBtn =(email,password)=>{
    const myDataString =localStorage.getItem(email)
    const myData = JSON.parse(myDataString)
    if(email === myData.email && password === myData.password){
        window.location.href = 'bank.html';
    }else{
        alert('Please,,Use valide Email and correct password')
    }
    


}

const checkData=(email,name,password)=>{
    let data ={};
    data['email']=email;
    data['name']=name;
    data['password']=password;
    const checkEmail =localStorage.getItem(email)
    if(checkEmail){
        alert('You have already an acount using this email')
        // data = JSON.parse(checkEmail);
    }else{
        localStorage.setItem(email,JSON.stringify(data))
    }
    return data;
    // console.log(email);
}

const createData=()=>{

}