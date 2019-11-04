import { Component, OnInit } from '@angular/core';
import { AXBasePageComponent, PromisResult, AXHttpService, AXNavigator, MenuItem } from 'acorex-ui';

@Component({
    selector: 'ac-files',
    templateUrl: './files.page.html',
    styleUrls: ['./files.page.scss']
})
export class ACFilesPage extends AXBasePageComponent {
    constructor(private http: AXHttpService, private nav: AXNavigator) {
        super()
    }

    ngOnInit(): void { }
    mockData: any[] = [
        {
            invoiceNumber: "1398/14/14/152365/15",
            fileNumber: "4536231",
            nationalCode: "1271468913",
            fullName: "حمید صابری",
            fileStatus: "ارزیابی نشده",
            serviceTitle: "جراحی عمومی",
            costDate: "1398/07/13",
            franchisee: "10",
            ceilingBalance: "30,000,000",
            allCost: "8,000,000",
            requestCost: "6,000,000",
            comfirmedCost: "",
            fractionAmount: "",
            amountPaidSoFar: "0",
            amountPayable: ""
        },
        {
            invoiceNumber: "1398/14/14/152365/15",
            fileNumber: "3216452",
            nationalCode: "1273652582",
            fullName: "پویا شریفیان",
            fileStatus: "ارزیابی شده",
            serviceTitle: "جراحی عمومی",
            costDate: "1398/06/25",
            franchisee: "10",
            ceilingBalance: "60,000,000",
            allCost: "40,000,000",
            requestCost: "40,000,000",
            comfirmedCost: "40,000,000",
            fractionAmount: "0",
            amountPaidSoFar: "0",
            amountPayable: "40,000,000"
        },
        {
            invoiceNumber: "1398/14/14/152365/15",
            fileNumber: "9453512",
            nationalCode: "1283652421",
            fullName: "فاطمه جزی",
            fileStatus: "ارزیابی شده",
            serviceTitle: "جراحی عمومی",
            costDate: "1398/06/25",
            franchisee: "10",
            ceilingBalance: "20,000,000",
            allCost: "18,400,000",
            requestCost: "18,400,000",
            comfirmedCost: "18,400,000",
            fractionAmount: "0",
            amountPaidSoFar: "0",
            amountPayable: "18,400,000"
        }
    ]
    provideGridData = () => {
        return new PromisResult(resolve => {
            // this.http
            //     .get("https://jsonplaceholder.typicode.com/todos", {})
            //     .result(c => {
            //         resolve(c);
            //         this.items = c;
            //         resolve(this.ite)
            //     });
            resolve(this.mockData)
        });
    };
    onEditClick(e) {
        this.nav.navigate({
            title: "آنالیز هزینه - " + e.data.title,
            path: "analysis/invoices",
            data: { id: e.data.id }
        })
    }
    actionItems: MenuItem[] = [
        {
            name: "print",
            text: "پرینت",
            style: "ax-dark",
            icon: "fas fa-print"
        }


    ]
    menuItemClickHandler(e: MenuItem) {
    }
    commandItems: MenuItem[] = [
        {
            name: "edit",
            type: "success",
            icon: "fas fa-pen text-primary"
        }
    ];
}
