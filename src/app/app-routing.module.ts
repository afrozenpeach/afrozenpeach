import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./homepage/homepage.module').then(m => m.HomepageModule)
  },
  {
    path: 'boardgames',
    loadChildren: () => import('./boardgames/boardgames.module').then(m => m.BoardgamesModule)
  },
  {
    path: 'development',
    loadChildren: () => import('./development/development.module').then(m => m.DevelopmentModule)
  },
  {
    path: 'library-science',
    loadChildren: () => import('./library-science/library-science.module').then(m => m.LibraryScienceModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
