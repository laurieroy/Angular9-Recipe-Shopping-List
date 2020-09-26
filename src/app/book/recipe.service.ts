import { EventEmitter, Injectable } from '@angular/core';
import { ShoppingListService } from '../list/shopping-list/shopping-list.service';
import { Ingredient } from '../shared/models/ingredient.model';

import { Recipe } from '../shared/models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Rib Dinner',
      'Pork Ribs with Greek Salad',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
      [
        new Ingredient('Pork Ribs', 12),
        new Ingredient('Tomato', 1),
        new Ingredient('Cucumber', .25),
        new Ingredient('Onion', .125),
      ]),
    new Recipe(
      'Big Fat Burger',
      'Yummy beef burger',
      'https://images.pexels.com/photos/750075/pexels-photo-750075.jpeg?cs=srgb&dl=pexels-dana-tentis-750075.jpg&fm=jpg',
      [
        new Ingredient('Bun', 1),
        new Ingredient('Meat', 1),
        new Ingredient('Tomato slice', 1),
        new Ingredient('Lettuce leaf', 1),
        new Ingredient('Onion slice', 1),
        new Ingredient('Onion Rings', 5),
      ])
    ];

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice(); // this ensures we only get a copy of the array
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
