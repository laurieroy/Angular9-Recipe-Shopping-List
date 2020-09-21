import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list/list.component';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book.component';
import { RecipeDetailComponent } from './book/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './book/recipe-item/recipe-item.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './list/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './list/shopping-list/shopping-list-edit/shopping-list-edit.component';
import { RecipeListEditComponent } from './list/recipe-list/recipe-list-edit/recipe-list-edit.component';
import { RecipeListComponent } from './list/recipe-list/recipe-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    HomeComponent,
    BookComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeListEditComponent,
    RecipeListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
