import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class NavMenuComponent {
  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }
  toggle() {
    console.log(this.isExpanded);
    this.isExpanded = !this.isExpanded;
  }
}
