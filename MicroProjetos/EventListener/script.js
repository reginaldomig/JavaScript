//document.addEventListener("keyup",(e)=>{alert(e.key)},false)

addEventListener("keydown",churros,false)

function churros(e){
    //mostra a tecla
    alert(`A tecla pressionado foi "${e.key}"`)

    //mostra o código da tecla
    alert(`O Código da tecla pressionada foi "${e.keyCode}"`)
}