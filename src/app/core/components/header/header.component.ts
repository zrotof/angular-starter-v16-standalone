import { AfterViewInit, Component, HostListener, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT, NgClass, ViewportScroller } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavSmallScreenComponent } from '../nav-small-screen/nav-small-screen.component';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone : true,
  imports: [
    NgClass,
    RouterLink,
    NavSmallScreenComponent,
    DialogModule
  ]
})
export class HeaderComponent implements AfterViewInit {

  scrollHeight = 100;
  shouldApplyBackground = false;
  
  isBurgerMenuClicked: boolean = false;

  currentAnchorTag ="accueil";

  catchUpSpace = 150;

  haveToBypassScrollBehaviour = false;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private scroller : ViewportScroller
  ){ }

  ngAfterViewInit(): void {
    this.onWindowScroll()
  }

  //Handling click on burger menu
  onBurgerMenu(){

    if(this.isBurgerMenuClicked === false){
      if (window.scrollY <= this.scrollHeight) {
        this.shouldApplyBackground = true
      }
    }
    else{
      if(window.scrollY <= this.scrollHeight) {
        this.shouldApplyBackground = false;
      }
    }

    this.isBurgerMenuClicked = !this.isBurgerMenuClicked;
  }

  //Handling scroll behaviour
  //Changing backgroung on scroll of header menu 
  //changing the rigth active link when scolling
  @HostListener('window:scroll', ['$event'])

  onWindowScroll( ) {
    if(!this.isBurgerMenuClicked){
      // Changing background of header when scroll to a height bigger than the header height
      this.headerSrcollBehaviour();
    
      // Handle active navigation item and set right properties
      this.navItemScrollBehaviour();
    }
  }

  headerSrcollBehaviour() : void {
    this.shouldApplyBackground = (window.scrollY > this.scrollHeight) ? true : false;
  }

  navItemScrollBehaviour() :void {

    const projects = <HTMLElement>this.document.querySelector('.projects');
    const about = <HTMLElement>this.document.querySelector('.about');
    const services = <HTMLElement>this.document.querySelector('.services');
    const contact = <HTMLElement>this.document.querySelector('.contact');

    if(!this.haveToBypassScrollBehaviour){
      if(window.scrollY > projects?.offsetTop - this.catchUpSpace && window.scrollY < about?.offsetTop){
        this.setActiveLink(2);
      }
      else if ( window.scrollY >= about?.offsetTop - this.catchUpSpace && window.scrollY < services?.offsetTop){
        this.setActiveLink(3);
      }
      else if (window.scrollY > services?.offsetTop - this.catchUpSpace && window.scrollY < contact?.offsetTop){
        this.setActiveLink(4);
      }
      else if (window.scrollY > contact?.offsetTop - this.catchUpSpace){
        this.setActiveLink(5);
      }
      else {
        this.setActiveLink(1);
      }
    }
  }

  setActiveLinkAndNavigate(linkNumber: number, targetAnchor: string){
    this.setActiveLink(linkNumber);
    this.navigateToAnchor(targetAnchor);
  }

  setActiveLink(linkNumber: number){

    const myLinks = <NodeListOf<HTMLElement>>this.document.querySelectorAll("li a");
    const navSmallScreens = <NodeListOf<HTMLElement>>this.document.querySelectorAll('.nav-small-screen li a');
    
    myLinks.forEach(element =>{
      element.classList.remove("active-link");
    });

    myLinks[linkNumber - 1]?.classList.add("active-link");  

    navSmallScreens.forEach(element =>{
      element.classList.remove("active-link");
    });
  
    navSmallScreens[linkNumber - 1]?.classList.add("active-link");

  }

//Navigate to an anchor
  navigateToAnchor(targetAnchor: string){
    this.haveToBypassScrollBehaviour = true;

    if(this.isBurgerMenuClicked === true){
     this.onBurgerMenu();
    }

    this.scroller.scrollToAnchor(targetAnchor)

    setTimeout(() => {
      this.haveToBypassScrollBehaviour = false;
      this.navItemScrollBehaviour();
    }, 1000);
  }
}
