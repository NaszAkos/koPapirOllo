let jatekosPont = 0
let gepPont = 0


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
            eredmeny = "A játékos nyert"
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
            eredmeny = "A játékos nyert"
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
            eredmeny = "A játékos nyert"
        }
    }
    if (eredmeny == "A játékos nyert"){
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
}