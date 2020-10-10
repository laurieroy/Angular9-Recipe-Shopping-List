import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { RecipeListEditComponent } from '../list/recipe-list/recipe-list-edit/recipe-list-edit.component';
import { RecipeListComponent } from '../list/recipe-list/recipe-list.component';
import { SharedModule } from '../shared/shared.module';
import { BookComponent } from './book.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { RecipeLandingComponent } from './recipe-landing/recipe-landing.component';
import { RecipesRoutingModule } from './recipes-routing.module';

@NgModule({
  declarations: [
    BookComponent,
    RecipeDetailComponent,
    RecipeEditComponent,
    RecipeItemComponent,
    RecipeLandingComponent,
    RecipeListComponent,
    RecipeListEditComponent,
  ],
  imports: [
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    RecipesRoutingModule]
})
export class BookModule {}
