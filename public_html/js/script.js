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
function verPolitica() {
    window.open("politicaprivacidad.html", "Licencia", "width=850, height=700, top=100px, left=200px");
}
function cerrarAnuncio() {
    document.getElementById('banner').style.height = 0;
}
function abrirMapa() {
    window.location.assign("donde_estamos.html");
}
function ayuda(cadena) {
    window.open("ayuda.html#" + cadena, "Ayuda", "width=750, height=800, top=100px, left=200px");
}

//COOKIES
var COOKIE_NAME = 'politica_cookies';
var COOKIE_VALUE = 'aceptada';
var COOKIE_DAYS = 365;
function crearPolitica() {
    if (!checkCookie(COOKIE_NAME)) {
        var cookies = document.createElement('div');
        cookies.id = 'cookies';
        cookies.innerHTML = "<div>Utilizamos cookies para ofrecer a nuestros visitantes una forma mas cómoda y eficiente a la hora de navegar por nuestra web. Para ello debes aceptar nuestra <a href='politica_cookies.html'>Política de Cookies</a></div><span onclick='aceptarPolitica()'>Aceptar</span>";
        var body = document.getElementsByTagName('body')[0];
        body.insertBefore(cookies,body.childNodes[0]);
    }
}
function aceptarPolitica() {
    setCookie(COOKIE_NAME, COOKIE_VALUE, COOKIE_DAYS);
    document.getElementById('cookies').style.height = 0;
}
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}
function checkCookie(cname) {
    if (getCookie(cname) !== "") {
        return true;
    }
    return false;
}
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
window.onload = crearPolitica;