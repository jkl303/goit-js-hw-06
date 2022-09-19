const form = document.querySelector(".login-form");
const onSubmit = event => {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
  }
  else {
  console.log({email: email.value, password: password.value});
  event.currentTarget.reset();
    }
}
form.addEventListener("submit", onSubmit);