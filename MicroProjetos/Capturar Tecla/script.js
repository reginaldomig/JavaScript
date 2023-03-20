/*
O comando adiciona um "event listener" (ou ouvinte de eventos) ao 
objeto "window" do navegador, que detecta quando o usuário pressiona
uma tecla do teclado. Quando isso acontece, a função "KeydownHandler" é chamada.

O parâmetro "false" indica que o evento será tratado pelo ouvinte no 
modo "bubbling" (ou seja, o evento será tratado primeiro pelo elemento 
    mais interno em que ocorreu e, em seguida, pelos elementos mais externos, 
    até chegar ao objeto "window").

Portanto, esse comando é usado para capturar e lidar com eventos de teclado 
em um documento HTML usando JavaScript.
*/

//Target.AdicionaEventoDeEscuta(evento,função a ser executada, rodar só no contexto)
window.addEventListener("keydown",KeydownHandler,false)

//lista que vai receber as Teclas Criptografadas
let teclasDigitadas = []

//Lista que vai decriptografar
let teclasDecriptografadas = []

//O Parâmtro recebe a tecla que foi pressionada
function KeydownHandler(e){
    
    if(e.keyCode == 13){
        teclasDigitadas.push("ENTER")
    }else{
        if(e.keyCode == 8){
            teclasDigitadas.pop()
        }else{
            teclasDigitadas.push(e.keyCode)
        }

    }

    if(e.keyCode == 13){
        teclasDecriptografadas.push("ENTER")
    
    }else{
        
        if(e.keyCode == 8){
            teclasDecriptografadas.pop()
        }else{

            let codigoAscii = e.keyCode
            teclasDecriptografadas.push(String.fromCharCode(codigoAscii))

                
        }

    }


    


    document.getElementById("decripto").innerText = teclasDecriptografadas


    document.getElementById("resultado").innerText = teclasDigitadas  

    

    //alert(e.keyCode)    
}