import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DocumentListComponent } from './pages/document-list/document-list.component';
import { DocumentComponent } from './pages/document/document.component';
import { DictionaryComponent } from './pages/dictionary/dictionary.component';
import { DictionaryManagerComponent } from './pages/dictionary-manager/dictionary-manager.component';
import { ApiKeyManagerComponent } from './pages/api-key-manager/api-key-manager.component';
import { UserManagerComponent } from './pages/user-manager/user-manager.component';
import { LoginComponent } from './layouts/login/login.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'Dictionary/:id',
        component: DictionaryComponent,
      },
      {
        path: 'Dictionary/:id/search/:query',
        component: DictionaryComponent,
      },
      {
        path: 'Document/:id',
        component:DocumentComponent
      },
      {
        path: 'Dictionary-Manager',
        component:DictionaryManagerComponent
      },
      {
        path:'Api-Keys',
        component:ApiKeyManagerComponent
      },
      {
        path:'User',
        component:UserManagerComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
