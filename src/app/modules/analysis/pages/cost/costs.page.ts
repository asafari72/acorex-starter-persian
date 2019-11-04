import { Component, OnInit } from '@angular/core';
import { AXBasePageComponent, PromisResult, AXHttpService, AXNavigator, MenuItem } from 'acorex-ui';

@Component({
    selector: 'ac-costs',
    templateUrl: './costs.page.html',
    styleUrls: ['./costs.page.scss']
})
export class ACCostsPage extends AXBasePageComponent {
    constructor(private http: AXHttpService, private nav: AXNavigator
    ) {
        super()
    }
    commandItems: MenuItem[] = [
        {
            name: "edit",
            type: "success",
            icon: "fas fa-pen text-primary"
        }
    ];
    mockData: any[] = [
        {
            title: "ارزیابی بسته های ارسال شده از طرف واحد نصراله خسروی برای تاریخ 1398/08/03 تا 1398/08/05",
            barCode: "1398/14/14/152365/13",
            status: "ارزیابی شده",
            fileCount: "1",
            totalCost: "8,000,000",
            totalAmountRequest: "6,800,000",
            totalAmountEndorsement: "6,800,000"
        },
        {
            title: "ارزیابی بسته های ارسال شده از طرف واحد نصراله خسروی برای تاریخ 1398/08/10 تا 1398/08/10",
            barCode: "1398/14/14/152365/15",
            status: "در حال ارزیابی",
            fileCount: "3",
            totalCost: "66,400,000",
            totalAmountRequest: "65,200,000",
            totalAmountEndorsement: "58,400,000"
        },
        {
            title: "ارزیابی صورت حساب بیمارستان میلاد اصفهان برای دوره 1398/05/01 تا 1398/05/31",
            barCode: "1398/14/964852/8",
            status: "ارزیابی نشده",
            fileCount: "250",
            totalCost: "830,000,000",
            totalAmountRequest: "760,000,000",
            totalAmountEndorsement: "0"
        }
    ]
    ngOnInit(): void { }


    provideGridData = () => {
        // return new PromisResult(resolve => {
        //     this.http
        //         .get("https://jsonplaceholder.typicode.com/todos", {})
        //         .result(c => {
        //             resolve(c);
        //         });
        // });
        return new PromisResult(resolve => {
            resolve(this.mockData)
        });
    };
    onEditClick(e) {
        this.nav.navigate({
            title: "پرونده - " + e.data.title,
            path: "analysis/files",
            data: { id: e.data.id }
        })
    }

}
