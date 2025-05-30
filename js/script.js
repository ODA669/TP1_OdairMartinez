const form = document.getElementById("formulaire");
const nom = document.getElementById("nom");
const prenom = document.getElementById("prenom");
const email = document.getElementById("email");
const message = document.getElementById("message");

const isValidEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.toLowerCase());
};

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".errorMessage");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".errorMessage");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const validateForm = () => {
  let noError = true;

  const nomValue = nom.value.trim();
  const prenomValue = prenom.value.trim();
  const emailValue = email.value.trim();
  const messageValue = message.value.trim();

  if (nomValue === "") {
    noError = false;
    setError(nom, "Le nom est requis");
  } else {
    setSuccess(nom);
  }

  if (prenomValue === "") {
    noError = false;
    setError(prenom, "Le prénom est requis");
  } else {
    setSuccess(prenom);
  }

  if (emailValue === "") {
    noError = false;
    setError(email, "L'email est requis");
  } else if (!isValidEmail(emailValue)) {
    noError = false;
    setError(email, "Entrez un email valide !");
  } else {
    setSuccess(email);
  }

  if (messageValue === "") {
    noError = false;
    setError(message, "Le message est requis");
  } else {
    setSuccess(message);
  }

  return noError;
};

form.addEventListener("submit", (e) => {
  if (!validateForm()) {
    e.preventDefault(); // Previene el envío si hay errores
  }
});
