import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPalette, faCode, faRocket, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    NgOptimizedImage,
    FontAwesomeModule
  ],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})

export class ServicesComponent {

  faPalette = faPalette;
  faCode = faCode;
  faRocket = faRocket;
  faChalkboardTeacher = faChalkboardTeacher;
  
}
