function screch() {
  const input = document.querySelector(".input-screch");
  const button = document.querySelector(".button-screch");
  const p = document.querySelector(".text-info");
  button.addEventListener("click", (event) => {
    event.preventDefault();
    if (input.value == "") {
      p.innerText = "Seu input está vazio";
    } else {
      p.innerHTML = "";
      requisicao(input.value);
    }
  });
}
async function requisicao(screch) {
  filtrandoNull();
  let recentes = [];
  let p = document.querySelector(".text-info");
  const button = document.querySelector(".button-screch");
  button.innerHTML = "";
  button.insertAdjacentHTML(
    "afterbegin",
    `
        <img class="reload" src="../assets/img/reload.png" alt="espera">
    `
  );
  try {
    const result = await fetch(`https://api.github.com/users/${screch}`);
    const repos = await fetch(`https://api.github.com/users/${screch}/repos`);

    if (result.status == 404) {
      button.innerText = "Ver perfil GitHub";
      return (p.innerText = "usuario não encontrado");
    }
    const arquivos = await repos.json();
    const data = await result.json();

    const usuarios = JSON.parse(localStorage.getItem("recentes")) || [];

    if (usuarios !== null && usuarios !== []) {
      console.log(usuarios);
      recentes.push(usuarios[usuarios.length - 1]);
      recentes.push(usuarios[usuarios.length - 2]);
    }
    recentes.push(data);
    localStorage.setItem("repos", JSON.stringify(arquivos));
    localStorage.setItem("users", JSON.stringify(data));

    localStorage.setItem("recentes", JSON.stringify(recentes));

    setTimeout(
      window.location.assign(
        "/pages/profile/index.html",
        "/pages/profile/index.html"
      ),
      1000
    );
    button.innerText = "Ver perfil github";
  } catch (err) {
    p.innerText = "não encontrado";
  }
  verificar();
}
screch();
