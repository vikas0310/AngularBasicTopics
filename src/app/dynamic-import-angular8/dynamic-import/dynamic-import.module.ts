import { NgModule } from '@angular/core';
import { DynamicImportComponent } from './dynamic-import.component';
import { CommonModule } from '@angular/common';
import { DynamicImportRoutingModule } from './dynamic-import-routing-module';

@NgModule({
declarations: [
    DynamicImportComponent
],
imports: [
    CommonModule,
    DynamicImportRoutingModule
],
providers: [],
exports: []
})

export class DynamicImportModule {}
