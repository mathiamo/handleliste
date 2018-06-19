import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing-module';
import { RecipeService } from './recipes/recipe.service';
import { ShortenPipe } from './shared/pipes/shorten.pipe';
import { DataStorageService } from './shared/data-storage.service';
import { AuthService } from './authentication/auth.service';
import { AuthGuard } from './authentication/auth-guard.service';
import { RecipesModule } from './recipes/recipes.module';
import { SharedModule } from './shared/modules/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list-module';
import { AuthModule } from './authentication/auth-module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShortenPipe,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    RecipesModule,
    ShoppingListModule,
    AuthModule,
    SharedModule
  ],
  providers: [ShoppingListService, RecipeService, DataStorageService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
