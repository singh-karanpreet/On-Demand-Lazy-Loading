import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';

@NgModule({
  declarations: [
    ErrorDialogComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
  ],
  entryComponents: [
    ErrorDialogComponent
  ]
})
export class DialogsModule {
  static errorDialogComponentRef = ErrorDialogComponent;
}
