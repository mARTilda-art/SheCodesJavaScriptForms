//challenge 1
function click(event) {
  event.preventDefault();
  alert("Hooray");
}

let button1 = document.querySelector("#special-button");
button1.addEventListener("click", click);

//challenge 2
//When submitting the form, alert the value of the password input
//<form id="password-form">
//  <input type="password" id="password-input" placeholder="Enter your password">
//  <input type="submit" value="Sign up">
//</form>

function showPassword(event) {
  event.preventDefault();
  let passwordInput = document.querySelector("#password-input");
  alert(`Your password is ${passwordInput.value}`);
}

let form1 = document.querySelector("#password-form");
form1.addEventListener("submit", showPassword);

//challenge 3

//<form id="signup-form">
//<input type="email" id="email-input" placeholder="Enter your email" required>
//<input type="username" id="username-input" placeholder="Enter your username" required>
//<input type="submit" value="Sign up">
//</form>

function showEmailUser(event) {
  event.preventDefault();
  let emailInput = document.querySelector("#email-input");
  let userInput = document.querySelector("#username-input");
  alert(`Your email is ${emailInput.value}`);
  alert(`Your username is ${userInput.value}`);
}

let form2 = document.querySelector("#signup-form");
form2.addEventListener("submit", showEmailUser);
