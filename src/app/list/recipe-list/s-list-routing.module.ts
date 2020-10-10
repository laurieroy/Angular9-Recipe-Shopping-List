import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingListEditComponent } from '../shopping-list/shopping-list-edit/shopping-list-edit.component';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';


const routes: Routes = [
  {path: 'sList', component: ShoppingListComponent,
  children: [
    {path: ':id/edit', component: ShoppingListEditComponent}
  ]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SListRoutingModule {}
