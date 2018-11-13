import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// my own components
import { HomeComponent } from './home.component';

// primeng
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';

@NgModule({
	declarations: [
		HomeComponent
	],
	imports: [
		CommonModule,
		BrowserAnimationsModule,
		CardModule,
		PanelModule,
		ButtonModule,
	]
})
export class HomeModule { }
