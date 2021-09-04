import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-hero',
  template: `
    <section class="hero-container">
      <h2>
        All your favorite sets and cards from<br /><span
          >Magic <span>the</span> Gathering</span
        ><br />
      </h2>
    </section>
  `,
  styleUrls: ['./image-hero.component.scss'],
})
export class ImageHeroComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
