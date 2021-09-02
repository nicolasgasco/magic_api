import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../../../Card.model';

@Component({
  selector: 'app-card-item',
  template: `
    <ng-container *ngIf="!!card">
      <div>
        <img
          [src]="card.imageUrl ? card.imageUrl : '/assets/img/card_back.jpg'"
          [alt]="card.imageUrl ? card.name : 'Generic Magic card back'"
        />
        <h3>{{ card.name || '' }}</h3>
        <p *ngFor="let sentence of card.text.split('. ')">{{ sentence }}</p>
        <q *ngIf="card.flavor">{{ card.flavor }}</q>
      </div>
    </ng-container>
  `,
  styleUrls: ['./card-item.component.scss'],
})
export class CardItemComponent implements OnInit {
  @Input() card: Card;

  constructor() {}

  ngOnInit(): void {
    console.log(this.card);
  }
}
