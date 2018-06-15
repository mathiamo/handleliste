
import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/models/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Chicken Tikka Masala',
      'Spicy indian cuisince',
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/2/27/0/ZA0207H_chicken-in-creamy-tomato-curry-chicken-tikka-masala_s4x3.jpg.rend.hgtvcom.616.462.suffix/1387303023791.jpeg',
    [
      new Ingredient('Chicken filet', 2),
      new Ingredient('Coconutmilk', 1)
    ]),
    new Recipe(
      'Chicken Vindaloo',
      'Spicy indian cuisince',
      'https://2117e.https.cdn.softlayer.net/802117E/www.archanaskitchen.com/images/archanaskitchen/0-Saffola_FitFoodie/1-Chicken_Vindaloo_Recipe_Saffola_Oats_Fit_Foodie-1.jpg',
    [
      new Ingredient('Chicken filet', 2),
      new Ingredient('Chillipepper', 6)
    ])
  ];
  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(index: number) {
    return this.recipes[index];
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
