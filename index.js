const inputs = document.querySelectorAll(
  'input[type="text"], input[type="password"]'
);

const pseudoChecker = () => {};

const emailChecker = () => {};

const passwordChecker = () => {};

const confirmChecker = () => {};

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    switch (e.target.id) {
      case "pseudo":
        pseudoChecker();
        break;
      case "email":
        emailChecker();
        break;
      case "password":
        pseudoChecker();
        break;
      case "confirm":
        confirmChecker();
        break;
      default:
        null;
    }
  });
});
