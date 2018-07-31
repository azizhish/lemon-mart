import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-inventory',
  template: `
<mat-toolbar color="accent" fxLayoutGap="8px">
      <a mat-button routerLink="/inventory/home"
        routerLinkActive="active-link">Inventory Dashboard</a>
      <a mat-button routerLink="/inventory/stockEntry"
        routerLinkActive="active-link">Stock Entry</a>
      <a mat-button routerLink="/inventory/products"
        routerLinkActive="active-link">Products</a>
        <a mat-button routerLink="/inventory/categories"
        routerLinkActive="active-link">Categories</a>
      <span class="flex-spacer"></span>
      <button mat-mini-fab routerLink="/inventory" matTooltip="Inventory" aria-label="Inventory">
        <mat-icon>list</mat-icon>
      </button>
      <button mat-mini-fab routerLink="/pos" matTooltip="POS" aria-label="POS">
        <mat-icon>shopping_cart</mat-icon>
      </button>
    </mat-toolbar>
  <router-outlet></router-outlet>
  `,
  styles: [],
})
export class InventoryComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
