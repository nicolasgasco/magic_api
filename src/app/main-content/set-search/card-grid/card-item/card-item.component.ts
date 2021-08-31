import { Component, OnInit, Input } from '@angular/core';
import { Card } from "../../../Card.model";

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
})
export class CardItemComponent implements OnInit {
  @Input() card: Card | undefined;

  constructor() {}

  ngOnInit(): void {}
}
