import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { map } from 'rxjs/operators';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Ingredient } from './models/ingredient.model';
import { AuthService } from '../authentication/auth.service';

@Injectable()
export class DataStorageService {
  recipeUrl: string = 'https://handleliste-85749.firebaseio.com/recipes.json?auth=';
  shoppingListurl: string = 'https://handleliste-85749.firebaseio.com/shoppinglist.json?auth=';

  constructor(private http: Http,
    private recipeService: RecipeService,
    private shoppingListService: ShoppingListService,
    private authService: AuthService) {

  }

  storeRecipes() {
    const token = this.authService.getToken();
    return this.http.put(this.recipeUrl + token, this.recipeService.getRecipes());
  }
  fetchRecipes() {
    const token = this.authService.getToken();

    this.http.get(this.recipeUrl + token)
    .pipe(
      map(
        (response: Response) => {
          const recipes: Recipe[] = response.json();
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              console.log(recipe);
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      ))
    .subscribe(
      (recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
    });
  }

  storeShoppingList() {
    const token = this.authService.getToken();
    return this.http.put(this.shoppingListurl + token, this.shoppingListService.getIngredients());
  }

  fetchShoppingList() {
    const token = this.authService.getToken();
    this.http.get(this.shoppingListurl + token)
      .pipe(
        map(
          (response: Response) => {
            const shoppingList: Ingredient[] = response.json();
            return shoppingList;
          }
        ))
        .subscribe(
          (ingredients: Ingredient[]) => {
            this.shoppingListService.setShoppingList(ingredients);
          }
        );
  }

}
