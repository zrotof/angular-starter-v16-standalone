import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { NgFor, ViewportScroller } from '@angular/common';

import { faLinkedinIn, faGithub, faInstagram  } from '@fortawesome/free-brands-svg-icons';
import { faArrowDown  } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-hero-banner',
  standalone: true,
  imports: [
    NgFor,
    FontAwesomeModule
  ],
  templateUrl: './hero-banner.component.html',
  styleUrls: ['./hero-banner.component.scss']
})
export class HeroBannerComponent implements AfterViewInit{
  
  @ViewChild('rotatingText') rotatingTextRef !: ElementRef;

  constructor(
    private renderer: Renderer2,
    private scroller : ViewportScroller
  ){}

  faLinkedinIn = faLinkedinIn;
  faGithub = faGithub;
  faInstagram = faInstagram;
  faArrowDown = faArrowDown;

  networks = [
    {
      icon : this.faLinkedinIn, 
      label: "Mon linkedin",
      link: "https://www.linkedin.com/in/bonachisamuel"
    },
    {
      icon : this.faGithub, 
      label: "Mon github",
      link: "https://github.com/zrotof"
    },
    {
      icon : this.faInstagram, 
      label: "Mon instagram",
      link: "https://www.instagram.com/zrotof_"
    }
  ]

  openNetwork(networkLink: string){
    window.open(networkLink, "_blank");
  }

  ngAfterViewInit(): void {

    const paragraphElement  = this.rotatingTextRef.nativeElement
    const textContent = paragraphElement.textContent;

    const spannedText = Array.from(textContent).map(character => {
      if (character === ' ') {
        return '<span>&nbsp;</span>';
      } else {
        return `<span>${character}</span>`;
      }
    }).join('');

    paragraphElement.innerHTML = spannedText;

    // Apply CSS properties to every span element
    const spans = paragraphElement.querySelectorAll('span');
    spans.forEach((span: any, i: number) => {
      this.renderer.setStyle(span, 'transform', 'rotate('+(i+1)*10.5+'deg)');
      this.renderer.addClass(span , 'dynamic-span')
    });
  }

  onAnglesDownClicked(){
    this.scroller.scrollToAnchor("arrow-anchor")
  }
}
