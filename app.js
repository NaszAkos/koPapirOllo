let jatekosPont = 0
let gepPont = 0
let jatekosNev 
let email 
let vegsoEredmeny
function ellenorzes(){
    jatekosNev = document.getElementById("jatekosNev").value
    email = document.getElementById("email").value
    if (!email.includes("@") || !email.includes(".")) {
        document.getElementById('hibaUzenet').innerHTML = "Hibás email cím!"
        document.getElementById("kepek").style.pointerEvents = "none"
    }
    else if(jatekosNev.length>20 || jatekosNev.length<8){
        document.getElementById('hibaUzenet').innerHTML = "A játékos neve 8-20 karakteres lehet"
        document.getElementById("kepek").style.pointerEvents = "none"
    }
    else if (!/^[a-zA-Z]+$/.test(jatekosNev)) {
        document.getElementById('hibaUzenet').innerHTML = "A név nem tartalmazhat számot vagy speciális karaktert!"
        document.getElementById("kepek").style.pointerEvents = "none"
    }
    else{
        document.getElementById('hibaUzenet').innerHTML = "Jók az adataid."
        document.getElementById("kepek").style.pointerEvents = "auto"
    }
}
document.getElementById("kepek").style.pointerEvents = "none"
function jatek(elem){
    document.getElementById('ko').style.border = "0px solid white"
    document.getElementById('papir').style.border = "0px solid white"
    document.getElementById('ollo').style.border = "0px solid white"
    document.getElementById(elem).style.border = "3px solid red"
    vegsoEredmeny = document.getElementById('vegsoEredmeny')
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
        vegsoEredmeny.innerHTML = `Végső eredmény: ${jatekosNev} nyert, nyomj az újrakezdés gombra`
        document.getElementById("kepek").style.pointerEvents = "none"
        document.getElementById("jatekosPontja").innerHTML = jatekosPont
        document.getElementById("gepPontja").innerHTML = gepPont
    }
    else if(gepPont == 10){
        vegsoEredmeny.innerHTML = `Végső eredmény: A gép nyert, nyomj az újrakezdés gombra`
        document.getElementById("kepek").style.pointerEvents = "none"
        document.getElementById("jatekosPontja").innerHTML = jatekosPont
        document.getElementById("gepPontja").innerHTML = gepPont
    }
}
function ujrakezdes(){
    jatekosPont = 0
    gepPont = 0
    vegsoEredmeny.innerHTML = "Még nincs végső eredmény"
    document.getElementById("jatekosPontja").innerHTML = jatekosPont
    document.getElementById("gepPontja").innerHTML = gepPont
    document.getElementById("kepek").style.pointerEvents = "auto"
    document.getElementById('ko').style.border = "0px solid white"
    document.getElementById('papir').style.border = "0px solid white"
    document.getElementById('ollo').style.border = "0px solid white"
    document.getElementById('eredmenyH1').innerHTML = "Eredmény:"
}