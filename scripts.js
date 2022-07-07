window.addEventListener('DOMContentLoaded', event => {
    const listHoursArray = document.body.querySelectorAll('.list-hours li');
    listHoursArray[new Date().getDay()].classList.add(('today'));
})

function button() {
    alert("Your message was sent!");
}

 function btn() {
    let person = prompt("Please enter your name:");
    if (person == null || person == "") {
      alert("User cancelled the prompt.");
      event.preventDefault();
    } else {
      alert("Welcome Back " + person + "!");
    }
}