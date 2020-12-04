import { NgModule, InjectionToken, Component } from '@angular/core';
import { Routes, RouterModule, ActivatedRouteSnapshot, PreloadAllModules } from '@angular/router';
import { RedirectionMessageComponent } from './shared/redirection-message/redirection-message.component';

const externalUrlProvider = new InjectionToken('externalUrlRedirectResolver');

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./homepage/homepage.module').then(m => m.HomepageModule),
    pathMatch: 'full'
  },
  {
    path: 'externalRedirect',
    resolve: {
        url: externalUrlProvider
    },
    component: RedirectionMessageComponent
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
    path: 'personal',
    loadChildren: () => import('./personal/personal.module').then(m => m.PersonalModule)
  }
];

@NgModule({
  providers: [
    {
        provide: externalUrlProvider,
        useValue: (route: ActivatedRouteSnapshot) => {
            const externalUrl = route.paramMap.get('externalUrl');
            window.open(externalUrl, '_self');
        },
    },
  ],
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
