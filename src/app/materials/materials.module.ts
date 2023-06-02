import { NgModule } from '@angular/core';
import { MatButtonModule} from '@angular/material/button'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatToolbarModule} from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatMenuModule} from '@angular/material/menu'
import { MatDividerModule} from '@angular/material/divider'
import { MatListModule} from '@angular/material/list'
import { MatCardModule} from '@angular/material/card'
import { MatButtonToggleModule} from '@angular/material/button-toggle'
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import { MatPaginatorModule} from '@angular/material/paginator'
import { MatDialogModule } from '@angular/material/dialog'
import { MatTableModule} from '@angular/material/table'
import { MatSortModule } from '@angular/material/sort';
import { MatRippleModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatStepperModule} from '@angular/material/stepper';
import {MatExpansionModule} from '@angular/material/expansion';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  imports: [
  ],
  exports:[
    MatButtonModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDividerModule,
    ClipboardModule,
    MatCardModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatDialogModule,
    MatTableModule,
    MatSortModule,
    MatRippleModule,
    MatSelectModule,
    MatStepperModule,
    MatExpansionModule
  ]
})
export class MaterialsModule { }
