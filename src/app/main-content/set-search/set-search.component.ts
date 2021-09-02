import { HttpClient } from '@angular/common/http';
import { compileDeclareClassMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-set-search',
  template: `<section>
    <h2>Choose a set<br />to see the cards</h2>
    <p class="magic-symbols">< = > @</p>
    <ng-container *ngIf="sets.length > 0">
      <select name="sets" id="sets" value="Ciao">
        <option *ngFor="let set of sets; index as i" value="set.code">
          {{ set.name }} ({{ set.year }})
        </option>
      </select>
    </ng-container>
    <app-card-grid></app-card-grid>
  </section>`,
  styleUrls: ['./set-search.component.scss'],
})
export class SetSearchComponent implements OnInit {
  sets = [];

  constructor(private http: HttpClient) {}

  private fetchSetsFromApi() {
    this.http
      .get('https://api.magicthegathering.io/v1/sets')
      .subscribe((setsData) => {
        this.sets = Object.values(setsData)[0];
        this.sets = this.sets
          .map((set) => {
            return {
              code: set.code,
              name: set.name,
              year: new Date(Date.parse(set.releaseDate)).getFullYear(),
              // type: set.type,
            };
          })
          .sort((a, b) => {
            if (a.name > b.name) return 1;
            if (b.name > a.name) return -1;
            return 0;
          });
        console.log(this.sets);
      });
  }

  ngOnInit(): void {
    this.fetchSetsFromApi();
  }
}
