let jatekosPont = 0
let gepPont = 0
let jatekosNev 
let email 
function ellenorzes(){
    jatekosNev = document.getElementById("jatekosNev").value
    email = document.getElementById("email").value
    
    if (!email.includes("@") || !email.includes(".")) {
    alert("Hibás email cím!") 
    }
    else if(jatekosNev.length>20 || jatekosNev.length<8){
        alert("A játékos neve 8-20 karakteres lehet")
    }
    else if (jatekosNev.includes("0") || jatekosNev.includes("1") || jatekosNev.includes("2") || jatekosNev.includes("3") || jatekosNev.includes("4") || jatekosNev.includes("5") || jatekosNev.includes("6") || jatekosNev.includes("7") || jatekosNev.includes("8") || jatekosNev.includes("9")) {
    alert("A név nem tartalmazhat számot!")
}
}
    

function jatek(elem){
    document.getElementById('ko').style.border = "0px solid white"
    document.getElementById('papir').style.border = "0px solid white"
    document.getElementById('ollo').style.border = "0px solid white"

    document.getElementById(elem).style.border = "3px solid red"

    let rnd = Math.floor(Math.random()*3)
    let valasztasok = ["ko","papir","ollo"]
    let gepValasztas = valasztasok[rnd]
    
    const gepValasztasKep = document.getElementById("gepValasztasKep")
    gepValasztasKep.src = `/img/${gepValasztas}.png`

    let eredmeny
    if(elem == "ko"){
        if(gepValasztas == "ko"){
            eredmeny = "Döntetlen"
        }
        else if(gepValasztas == "papir"){
            eredmeny = "A gép nyert"
        }
        else{
            eredmeny = `${jatekosNev} nyert`
            
        }
    }
    else if(elem == "papir"){
        if(gepValasztas == "papir"){
            eredmeny = "Döntetlen"
        }
        else if(gepValasztas == "ollo"){
            eredmeny = "A gép nyert"
        }
        else{
            eredmeny = `${jatekosNev} nyert` 
        }
    }
    else if(elem == "ollo"){
        if(gepValasztas == "ollo"){
            eredmeny = "Döntetlen"
        }
        else if(gepValasztas == "ko"){
            eredmeny = "A gép nyert"
        }
        else{
            eredmeny = `${jatekosNev} nyert` 
        }
    }
    if (eredmeny == `${jatekosNev} nyert`){
        jatekosPont++
        document.getElementById("jatekosPontja").innerHTML = jatekosPont
    }
    else if(eredmeny == "A gép nyert"){
        gepPont++
        document.getElementById("gepPontja").innerHTML = gepPont
    }

    document.getElementById("eredmenyH1").innerHTML = `Eredmény: ${eredmeny}`
    
    

    console.log(`Játékos választása: ${elem}, a gép választása: ${gepValasztas}`)
    console.log(`\nAz eredmény: ${eredmeny}, játékos pontja: ${jatekosPont}, gép pontja: ${gepPont}\n`)

    if(jatekosPont == 10){
        alert(`${jatekosNev} nyert`)
        jatekosPont = 0
        gepPont = 0
        document.getElementById("jatekosPontja").innerHTML = jatekosPont
        document.getElementById("gepPontja").innerHTML = gepPont
    }
    else if(gepPont == 10){
        alert(`A gépnyert`)
        jatekosPont = 0
        gepPont = 0
        document.getElementById("jatekosPontja").innerHTML = jatekosPont
        document.getElementById("gepPontja").innerHTML = gepPont
    }
}

function ujrakezdes(){
    jatekosPont = 0
    gepPont = 0
    document.getElementById("jatekosPontja").innerHTML = jatekosPont
    document.getElementById("gepPontja").innerHTML = gepPont
}