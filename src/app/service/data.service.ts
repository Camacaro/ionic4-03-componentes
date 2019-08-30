import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente } from 'src/app/interfaces/interfaces';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

	/** Hacer peticiones Http, tengo que importarlo en app.module.ts */
	constructor( private http: HttpClient ) { }

	getUser() {
		return this.http.get('https://jsonplaceholder.typicode.com/users');
    }

    getMenuOptions() {
        /** Peticion a dentro de un directorio */
		return this.http.get<Componente[]>('/assets/data/menu.json');
    }

    getAlbumes() {
		return this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums');
    }

    getHeroes() {
        /** Retardar peticion un segundo y medio con un pipe de rxjs */
		return this.http.get('/assets/data/superheroes.json').pipe( delay(3000) );
    }


}
