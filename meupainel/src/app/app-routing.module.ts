import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'confcad',
    loadChildren: () => import('./confcad/confcad.module').then( m => m.ConfcadPageModule)
  },
  {
    path: 'info',
    loadChildren: () => import('./info/info.module').then( m => m.InfoPageModule)
  },
  {
    path: 'configuracao',
    loadChildren: () => import('./configuracao/configuracao.module').then( m => m.ConfiguracaoPageModule)
  },
  {
    path: 'manual',
    loadChildren: () => import('./manual/manual.module').then( m => m.ManualPageModule)
  },
  {
    path: 'tutoriais',
    loadChildren: () => import('./tutoriais/tutoriais.module').then( m => m.TutoriaisPageModule)
  },
  {
    path: 'assistencia',
    loadChildren: () => import('./assistencia/assistencia.module').then( m => m.AssistenciaPageModule)
  },  {
    path: 'arrefecimento',
    loadChildren: () => import('./arrefecimento/arrefecimento.module').then( m => m.ArrefecimentoPageModule)
  },
  {
    path: 'prediction',
    loadChildren: () => import('./prediction/prediction.module').then( m => m.PredictionPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
