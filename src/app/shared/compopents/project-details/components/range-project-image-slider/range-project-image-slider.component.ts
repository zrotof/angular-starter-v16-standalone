import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { NgStyle } from '@angular/common';

import { CarouselModule } from 'primeng/carousel';
import { GalleriaModule } from 'primeng/galleria';

@Component({
  selector: 'app-range-project-image-slider',
  standalone: true,
  imports: [
    NgStyle,
    CarouselModule,
    GalleriaModule
  ],
  templateUrl: './range-project-image-slider.component.html',
  styleUrls: ['./range-project-image-slider.component.scss'],
  encapsulation : ViewEncapsulation.None
})
export class RangeProjectImageSliderComponent implements OnInit {
  
  @Input() images : any;

  responsiveOptions : any | undefined;

  displayCustom: boolean = false;
  activeIndex: number = 0;

  ngOnInit(): void {
    this.initResponsiveOptions();
  }

  initResponsiveOptions() : void {
    this.responsiveOptions = [
      {
          breakpoint: '1199px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }

  onImageRangeClicked(currentImage: string){

    this.images.forEach((image : string, index: number)=> {

      if(image === currentImage){
        this.activeIndex = index;
        this.displayCustom = true;
      }
    })

  }
}
