import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { UnsplashServiceProvider } from '../../providers/unsplash-service/unsplash-service';
import { PhotoLibrary, LibraryItem } from '@ionic-native/photo-library';
import { Platform } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public images: any;
  @ViewChild('slider') slider: Slides;
  page = 0;
  constructor(public navCtrl: NavController,
    public unsplashService: UnsplashServiceProvider,
    private photoLibrary: PhotoLibrary,
    private platform: Platform,
    private toastCtrl: ToastController) {

      
  }

  selectedTab(index) {
    this.slider.slideTo(index);
  }

















  ionViewDidLoad(){
    this.loadImages();
  }
  loadImages(){
    this.unsplashService.load().then(data => {
      this.images = data;
      console.log(data);
    }); 
  }
  
  download(){
    console.log("Bismillah YBM");

      // var image = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAU1QTFRFNjtAQEVK////bG9zSk9T/v7+/f39/f3+9vf3O0BETlJWNzxB/Pz8d3t+TFFVzM3O1NXX7u/vUldbRElNs7W3v8HCmZyeRkpPW19j8vLy7u7vvsDC9PT1cHR3Oj9Eo6WnxsjJR0tQOD1Bj5KVgYSHTVFWtri50dLUtLa4YmZqOT5D8vPzRUpOkZOWc3Z64uPjr7Gzuru95+jpX2NnaGxwPkNHp6mrioyPlZeadXh8Q0hNPEBFyszNh4qNc3d6eHx/OD1Cw8XGXGBkfoGEra+xxcbIgoaJu72/m52ggoWIZ2tu8/P0wcLE+vr7kZSXgIOGP0NIvr/BvL6/QUZKP0RJkpWYpKaoqKqtVVldmJqdl5qcZWhstbe5bHB0bnJ1UVVZwsTF5ubnT1RYcHN3oaSm3N3e3NzdQkdLnJ+h9fX1TlNX+Pj47/DwwsPFVFhcEpC44wAAAShJREFUeNq8k0VvxDAQhZOXDS52mRnKzLRlZmZm+v/HxmnUOlFaSz3su4xm/BkGzLn4P+XimOJZyw0FKufelfbfAe89dMmBBdUZ8G1eCJMba69Al+AABOOm/7j0DDGXtQP9bXjYN2tWGQfyA1Yg1kSu95x9GKHiIOBXLcAwUD1JJSBVfUbwGGi2AIvoneK4bCblSS8b0RwwRAPbCHx52kH60K1b9zQUjQKiULbMDbulEjGha/RQQFDE0/ezW8kR3C3kOJXmFcSyrcQR7FDAi55nuGABZkT5hqpk3xughDN7FOHHHd0LLU9qtV7r7uhsuRwt6pEJJFVLN4V5CT+SErpXt81DbHautkpBeHeaqNDRqUA0Uo5GkgXGyI3xDZ/q/wJMsb7/pwADAGqZHDyWkHd1AAAAAElFTkSuQmCC';     
      // var album = 'ybm';  
      // this.photoLibrary.requestAuthorization().then(() => {
      //   this.photoLibrary.saveImage(image, album);
      // });     
      this.photoLibrary.requestAuthorization().then(() => {
        this.photoLibrary.getLibrary().subscribe({
            next: library => {
                library.forEach((libraryItem) => {
                    console.log(libraryItem) // i want to print it
                })
            },   
            error: err => {},
            complete: () => { console.log('could not get photos'); }
        })
    })
    .catch(err => console.log(err));       
  }
}

