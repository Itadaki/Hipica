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
    window.open("popup_licencia.html", "Licencia", "width=500, height=300");
}
function muestraOculta(n) {
    var parrafo = document.getElementById('contenidos_' + n);
    switch (parrafo.style.display) {
        case 'none':
            parrafo.style.display = 'block';
            break;
        default:
            parrafo.style.display = 'none';
            break;
    }
}