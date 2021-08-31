import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule, Router } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainContentComponent } from './main-content/main-content.component';
import { CardSearchComponent } from './main-content/card-search/card-search.component';
import { ImageHeroComponent } from './main-content/image-hero/image-hero.component';
import { SetSearchComponent } from './main-content/set-search/set-search.component';
import { CardGridComponent } from './main-content/set-search/card-grid/card-grid.component';
import { CardItemComponent } from './main-content/set-search/card-grid/card-item/card-item.component';

const mainContentRoutes: Routes = [
  { path: '', component: ImageHeroComponent },
  { path: 'name', component: CardSearchComponent },
  { path: 'sets', component: SetSearchComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainContentComponent,
    CardSearchComponent,
    ImageHeroComponent,
    CardGridComponent,
    CardItemComponent,
    SetSearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(mainContentRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
