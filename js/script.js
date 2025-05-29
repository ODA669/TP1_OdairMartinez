const form = document.getElementById("form");
const nom = document.getElementById("nom");
const prenom = document.getElementById("prenom");
const email = document.getElementById("email");
const message = document.getElementById("message");
const errorMessage = document.getElementById("error-message");

const validateForm = () => {
  let noError = true;
  const nomValue = nom.value.trim();
  const prenomValue = prenom.value.trim();
  const emailValue = email.value.trim();
  const messageValue = message.value.trim();
  const isValidEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email).toLowerCase();
  };

  const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = message;
    inputControl.classList.add("error");
    inputControl.classList.remove("success");
  };

  const setSucces = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".errorMessage");

    errorDisplay.innerText = "";
    inputControl.classList.add("success");
    inputControl.classList.remove("error");
  };

  console.log(noError);
  console.log(nomValue);
  console.log(prenomValue);
  console.log(emailValue);
  console.log(messageValue);

  if (nomValue === "") {
    noError = false;
    setError(nomValue, "le nom est required");
  } else {
    seSucces("nomValue");
  }
  if (prenomValue === "") {
    noError = false;
    setError(prenom, "le prenom est required");
  } else {
    seSucces("prenomValue");
  }
  if (emailValue === "") {
    noError = false;
    setError(email, "l'email est required");
  } else if (!isValidEmail(emailValue)) {
    noError = false;
    setError(email, " Entrez un mail valide!!");
  } else {
    setSucces(email);
  }

  if (messageValue === "") {
    noError = false;
    setError(message, "le message est required");
  } else {
    seSucces("messageValue");
  }
};
