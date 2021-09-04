import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  template: `<main><router-outlet></router-outlet></main> `,
  styleUrls: ['./main-content.component.scss'],
})
export class MainContentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
