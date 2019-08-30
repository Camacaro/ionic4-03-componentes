import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Observable } from 'rxjs';
import { IonList, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

    /** Hago referencia hacia el html el #list y le asigno un nombre list, lo pongo de tipo IonList para tener las ayudas de typescript */
    @ViewChild('list') list: IonList;

    usuarios: Observable<any>;

	/** Importar el servicio que hace la peticion http */
      constructor( private dataService: DataService,
                   private toastController: ToastController ) { }

  	ngOnInit() {
		/* this.dataService.getUser().subscribe( console.log ); */
		/* this.dataService.getUser().subscribe( resp => {

			this.usuarios = resp;

		     console.log(resp);

			console.log(this.usuarios);
        });*/

        this.usuarios = this.dataService.getUser();

    }

    async presentToast( message: string ) {

        const toast = await this.toastController.create({
          message,
          duration: 2000
        });

        toast.present();
    }

    favotite(user){
        console.log( 'favorite', user);
        this.presentToast('Guardó en Favoritos');
        this.list.closeSlidingItems();
    }
    share(user){
        console.log( 'share', user);
        this.presentToast('Compartió!');
        this.list.closeSlidingItems();
    }
    borrar(user){
        console.log( 'borrar', user);
        this.presentToast('Borrado');
        this.list.closeSlidingItems();
    }

}
