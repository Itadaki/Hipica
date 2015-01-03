/* 
 * Autor = Diego Rodríguez Suárez-Bustillo
 * Fecha = 17-dic-2014
 * Licencia = gpl30
 * Version = 1.0
 * Descripcion = 
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


function verTerminos() {
    window.open("popup_licencia.html", "Licencia", "width=600, height=450, top=100px, left=200px");
}
var abierto = 'c1';
function showw(n) {
    var parrafo = document.getElementsByClassName('c' + n)[0];
    switch (parrafo.style.maxHeight) {
        case '1000px':
            parrafo.style.maxHeight = '0';
            break;
        default:
            document.getElementsByClassName(abierto)[0].style.maxHeight = '0';
            parrafo.style.maxHeight = '1000px';
            abierto = 'c' + n;
            break;
    }
}
function show(n) {
    var parrafo = document.getElementsByClassName('c' + n)[0];
    if (/^catalogo c\d$/.test(parrafo.className)) {
        parrafo.className += ' abierto';
    } else {
        parrafo.className = parrafo.className.replace(' abierto', '');
    }
}