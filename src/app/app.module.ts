import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

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
import { RecipeService } from './book/recipe.service';
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    BookComponent,
    DropdownDirective,
    HeaderComponent,
    RecipeDetailComponent,
    RecipeEditComponent,
    RecipeItemComponent,
    RecipeLandingComponent,
    RecipeListComponent,
    RecipeListEditComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    LoadingSpinnerComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ShoppingListService,
    RecipeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
