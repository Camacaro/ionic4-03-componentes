import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { PopinfoComponent } from './popinfo/popinfo.component';

/** Los declaro para pertenezcan a este modulo
 * Los exportos para que puedan ser usados fuera de este modulo
 */
@NgModule({
  declarations: [HeaderComponent, MenuComponent, PopinfoComponent],
  exports: [HeaderComponent, MenuComponent, PopinfoComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ]
})
export class ComponentsModule { }
