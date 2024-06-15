// Código para requerimiento 1
document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("clickableImage")) {
    document
      .getElementById("clickableImage")
      .addEventListener("click", function () {
        this.classList.toggle("bordered");
      });
  }
});

// Código para requerimiento 2
function checkStickers() {
  const githubStickers = parseInt(
    document.getElementById("githubStickers").value
  );
  const slackStickers = parseInt(
    document.getElementById("slackStickers").value
  );
  const gitStickers = parseInt(document.getElementById("gitStickers").value);
  const total = githubStickers + slackStickers + gitStickers;

  if (total <= 10) {
    document.getElementById("message").textContent = `Llevas ${total} stickers`;
  } else {
    document.getElementById("message").textContent =
      "Llevas demasiados stickers";
  }
}

// Código para requerimiento 3
function checkPassword() {
  const digit1 = document.getElementById("digit1").value;
  const digit2 = document.getElementById("digit2").value;
  const digit3 = document.getElementById("digit3").value;
  const password = digit1 + digit2 + digit3;

  if (password === "911") {
    document.getElementById("passwordMessage").textContent =
      "password 1 correcto";
  } else if (password === "714") {
    document.getElementById("passwordMessage").textContent =
      "password 2 correcto";
  } else {
    document.getElementById("passwordMessage").textContent =
      "password incorrecto";
  }
}

// Código para el menú hamburguesa
function toggleMenu() {
  const menu = document.getElementById("hiddenMenu");
  menu.classList.toggle("show");
}
