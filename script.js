let passwordInput = document.querySelector(
  '#passwordInput input[type="password"]'
);
let passwordStrength = document.getElementById("passwordStrength");
let poor = document.querySelector("#passwordStrength #ruim");
let weak = document.querySelector("#passwordStrength #fraca");
let strong = document.querySelector("#passwordStrength #forte");
let passwordInfo = document.getElementById("passwordInfo");

let poorRegExp = /[a-z]/;
let weakRegExp = /(?=.*?[0-9])/;
let strongRegExp = /(?=.*?[#?!@$%^&*-])/;
let whitespaceRegExp = /^$|\s+/;

passwordInput.oninput = function () {
  let passwordValue = passwordInput.value;
  let passwordLength = passwordValue.length;

  let poorPassword = passwordValue.match(poorRegExp);
  let weakPassword = passwordValue.match(weakRegExp);
  let strongPassword = passwordValue.match(strongRegExp);
  let whitespace = passwordValue.match(whitespaceRegExp);

  if (passwordValue != "") {
    passwordStrength.style.display = "block";
    passwordStrength.style.display = "flex";
    passwordInfo.style.display = "block";
    passwordInfo.style.color = "black";

    if (whitespace) {
      passwordInfo.textContent = "Whitespaces are not allowed";
    } else {
      poorPasswordStrength(
        passwordLength,
        poorPassword,
        weakPassword,
        strongPassword
      );
      weakPasswordStrength(
        passwordLength,
        poorPassword,
        weakPassword,
        strongPassword
      );
      strongPasswordStrength(
        passwordLength,
        poorPassword,
        weakPassword,
        strongPassword
      );
    }
  } else {
    passwordStrength.style.display = "none";
    passwordInfo.style.display = "none";
  }
};

function poorPasswordStrength(
  passwordLength,
  poorPassword,
  weakPassword,
  strongPassword
) {
  if (passwordLength <= 3 && (poorPassword || weakPassword || strongPassword)) {
    poor.classList.add("active");
    passwordInfo.style.display = "block";
    passwordInfo.style.color = "red";
    passwordInfo.textContent = "Sua senha é ruim";
  }
}

function weakPasswordStrength(
  passwordLength,
  poorPassword,
  weakPassword,
  strongPassword
) {
  if (passwordLength >= 4 && poorPassword && (weakPassword || strongPassword)) {
    weak.classList.add("active");
    passwordInfo.textContent = "Sua senha é fraca";
    passwordInfo.style.color = "orange";
  } else {
    weak.classList.remove("active");
  }
}

function strongPasswordStrength(
  passwordLength,
  poorPassword,
  weakPassword,
  strongPassword
) {
  if (passwordLength >= 6 && poorPassword && weakPassword && strongPassword) {
    poor.classList.add("active");
    weak.classList.add("active");
    strong.classList.add("active");
    passwordInfo.textContent = "Sua senha é forte";
    passwordInfo.style.color = "green";
  } else {
    strong.classList.remove("active");
  }
}

let showHide = document.querySelector("#passwordInput #showHide");

showHide.onclick = function () {
  showHidePassword();
};

function showHidePassword() {
  if (passwordInput.type == "password") {
    passwordInput.type = "text";
    showHide.textContent = "ESCONDER";
    showHide.style.color = "green";
  } else {
    passwordInput.type = "password";
    showHide.textContent = "MOSTRAR";
    showHide.style.color = "red";
  }
}
