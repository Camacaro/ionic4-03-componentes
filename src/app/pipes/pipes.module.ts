import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroPipe } from './filtro.pipe';

/** Hay que importar esto en el app.module */

@NgModule({
  declarations: [FiltroPipe],
  exports: [
      FiltroPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
