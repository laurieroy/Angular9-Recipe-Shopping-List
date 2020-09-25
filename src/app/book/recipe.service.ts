import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from '../shared/models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg' ),
    new Recipe('A Second Test Recipe', 'This is simply a test2',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg' )
  ];

  constructor() { }

  getRecipes() {
    return this.recipes.slice(); // this ensures we only get a copy of the array
  }
}
