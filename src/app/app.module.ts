import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ComponentsModule} from "./components/components.module";
import {DateComponent} from "./pages/date/date.component";
import {ArticlesComponent} from "./pages/articles/articles.component";
import {CommonModule} from "@angular/common";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {PipesModule} from "./pipes/pipes.module";
import {AppStoreModule} from "./app-store.module";

@NgModule({
  declarations: [
    AppComponent,
    DateComponent,
    ArticlesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ComponentsModule,
    PipesModule,
    FontAwesomeModule,
    AppStoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
