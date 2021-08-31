import { Component, OnInit } from '@angular/core';
import { Card } from '../../Card.model';

@Component({
  selector: 'app-card-grid',
  templateUrl: './card-grid.component.html',
  styleUrls: ['./card-grid.component.scss'],
})
export class CardGridComponent implements OnInit {
  cards: Card[] = [{ name: 'Card1' }, { name: 'Card2' }, { name: 'Card3' }];

  constructor() {}

  ngOnInit(): void {}
}
