function abrirMensaje(){

    document.getElementById("inicio").style.display="none";
    document.getElementById("mensajeFinal").style.display="flex";

    escribirTexto();
    crearCorazones();
    explosion();
}

function escribirTexto(){
    let texto = "Te amo mucho preciosa ❤️";
    let i = 0;
    let velocidad = 80;

    function escribir(){
        if(i < texto.length){
            document.getElementById("texto").innerHTML += texto.charAt(i);
            i++;
            setTimeout(escribir, velocidad);
        }
    }
    escribir();
}

function crearCorazones(){
    let caja = document.querySelector(".caja");

    setInterval(()=>{
        let corazon = document.createElement("div");
        corazon.innerHTML = "❤️";
        corazon.classList.add("corazon");
        corazon.style.left = Math.random()*100 + "%";
        caja.appendChild(corazon);

        setTimeout(()=>{
            corazon.remove();
        },6000);

    },500);
}

function explosion(){
    for(let i=0;i<20;i++){
        let corazon = document.createElement("div");
        corazon.innerHTML="💖";
        corazon.style.position="absolute";
        corazon.style.left="50%";
        corazon.style.top="50%";
        corazon.style.fontSize="24px";

        document.body.appendChild(corazon);

        let x = (Math.random()-0.5)*400;
        let y = (Math.random()-0.5)*400;

        corazon.animate([
            {transform:"translate(0,0)",opacity:1},
            {transform:`translate(${x}px,${y}px)`,opacity:0}
        ],{
            duration:1000
        });

        setTimeout(()=>corazon.remove(),1000);
    }
}