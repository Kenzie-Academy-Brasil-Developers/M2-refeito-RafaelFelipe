function criaCards(arr){
    const ul = document.querySelector(".lista-ul")
    const ul2 = document.querySelector(".lista-ul-2")

    arr.forEach((element,i) => {
        if(i < arr.length/2){
            ul.insertAdjacentHTML("afterbegin",`
                <li class="lista-li">
                <div class="width-9 height">
                    <div class="div-pp">
                    <h2 class="lista-h2">${arr[i].name}</h2>
                        <p class="lista-p">
                        ${arr[i].description}
                        </p>
                    </div>

                
                <div class="flex">
                    <button id="${i}"class="repos">Repositório</button>
                    <button id="but_${i}" class="demo">Demo</button>
                </div>
                </div>
                
                </li>
            `) 
        }else{
            ul2.insertAdjacentHTML("afterbegin",`
            <li class="lista-li-2">
            <div class="width-9 height">
                <div class="div-pp">
                <h2 class="lista-h2">${arr[i].name}</h2>
                    <p class="lista-p">
                    ${arr[i].description}
                    </p>
                </div>
            <div class="flex">
                <button id="${i}"class="repos">Repositório</button>
                <button id="but_${i}" class="demo">Demo</button>
            </div>
            </div>
            </li>
            `) 
        }
        
        const button = document.getElementById(`but_${i}`)
            button.addEventListener("click",(ev) =>{
                ev.preventDefault()
                window.open(`${element.homepage}`)
            })
            const repos = document.getElementById(`${i}`)
            repos.addEventListener("click",(ev)=>{
                ev.preventDefault()
                window.open(`${element.html_url}`)
            })
        
    });
    if(arr.length % 2 !== 0){
        const div = document.createElement("div")
        div.classList = "suporte"
        ul2.append(div)
    }
    filtrandoNull()
}
let arquivos =JSON.parse(localStorage.getItem("repos"))

function call(){
    if(arquivos !== null || arquivos !== undefined){
        criaCards(arquivos)
    }
}
function filtrandoNull(){
    
    const recentes = JSON.parse(localStorage.getItem("recentes")) || []

    const filtrados = recentes.filter((element,i) => element !== null)

    localStorage.setItem("recentes",JSON.stringify(filtrados))
}
// function eventos(arr){

    

//     arr.forEach((element,i) => {
//         const button_repos = document.getElementById(`${i}`)

//         button_repos.addEventListener("click",(event) =>{
            
//         })
//     })
// }
call()