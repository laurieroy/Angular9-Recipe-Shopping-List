import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Ingredient } from 'src/app/shared/models/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  @ViewChild('slef', { static: false }) editSlForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;
  
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.subscription = this.shoppingListService.startedEditing
      .subscribe(
        (index: number) => {
          this.editMode = true;
          this.editedItemIndex = index;
          this.editedItem = this.shoppingListService.getIngredient(index);
          this.editSlForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          });
        }
      );
  }

  onAddOrEditIngredient(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editedItemIndex, this.editedItem);
    } else {
      this.shoppingListService.onIngredientCreated(newIngredient);
    }
    this.editMode = false;
    form.reset();
  }
  
  onDestroyIngredient() {
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.onResetIngredient();
  }
  
  onResetIngredient() {
    this.editSlForm.reset();
    this.editMode = false;
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
