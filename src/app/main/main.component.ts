import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  infoFromLocal = JSON.parse(localStorage.getItem('userInfo'));

  name = this.infoFromLocal.name;
  lastName = this.infoFromLocal.lastName;
  state = this.infoFromLocal.state;
  city = this.infoFromLocal.city;

  slideIndex = 1;
  

  constructor(private _router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('userID') === null) {
      this._router.navigate(['/logIn'])
    }
    this.showSlides(this.slideIndex);
  }
  logOut() {
    localStorage.removeItem('userID');
    localStorage.removeItem('userInfo')
    this._router.navigate(['/startPage'])
  }
  showInfoModal(userInfo) {
    userInfo.style.display = 'block'
  }
  hideInfoModal(userInfo) {
    userInfo.style.display = 'none'
  }

  showSlides(n) {
    let i,
    slides = document.getElementsByClassName('mySlides');
    if (n > slides.length) {
      this.slideIndex = 1
    }
    if (n < 1) {
      this.slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
      slides.item(i).setAttribute("style","display:none");
  }
  slides.item(this.slideIndex-1).setAttribute("style","display:block")
  
  }
   plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }
  
}
