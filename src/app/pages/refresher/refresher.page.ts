import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
})
export class RefresherPage implements OnInit {

    items: any[] = [];

    constructor() { }

    ngOnInit() {
    }

    doRefresh( event ) {
        setTimeout( () => {
            this.items = Array(40);

            /** Le aviso que ya termine de cargar todos los item y detenga el refresher */
            event.target.complete();
        }, 1500 );
    }

}
