import { animateChild } from '@angular/animations';
import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { Scroll } from '@angular/router';

@Component({
  selector: 'app-scrolltop',
  templateUrl: './scrolltop.component.html',
  styleUrls: ['./scrolltop.component.css']
})
export class ScrolltopComponent implements OnInit {

  windowScrolled?: boolean;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  @HostListener('window:scroll', [])
  onWindowScroll(): void{
    if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100){
      this.windowScrolled = true;
    }
    else if (this.windowScrolled && window.pageYOffset || this.document.documentElement.scrollTop || document.body.scrollTop < 10){
      this.windowScrolled = false;
    }
  }

  scrollToTop(): void {
    (function smoothscroll(): void {
        const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
        if (currentScroll > 0) {
            window.requestAnimationFrame(smoothscroll);
            window.scrollTo(0, currentScroll - (currentScroll * 8));
      }
    })();
  }

  ngOnInit(): void {
  }

}
