


function somar() {
    var n1 = parseFloat(window.document.getElementById("n1").value)
    var n2 = parseFloat(window.document.getElementById("n2").value)

    var res =n1+n2

    window.document.getElementById("res").innerHTML = res
    
}


function subtrair() {
    var n1 = parseFloat(window.document.getElementById("n1").value)
    var n2 = parseFloat(window.document.getElementById("n2").value)

    var res =n1-n2

    window.document.getElementById("res").innerHTML = res
    
}




function multiplicar() {
    var n1 = parseFloat(window.document.getElementById("n1").value)
    var n2 = parseFloat(window.document.getElementById("n2").value)

    var res =n1*n2

    

    window.document.getElementById("res").innerHTML = res
    
}





function dividir() {
    var n1 = parseFloat(window.document.getElementById("n1").value)
    var n2 = parseFloat(window.document.getElementById("n2").value)

    var res =n1/n2

    window.document.getElementById("res").innerHTML = res
    
}



function comparar() {
    var n1 = parseFloat(window.document.getElementById("n1").value)
    var n2 = parseFloat(window.document.getElementById("n2").value)

    if (n1<n2) {
        alert("n1 é menor do que n2")
    } else {
        alert("n1 não é menor do que n2")
    }

  
    
}