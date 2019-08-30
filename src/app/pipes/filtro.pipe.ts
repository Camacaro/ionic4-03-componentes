import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

    /**
     *
     * @param arreglo: arreglo a recibir, data de servicio
     * @param texto: palabra para filtar el arreglo
     * @param columna: nombre de la columnna a filtrar
     */
    transform(arreglo: any[], texto: string, columna: string): any[] {

        // console.log('pipe', arreglo);

        if ( texto === '' ) {
            return arreglo;
        }

        texto = texto.toLocaleLowerCase();

        /** el includes es para que me regrese todos los que coincidan con el texto */
        return arreglo.filter( item => {
            return item[columna].toLowerCase().includes( texto );
        });
    }

}
