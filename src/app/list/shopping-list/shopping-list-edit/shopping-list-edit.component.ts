import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/models//ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() ingredientCreated = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit(): void {
  }

  onAddIngredient() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.ingredientCreated.emit(newIngredient);
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
