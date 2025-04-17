import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';

import * as AOS from 'aos';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [
        RouterOutlet,
        HeaderComponent,
        FooterComponent
    ]
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    AOS.init();
  }
  
}
