function obtenerDatos() {
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

    document.getElementById('nombre').value = '';
          document.getElementById('Apellidos').value = '';
          document.getElementById('Nota').value = '';
}
