import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  constructor() { }
  public innerWidth: any;
  public innerHeight: any;
  ngOnInit() {
    this.innerWidth = window.innerWidth
    this.innerWidth = window.innerHeight
  }
  @HostListener('window:resize', ['$event'])
    onResize(event) {
      this.innerHeight = window.innerHeight;
      this.innerWidth = window.innerWidth;
      console.log(this.innerHeight)
}

}
