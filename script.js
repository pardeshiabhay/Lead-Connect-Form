let capthachecked = false;
function beforesubmit(event){
    if(capthachecked){
    let outputdate = document.querySelectorAll(".outputdate");
    let inputdate = document.querySelectorAll(".inputdate");

    console.log("inputdate.value",value);  //string --> date(en_IN)

    let formatDate = new Date(inputdate.value).toLocaleDateString("en-IN");
    outputdate.value = formatDate;      
    }else{
        alert("Please check the reCAPTCHA box to submit the lead");
        event.preventDefault();

    }
}
function timestamp() { 
var response = document.getElementById("g-recaptcha-response"); 
if (response == null || response.value.trim() == "") 
    {var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);
        elems["ts"] = JSON.stringify(new Date().getTime());document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems);
    }
 } 
setInterval(timestamp, 500);

function capthchasuccess(){
    capthachecked = true;
}

