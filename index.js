const inputs = document.querySelectorAll(
  'input[type="text"], input[type="password"]'
);
const progressBar = document.getElementById("progress-bar");
let pseudo, email, password, confirmPass;

// fonction qui renvoie un message d'erreur
const errorDisplay = (tag, message, valid) => {
  const container = document.querySelector("." + tag + "-container");
  const span = document.querySelector("." + tag + "-container > span");

  if (!valid) {
    container.classList.add("error");
    span.textContent = message;
  } else {
    container.classList.remove("error");
    span.textContent = message;
  }
};

// 03. Nouvelle Fonction qui test les régle pour l'input PSEUDO
const pseudoChecker = (value) => {
  if (value.length > 0 && (value.length < 3 || value.length > 20)) {
    errorDisplay("pseudo", "Le pseudo doit faire entre 3 et 20 caractères");
    pseudo = null;
  } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
    errorDisplay(
      "pseudo",
      "Le pseudo ne doit pas contenir de caractères spéciaux."
    );
    pseudo = null;
  } else {
    errorDisplay("pseudo", "", true);
    pseudo = value;
  }
};

// 0.2 Fonction de régle à check pour l'input PSEUDO
// const pseudoChecker = (value) => {
//   const pseudoContainer = document.querySelector(".pseudo-container");
//   const errorDisplay = document.querySelector(".pseudo-container > span");

//   if (value.length > 0 && (value.length < 3 || value.length > 20)) {
//     pseudoContainer.classList.add("error");
//     errorDisplay.textContent = "Le pseudo doit faire entre 3 et 20 caractères";
//   } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
//     pseudoContainer.classList.add("error");
//     errorDisplay.textContent =
//       "Le pseudo ne doit pas contenir de caractères spéciaux.";
//   } else {
//     pseudoContainer.classList.remove("error");
//     errorDisplay.textContent = "";
//   }
// };

// 01. Fonction de régle à check pour l'input PSEUDO
// const pseudoChecker = (value) => {
//   console.log(value);
// };

// Fonction de régle à check pour l'input EMAIL
const emailChecker = (value) => {
  if (!value.match(/^[\w._-]+@[\w-]+\.[a-z]{2,4}$/i)) {
    errorDisplay("email", "Le mail n'est pas valide");
    email = null;
  } else {
    errorDisplay("email", "", true);
    email = value;
  }
};

// Fonction de régle à check pour l'input PASSWORD
// !!! Penser à ajouté une condition pour les classelist si on réduit le nombre de caractère. !!!
const passwordChecker = (value) => {
  progressBar.classList = "";

  if (
    !value.match(
      /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/
    )
  ) {
    errorDisplay(
      "password",
      "Un minimum de 8 caractère, une majuscule, un chiffre et un caractère spécial"
    );
    progressBar.classList.add("progressRed");
    password = null;
  } else if (value.length < 12) {
    errorDisplay("password", "", "true");
    progressBar.classList.add("progressBlue");
    password = value;
  } else {
    errorDisplay("password", "", "true");
    progressBar.classList.add("progressGreen");
    password = value;
  }
  if (confirmPass) confirmChecker(confirmPass);
};

// Fonction de régle à check pour l'input COMFIRMPASSWORD
const confirmChecker = (value) => {
  if (value !== password) {
    errorDisplay("confirm", "Les mots de passes ne corespondent pas!");
    confirmPass = false;
  } else {
    errorDisplay("confirm", "", true);
    confirmPass = true;
  }
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
        passwordChecker(e.target.value);
        break;
      case "confirm":
        confirmChecker(e.target.value);
        break;
      default:
        null;
    }
  });
});
