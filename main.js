var chars = new  Array("ض","ص","ث","ق","ف","غ","ع","ه","خ","ح","ج","چ","پ","ش","س","ی","ب","ل","ا","ت","ن","م","ک","گ","ظ","ط","ز","ر","ذ","د","ئ","و","آ","ژ","ي","ة")

var schars = new  Array(" ","ض","ص","ث","ق","ف","غ","ع","ه","خ","ح","ج","چ","پ","ش","س","ی","ب","ل","ا","ت","ن","م","ک","گ","ظ","ط","ز","ر","ذ","د","ئ","و","آ","ژ","ي","ة")


function check_english(event){
    if ( (event.keyCode > 64 &&  event.keyCode < 91) || ( event.keyCode > 96 && event.keyCode < 123))
         return true;
    return false;
}

function birthday(year){
    var form_con = /^[1-4]\d{3}\/((0[1-6]\/((3[0-1])|([1-2][0-9])|(0[1-9])))|((1[0-2]|(0[7-9]))\/(30|([1-2][0-9])|(0[1-9]))))$/;
    if(form_con.test(year)){
        return true;
    }
    return false;
}

function check_persian_name(){
    
    var text = myform.name.value;
    var text2 = text.substr(-1);
    var check = 0;
    for (i=0;i<chars.length;i++){
        if (chars[i] == text2)
            check++;    
    }
    if ( check == 0){
        myform.name.value = text.substring(0 , text.length - 1);
    }
    

}   

function check_persian_lname(){
    var text = myform.lname.value;
    var text2 = text.substr(-1);
    var check = 0;
    for (i=0;i<chars.length;i++){
        if (chars[i] == text2)
            check++;    
    }
    if ( check == 0){
        myform.lname.value = text.substring(0 , text.length - 1);
    }

}   

function check_persian_add(){
    var text = myform.add.value;
    var text2 = text.substr(-1);
    var check = 0;
    for (i=0;i<schars.length;i++){
        if (schars[i] == text2)
            check++;    
    }
    if ( check == 0){
        myform.add.value = text.substring(0 , text.length - 1);
    }

}

function check2(){
     check_persian();

}


function check_form(){


    var gender = document.getElementsByName("gender")[0];
    var selectedGender = gender.options[gender.selectedIndex].value;

    var firstName = document.getElementsByName("name")[0].value;
    var lastName = document.getElementsByName("lname")[0].value;


    var fullname = document.getElementsByName("fullname")[0].value;
    var ssn = document.getElementsByName("ssn")[0].value;
    var mail = document.getElementsByName("mail")[0].value;
    var phone = document.getElementsByName("phone")[0].value;
    var pass = document.getElementsByName("pass")[0].value;
    var pass2 = document.getElementsByName("pass2")[0].value;
    var add = document.getElementsByName("add")[0].value;
    var birth = document.getElementsByName("birth")[0].value;

    var status = document.getElementsByName("status")[0];
    var selectedstatus = status.options[status.selectedIndex].value;

    


    var errorMessage = "";

    if (selectedGender == -1){
        errorMessage += "- لطفا جنسیت را انتخاب کنید <br/>";
    }
    
    if (firstName == ""){
        errorMessage += "- لطفا نام را وارد کنید<br/>"
    }
    else if (firstName.length < 3){        
        errorMessage += " نام باید بیش از 3 کاراکتر باشد <br/>";}
    else if (firstName.length > 50){        
            errorMessage += " نام باید کم تر از 50 کاراکتر باشد <br/>";}


    if (lastName == ""){
        errorMessage += "- لطفا نام خانوادگی را وارد کنید<br/>"
    }
    else if (lastName.length < 3){        
        errorMessage += "  -نام خانوادگی باید بیش از 3 کاراکتر باشد <br/>";}
    else if (lastName.length > 100){        
            errorMessage += " نام باید کم تر از 50 کاراکتر باشد <br/>";}


    if (fullname == ""){
        errorMessage += "- لطفا نام خود را به زبان انگلیسی وارد کنید<br/>";
    }
    else if (fullname.length > 150){        
        errorMessage += "  -نام انگلیسی باید کمتر از 150 کاراکتر باشد <br/>";}

    if (ssn == ""){
        errorMessage += " -  لطفا کدملی را وارد کنید  <br/>";
    }
    else if (!ValidateSSN(ssn)){
        errorMessage +=  " -  لطفا کدملی را دوباره وارد کنید  <br/>";
    
    }

    if(mail == ""){
        errorMessage += "  - لطفا ایمیل را وارد کنید <br/>";
    }
    else if (!Validatemail(mail)){
        errorMessage +=  " -  لطفا ایمیل را دوباره وارد کنید  <br/>";
    
    }

    if(phone == ""){
        errorMessage += "  - لطفا تلفن را وارد کنید <br/>";
    }
    else if (!Validatenumber(phone)){
        errorMessage +=  " -  لطفا تلفن را دوباره وارد کنید  <br/>";
    
    }

    if(pass == ""){
        errorMessage += "  - لطفا پسورد را وارد کنید <br/>";
    }
    else if (!ValidatePass(pass)){
        errorMessage +=  " -  لطفا پسورد را دوباره وارد کنید  <br/>";
    }
    else if (pass.length < 8){        
        errorMessage += "   -  پسورد باید بیش از 8 کاراکتر باشد <br/>";}
    else if (pass.length > 24){        
            errorMessage += "   -  پسورد باید کم تر از 25 کاراکتر باشد <br/>";}

    if(pass != pass2){
        errorMessage += "  - لطفا پسورد ها را مطابق یکدگیر وارد کنید <br/>";
    }

    else if (add.length > 150){        
        errorMessage += " -  آدرس باید کم تر از 150 کاراکتر باشد <br/>";}
    


    if(birth == ""){
            errorMessage += "  - لطفا تاریخ تولد را وارد کنید <br/>";
        }
    else if (!ValidateBirth(birth)){
            errorMessage +=  " -  لطفا تاریخ تولد را دوباره وارد کنید  <br/>";
        }
    



        if(selectedstatus == -1){
            errorMessage += "  - لطفا وضعیت تاهل را وارد کنید <br/>";
        }



        

    function ValidateSSN(event)
{
    var re = /^\d{3}-\d{6}-\d{1}$/;
    if (!re.test(event))
        return false; 
    return true; 
}

function Validatemail(event)
{
    var re =/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if (!re.test(event))
        return false; 
    return true; 
}

function ValidatePass(event)
{
    var re = /^[a-zA-Z0-9-+!#$*=]+$/
    if (!re.test(event))
        return false; 
    return true; 
}

function Validatenumber(event)
{
    var re = /^09\d{9}$/;
    if (!re.test(event))
        return false; 
    return true; 
}

function ValidateBirth(event)
{
    var re = /[1][3]([9][0]|[1-8][0-9])\/(([0][1-6]\/(([3][0-1])|([1-2][0-9])|([0][1-9])))|(([1][0-2]|([0][7-9]))\/([3][0]|([1-2][0-9])|([0][1-9]))))$/
    if (!re.test(event))
        return false; 
    return true; 
}


    
    if (errorMessage != "") {
        document.getElementById("log").innerHTML = errorMessage;
        return false;
    }

    return true;
    



}



