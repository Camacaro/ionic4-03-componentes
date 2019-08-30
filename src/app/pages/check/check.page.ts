import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {

	data = [
		{
			name: 'primary',
			seleted: false
		},
		{
			name: 'secondary',
			seleted: true
		},
		{
			name: 'tertiary',
			seleted: false
		},
		{
			name: 'success',
			seleted: true
		}
	]
  constructor() { }

  ngOnInit() {
  }

  onClick( check ){
	console.log( check );
  }

}
