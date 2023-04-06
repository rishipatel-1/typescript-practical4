const loginForm = document.getElementById("login-form") as HTMLFormElement;
const registerForm = document.getElementById("register-form") as HTMLFormElement;
const loginToggle = document.querySelector(".form-toggle-login") as HTMLAnchorElement;
const registerToggle = document.querySelector(".form-toggle") as HTMLAnchorElement;

interface RegisteredUser {
  name: string;
  email: string;
  password: string;
}

// Show register form
loginToggle.addEventListener("click", (event) => {
  event.preventDefault();
  loginForm.classList.add("active");
  registerForm.classList.remove("active");
});

// Show login form
registerToggle.addEventListener("click", (event) => {
  event.preventDefault();
  loginForm.classList.remove("active");
  registerForm.classList.add("active");
});

// Handle login form submit
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const password = (document.getElementById("password") as HTMLInputElement).value;
  const registeredUsers: RegisteredUser[] = JSON.parse(localStorage.getItem('registeredUsers') || '[]')
   const matchingUser = registeredUsers.find(user => user.email === email && user.password === password);
  if (matchingUser) {
    localStorage.setItem('loggedInUser', matchingUser.name);
    const url = "./public/index.html";
    window.location.href = url;
  } else {
    alert("Invalid email or password");
  }
});


// Handle register form submit
registerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = (document.getElementById("reg-name") as HTMLInputElement).value;
  const email = (document.getElementById("reg-email") as HTMLInputElement).value;
  const password = (document.getElementById("reg-password") as HTMLInputElement).value;
  const registeredUser: RegisteredUser = { name, email, password };
  let registeredUsers: RegisteredUser[] = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
  registeredUsers.push(registeredUser);
  localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
  alert("Registration successful");
  loginForm.classList.add("active");
  registerForm.classList.remove("active");
});


const registeredUsers: RegisteredUser[] = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
if (registeredUsers.length > 0) {
  loginForm.classList.remove("active");
  registerForm.classList.add("active");
}



// import { Invoice } from './classes/Invoice.js';
// import { Payment } from './classes/Payment.js';
// import { ListTemplate } from './classes/ListTemplate.js';
// const form = document.querySelector('.new-item-form');
// const type = document.querySelector('#type');
// const tofrom = document.querySelector('#tofrom');
// const details = document.querySelector('#details');
// const amount = document.querySelector('#amount');
// const ul = document.querySelector('ul');
// const list = new ListTemplate(ul);
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     let values;
//     values = [tofrom.value, details.value, amount.valueAsNumber];
//     let doc;
//     if (type.value === 'invoice') {
//         doc = new Invoice(...values);
//     }
//     else {
//         doc = new Payment(...values);
//     }
//     list.render(doc, type.value, 'end');
// });

// const usernameElement = document.getElementById("username");
// if (usernameElement) {
//   const loggedInUser = localStorage.getItem('loggedInUser');
//   if (loggedInUser) {
//     usernameElement.textContent = loggedInUser;
//   } else {
//     usernameElement.textContent = "Guest";
//   }
// }



// const logoutButton = document.querySelector('#logout-button');


// logoutButton.addEventListener('click', (e) => {
//   e.preventDefault();
 
//   window.location.href = "../index.html";
// });

