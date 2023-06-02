import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginDialogComponent } from './shared/login-dialog/login-dialog.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialsModule } from './materials/materials.module';
import { DefaultComponent } from './layouts/default/default.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HeaderComponent } from './shared/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DocumentListComponent } from './pages/document-list/document-list.component';
import { DictionaryComponent } from './pages/dictionary/dictionary.component';
import { DocumentComponent } from './pages/document/document.component';
import { DictionaryManagerComponent } from './pages/dictionary-manager/dictionary-manager.component';
import { ApiKeyManagerComponent } from './pages/api-key-manager/api-key-manager.component';
import { UserManagerComponent } from './pages/user-manager/user-manager.component';
import { AddDocumentDialogComponent } from './shared/add-document-dialog/add-document-dialog.component';
import { AddDictionaryDialogComponent } from './shared/add-dictionary-dialog/add-dictionary-dialog.component';
import { LoginComponent } from './layouts/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginDialogComponent,
    DefaultComponent,
    SidebarComponent,
    HeaderComponent,
    DashboardComponent,
    DocumentListComponent,
    DictionaryComponent,
    DocumentComponent,
    DictionaryManagerComponent,
    ApiKeyManagerComponent,
    UserManagerComponent,
    AddDocumentDialogComponent,
    AddDictionaryDialogComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    MaterialsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
