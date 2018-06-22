import { Injectable } from "@angular/core";
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { map } from "rxjs/operators";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Ingredient } from "./models/ingredient.model";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class DataStorageService {
  recipeUrl: string =
    "https://handleliste-85749.firebaseio.com/recipes.json";
  shoppingListurl: string =
    "https://handleliste-85749.firebaseio.com/shoppinglist.json";

  constructor(
    private httpClient: HttpClient,
    private recipeService: RecipeService,
    private shoppingListService: ShoppingListService
) {}

  storeRecipes() {
    return this.httpClient.put(
      'https://handleliste-85749.firebaseio.com/recipes.json',
      this.recipeService.getRecipes()
    );
  }
  fetchRecipes() {
    this.httpClient
      .get<Recipe[]>(
        this.recipeUrl
      )
      .pipe(
        map(recipes => {
          for (let recipe of recipes) {
            if (!recipe["ingredients"]) {
              recipe["ingredients"] = [];
            }
          }
          return recipes;
        })
      )
      .subscribe((recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
      });
  }

  storeShoppingList() {
    return this.httpClient.put(
      this.shoppingListurl,
      this.shoppingListService.getIngredients()
    );
  }

  fetchShoppingList() {
    this.httpClient
      .get<Ingredient[]>(this.shoppingListurl
      )
      .pipe(
        map(shoppingList => {
          return shoppingList;
        })
      )
      .subscribe((ingredients: Ingredient[]) => {
        this.shoppingListService.setShoppingList(ingredients);
      });
  }
}
