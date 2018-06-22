import { Component } from '@angular/core';
import { DataStorageService } from '../../shared/data-storage.service';
import { AuthService } from '../../authentication/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(private dataStorageService: DataStorageService, private authService: AuthService ) {}

  onSaveData() {
    this.dataStorageService.storeRecipes()
      .subscribe((response) => {
        console.log(response);
      });
      this.dataStorageService.storeShoppingList()
      .subscribe((response) => {
        console.log(response);
      });
  }
  onFetchData() {
    this.dataStorageService.fetchRecipes();
    this.dataStorageService.fetchShoppingList();
  }
  onLogout() {
    this.authService.logout();
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

}
