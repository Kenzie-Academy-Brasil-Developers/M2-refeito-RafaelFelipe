/* Desenvolva sua lógica aqui...*/
async function criarHeaderUsers(element){
    const div = document.querySelector(".div-conteiner")

    await div.insertAdjacentHTML("afterbegin", `
    <div class="flex">
        <img class="img-user" src="${element.avatar_url}" alt="">
        <div class= "div-text">
            <h2 class="subTitle2-h2">${element.login}</h2>
            <small class="small-page-principal-2">${element.bio}</small>
        </div>
    </div>
    <div class="div_but flex">
        <button class="button-header-page2">Email</button>
        <button class="button-trocar-header-page2">Trocar de usuário</button>
    </div>`)
}
async function filtrandoNull(){
    
    const recentes = JSON.parse(localStorage.getItem("recentes")) || []

    const filtrados = recentes.filter((element,i) => element !== null)

    await localStorage.setItem("recentes",JSON.stringify(filtrados))
}
let object = JSON.parse(localStorage.getItem("users"))
let repos = JSON.parse(localStorage.getItem("repos"))

criarHeaderUsers(object)