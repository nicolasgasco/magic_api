import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-card-search',
  templateUrl: './card-search.component.html',
  styleUrls: ['./card-search.component.scss'],
})
export class CardSearchComponent implements OnInit {
  cardName = '';
  constructor() {
    console.log(this.cardName);
  }

  ngOnInit(): void {}
}
