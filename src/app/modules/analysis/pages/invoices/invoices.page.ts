import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AXBasePageComponent, MenuItem, SelectItem } from 'acorex-ui';

@Component({
    selector: 'ac-invoices',
    templateUrl: './invoices.page.html',
    styleUrls: ['./invoices.page.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ACInvoicesPage extends AXBasePageComponent {
    constructor() {
        super()
    }

    moreText: string = "نمایش بیشتر"
    selectBoxItems: SelectItem[] = [
        { id: "1", text: "Select Option 1" },
        { id: "2", text: "Select Option 2" },
        { id: "3", text: "Select Option 3" },
        { id: "4", text: "Select Option 4" },
        { id: "5", text: "Select Option 5" }
    ];
    showMore: boolean = false;
    actionItems: MenuItem[] = [
        {
            name: "save",
            text: "ذخیره",
            style: "ax-success",
            icon: "fas fa-save"
        },
        {
            name: "print",
            text: "پرینت",
            style: "ax-dark",
            icon: "fas fa-print"
        }
    ]
    menuItemClickHandler(e: MenuItem) {
    }

    hotelingSelectedItemsChange() {
    }
    onMoreClick() {
        this.showMore = !this.showMore
        if (this.showMore) {
            this.moreText = "نمایش کمتر"
        }
        else {
            this.moreText = "نمایش بیشتر"
        }
    }

    handelRowChange(e) {
        console.log(e)
    }

}
