import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { RangeProjectImageSliderComponent } from './components/range-project-image-slider/range-project-image-slider.component';
import { ProjectDetailsCaseStudyComponent } from './components/project-details-case-study/project-details-case-study.component';
import { ProjectDetailsHeroBannerComponent } from './components/project-details-hero-banner/project-details-hero-banner.component';
@Component({
  selector: 'app-project-details',
  standalone: true,
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
  encapsulation : ViewEncapsulation.None,
  imports: [
    ProjectDetailsHeroBannerComponent,
    RangeProjectImageSliderComponent,
    ProjectDetailsCaseStudyComponent
  ]
})

export class ProjectDetailsComponent implements OnInit {

  project: any;

  heroData : any;

  images : any;

  caseStudyData : any;

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ){ }

  ngOnInit(): void {
    this.getProjectData();
    this.getHeroData();
    this.getImages();
    this.getCaseStudyData();
  }

    //getting project data
    getProjectData(){
      this.project = this.config.data.projectData;
    }

  getHeroData(): void {
    this.heroData = {
      name : this.project.name,
      activity : this.project.activity,
      summary : this.project.summary,
      websites : this.project.websites
    }

    if(this.project.isAppOnline){
      this.heroData = {
        ...this.heroData,
        links : this.project.links
      }
    }
  }

  //Open the project on the browser
  goOnSscovidWebsite(link: string){
    window.open(link, "_blank");
  }

  getImages() : void {
    console.log(this.project)
    this.images = this.project.images;
  }

  getCaseStudyData() : void {
    this.caseStudyData = {
      context : this.project.context,
      solutions : this.project.solutions,
      work : this.project.work,
      technos : this.project.technos
    }
  }

  closeProject(){
    this.ref.close();
  }
}
