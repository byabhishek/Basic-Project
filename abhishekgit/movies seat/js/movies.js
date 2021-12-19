
function updateSeat(th) {
  th.classList.contains("selected")
    ? th.classList.remove("selected")
    : th.classList.add("selected");
  x = document.getElementById("movie").selectedIndex;
  price = document.getElementsByTagName("option")[x].value;
  var selectedClass =
    document.getElementsByClassName("selected").length - 1;
  document.getElementById("total").innerHTML = price * selectedClass;
  document.getElementById("count").innerHTML = selectedClass;
}
x = document.getElementById("movie").selectedIndex;
document.getElementsByTagName("option")[x].value;