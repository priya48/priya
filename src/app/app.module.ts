import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DataComponent} from './data.component';
import {RegisterComponent} from './studetregister.component';
import {Lab4CAComponent} from './Lab4.component';
@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
  RegisterComponent,
  Lab4CAComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
