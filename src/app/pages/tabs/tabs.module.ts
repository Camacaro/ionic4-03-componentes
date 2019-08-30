import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

/**
 * con el loadChildren aplicamos el lazyload
 *
 * Lazy Load es un patrón de diseño que consiste en retrasar la carga o inicialización de un objeto hasta el momento de su utilización.
 * Esto significa que obtiene los datos o procesa los objetos solamente cuando se necesitan, no antes. 
 */
const routes: Routes = [
    {
        path: '',
        redirectTo: 'contact'
    },
    {
        path: '',
        component: TabsPage,
        children: [
            {
                path: 'account',
                loadChildren: '../avatar/avatar.module#AvatarPageModule'
            },
            {
                path: 'contact',
                loadChildren: '../list/list.module#ListPageModule'
            },
            {
                path: 'settings',
                loadChildren: '../infinited-scroll/infinited-scroll.module#InfinitedScrollPageModule'
            }

        ]
    }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
