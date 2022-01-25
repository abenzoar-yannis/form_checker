const inputs = document.querySelectorAll(
  'input[type="text"], input[type="password"]'
);

// Fonction de régle à check pour l'input PSEUDO
const pseudoChecker = (value) => {
  const pseudoContainer = document.querySelector(".pseudo-container");
  const errorDisplay = document.querySelector(".pseudo-container > span");

  if (value.length > 0 && (value.length < 3 || value.length > 20)) {
    pseudoContainer.classList.add("error");
    errorDisplay.textContent = "Le pseudo doit faire entre 3 et 20 caractères";
  } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
    pseudoContainer.classList.add("error");
    errorDisplay.textContent =
      "Le pseudo ne doit pas contenir de caractères spéciaux.";
  } else {
    pseudoContainer.classList.remove("error");
    errorDisplay.textContent = "";
  }
};

// Fonction de régle à check pour l'input PSEUDO
// const pseudoChecker = (value) => {
//   console.log(value);
// };

// Fonction de régle à check pour l'input EMAIL
const emailChecker = (value) => {
  console.log(value);
};

// Fonction de régle à check pour l'input PASSWORD
const passwordChecker = (value) => {
  console.log(value);
};

// Fonction de régle à check pour l'input COMFIRMPASSWORD
const confirmChecker = (value) => {
  console.log(value);
};

// Logique qui lance le check des infos entré dans nos input
inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    switch (e.target.id) {
      case "pseudo":
        pseudoChecker(e.target.value);
        break;
      case "email":
        emailChecker(e.target.value);
        break;
      case "password":
        pseudoChecker(e.target.value);
        break;
      case "confirm":
        confirmChecker(e.target.value);
        break;
      default:
        null;
    }
  });
});
