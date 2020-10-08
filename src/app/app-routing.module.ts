import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth-guard.service';
import { AuthComponent } from './auth/auth.component';

import { BookComponent } from './book/book.component';
import { RecipeDetailComponent } from './book/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './book/recipe-edit/recipe-edit.component';
import { RecipeLandingComponent } from './book/recipe-landing/recipe-landing.component';
import { RecipesResolverService } from './book/recipes-resolver.service';
import { HomeComponent } from './home/home.component';
import { ShoppingListEditComponent } from './list/shopping-list/shopping-list-edit/shopping-list-edit.component';
import { ShoppingListComponent } from './list/shopping-list/shopping-list.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {path: 'recipes', component: BookComponent, canActivate: [AuthGuard], children: [
    {path: '', component: RecipeLandingComponent},
    {path: 'new', component: RecipeEditComponent},
    {path: ':id', component: RecipeDetailComponent, resolve: [RecipesResolverService]},
    {path: ':id/edit', component: RecipeEditComponent, resolve: [RecipesResolverService]}
  ] },
  {path: 'sList', component: ShoppingListComponent, children: [
    {path: ':id/edit', component: ShoppingListEditComponent}
  ] },
  { path: 'auth', component: AuthComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
