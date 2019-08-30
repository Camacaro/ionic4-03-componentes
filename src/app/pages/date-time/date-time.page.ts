import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  fechaNacimiento: Date = new Date();
  customPickerOptions;
  customDate;

  constructor() { }

  ngOnInit() {

	this.customPickerOptions = {
		buttons: [
			{
				text: 'Save',
				handler: (event) => {
					console.log('Clicked Save!');
					console.log( event );
				} 
			}, 
			{
				text: 'Log',
				handler: () => {
					console.log('Clicked Log. Do not Dismiss.');
					/**
					 * Evitar que se oculte
					 * return false; 
					 * */
				}
			}
		],
	}
  }

  cambiarFecha(event){
    console.log( 'onchange',  event);
    console.log( 'date', new Date( event.detail.value ) );
  }

}
