let XP = 8767
let nome = "BrennoX"
let padrão = ("Herói de nome " + nome + " está no nível de:")

if( XP >= 0 && XP <= 1000){
   console.log( padrão + "Ferro")
}

if( XP >= 1001 && XP <= 2000){
   console.log(padrão + " Bronze")
}

if( XP >= 2001 && XP <= 5000){
   console.log(padrão + " Prata")
}

if( XP >= 5001 && XP <= 7000){
   console.log(padrão + " Ouro")
}

if( XP >= 7001 && XP <= 8000){
   console.log(padrão + " Platina")
}

if( XP >= 8001 && XP <= 9000){
   console.log(padrão + " Ascendente")
}

if( XP >= 9001 && XP <= 10000){
   console.log(padrão + " Imortal")
}

if( XP >= 10001){
   console.log(padrão + " Radiante")
}