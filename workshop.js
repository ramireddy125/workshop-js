let balance=document.getElementsByClassName("balance")
let formT=document.getElementById("transaction")
let description=document.getElementById("description")
let amount=document.getElementById('amount')
let type=documet.getElementById('type')

let addbtn=document.getElementById('add')
addbtn.addEventListener("click",()=>){
    let tr=document.createElement("tr")
    let del=document.createElement("button")
    del.innerText="delete"
    tr.innerHTML=`<td>$(description.value)</td>
                  <td>$(amount.value)</td>
                  <td>$(type.value)</td>`            
}
