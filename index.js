let nome = ["Cloud","Sora","Leon","Tidus","Joker"]
let xp = [8420,6842,9620,3445,1239]

for (var i = 0; i < nome.length;i++){
  if(xp[i] < 1000){
    console.log(`O Herói de nome ${nome[i]} está no nível de Ferro`)
  }
  else if(xp[i] > 1001 && xp[i] < 2000){
    console.log(`O Herói de nome ${nome[i]} está no nível de Bronze`)
  }
  else if(xp[i] > 2001 && xp[i] < 5000){
    console.log(`O Herói de nome ${nome[i]} está no nível de Prata`)
  }
  else if(xp[i] > 5001 && xp[i] < 7000){
    console.log(`O Herói de nome ${nome[i]} está no nível de Ouro`)
  }
  else if(xp[i] > 7001 && xp[i] < 8000){
    console.log(`O Herói de nome ${nome[i]} está no nível de Platina`)
  }
  else if(xp[i] > 8001 && xp[i] < 9000){
    console.log(`O Herói de nome ${nome[i]} está no nível de Ascendente`)
  }
  else if(xp[i] > 9001 && xp[i] < 10000){
    console.log(`O Herói de nome ${nome[i]} está no nível de Imortal`)
  }
  else if(xp[i] >= 10001 ){
    console.log(`O Herói de nome ${nome[i]} está no nível de Radiante`)
  }
}

