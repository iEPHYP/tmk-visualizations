import { NgModule } from '@angular/core';
import {
    MatDialogModule, MatProgressBarModule, MatIconModule, MatSelectModule, MatProgressSpinnerModule, MatInputModule
} from '@angular/material';


@NgModule({
    imports: [
        MatDialogModule,
        MatProgressBarModule,
        MatIconModule,
        MatSelectModule,
        MatProgressSpinnerModule,
        MatInputModule
    ],
    exports: [
        MatDialogModule,
        MatProgressBarModule,
        MatIconModule,
        MatSelectModule,
        MatProgressSpinnerModule,
        MatInputModule
    ],
})
export class MyOwnCustomMaterialModule { }
