// fill in javascript code here
document.querySelector("form").addEventListener("submit",myfunction)
function myfunction(){
   event.preventDefault()
    // console.log("Hello world")
   let Name = document.querySelector("#name").value
 let Id = document.querySelector("#employeeID").value;
 let Department = document.querySelector("#department").value;
 let Exp = document.querySelector("#exp").value;
 let Email = document.querySelector("#email").value;
 let Number = document.querySelector("#mbl").value;
//  console.log(Name,Id,Department,Exp,Email,Number)

var  tr = document.createElement("tr");
var td1= document.createElement("td")
 td1.innerText=Name
var td2= document.createElement("td")
td2.innerText=Id
var td3= document.createElement("td")
td3.innerText=Department
var td4= document.createElement("td")
td4.innerText=Exp
var td5= document.createElement("td")
td5.innerText=Email
var td6= document.createElement("td")
td6.innerText=Number
var td7= document.createElement("td")
if(Exp>5)
{
    td7.innerText="Senior"
}
else if(Exp == 2 || Exp == 3 || Exp == 4 || Exp == 5 )
{
    td7.innerText="Junior"
}
else{
    td7.innerText="Fresher"
}
var td8= document.createElement("td")
td8.innerText="DELETE"
td8.style.color="white"
td8.style.background="red"
td8.style.cursor="pointer"
td8.addEventListener("click",Myfun)

tr.append(td1,td2,td3,td4,td5,td6,td7,td8)

 document.querySelector("tbody").append(tr)




 function Myfun(event)
{
    //  console.log("heloo")
   event.target.parentNode.remove()
}
}


 