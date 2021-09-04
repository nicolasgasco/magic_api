import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../../../Card.model';

@Component({
  selector: 'app-card-item',
  template: `
    <ng-container *ngIf="!!card">
      <div class="card-container">
        <h3>
          {{ card.name }}
          <span *ngIf="card.foreignName">( {{ card.foreignName }})</span>
        </h3>
        <img
          [src]="card.imageUrl ? card.imageUrl : '/assets/img/card_back.jpg'"
          [alt]="card.imageUrl ? card.name : 'Generic Magic card back'"
        />
        <ng-container *ngIf="card.text">
          <p *ngFor="let sentence of card.text.split('. ')">
            {{ sentence.trim() }}
          </p>
        </ng-container>
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
