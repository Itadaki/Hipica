/* 
 * Autor = Alejandro Montoya
 * Fecha = 17-dic-2014
 * Licencia = gpl30
 * Version = 2.0
 * Descripcion = Contiene metodos comunes a toda la web
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

/**
 * @description Abre un popup con el contenido de la licencia
 */
function verTerminos() {
    window.open("popup_licencia.html", "Licencia", "width=600, height=450, top=100px, left=200px");
}
/**
 * @description Abre un popup con el contenido de la politica de privacidad
 */
function verPolitica() {
    window.open("politicaprivacidad.html", "Licencia", "width=850, height=700, top=100px, left=200px");
}
/**
 * @description Cierra el anuncio
 */
function cerrarAnuncio() {
    document.getElementById('banner').style.height = 0;
}
/**
 * @description Abre la pagina de donde estamos
 */
function abrirMapa() {
    window.location.assign("donde_estamos.html");
}
/**
 * @argument {String} cadena ID destino en el popup
 * @description Abre el popup de ayuda
 */
function ayuda(cadena) {
    window.open("ayuda.html#" + cadena, "Ayuda", "width=750, height=800, top=100px, left=200px");
}

/*#######
 #COOKIES#
 #######*/
/**
 * @description Nombre de la cookie para la politica de cookies
 * @type String
 */
var COOKIE_POLICY_NAME = 'politica_cookies';
/**
 * @description Valor de la cookie para la politica de cookies
 * @type String
 */
var COOKIE_POLICY_VALUE = 'aceptada';
/**
 * @description Nombre de la cookie para el saludo de bienvenida
 * @type String
 */
var COOKIE_GREETING_NAME = 'nombre';
/**
 * @description Tiempo de expiracion de las cookies en dias
 * @type Number
 */
var COOKIE_DAYS = 365;
/**
 * @description Crea el div de aviso de politica de cookies
 */
function crearPolitica() {
    if (!checkCookie(COOKIE_POLICY_NAME)) {
        var cookies = document.createElement('div');
        cookies.id = 'cookies';
        cookies.innerHTML = "<div>Utilizamos cookies para ofrecer a nuestros visitantes una forma mas cómoda y eficiente a la hora de navegar por nuestra web. Para ello debes aceptar nuestra <a href='politica_cookies.html'>Política de Cookies</a></div><span onclick='aceptarPolitica()'>Aceptar</span>";
        var body = document.getElementsByTagName('body')[0];
        body.insertBefore(cookies, body.childNodes[0]);
    }
}
/**
 * @description Guarda la cookie de aceptacion de la politica
 */
function aceptarPolitica() {
    setCookie(COOKIE_POLICY_NAME, COOKIE_POLICY_VALUE, COOKIE_DAYS);
    document.getElementById('cookies').style.height = 0;
}
/**
 * @description Crea un div con un saludo al usuario
 */
function crearSaludo() {
    if (checkCookie(COOKIE_GREETING_NAME)) {
        var saludo = document.createElement('div');
        saludo.id = 'saludo';
        saludo.innerHTML = "<div onclick='cerrarSaludo()'>Hola " + getCookie(COOKIE_GREETING_NAME) + ', encantado de volver a verte!</div></div>';
        var body = document.getElementsByTagName('body')[0];
        body.appendChild(saludo);
    }
}
/**
 * @description Cierra el saludo y elimina las cookies
 */
function cerrarSaludo() {
    setCookie('nombre', '', 0);
    setCookie('apellidos', '', 0);
    setCookie('email', '', 0);
    var saludo = document.getElementById('saludo');
    saludo.style.height = 0;
    saludo.style.padding = 0;
}
/**
 * @description Crea una nueva cookie
 * @param {String} cname
 * @param {String} cvalue
 * @param {Number} exdays
 */
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}
/**
 * @description Comprueba si existe la cookie
 * @param {String} cname
 * @returns {Boolean}
 */
function checkCookie(cname) {
    if (getCookie(cname) !== "") {
        return true;
    }
    return false;
}
/**
 * @description Devuelve el valor de una cookie
 * @param {String} cname
 * @returns {String}
 */
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ')
            c = c.substring(1);
        if (c.indexOf(name) !== -1)
            return c.substring(name.length, c.length);
    }
    return "";
}

window.onload = function () {
    crearPolitica();
    crearSaludo();
};