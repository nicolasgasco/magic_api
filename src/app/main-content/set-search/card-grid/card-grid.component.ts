import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-grid',
  template: `
    <div class="card-grid">
      <app-card-item *ngFor="let card of cards" [card]="card"></app-card-item>
    </div>
  `,
  styleUrls: ['./card-grid.component.scss'],
})
export class CardGridComponent implements OnInit {
  @Input() cards: [];

  constructor() {}

  ngOnInit(): void {
  }
}
