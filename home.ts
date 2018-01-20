import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public images: any;
  @ViewChild('slider') slider: Slides;
  page = 0;
  constructor(public navCtrl: NavController) {
  }

  selectedTab(index) {
    this.slider.slideTo(index);
  }

}


