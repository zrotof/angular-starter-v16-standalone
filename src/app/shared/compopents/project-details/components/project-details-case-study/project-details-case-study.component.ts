import { Component, Input } from '@angular/core';
import { NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { faGlobe, faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-project-details-case-study',
    imports: [
        NgFor,
        NgSwitch,
        NgSwitchCase,
        NgSwitchDefault,
        FontAwesomeModule
    ],
    templateUrl: './project-details-case-study.component.html',
    styleUrls: ['./project-details-case-study.component.scss']
})
export class ProjectDetailsCaseStudyComponent {
  @Input() caseStudy : any;

  faGlobe = faGlobe;
  faLock = faLock;
}
