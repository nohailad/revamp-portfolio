// function myFunction() {
//   var x = document.getElementById("myHeaderLinks");
//   if (x.className === "header-links-container") {
//     x.className += " responsive";
//   } else {
//     x.className = "header-links-container";
//   }
// }

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (!x.classList.contains("hidden")) {
    x.className = "hidden";
  } else {
    x.className = "shown";
  }
}
