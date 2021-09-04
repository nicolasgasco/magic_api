import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer>
      <small
        >Created with 🖤 by
        <a
          href="https://nicolasgasco.com/"
          target="_blank"
          rel="noopener noreferrer"
          >Nicolas Gasco</a
        >.</small
      >
    </footer>
  `,
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
