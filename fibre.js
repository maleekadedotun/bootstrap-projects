function submiter(){
  var name =document.getElementById('exampleInputName').value;
  var name2 =document.getElementById('nameHelp');
  var  ans ='Name must not be in number';

  var email =document.getElementById('exampleInputEmail').value;
  var email2 =document.getElementById('email');
    //password
  var password =document.getElementById('exampleInputPassword').value;
  var password1 =document.getElementById('Password');

  if(name==''){
    name2.innerHTML ='Name must not be empty';
    return false;
  }

  if(!isNaN(name)){
      name2.innerHTML = ans;
  }
 if(email ==''){
    email2.innerHTML ='email should be fill';
    return false;
 }
 if(password ==''){
  password1.innerHTML='fill the empty space';
  return false;
 } 

}