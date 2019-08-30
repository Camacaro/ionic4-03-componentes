import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popinfo',
  templateUrl: './popinfo.component.html',
  styleUrls: ['./popinfo.component.scss'],
})
export class PopinfoComponent implements OnInit {

    items = Array(40);

    constructor( private popoverCtrl: PopoverController) { }

    ngOnInit() {}

    /**
     * Como yo se que esta pagina es lanzada por un popover la puedo cerrar con ella misma y mandar parametros
     */
    onClick( valor: number ) {

        console.log('Item :', valor);

        this.popoverCtrl.dismiss({
            item: valor
        });
    }

}
