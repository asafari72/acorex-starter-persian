import { Routes } from '@angular/router';

import { ACFilesPage } from '../pages/files/files.page';
import { ACCostsPage } from '../pages/cost/costs.page';
import { ACInvoicesPage } from '../pages/invoices/invoices.page';

export const ROUTES: Routes = [
    {
        component: ACCostsPage,
        path: "analysis/costs",
    },
    {
        component: ACFilesPage,
        path: "analysis/files",
    },
    {
        component: ACInvoicesPage,
        path: "analysis/invoices",
    }
];

