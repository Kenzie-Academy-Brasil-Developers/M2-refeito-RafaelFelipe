/* Desenvolva sua lógica aqui...*/
async function recentes2(arr){
    const div = await document.querySelector(".div-recentes")
    div.innerHTML = ""
    arr.forEach((e,i) => {
        if(i <= 3){
            div.insertAdjacentHTML("beforeend",`
            <div class="acesso2">
                <img class="img-user2" src="${e.avatar_url}" alt="imagem de um usuario">
                <p class="acesso">Acessar este perfil</p>
            </div>
            `)
           
        }         
    });
    acessoPorcard()
}
function verificar(){
    let r = JSON.parse(localStorage.getItem("recentes"))|| []
    if(r.length <= 3){
        recentes2(r)
        
    }       
}
function filtrandoNull(){
    
    const recentes = JSON.parse(localStorage.getItem("recentes")) || []

    const filtrados = recentes.filter((element,i) => element !== null)

    localStorage.setItem("recentes",JSON.stringify(filtrados))
}
let recentes = JSON.parse(localStorage.getItem("recentes"))

async function acessoPorcard(){
    
    const img = document.querySelectorAll(".img-user2")
    const newArr = []
    const button = document.querySelector(".button-screch")

    await img.forEach((element,i) => {
        
        
        element.addEventListener("click",(event) =>{  
            event.preventDefault()
            button.innerHTML = ""
            button.insertAdjacentHTML("afterbegin",`
            <img class="reload" src="../assets/img/reload.png" alt="espera">
            `)
            newArr.push(recentes[i])
            JSON.stringify(localStorage.setItem("users",JSON.stringify(newArr[0])))
            text = 
            chamada(newArr[0].login)
            
        })
    })
    
    
}
async function chamada(text){
        const repos = await fetch (`https://api.github.com/users/${text}/repos`)
        console.log(text)
        const arquivos = await repos.json()
        const refinado = await JSON.stringify(arquivos)        
        localStorage.setItem("repos", refinado)
        setTimeout(window.location.assign("https://kenzie-academy-brasil-developers.github.io/M2-refeito-RafaelFelipe/pages/profile/index.html"
        ,"/pages/profile/index.html"),1000)

        
}
verificar()

