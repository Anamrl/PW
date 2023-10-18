function calcularSubtotal() {
    // Obtener los valores de los campos del formulario
    const nombreE = document.getElementById("nombre").value;
    const depto = document.getElementById("departamento").value;
    const sueldoD = parseFloat(document.getElementById("sueldoDiario").value);
    const diasT = parseInt(document.getElementById("diasTrabajando").value);
    const antiguedad = parseInt(document.getElementById("antiguedad").value);
    let bono = 0;

    // Verificar que se llenen los campos y sean válidos
    if (nombreE.trim() === "") {
        alert("Por favor, ingresa el nombre del empleado.");
        return;
    }

    if (depto.trim() === "") {
        alert("Por favor, selecciona un departamento.");
        return;
    }

    if (isNaN(sueldoD) || sueldoD <= 0) {
        alert("El sueldo diario debe ser un número válido y mayor que cero.");
        return;
    }

    if (isNaN(diasT) || diasT <= 0) {
        alert("Los días trabajando deben ser un número válido y mayor que cero.");
        return;
    }

    if (isNaN(antiguedad) || antiguedad < 0) {
        alert("La antigüedad debe ser un número válido y no puede ser negativa.");
        return;
    }

    //Bono conforme a la antiguedad
    if (antiguedad > 15) {
        bono = sueldoD * diasT * 0.3;
    } else {
        bono = sueldoD * diasT * 0.15;
    }

    const subtotal = sueldoD * diasT + bono;

    // Crear una fila HTML con los datos del empleado y agregarla a la tabla
    const rowHTML = "<tr><td>" + nombreE + "</td><td>" + depto + "</td><td>" + sueldoD + "</td><td>" + diasT + "</td><td>" + antiguedad + "</td><td>" + subtotal + "</td></tr>";

    // Obtener la referencia a la tabla con el ID "result-table" en el documento HTML
    const table = document.getElementById("result-table");
    table.insertAdjacentHTML('beforeend', rowHTML);// Inserta la fila HTML generada (rowHTML) al final de la tabla (result-table)
    }

    function borrar() {
        // Limpiar los campos del formulario al hacer clic en "Borrar campos"
        document.getElementById("nombre").value = "";
        document.getElementById("departamento").value = "";
        document.getElementById("sueldoDiario").value = "";
        document.getElementById("diasTrabajando").value = "";
        document.getElementById("antiguedad").value = "";
    }
