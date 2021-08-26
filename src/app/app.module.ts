import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ImageHeroComponent } from './image-hero/image-hero.component';
import { FooterComponent } from './footer/footer.component';
import { CardSearchComponent } from './card-search/card-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ImageHeroComponent,
    FooterComponent,
    CardSearchComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
