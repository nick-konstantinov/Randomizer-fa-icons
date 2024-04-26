import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition, fas } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [
    FontAwesomeModule,
    CommonModule
  ],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  public icon: IconDefinition | undefined;
  public isDisplayed = true;
  public currentTimerId: ReturnType<typeof setTimeout> | null = null;

  constructor() {}

  public fasArray = Object.values(fas);

  public getRandomIcon(fasArray: string | any[]) {
    this.icon = fasArray[Math.floor(Math.random()*fasArray.length)];
    this.isDisplayed = true;

    if(this.currentTimerId) {
      clearTimeout(this.currentTimerId);
    }

    this.currentTimerId = setTimeout(() => {
      this.isDisplayed = false;
    }, 3000);
  }
}