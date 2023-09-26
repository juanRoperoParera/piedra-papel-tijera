"use strict"
//VARIABLES
let nomUsuario="";
let valor_score_humano=0;
let valor_score_compt=0;
let codigo_humano=1;
let codigo_comp=3;
let victoria=false;
let continua=true;
let contador=0;

//INFORMACION
const score = document.querySelector(".score");
const humano = document.querySelector(".humano");
const comp = document.querySelector(".comp");
const jugador = document.querySelector(".jugador");

//BOTONES
const piedra = document.querySelector(".piedra");
const tijeras = document.querySelector(".tijeras");
const papel = document.querySelector(".papel");
const jugar = document.querySelector(".jugar");
const nuevo = document.querySelector(".nuevo");

//ACCION
piedra.addEventListener("click",
()=>{
    humano.setAttribute("src","img/opciones/humano_piedra.png")
    codigo_humano=3;
    piedra.classList.add("seleccionado");

    tijeras.classList.remove("seleccionado");
    papel.classList.remove("seleccionado");
});

tijeras.addEventListener("click",
()=>{
    humano.setAttribute("src","img/opciones/humano_tijeras.png")
    codigo_humano=1;
    tijeras.classList.add("seleccionado");

    piedra.classList.remove("seleccionado");
    papel.classList.remove("seleccionado");
});

papel.addEventListener("click",
()=>{
    humano.setAttribute("src","img/opciones/humano_papel.png")
    codigo_humano=2;
    papel.classList.add("seleccionado");
    
    tijeras.classList.remove("seleccionado");
    piedra.classList.remove("seleccionado");
});


jugar.addEventListener("click",
()=>{
    if(contador == 3){
        jugar.innerText = "FINALIZAR";
    }
    if(contador<4){
        let aleatorio=Math.floor(Math.random()*jugadas.length);
        comp.setAttribute("src", jugadas[aleatorio].url); 
        codigo_comp=jugadas[aleatorio].codigo;
        if(codigo_humano == 1){
            if(codigo_comp == 1){
                //EMPATE
                valor_score_humano+=1;
                valor_score_compt+=1;
                score.innerHTML=`<h3>${valor_score_humano} : ${valor_score_compt}</h3>`;
            }else if(codigo_comp == 2){
                //GANA HUMANO
                valor_score_humano+=1;
                score.innerHTML=`<h3>${valor_score_humano} : ${valor_score_compt}</h3>`;
            }else if(codigo_comp == 3){
                //GANA COMP
                valor_score_compt+=1;
                score.innerHTML=`<h3>${valor_score_humano} : ${valor_score_compt}</h3>`;
            }
        }else if(codigo_humano == 2){
            if(codigo_comp == 1){
                //GANA COMP
                valor_score_compt+=1;
                score.innerHTML=`<h3>${valor_score_humano} : ${valor_score_compt}</h3>`;
            }else if(codigo_comp == 2){
                //EMPATE
                valor_score_humano+=1;
                valor_score_compt+=1;
                score.innerHTML=`<h3>${valor_score_humano} : ${valor_score_compt}</h3>`;
            }else if(codigo_comp == 3){
                //GANA HUMANO
                valor_score_humano+=1;
                score.innerHTML=`<h3>${valor_score_humano} : ${valor_score_compt}</h3>`;
            }
        }else if(codigo_humano == 3){
            if(codigo_comp == 1){
                //GANA HUMANO
                valor_score_humano+=1;
                score.innerHTML=`<h3>${valor_score_humano} : ${valor_score_compt}</h3>`;
            }else if(codigo_comp == 2){
                //GANA COMP
                valor_score_compt+=1;
                score.innerHTML=`<h3>${valor_score_humano} : ${valor_score_compt}</h3>`;
            }else if(codigo_comp == 3){
                //EMPATE
                valor_score_humano+=1;
                valor_score_compt+=1;
                score.innerHTML=`<h3>${valor_score_humano} : ${valor_score_compt}</h3>`;
            }
        }
        
        contador++;
    }else{
        jugar.innerText = "JUGAR";

        jugar.disabled = true;

        jugar.classList.remove("enabled");
        if(valor_score_humano > valor_score_compt){
            score.innerHTML=`<h3>${valor_score_humano} : ${valor_score_compt}</h3><div class='ganador'><svg class="cerrar" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg><h2>GANASTE</h2></div>`;
        }else if(valor_score_compt > valor_score_humano){
            score.innerHTML=`<h3>${valor_score_humano} : ${valor_score_compt}</h3><div class='perdedor'><svg class="cerrar" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg><h2>PERDISTE</h2></div>`;
        }else{
            score.innerHTML=`<h3>${valor_score_humano} : ${valor_score_compt}</h3><div class='empate'><svg class="cerrar" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg><h2>EMPATE</h2></div>`;
        }

        let cerrar = document.querySelector(".cerrar");

        cerrar.addEventListener("click",
        ()=>{
            score.innerHTML=`<h3>${valor_score_humano} : ${valor_score_compt}</h3>`;
        })
    }
});


nuevo.addEventListener("click",
()=>{
    jugar.disabled = false;
    jugar.classList.add("enabled");
    contador=0;
    valor_score_humano=0;
    valor_score_compt=0;
    score.innerHTML=`<h3>${valor_score_humano} : ${valor_score_compt}</h3>`;
});





