import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../../Card.model';

@Component({
  selector: 'app-card-grid',
  template: `
    <section>
      <app-card-item
        *ngFor="let card of setCards"
        [card]="card"
      ></app-card-item>
    </section>
  `,
  styleUrls: ['./card-grid.component.scss'],
})
export class CardGridComponent implements OnInit {
  @Input() setCards: Card[];

  constructor() {}

  ngOnInit(): void {}
}
