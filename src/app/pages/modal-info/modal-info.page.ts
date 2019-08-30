import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {

    /** Recibir parametros del padre */
    @Input() nombre;
    @Input() pais;

    constructor(private modalCtrl: ModalController) { }

    ngOnInit() {
    }

    salirSinArgumentos() {
        this.modalCtrl.dismiss();
    }

    /** Esto es para enviar parametros a la pagina que abrio el modal */
    salirConArgumentos() {
        this.modalCtrl.dismiss({
            nombre: 'Alejandro',
            pais: 'Venezuela'
        });
    }

}
