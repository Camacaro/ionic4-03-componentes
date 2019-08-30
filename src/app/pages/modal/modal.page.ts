import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

    constructor(private modalCtrl: ModalController) { }

    ngOnInit() {
    }

    async abrirModal() {

        /** Hay que agregar el  ModalInfoPage, en los entry component en elmodal.module
         * esto es para que angular ejecute o cargue la pagina, y lo luego importamos su modulo
         *
         * AL crear el modalInfoPage como una pagina, este tiene una ruta y hay que quitarsela en su module
         * 
         * componentProps> son para enviar informacion al modalInfoPage
         */
        const modal = await this.modalCtrl.create({

            component: ModalInfoPage,
            componentProps: {
                nombre: 'Jesus',
                pais: 'Chile',
            }
        });

        // return
        await modal.present();

        /** Esta es una promesa que esta escuchando cuando se cierra el modal */
        const {data} = await modal.onDidDismiss();
        console.log('Informacion que retorna el modal hijo', data);
    }

}
