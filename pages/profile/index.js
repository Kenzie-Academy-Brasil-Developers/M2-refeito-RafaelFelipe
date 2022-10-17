/* Desenvolva sua lógica aqui...*/
function criarHeaderUsers(arr){
    const div = document.querySelector(".div-conteiner")

    div.insertAdjacentHTML("afterbegin", `
    <div class="flex">
        <img class="img-user" src="${arr.avatar_url}" alt="">
        <div class= "div-text">
            <h2 class="subTitle2-h2">${arr.login}</h2>
            <small class="small-page-principal-2">${arr.bio}</small>
        </div>
    </div>
    <div class="div_but flex">
        <button class="button-header-page2">Email</button>
        <button class="button-trocar-header-page2">Trocar de usuário</button>
    </div>`)
}
let object = JSON.parse(localStorage.getItem("users"))
let repos = JSON.parse(localStorage.getItem("repos"))
criarHeaderUsers(object)