import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DynamicImportComponent } from './dynamic-import.component';

const routes: Routes = [
    {path: '', component: DynamicImportComponent}
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DynamicImportRoutingModule {}
