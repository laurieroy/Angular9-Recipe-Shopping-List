import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/models/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddIngredient() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.shoppingListService.onIngredientCreated(newIngredient);
  }
  // <!-- (click)="onDestroyIngredient()" -->            <!-- (click)="onResetIngredient()" -->
  // onDestroyIngredient() {
    // console.log(this.ingredientInput);
    // this.ingredientCreated.emit({
    //   ingredientName: nameInput.value,
    //   ingredientAmount: this.amountInput.nativeElement.value;
    // });
  // }
  // onResetIngredient() {
    // console.log(this.ingredientInput);
    // this.ingredientCreated.emit({
    //   ingredientName: nameInput.value,
    //   ingredientAmount: this.amountInput.nativeElement.value;
    // });
  // }

}
