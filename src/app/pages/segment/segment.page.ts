import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { DataService } from '../../service/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

    superHeroes: Observable<any>;

    valorSegmento = '';

    /** Para obtener un elemento de ionic ddel html se hace a traves del viewchiel */
    @ViewChild(IonSegment) segment: IonSegment;

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.segment.value = 'todos';
        this.superHeroes = this.dataService.getHeroes();
    }

    segmentChanged(event) {
        this.valorSegmento = event.detail.value;

        console.log(this.valorSegmento);
        
        if ( this.valorSegmento === 'todos' ) {
            return this.valorSegmento = '';
        }

    }

}
