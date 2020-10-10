import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { BookModule } from './book/book.module';
import { ShoppingListModule } from './list/shopping-list/shopping-list.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    AppRoutingModule,
    AuthModule,
    BookModule,
    BrowserModule,
    CoreModule,
    HttpClientModule,
    SharedModule,
    ShoppingListModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
