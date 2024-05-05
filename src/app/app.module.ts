import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeader } from './components/main-header/main-header';
import { MainSection } from './components/main-section/main-section';
import { PopularStyles } from './components/popular-styles/popular-styles';
import { Products } from './components/products/products';
import { Collection } from './components/collection/collection';
import { BestSellers } from './components/best-sellers/best-sellers';
import { Follow } from './components/follow/follow';
import { AdditionalInformation } from './components/additional-information/additional-information';
import { MainFooter } from './components/main-footer/main-footer';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    MainHeader,
    MainSection,
    PopularStyles,
    Products,
    Collection,
    BestSellers,
    Follow,
    AdditionalInformation,
    MainFooter
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
