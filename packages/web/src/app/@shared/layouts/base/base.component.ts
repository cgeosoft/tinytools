import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { TOOLS } from '@shared/models/tools.contant';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  @Input() size = 'md';
  @Input() back;
  @Input() tool;

  isFullscreen = false;
  elem: any;

  constructor(
    @Inject(DOCUMENT) private document: any
  ) { }

  ngOnInit(): void {

    this.elem = document.documentElement;

    if (this.tool) {
    }
    const color = this.tool ? TOOLS.find(x => x.name === this.tool).color : '#333';
    document.documentElement.style.setProperty('--bs-primary', color);
  }

  openFullscreen(): void {
    if (this.elem.requestFullscreen) {
      this.elem.requestFullscreen();
    } else if (this.elem.mozRequestFullScreen) {
      /* Firefox */
      this.elem.mozRequestFullScreen();
    } else if (this.elem.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      this.elem.webkitRequestFullscreen();
    } else if (this.elem.msRequestFullscreen) {
      /* IE/Edge */
      this.elem.msRequestFullscreen();
    }
  }

  closeFullscreen(): void {
    if (this.document.exitFullscreen) {
      this.document.exitFullscreen();
    } else if (this.document.mozCancelFullScreen) {
      /* Firefox */
      this.document.mozCancelFullScreen();
    } else if (this.document.webkitExitFullscreen) {
      /* Chrome, Safari and Opera */
      this.document.webkitExitFullscreen();
    } else if (this.document.msExitFullscreen) {
      /* IE/Edge */
      this.document.msExitFullscreen();
    }
  }


  toggleFullscreen(): void {

    if (this.isFullscreen) {
      this.closeFullscreen();
    }
    else {
      this.openFullscreen();
    }

    this.isFullscreen = !this.isFullscreen;
  }


}
