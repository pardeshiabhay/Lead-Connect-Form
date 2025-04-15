function beforesubmit(){
    let outputdate = document.querySelectorAll(".outputdate");
    let inputdate = document.querySelectorAll(".inputdate");

    console.log("inputdate.value",value);  //string --> date(en_IN)

    let formatDate = new Date(inputdate.value).toLocaleDateString("en-IN");
    outputdate.value = formatDate;
 
}