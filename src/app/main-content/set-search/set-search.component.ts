import { HttpClient } from '@angular/common/http';
import { compileDeclareClassMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Set } from '../Set.model';

@Component({
  selector: 'app-set-search',
  template: `
    <section>
      <div class="input-container">
        <h2>Choose a set to see the cards</h2>
        <p class="magic-symbols">< = > @</p>
        <ng-container *ngIf="sets.length > 0">
          <select name="sets" id="sets" (change)="onSelectSet($event)">
            <option *ngFor="let set of sets; index as i" [value]="set.code">
              {{ set.name }} ({{ set.year }})
            </option>
          </select>
        </ng-container>
      </div>
      <ng-container *ngIf="setCards.length > 0">
        <app-card-grid [cards]="setCards"></app-card-grid>
      </ng-container>
    </section>
  `,
  styleUrls: ['./set-search.component.scss'],
})
export class SetSearchComponent implements OnInit {
  sets = [];
  setCards = [];
  selectedSet: Set;

  constructor(private http: HttpClient) {}

  private fetchSetsFromApi() {
    this.http
      .get('https://api.magicthegathering.io/v1/sets')
      .subscribe((setsData) => {
        this.sets = Object.values(setsData)[0].filter(
          (set) => set.type === 'core' || set.type === 'expansion'
        );
        this.sets = this.sets
          // Filter only relevant keys
          .map((set) => {
            return {
              code: set.code,
              name: set.name,
              year: new Date(Date.parse(set.releaseDate)).getFullYear(),
              // type: set.type,
            };
          })
          // Sort alphabetically by name
          .sort((a, b) => {
            if (a.name > b.name) return 1;
            if (b.name > a.name) return -1;
            return 0;
          });

        this.onSelectSet();
      });
  }

  onSelectSet(event?) {
    this.http
      .get(
        `https://api.magicthegathering.io/v1/cards?set=${
          event ? event.target.value : this.sets[0].code
        }`
      )
      .subscribe((setCardsId) => {
        // Populate cards only if array is not empty
        if (setCardsId['cards'].length > 0) {
          this.setCards = setCardsId['cards'].map((card) => {
            // If card has translations, then use the Italian one
            if (card['foreignNames']) {
              const italianLanguageIndex = card['foreignNames'].findIndex(
                (localizedName) => {
                  return localizedName['language'] === 'Italian';
                }
              );
              return {
                ...card,
                foreginName: card['foreignNames'][italianLanguageIndex].name,
              };
            }
            // Else just use the English one
            return card;
          });
        }
      });
  }

  ngOnInit(): void {
    this.fetchSetsFromApi();
  }
}
