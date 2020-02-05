import { NgModule } from '@angular/core';
import 'hammerjs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
  MatDialogModule,
  MatSelectModule,
  MatDividerModule,
  MatTableModule,
  MatListModule,
  MatGridListModule,
} from '@angular/material';

@NgModule({
  exports : [
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSelectModule,
    MatDividerModule,
    MatTableModule,
    MatListModule,
    MatGridListModule,
    MatTableModule,
    MatFormFieldModule


  ]
})
export class AngularMaterialForm{}
