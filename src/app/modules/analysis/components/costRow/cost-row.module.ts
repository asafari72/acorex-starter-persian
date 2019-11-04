import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ACCostRowComponent } from './cost-row.component';
import { ACoreXUIModule } from 'acorex-ui';

@NgModule({
    declarations: [ACCostRowComponent],
    imports: [CommonModule, ACoreXUIModule],
    exports: [ACCostRowComponent],
    providers: [],
})
export class ACCostRowModule { }