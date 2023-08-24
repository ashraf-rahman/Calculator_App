 function display(number){
  document.getElementById("result").value+=number
 }
 function calculate() {
 var result=document.getElementById("result").value
 var x=eval(result)
 document.getElementById("result").value = x
 }
 function ac(){
    var result=document.getElementById("result").value =""
  
 }