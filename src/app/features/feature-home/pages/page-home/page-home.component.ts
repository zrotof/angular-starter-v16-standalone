import { Component, OnInit } from '@angular/core';

import { ProjectDetail, ProjectSummary } from 'src/app/core/models/project';

import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';

import { ProjectsService } from 'src/app/core/services/projects/projects.service';

import { HeroBannerComponent } from './components/hero-banner/hero-banner.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServicesComponent } from './components/services/services.component';
import { ProjectDetailsComponent } from 'src/app/shared/compopents/project-details/project-details.component';

@Component({
  selector: 'app-page-home',
  standalone: true,
  imports: [
    ProjectDetailsComponent,
    HeroBannerComponent,
    ProjectsComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent
  ],
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss'],
  providers:[MessageService, DialogService]
})
export class PageHomeComponent implements OnInit {

  projectSummaryList !: ProjectSummary[];

  //variable used for show modal when click on showcased project
  ref !: DynamicDialogRef;

  constructor(
    private projectService : ProjectsService,
    private messageService: MessageService,
    public dialogService: DialogService
  ){}

  ngOnInit(): void {
    this.getProjectSummaries();
  }

  getProjectSummaries(){
    this.projectSummaryList = this.projectService.initProjectSummaryList();
  }

  onProjectSummaryClicked(event : number){
    const id = event;
    const projectData : ProjectDetail = this.projectService.getProjectData(id);

    if(typeof projectData !== "undefined"){
      this.ref = this.dialogService.open(ProjectDetailsComponent, {
        data: {
          projectData: projectData
        },
        showHeader: false,
        baseZIndex: 10000,
        styleClass:  "projet-details-modal"
      });
  }
  else{
    this.messageService.add({severity:'warn', detail: "Projet en phase d'initialisation. Veuillez re-essayer plus tard."});
  }

  }
}
