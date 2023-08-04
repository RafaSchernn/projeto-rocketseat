// function toggleMode() {
//   const html = document.documentElement;
//   if (html.classList.contains("light")) {
//     html.classList.remove("light");
//   } else {
//     html.classList.add("light");
//   }
// }

function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");
  const img = document.querySelector("#profile img");
  const profile = document.querySelector("#profile p");
  const list = document.getElementById("Link-nome");
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./Assets/avatar-light.png");
    profile.innerHTML = "@Chiquinho";
    list.innerHTML = "Conhecendo o Chiquinho";
  } else {
    img.setAttribute("src", "./Assets/avatar-dark.png");
    profile.innerHTML = "@Lucinha";
    list.innerHTML = "Conhecendo a Lucinha";
  }
}
