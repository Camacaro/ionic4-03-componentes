import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

    personajes = ['Aquaman', 'Superman', 'Batman', 'flash', 'Mujer Maravilla'];

    constructor() { }

  ngOnInit() {
  }

    reorder( event ) {

        /** Obtener valor de un arrglo en la posicion pasada y sacarlo del arreglo
         * parametros :
         * 1 me ubico en la posicion
         * 2 cuantos elementos quiero sacar, en este caso uno, ese
         * [0] retorno solo ese
         */

        const personaje = this.personajes.splice( event.detail.from, 1  )[0];

        /**
         * Introducir valor en el indice indicado
         * parametros
         * 1: posicion a ubicar
         * 2: elementos a eliminar, ninguno
         * 3: valor a insertar en la posicion pasada
         */

        this.personajes.splice( event.detail.to, 0, personaje );

        event.detail.complete();
    }

    onClick() {
        console.log( this.personajes );
    }

}
