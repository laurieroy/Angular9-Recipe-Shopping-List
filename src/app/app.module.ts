import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book.component';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { RecipeListComponent } from './list/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './book/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './book/recipe-detail/recipe-detail.component';
import { RecipeListEditComponent } from './list/recipe-list/recipe-list-edit/recipe-list-edit.component';
import { ShoppingListComponent } from './list/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './list/shopping-list/shopping-list-edit/shopping-list-edit.component';
import { ShoppingListService } from './list/shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeLandingComponent } from './book/recipe-landing/recipe-landing.component';
import { RecipeEditComponent } from './book/recipe-edit/recipe-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    DropdownDirective,
    HeaderComponent,
    HomeComponent,
    RecipeDetailComponent,
    RecipeEditComponent,
    RecipeItemComponent,
    RecipeLandingComponent,
    RecipeListComponent,
    RecipeListEditComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule
  ],
  providers: [
    ShoppingListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
