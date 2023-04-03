var hora = new Date().getHours()

// das 0 às 11:59       = Bom dia
// das 12 às 17:59      = Boa tarde
// das 18 às 23:59      = Boa noite

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
