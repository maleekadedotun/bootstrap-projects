function sub(){
    //firsname
    var name =document.getElementById('uname').value;
    var name1 =document.getElementById('first');

    //lastname 
    var Lname =document.getElementById('Lname').value
    var last =document.getElementById('last');

    //middlename
    var mider =document.getElementById('mider').value;
    var mid =document.getElementById('mid'); 

    //address
    var add =document.getElementById('add').value;
    var add1 =document.getElementById('add1');

    if(name ==''){
    name1.innerHTML ='input is blank';
    return false;
    }

   if(Lname ==''){
   last.innerHTML ='fill the blank space'
    return false;
   }
    if(mider ==''){
    mid.innerHTML ='fill the  input';
    }
    if(add ==''){
        add1.innerHTML ='fill in the gap';
    }

}