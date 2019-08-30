import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componente } from 'src/app/interfaces/interfaces';
import { DataService } from '../../service/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  /*items = [
    {
      name: 'Alert',
      path: '/alert'
    },
    {
      name: 'Action Sheet',
      path: '/action-sheet'
    },
  ];*/

  componentes: Observable<Componente[]>;

  constructor(private menuCtrl: MenuController, private dataService: DataService) { }

    ngOnInit() {
        this.componentes = this.dataService.getMenuOptions();
    }

    toggleMenu() {
        /** toggl5e lo que hace es si esta abierto lo cierra, y si esta cerrado lo abre */
        this.menuCtrl.toggle();
    }
}
