/* 
 * Autor = Alejandro Montoya
 * Fecha = 17-dic-2014
 * Licencia = gpl30
 * Version = 1.0
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
    window.open("popup_licencia.html", "Licencia", "width=600, height=450, top=100px, left=200px");}
function verPolitica() {
    window.open("politicaprivacidad.html", "Licencia", "width=1200, height=800, top=100px, left=200px");}
function cerrarAnuncio() {
    document.getElementById('banner').style.height = 0;
}

function abrirMapa(){
    window.open("donde_estamos.html");
}

function ayuda(parametro){
    window.open("ayuda.html#"+parametro, "Ayuda", "width=750, height=700, top=100px, left=200px");}
