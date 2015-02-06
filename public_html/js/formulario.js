/* 
 * Autor = Diego Rodríguez Suárez-Bustillo
 * Fecha = 16-dic-2014
 * Licencia = gpl30
 * Version = 2.0
 * Descripcion = Contiene metodos para el control del formulario de contacto
 */

/* 
 * Copyright (C) 2014 Diego Rodríguez Suárez-Bustillo
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

var mensaje = '';

/**
 * @description Comprueba todos los campos obligatorios y activa la casilla de terminos<br>
 * Si se vacia algún campo se desactiva y desmarca la casilla de terminos
 */
function activarTerminos() {
    var campos = document.getElementById('contacto').getElementsByClassName('form_input');
    var terminos = document.getElementById('terminos');
    var desactivado = false;
    for (var i = 0; i < campos.length; i++) {
        if (campos[i].value.length === 0 && campos[i].id !== 'fijo') {
            desactivado = true;
            break;
        }
    }
    terminos.disabled = desactivado;
    if (desactivado) {
        terminos.checked = false;
    }
    activarEnvio();
}
/**
 * @description Activa el boton de envio en funcion de la casilla de terminos
 */
function activarEnvio() {
    document.getElementById('enviar').disabled = !document.getElementById('terminos').checked;
}
/**
 * @description Comprueba todas las validaciones en el envio del formulario
 * @returns {Boolean}
 */
function validar() {
    mensaje = '';
    if (validarNombre() && validarEmail() && validarFijo() && validarMovil()) {
        return true;
    }
    var error = document.getElementById("error");
    error.getElementsByTagName('td')[0].getElementsByTagName('div')[0].innerHTML = mensaje;
    error.className = 'open';
    return false;
}
/**
 * @description Valida los campos de nombre y apellidos
 * @returns {Boolean}
 */
function validarNombre() {
    var expresion = /^[a-zA-ZáéíóúÁÉÍÓÚüÜ\-]+$/;
    if (!expresion.test(document.getElementById('nombre').value)
            || !expresion.test(document.getElementById('apellido1').value)
            || !expresion.test(document.getElementById('apellido2').value)) {
        mensaje += 'Nombre y/o apellidos invalidos<br>';
        return false;
    }
    return true;
}
/**
 * @description Valida el campo de email
 * @returns {Boolean}
 */
function validarEmail() {
    var expresion = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (expresion.test(document.getElementById('email').value)) {
        return true;
    }
    mensaje += 'Email invalido<br>';
    return false;
}
/**
 * @description Valida los campos de telefono
 * @returns {Boolean}
 */
//function validarTelefonos() {
//    var expresion = /^(9|6)\d{8}$/;
//    if (expresion.test(document.getElementById('fijo').value) && expresion.test(document.getElementById('movil').value)) {
//        return true;
//    }
//    return false;
//}

function validarMovil() {
    var expresion = /^6\d{8}$/;
    if (expresion.test(document.getElementById('movil').value)) {
        return true;
    }
    mensaje += 'Telefono movil invalido<br>';
    return false;
}

function validarFijo() {
    var expresion = /^9\d{8}$/;
    var fijo = document.getElementById('fijo');
    if ((fijo.value !== '' && expresion.test(fijo.value)) || fijo.value === '') {
        return true;
    }
    mensaje += 'Telefono fijo invalido<br>';
    return false;
}
