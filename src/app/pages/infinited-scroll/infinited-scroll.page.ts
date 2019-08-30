import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinited-scroll',
  templateUrl: './infinited-scroll.page.html',
  styleUrls: ['./infinited-scroll.page.scss'],
})
export class InfinitedScrollPage implements OnInit {

	/** Tomar clase del elemento HTML y trabajarlo aqui, tomar elemtos de HTML */
	/** Componente, clase:tipoClase */
	@ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

	data: any[] = Array(20);

  constructor() { }

  ngOnInit() {
  }

  	loadData(event){
		console.log('Cargando siguiente...');

		/** Simular carga asincrona y agregamos nuevos elementos */
		setTimeout(() => {

			/** Cancelar el infinite Scroll */
			if ( this.data.length > 50) {

				event.target.complete();
				this.infiniteScroll.disabled = true;

				return;
			}
			const nuevoArr = Array(20);
			this.data.push( ...nuevoArr );

			/** Completamos la carga */
			event.target.complete();
		}, 1000);
  	}

}
