import { HttpClient } from '@angular/common/http';
import { not } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-card-search',
  template: `
    <section>
      <div class="input-container">
        <h2>Search the name of a card below</h2>
        <p class="magic-symbols">< = > @</p>
        <input
          type="text"
          class="card-name-input"
          [(ngModel)]="cardName"
          placeholder="Insert card name..."
          (input)="onChangeName($event)"
        />
        <small>(As of now, search only works in Italian)</small>
      </div>
      <ng-container *ngIf="nothingFound">
        <div class="no-results">
          <span>No results found :(</span>
        </div>
      </ng-container>
      <ng-container *ngIf="namedCards.length > 0 && nothingFound === false">
        <app-card-grid [cards]="namedCards"></app-card-grid>
      </ng-container>
    </section>
  `,
  styleUrls: ['./card-search.component.scss'],
})
export class CardSearchComponent implements OnInit {
  cardName = '';
  namedCards: [] = [];
  typingDelay;
  nothingFound: boolean = false;

  constructor(private http: HttpClient) {
    console.log(this.cardName);
  }

  onChangeName(event) {
    clearTimeout(this.typingDelay);
    this.typingDelay = setTimeout(() => {
      this.http
        .get(
          `https://api.magicthegathering.io/v1/cards?name=${event.target.value}&language=italian`
        )
        .subscribe((cards) => {
          this.nothingFound = false;
          if (cards['cards'] && cards['cards'].length !== 0) {
            this.namedCards = cards['cards'].map((card) => {
              // If card has translations, then use the Italian one
              if (card['foreignNames']) {
                const italianLanguageIndex = card['foreignNames'].findIndex(
                  (localizedName) => {
                    return localizedName['language'] === 'Italian';
                  }
                );
                return {
                  ...card,
                  name:
                    card['foreignNames'][italianLanguageIndex].name ||
                    card.name,
                };
              }
              // Else just use the English one
              return card;
            });
          } else {
            this.nothingFound = true;
          }
        });
    }, 500);
  }

  ngOnInit(): void {}
}
