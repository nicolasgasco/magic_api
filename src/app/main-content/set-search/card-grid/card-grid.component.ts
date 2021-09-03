import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../../Card.model';

@Component({
  selector: 'app-card-grid',
  template: `
    <section>
      <app-card-item *ngFor="let card of cards" [card]="card"></app-card-item>
    </section>
  `,
  styleUrls: ['./card-grid.component.scss'],
})
export class CardGridComponent implements OnInit {
  @Input() cards: Card[];

  constructor() {}

  ngOnInit(): void {
    console.log(this.cards);
  }
}
