import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-card-search',
  template: `
    <section>
      <h2>Search the name of a card below</h2>
      <p class="magic-symbols">< = > @</p>
      <form>
        <input
          type="text"
          class="card-name-input"
          [(ngModel)]="cardName"
          placeholder="Insert card name..."
        />
      </form>
      <small>Search only works in Italian for now :(</small>
    </section>
  `,
  styleUrls: ['./card-search.component.scss'],
})
export class CardSearchComponent implements OnInit {
  cardName = '';
  constructor() {
    console.log(this.cardName);
  }

  ngOnInit(): void {}
}
