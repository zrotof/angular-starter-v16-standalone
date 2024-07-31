import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-details-hero-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-details-hero-banner.component.html',
  styleUrls: ['./project-details-hero-banner.component.scss']
})
export class ProjectDetailsHeroBannerComponent {
  @Input() hero : any;
}
