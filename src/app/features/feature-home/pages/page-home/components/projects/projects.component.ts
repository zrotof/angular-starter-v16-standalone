import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProjectDetail, ProjectSummary } from 'src/app/core/models/project';
import { ProjectDetailsComponent } from 'src/app/shared/compopents/project-details/project-details.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    ProjectDetailsComponent
  ],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  @Input() projectSummaryList !: ProjectSummary[]
  @Output() projectSummaryClickedEvent = new EventEmitter<number>()

  onProjectSummaryClicked(projectSummaryId : number) : void {
    this.projectSummaryClickedEvent.emit(projectSummaryId)
  }
  
}
