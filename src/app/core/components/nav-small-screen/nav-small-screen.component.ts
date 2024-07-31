import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-nav-small-screen',
  templateUrl: './nav-small-screen.component.html',
  styleUrls: ['./nav-small-screen.component.scss'],
  standalone: true,
  encapsulation: ViewEncapsulation.None
})
export class NavSmallScreenComponent implements OnInit {

  @Output() onNavigationOnSmallScreenEvent = new EventEmitter<{id: number, anchor: string}>();

  constructor() { }

  ngOnInit(): void {
  }

  menuClickOnSmallScreenEvent(linkNumberId: number, linkAnchor: string){
    this.onNavigationOnSmallScreenEvent.emit({id:linkNumberId, anchor: linkAnchor });
  }

}
