import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../../../Card.model';

@Component({
  selector: 'app-card-item',
  template: `
    <ng-container *ngIf="!!card">
      <div>
        <h3>{{ card.name || '' }}</h3>
      </div>
    </ng-container>
  `,
  styleUrls: ['./card-item.component.scss'],
})
export class CardItemComponent implements OnInit {
  @Input() card: Card;

  constructor() {}

  ngOnInit(): void {}
}
