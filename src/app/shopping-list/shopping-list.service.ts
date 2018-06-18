import { Ingredient } from '../shared/models/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  onIngredientsChanged() {
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  onIngredientAdded (ingredient: Ingredient) {
    this.ingredients.push(ingredient);

  }
  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.onIngredientsChanged();
  }

  deleteIngredient( index: number) {
    this.ingredients.splice(index, 1);
    this.onIngredientsChanged();
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.onIngredientsChanged();
  }
  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.onIngredientsChanged();
  }

  constructor() { }
}
