import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConvertStringLabelToFontawesomeIconPipe } from 'src/app/core/pipes/convertStringLabelToFontawesomeIcon/convert-string-label-to-fontawesome-icon.pipe';

@Component({
  selector: 'app-project-details-hero-banner',
  standalone: true,
  templateUrl: './project-details-hero-banner.component.html',
  styleUrls: ['./project-details-hero-banner.component.scss'],
  imports: [
    NgOptimizedImage,
    FontAwesomeModule,
    ConvertStringLabelToFontawesomeIconPipe
  ]
})
export class ProjectDetailsHeroBannerComponent {
  @Input() hero : any;
}
