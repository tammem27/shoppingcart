var btnsAddTag = document.getElementsByClassName("add")
var checkTags = document.getElementsByClassName("check")
var btnRemoveTag = document.getElementsByClassName("remove")
var btnDeleteTag = document.getElementsByClassName("delete")
var btnHeartTag = document.getElementsByClassName("like")
console.log(btnRemoveTag)

for(var i=0;i<btnsAddTag.length; i++){
btnsAddTag[i].addEventListener("click",add)
btnRemoveTag[i].addEventListener("click",subtract)
checkTags[i].addEventListener("click",total)
btnDeleteTag[i].addEventListener("click",erase)
btnHeartTag[i].addEventListener("click",heart)
}
function add(event){
    var btnAddTag = event.target
    var tdElt = btnAddTag.parentElement
    var inputTag = tdElt.querySelector(".quantity")
    var quantity = Number(inputTag.value)
    quantity++
    inputTag.value= quantity
    var unitprice =Number(btnAddTag.parentElement.parentElement.querySelector(".unitprice").innerHTML)
    var tr = btnAddTag.parentElement.parentElement

    var priceTag = tr.querySelector(".price")
    console.log(priceTag)
    var price = Number(priceTag.innerHTML)
     price = quantity*unitprice
     priceTag.innerHTML=price
}
function total(event){
    var checkTag =event.target
    var totalTag = document.getElementById("total")
    var total = Number(document.getElementById("total").innerHTML)
    var trElt = checkTag.parentElement.parentElement
    var priceTag = trElt.querySelector(".price")
    var price = Number(priceTag.innerHTML)
    var btnAddTag = checkTag.parentElement.parentElement.querySelector(".add")
    var btnRemoveTag = checkTag.parentElement.parentElement.querySelector(".remove")
    if(checkTag.checked === true){
        total = total +price
        btnAddTag.setAttribute("disabled",true)
        btnRemoveTag.setAttribute("disabled",true)
      }
      else {total = total-price}
    totalTag.innerHTML = total
    btnAddTag.removeAttribute("disabled",false)
    btnRemoveTag.removeAttribute("disabled",false)
}
function subtract(event){
    var btnRemoveTag = event.target
    var tdElt = btnRemoveTag.parentElement
   
    var inputTag =tdElt.querySelector(".quantity")
    var quantity=Number(inputTag.value)
    if(quantity>0){quantity--}
    inputTag.value=quantity
var unitPriceElt=Number(btnRemoveTag.parentElement.parentElement.querySelector(".unitprice").innerHTML)


var price=unitPriceElt*quantity
var priceTag= (btnRemoveTag.parentElement.parentElement.querySelector(".price"))
priceTag.innerHTML=price

}
function erase (event){
    var btnDeleteTag = event.target
    var rowtab = event.target.parentElement.parentElement
    rowtab.remove()
}
function heart (event){
    var btnHeartTag = event.target
    btnHeartTag.style.color ="red"
}