function screch(){
     const input = document.querySelector(".input-screch")
     const button = document.querySelector(".button-screch")  
     const p = document.querySelector(".text-info")  
     button.addEventListener("click", (event) =>{
        event.preventDefault()
        if(input.value == ""){
            p.innerText = "Seu input está vazio"
        }else{
            p.innerHTML = ""
            requisicao(input.value)
        }  
    })
}
async function requisicao(screch){
    let recentes = []
    let p = document.querySelector(".text-info")
    try{
        const result = await fetch(`https://api.github.com/users/${screch}`)
        const repos = await fetch (`https://api.github.com/users/${screch}/repos`)
        if(result.status == 404){
          return p.innerText = "usuario não encontrado" 
        }
        const arquivos = await repos.json()
        const data = await result.json()
        const usuarios = JSON.parse(localStorage.getItem("recentes"))|| []
        if(usuarios !== null && usuarios !== []){
            console.log(usuarios)
            recentes.push(usuarios[usuarios.length-1])
            recentes.push(usuarios[usuarios.length-2])
        }
        
        localStorage.setItem("repos",JSON.stringify(arquivos))
        localStorage.setItem("users",JSON.stringify(data))
        recentes.push(data)
        
        localStorage.setItem("recentes",JSON.stringify(recentes)) 
        setTimeout(window.location.assign("http://127.0.0.1:5500/M2-S4-14-gitSearchBase/pages/profile/index.html"
        ,"/pages/profile/index.html"),1000)
    }catch(err){
        p.innerText = "não encontrado"
    }
    verificar()
}
screch()