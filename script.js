var hora = new Date().getHours()

if (hora >= 0 && hora <=12) {
   console.log("Bom dia!") 
   hora = hora +1
}

if (hora >=12 && hora <18) {
    console.log("Boa tarde!")
    hora = hora +1
}
if (hora >=18) {
    console.log("Boa noite!")
    hora = hora +1
}
