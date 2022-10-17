/* Desenvolva sua lógica aqui...*/
async function recentes2(arr){
    const div = await document.querySelector(".div-recentes")
    div.innerHTML = ""
    arr.forEach((e,i) => {
        if(i <= 3){
            div.insertAdjacentHTML("beforeend",`
            <img class="img-user2" src="${e.avatar_url}" alt="imagem de um usuario">
            `)
        }         
    });
}
function verificar(){
    let r = JSON.parse(localStorage.getItem("recentes"))|| []
    if(r.length <= 3){
        recentes2(r)
    }

         
}

verificar()



