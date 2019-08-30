import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {

    albumes: any[] = [];

    textoABuscar = '';

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.dataService.getAlbumes().subscribe( albumes =>  {
            // console.log(albumes);
            this.albumes = albumes;
        });
    }

    /** El searchbar tiene una funcion para que se ejecute luego de un timpo que el
     * usuario dejo de
     *
     */
    buscar(event) {
        // console.log(event);
        this.textoABuscar = event.detail.value;
    }

}
