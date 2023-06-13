
const coloresSemaforo = ['Rojo', 'Verde', 'Amarillo'];

cambiarColor();

function cambiarColor() {
    for (let index = 0; index <coloresSemaforo.length; index++) {
       alert("Semáforo está en: " + coloresSemaforo[index]);
       //console.log(`Semáforo está en: ${coloresSemaforo[index]}`);
    }
}

const intervalID = setInterval(cambiarColor, 3500)


function CambiarColorImg() {

    document.write('<img src="SemáforoRojo.PNG">');
    document.write('<img src="SemáforoVerde.PNG">');
    document.write('<img src="SemáforoAmarillo.PNG">');
    
}