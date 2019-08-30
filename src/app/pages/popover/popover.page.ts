import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopinfoComponent } from '../../components/popinfo/popinfo.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

    constructor( public popoverController: PopoverController ) { }

  ngOnInit() {
  }

    /** Hay que agregar el  PopinfoComponent, en los entry component en el popover.module
     * esto es para que angular ejecute o cargue la pagina, y  luego importamos su modulo,
     * como este es un componente pertecene a un modulo entonces se agrega ese modulo
     *
     * El parametro evento es para que se muestre donde se lanzo
     * mode para que se vea como el modelo de ios
     * backdropDismiss es para que no se cierre al menos que interacture con el compoonente
     */
    async mostrarPop( evento ) {

        const popover = await this.popoverController.create({
            component: PopinfoComponent,
            event: evento,
            mode: 'ios',
            backdropDismiss: false
        });

        await popover.present();

        /** Este aparce cuando esta completamente cerrado */
        // const { data } = await popover.onDidDismiss();
        /** ESte aparce cuando se va a cerrar, casi al insante cuando se ejecuta en el hijo  */
        const { data } = await popover.onWillDismiss();

        console.log('Padre: ', data);
    }

}
