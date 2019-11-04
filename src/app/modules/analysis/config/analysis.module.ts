import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ACInvoicesPage } from '../pages/invoices/invoices.page';
import { ACFilesPage } from '../pages/files/files.page';
import { ACoreXUIModule } from 'acorex-ui';
import { ACoreXSPAModule } from 'acorex-spa';
import { ROUTES } from './analysis.routing'
import { RouterModule } from '@angular/router';
import { ACCostsPage } from '../pages/cost/costs.page';
import { ACCostRowModule } from '../components/costRow/cost-row.module';
const Pages = [ACCostsPage, ACFilesPage, ACInvoicesPage]

@NgModule({
    declarations: [...Pages],
    imports: [CommonModule, ACoreXUIModule, ACoreXSPAModule, RouterModule.forRoot(ROUTES), ACCostRowModule],
    exports: [...Pages],
    entryComponents: [...Pages],
    providers: [],
})
export class AnalysisModule { }