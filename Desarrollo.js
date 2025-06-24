function obtenerDatos() {
    //obtenemos los daos
    const nombre = document.getElementById('nombre').value;
    const Apellido = document.getElementById('Apellidos').value;
    const Nota = document.getElementById('Nota').value;
   

//validamos q hayan datos
    if (!nombre || !Apellido || !Nota) {
                alert('datos vacios, tiene que completarlos.');
                return;
            }


    document.getElementById("nombreMostrar").textContent = nombre;
    document.getElementById("ApellidoMostrar").textContent = Apellido;
    document.getElementById("NotaMostrar").textContent = Nota;
//limpiamos los datos puestos
    document.getElementById('nombre').value = '';
          document.getElementById('Apellidos').value = '';
          document.getElementById('Nota').value = '';
          

const notaElemento = document.getElementById('notaDelEstudiante1');
const nota = parseInt(notaElemento.textContent); 

if (nota <9000) {
    notaElemento.classList.add('nota-verde');
} else if (nota > 11000) { 
    notaElemento.classList.add('nota-roja');
}


const Notas = document.getElementById('NotaMostrar');
const nota2 = parseInt(Notas.textContent); 

if (nota2 < 9000) {
    Notas.classList.add('nota-verde');
} else if (nota2 > 11000) { 
    Notas.classList.add('nota-roja');
}

const Nota3 = document.getElementById('notaDelEstudiante2');
const nota3 = parseInt(Nota3.textContent); 

if (nota3  < 9000) {
    Nota3.classList.add('nota-verde');
} else if (nota3 > 11000) { 
    Nota3.classList.add('nota-roja');
}


const Nota4 = document.getElementById('notaDelEstudiante3');
const nota4 = parseInt(Nota4.textContent); 

if (nota4  < 9000) {
    Nota4.classList.add('nota-verde');
} else if (nota4 > 11000) { 
    Nota4.classList.add('nota-roja');
}




}

function CalcularDatos() {
    const nota1 = parseInt(document.getElementById('notaDelEstudiante1').textContent);
    const nota2 = parseInt(document.getElementById('notaDelEstudiante2').textContent);
    const nota3 = parseInt(document.getElementById('notaDelEstudiante3').textContent);
    const nota4 = parseInt(document.getElementById('NotaMostrar').textContent);

    const notaMaxima = Math.max(nota1, nota2, nota3, nota4);
    const notaMinima = Math.min(nota1, nota2, nota3, nota4);
    const promedio = (nota1 + nota2 + nota3 + nota4) / 4;

    document.getElementById("NotaMayor").textContent = notaMaxima;
    document.getElementById("NotaMenor").textContent = notaMinima;
    document.getElementById("Promedio").textContent = promedio.toFixed(2);
}

function php() {
    const nombreCompleto = document.getElementById('nombreCompleto').value;
    const servicio = document.getElementById('servicio').value;
    const precio = parseFloat(document.getElementById('precio').value);
     const msj = document.getElementById('msj');

    // validamos los datos
    if (nombreCompleto === '' || servicio === '' || isNaN(precio)) {
        alert('Todos los campos deben estar completos.');
        return;
    }

    // valiamos el precio
    if (precio < 5000 || precio > 15000) {
        alert('El precio debe estar entre 5000 y 15000 colones.');
        return;
    }

    // Limpiamos los datos
    document.getElementById('nombreCompleto').value = '';
    document.getElementById('servicio').value = '';
    document.getElementById('precio').value = '';
     msj.textContent = 'Servicio registrado correctamente';
}
