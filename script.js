// Saglabā to checkboxu JS mainīgājā
const toggleTheme = document.getElementById("toggle-theme");
const html = document.getElementById("html");

toggleTheme.addEventListener("change", toggleThemeHandler);

function toggleThemeHandler() {
  if (toggleTheme.checked) {
    html.dataset.theme = "dark";
    localStorage.setItem("theme", "dark");
  } else {
    html.dataset.theme = "light";
    localStorage.setItem("theme", "light");
  }
}

const localStorageTheme = localStorage.getItem("theme");

if (localStorageTheme == "light" || !localStorageTheme) {
  html.dataset.theme = "light";
} else {
  html.dataset.theme = "dark";
  toggleTheme.checked = true;
}

const visaspareizasAtbilde = ["Indonēzija", "Austrālija", "Liepāja"] 
  for (let i = 1; i<=3; i++) {
    const visasAtbildes = document.getElementsByName(i);
  

visasAtbildes.forEach((atbilde) => {
  atbilde.addEventListener("click",() =>
   checkHandler(visaspareizasAtbilde[i-1], visasAtbildes)
  );
});
}

/**
 * Iekrāso atbildes vienā jautājumā
 * @param {string} pareizaAtbilde - Pareizās atbilde ar vārdiem, jasakrīt ar value. 
 * @param {*} visasAtbildes 
 */
function checkHandler(pareizaAtbilde, visasAtbildes) {
  visasAtbildes.forEach((atbilde) => {
    if (atbilde.checked == true) {
      if (atbilde.value == pareizaAtbilde) {
        atbilde.parentNode.style.backgroundColor = "Green";
      } else {
        atbilde.parentNode.style.backgroundColor = "red";
      }
    } else {
      atbilde.parentNode.style.backgroundColor = "var(--secondary-color)";
    }
  });
}
function saskaititDivus(a, b) {
  return a+b;
}
