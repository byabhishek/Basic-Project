var amount = document.getElementById("amount");
var text = document.getElementById("text");
var balance = document.getElementById("yourbalance");
var incomevalue = document.getElementById('incomevalue');
var expensevalue = document.getElementById('expensevalue');
// var history=document.getElementById('history');
var valu, exvalu = 0, item, ul;
var invalu, incomevalu = 0;
var yourbl, yourbalancevalue = 0;
function incomexpense() {
  if (amount.value < 0 && text.value !== "") {
    valu = amount.value;
    valu = Number(valu);
    exvalu += valu
    expensevalue.innerHTML = "$" + exvalu * -1 + ".00";
    var ul = document.getElementById("list");
    var item = document.createElement("li");
    item.innerHTML = `<button class="delete-button-expense" onclick="remove( )">x</button> ${text.value} <span>${amount.value}</span> `;
    item.style.borderRight = "8px solid red";
    text.value = null;
    amount.value = null;
  } else if (amount.value > 0 && text.value !== "") {
    invalu = amount.value;
    invalu = Number(invalu)
    incomevalu += invalu;
    incomevalue.innerHTML = "$" + incomevalu + ".00";
    ul = document.getElementById("list");
    var item = document.createElement("li");
    item.innerHTML = `<button class="delete-button-expense" onclick="remove()">x</button> ${text.value} <span>${amount.value}</span> `;
    item.style.borderRight = "8px solid green"
    amount.value = null;
    text.value = null;
  }
  else {
    alert("Please Add a 'Text' and 'Amount' !")
  }
  yourbl = incomevalu + exvalu;
  yourbl = Number(yourbl);
  balance.innerHTML = "$" + yourbl + ".00";
  ul.appendChild(item);
}
ul.appendChild(item);
function remove() {

}

